const {  createToursService, getAllToursService, getTourByIdService } = require("../service/tours.service");

exports.getAllTours = async (req, res) => {
  try {
    const tours = await getAllToursService();
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
    const {id} = req.params;
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
