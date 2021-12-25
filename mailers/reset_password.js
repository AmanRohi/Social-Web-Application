const nodemailer = require('../config/nodemailer');

module.exports.resetPassword = (resetUser)=>{
    console.log('Inside the reset password ..');
    let htmlString = nodemailer.renderTemplate({resetUser:resetUser},'/reset_password/reset_pass.ejs');
    nodemailer.transporter.sendMail({
        from:'amylan.socio@gmail.com',
        to:resetUser.email,
        subject:'Reset Password || Amylan Social Web',
        html:htmlString,
    },function(err,info){
        if(err){console.log('Error in creating the mail for reset Pass word ',err); return;}
        console.log('message Sent', info);
        return;
    });
}