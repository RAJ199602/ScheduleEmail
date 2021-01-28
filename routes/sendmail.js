const nodemailer = require('nodemailer')
const cron = require('node-cron')
const express = require('express')

const router = express.Router();

router.get('/', async(req,res) => {

    // Email options
    const mailOptions = {
        from : 'User Email',
        to: 'User Email',
        subject: ' test mail',
        text: ' hello from test mail'
    };

    // Email transpot
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'User name',
            pass: 'User Password'
        }
    });
    
    // Scedule a mail after 5 sec
    cron.schedule('5 * * * * *', ()=>{
        // Send mail
        transporter.sendMail(mailOptions, (err, info) =>{
            if(err){
                console.log(err)
            }
            else
            console.log('email send')
            return res.status(200).send({                    
                success: true,
                data: info
            });
        })
    })
    


})
module.exports = router ;