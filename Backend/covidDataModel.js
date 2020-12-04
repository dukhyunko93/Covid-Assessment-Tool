// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var covidDataSchema = mongoose.Schema({
    date: String,
    county:String,
    state: String,
    fips: String,
    cases: String,
    deaths: String,
});
// Export Contact model
var CovidData = module.exports = mongoose.model('covidData', covidDataSchema);
module.exports.get = function (callback, limit) {
    CovidData.find(callback).limit(limit);
}