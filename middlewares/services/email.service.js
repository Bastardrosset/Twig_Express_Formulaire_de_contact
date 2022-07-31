const nodeMailer = require("nodemailer");

sendMail = ((req, res, next) => {
    var transporter = nodeMailer.createTransport({
        service: "outlook",
        auth: {
            user: "e-devWeb-wm@outlook.fr",
            pass: "Bastard0509"
        }
    });
    var message = "Email : "+req.body.email+"</br>Message: "+req.body.message;
    var mailOptions = {
        form: req.body.email,
        to: "e-devWeb-wm@outlook.fr",
        subject: req.body.subject,
        html: message
    };

    transporter.sendMail(mailOptions, (err, infos) => {
        if(err){
            console.log(err);
            res.render("contact", {
                title: "Contact Page", 
                error: "Désolé votre message n'a pas pu être envoyé, rééssayez plus tard !"});
                next();
        }else {
            console.log(infos)
            res.render("contact", {
                title: "Contact Page", 
                success: "Votres message à été envoyé avec succès !"});
                next();
        }
    });
})

module.exports = sendMail;