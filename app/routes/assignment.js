const express = require('express');
const router = express.Router();
const assignmentController = require("../controllers/assignmentController");
const appConfig = require("../../config/appConfig")

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/assignment`;

    // defining routes.
    app.get(`${baseUrl}/check-current-date`, assignmentController.checkPrime);

}
