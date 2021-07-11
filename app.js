require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const https = require("https");
const axios = require('axios');
let alert = require('alert');
// const session = require('express-session');
// const passport = require('passport');
// const findOrCreate = require('mongoose-findorcreate');
// const passportLocalMongoose = require('passport-local-mongoose');

var districtData;

app.set("view engine", 'ejs');
app.use(express.static("public"));
var state, district;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + "-" + mm + "-" + yyyy;

mongoose.connect("mongodb+srv://admin-aditya:test123@cluster0.hmlzu.mongodb.net/vaccineDB", {
    useNewUrlParser: true
});
mongoose.set('useCreateIndex', true);
app.use(bodyParser.urlencoded({
    extended: true
}));
var vaccineData;


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    pincode: String,
    firstDose: String,
    secondDose: String
});


const User = new mongoose.model("User", userSchema);



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
});


app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/pages/login.html");
});

app.get("/register", (req, res) => {

    res.sendFile(__dirname + "/pages/register.html");
});


app.post('/login', function (req, res) {
    var usrnm = req.body.user;
    var pass = req.body.pass;
    User.findOne({
        username: usrnm
    }, (err, data) => {
        if (err) {
            console.log(err);

        } else {
            if (data == null) {
                alert("User not found!");
                res.redirect("/login");
            } else {
                if (data.password == pass) {
                    var url = "https://api.postalpincode.in/pincode/" + data.pincode;
                    axios.get(url)
                        .then(response => {
                            // console.log(response.data)
                            state = response.data[0].PostOffice[0].State;
                            district = response.data[0].PostOffice[0].District;
                        })
                        .catch(error => {
                            console.log(error);
                        });

                    url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" + data.pincode + "&date=" + today;
                    axios.get(url)
                        .then(response => {
                            vaccineData = response.data;
                            // console.log(vaccineData);

                        })
                        .catch(error => {
                            console.log(error);
                        });
                    setTimeout(() => {
                        url = "https://api.covid19india.org/state_district_wise.json";
                        axios.get(url)
                            .then(response => {
                                districtData = response.data[state].districtData[district];
                            })
                            .catch(error => {
                                console.log(error);
                            });

                    }, 1000)

                    var vaccinated = false;
                    var first = true;
                    if (data.firstDose == "") {
                        vaccinated = false;
                        first = false;
                    } else {
                        if (data.secondDose == "") {
                            vaccinated = false;
                            first = true;
                        } else {
                            vaccinated = true;
                            first = true;
                        }
                    }
                    setTimeout(() => {
                        res.render("main", {
                            data: data,
                            vaccineData: vaccineData,
                            vaccinated: vaccinated,
                            first: first,
                            district: district,
                            districtData: districtData
                        });
                    }, 3000);
                } else {
                    alert("Password Incorrect !");
                    res.redirect("/");
                }
            }
        }
    });
});


app.post('/register', (req, res) => {
    const pass = req.body.pass;
    const passCon = req.body.passCon;
    const pin = req.body.pincode;
    const first = req.body.firstDose;
    const second = req.body.secondDose;
    if (pass != passCon) {
        alert("Password not matching!");
        res.redirect("/register");
    } else {
        const user = new User({
            username: req.body.user,
            password: pass,
            pincode: pin,
            firstDose: first,
            secondDose: second

        });
        user.save();
        alert("Registration confirm !!!");
        res.redirect('/login');
    }
});




let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port);