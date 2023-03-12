const Tours = require("../model/Tours");
exports.getToursService = async () => {
  const tours = await Tours.find({});
  return tours;
};
