const { Validator } = require('node-input-validator');

contactValidator = (req, res, next) => {
    const formValid = new Validator(req.body, {
        email: 'required|email',
        subject: 'required',
        message: 'required'
      });
    
      formValid.check().then((matched) => {
        if (!matched) {
        //   res.status(422).send(formValid.errors);
            res.render('contact', {formError: formValid.errors});
            return;
        }
        next();
    });
}
module.exports = contactValidator;