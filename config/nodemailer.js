const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

let transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    secure:false,
    port:587,
    auth:{
        user:'amylan.socio@gmail.com',
        pass:'Dunagiri@mata9'
    }
});

let renderTemplate = function(data,relativePath){
    let mainHtml = '';
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template){
            if(err){console.log('Error in rendering the email page ',err); return;}
            mainHtml = template;
        }
    )
    return mainHtml;
}

module.exports = {
    transporter:transporter,
    renderTemplate:renderTemplate
}