const nodemailer = require( 'nodemailer' );

export class Mailer {
    sendMail( email, code ) {
        const transporter = nodemailer.createTransport( {
                'service': 'Gmail',
                'auth': {
                    'user': 'test.codeep@gmail.com',
                    'pass': 'codeep0000'
                }
            } ),

            mailOptions = {
                'from': 'test.codeep@gmail.com',
                'to': email,
                'subject': 'Verification code from Codeep',
                'text': code
            };

        transporter.sendMail( mailOptions, ( error, info ) => {
            if ( error ) {
                console.log( error, 'ERROR EMAIL' );
            } else {
                console.log( `Email sent: ${ info.response}` );
            }
            transporter.close();
        } );
    }
}
