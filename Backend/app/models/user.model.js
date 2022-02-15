module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    fullName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    profileImage: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
