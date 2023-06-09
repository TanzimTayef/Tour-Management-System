const {
  createToursService,
  getAllToursService,
  getTourByIdService,
  updateByIdService,
} = require("../service/tours.service");

exports.getAllTours = async (req, res) => {
  try {
    const filters = { ...req.query };
    const exlcludedFields = ["sort", "page", "limit"];
    exlcludedFields.forEach((filed) => delete filters[filed]);

    const queries = {};

    // sorting by specefing poperty:
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
// Query by specefiq poperty:
    if (req.query.fileds) {
      const fileds = req.query.fileds.split(",").join(" ");
      queries.fileds = fileds;
    }

    const tours = await getAllToursService(filters, queries);

    res.status(200).json({
      status: "success",
      message: "Tours founded successful.",
      data: tours,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: "Couldn't find tours!",
      error: err.message,
    });
  }
};

exports.createTours = async (req, res) => {
  try {
    const tours = await createToursService(req.body);
    res.status(200).json({
      status: "success",
      message: "Tours added successful.",
      data: tours,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: "Couldn't added tours!",
      error: err.message,
    });
  }
};

exports.getTourById = async (req, res) => {
  try {
    const { id } = req.params;
    const tours = await getTourByIdService(id);
    res.status(200).json({
      status: "success",
      message: "Tour fouded successful.",
      data: tours,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: "Couldn't founded tours!",
      error: err.message,
    });
  }
};

exports.updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await updateByIdService(id, req.body);
    res.status(200).json({
      status: "success",
      message: "Tour update successful.",
      data: tour,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: "Couldn't update tours!",
      error: err.message,
    });
  }
};
