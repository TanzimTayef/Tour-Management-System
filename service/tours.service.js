const Tours = require("../model/Tours");

exports.getAllToursService = async () => {
  const tours = await Tours.find({});
  return tours;
};

exports.createToursService = async (data) => {
  const tours = await Tours.create(data);
  return tours;
};

exports.getTourByIdService = async (id) => {
  const tours = await Tours.findById({_id: id});
  return tours;
};
