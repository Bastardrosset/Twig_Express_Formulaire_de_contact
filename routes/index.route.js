const express = require("express");
const router = express.Router();
const contactValidator = require('../middlewares/validator/contact.validator');
const sendMail = require("../middlewares/services/email.service");
const nodeMailer = require("nodemailer");


/********** GET Home Page **********/
router.get("/", (req, res) => {
    res.render("index", {title: "Home Page"});
})

/********** GET Contact Page **********/
router.get("/contact", (req, res) => {
    res.render("contact", {title: "Contact Page"});
})

/********** Gestion des données du formulaire de conact **********/
router.post("/contact", contactValidator, sendMail)


module.exports = router;