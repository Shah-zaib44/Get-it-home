const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const asyncHandler = require("../middleware/async");
const crypto = require("crypto");
var seedrandom = require("seedrandom");
// Create and Save a new product
exports.register = (req, res, next) => {
  let { fullName, profileImage, email, password, address, phoneNumber, role } =
    req.body;
  // Check for user
  // if (!email || !password || !fullName || !address || !phoneNumber || !role) {
  //   return next(new ErrorResponse("Please fill all the fields", 400));
  // }
  User.findOne({ where: { email: email } }).then((user) => {
    if (user) {
      return next(new ErrorResponse("Email already exists", 400));
    } else {
      const newUser = new User({
        fullName: fullName,
        profileImage: profileImage,
        email: email,
        password: password,
        address: address,
        phoneNumber: phoneNumber,
        role: role,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) return next(new ErrorResponse(err, 400));

          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              sendTokenResponse(user, 200, res);
            })
            .catch((err) => {
              return next(new ErrorResponse(err, 400));
            });
        });
      });
    }
  });
};
exports.login = (req, res, next) => {
  const { email, password } = req.body;

  // Validate emil & password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  // Check for user
  User.findOne({ where: { email: email } }).then((user) => {
    if (user == null) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // Check if password matches
    const isMatch = bcrypt.compareSync(password, user.dataValues.password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }
    sendTokenResponse(user, 200, res);
  });
};
exports.updatePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findByPk(req.user.id);

  // Check current password
  // if (!(await user.matchPassword(req.body.currentPassword))) {
  //   return next(new ErrorResponse("Password is incorrect", 401));
  // }

  user.dataValues.password = req.body.newPassword;
  await user.save();

  sendTokenResponse(await user, 200, res);
});
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email } });

  if (!user) {
    return next(new ErrorResponse("There is no user with that email", 404));
  }

  // Get reset token
  const resetToken = function () {
    const rng = seedrandom(crypto.randomBytes(64).toString("base64"), {
      entropy: true,
    });
    const resetToken = rng().toString().substring(3, 9);

    return resetToken;
  };

  await user.save({ validateBeforeSave: false });

  const message = `We recently received a request for a forgotten password. Your verification code is: ${resetToken()}. If you did not request this change, you do not need to do anything.`;

  try {
    await sendEmail({
      email: user.dataValues.email,
      subject: "Password reset token",
      message,
    });

    return res.status(200).json({ success: true, data: "Email sent" });
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorResponse("Email could not be sent", 500));
  }
});
exports.resetPassword = asyncHandler(async (req, res, next) => {
  // Get hashed token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resettoken)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(new ErrorResponse("Invalid token", 400));
  }

  // Set new password
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  sendTokenResponse(user, 200, res);
});

const sendTokenResponse = (user, statusCode, res) => {
  // Create token

  const token = jwt.sign({ id: user.dataValues.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user: user.dataValues,
  });
};
// Retrieve all products from the database.
exports.findAll = (req, res) => {
  Coupon.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};

// Update a product by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Coupon.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "product was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update product with id=${id}. Maybe product was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating product with id=" + id,
      });
    });
};

// Delete a product with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Coupon.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "product was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete product with id=${id}. Maybe product was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete product with id=" + id,
      });
    });
};
