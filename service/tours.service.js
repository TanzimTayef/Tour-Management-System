const Tours = require("../model/Tours");

exports.getAllToursService = async (filters, queries) => {
  const tours = await Tours.find({}).sort(queries.sortBy).select(queries.fileds);
  return tours;
};

exports.createToursService = async (data) => {
  const tours = await Tours.create(data);
  return tours;
};

exports.getTourByIdService = async (id) => {
  const tours = await Tours.findById({ _id: id });
  return tours;
};

exports.updateByIdService = async (tourId, data) => {
  const tour = await Tours.findById({ _id: tourId });
  const result = tour.set(data).save();
  return result;
};
