CovidData = require('./covidDataModel');
const request = require('request');
const readline = require('readline');
const fs = require('fs')

const url = "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv"

exports.index = function (req, res) {
    CovidData.get(function (err, covidDatas) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Data retrieved successfully",
            data: covidDatas
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    CovidData.deleteMany({
    }, function (err, contact) {
        if (err) res.send(err);
        console.log("Finished Deleting")
    });

    function parseFile(url) {
        let csvstream = request(url).pipe(fs.createWriteStream('/tmp/file.csv'));
        csvstream.on('finish', function () {
            let instream = fs.createReadStream('/tmp/file.csv');
            let rl = readline.createInterface(instream);
            let dataArr = [];
            console.log("Getting data.")
            rl.on('line', function(line) {
                let lineArray = line.split(",")
                let covidData = new CovidData();
                covidData.date =  lineArray[0];
                covidData.county = lineArray[1];
                covidData.state = lineArray[2];
                covidData.fips = lineArray[3];
                covidData.cases = lineArray[4];
                covidData.deaths = lineArray[5];
                dataArr.push(covidData)
            });
            rl.on('close', function() {
                console.log("Saving data.")
                dataArr.shift();
                while (dataArr.length > 0){
                    saveThis = dataArr.splice(0,50000);
                    console.log(saveThis)
                    CovidData.insertMany(saveThis);
                    console.log(dataArr.length)
                }
            });
        });
        csvstream.on('close', function () {
            res.json({
                status: "Success",
            });
        });
        csvstream.on('error', function (error) {
            console.log(error)
            res.json({
                status: "Failed",
            });
        });
    }
    parseFile(url);
};

exports.view = function (req, res) {
    CovidData.find({fips: req.params.fips}, function (err, covidDatas) {
        if (err)
            res.send(err);
        res.json({
            message: 'Data details loading..',
            count: covidDatas.length,
            data: covidDatas
        });
    });
};