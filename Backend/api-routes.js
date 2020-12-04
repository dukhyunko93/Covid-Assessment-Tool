module.exports = (app) => {
  // Initialize express router
  let router = require("express").Router();

  // Set default API response
  app.get("/", function (req, res) {
    res.send({
      status: "API is Working",
      message: "Welcome to  COVID ASSESSMENT TOOL",
    });
  });

  //define controller for covidData
  const covidDataController = require("./controllers/covidDataController");

  router
    .route("/covid_data")
    .get(covidDataController.index)
    .post(covidDataController.new);

  router.route("/covid_data/:fips").get(covidDataController.view);

  //prefix route with api
  app.use("/api", router);
};
