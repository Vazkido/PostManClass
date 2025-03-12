import nodemailer from nodemailer
import dotenv from dotenv
dotenv.config()


const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"vazkid02@gmail.com",
        pass: process.env.PASS
    }
});

export const sendMail = (recipient, content, subject) => {
    transporter.sendMail({
        from:"okekedavid1333@gmail.com",
        to:recipient,
        subject,
        text:content
    }, function(err, info) {
    if(err) 
        console.log(err);
    else 
    console.log('Email sent: '+ info.response)
        
})}