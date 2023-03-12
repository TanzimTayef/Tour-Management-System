const { getToursService } = require("../service/tours.service");

exports.getTours = async (req, res) => {
  try {
    const tours = await getToursService();
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
