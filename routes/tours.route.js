const express = require("express");

const router = express.Router();

const toursController = require("../controllers/tours.controller");

router.route("/").get(toursController.getAllTours).post(toursController.createTours);

router.route("/:id").get(toursController.getTourById)

module.exports = router;
