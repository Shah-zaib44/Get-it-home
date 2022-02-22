module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("review", {
    productId: {
      type: Sequelize.INTEGER,
    },
    rating: {
      type: Sequelize.INTEGER,
    },
    review: {
      type: Sequelize.STRING,
    },
    profileImage: {
      type: Sequelize.JSON,
    },
    fullName: {
      type: Sequelize.STRING,
    },
  });

  return Review;
};
