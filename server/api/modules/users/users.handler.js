import mongoose from 'mongoose';
import { Mailer } from '../../../lib/mailer';


const mailer = new Mailer(),

    passwordHash = require( 'password-hash' ),
    User = mongoose.model( 'User' );


export class Registration {

    constructor() {
    }

    getAllUsers( req, res ) {
        User.find()
            .then( ( users ) => res.send( { 'data': users } ) )
            .catch( () => res.sendStatus( 500 ) );
    }

    regNewUser( req, res ) {

        const firstName = req.body.firstName,
            lastName = req.body.lastName,
            password = req.body.password,
            email = req.body.email,
            hashedPassword = passwordHash.generate( password ),
            verificationCode = ( Math.floor( Math.random() * ( 9999 - 1000 + 1 ) ) + 1000 ).toString(),
            newUser = new User( {
                'firstName': firstName,
                'lastName': lastName,
                'email': email,
                'password': hashedPassword,
                'code': verificationCode,
                'status': 'inactive'
            } );

        newUser.save()
            .then( ( user ) => {
                mailer.sendMail( user.email, user.code );
                res.send( {
                    'firstName': firstName,
                    'lastName': lastName,
                    'email': email,
                    'id': user._id,
                    'status': 'inactive'
                } );
            } )
            .catch( ( err ) => {
                console.log( err );
                res.status( 400 ).send( 'unable to save to database' );
            } );
    }

    login( req, res ) {
        const sid = req.sessionID,
            email = req.body.email,
            password = req.body.password;

        User.findOne( { 'email': email, 'status': 'active' } ).then( ( user ) => {

            if ( passwordHash.verify( password, user.password ) === true ) {
                res.status( 200 ).send( {
                    'cookie': sid,
                    'status': 'confirm',
                    'id': user.id
                } );
            } else {
                res.status( 422 ).json( { 'errors': 'wrong password' } );
                console.log( req.session, sid );


            }

        } ).catch( () => {
            res.status( 422 ).json( { 'errors': 'wrong password or email' } );
        } );

    }

    logout( req, res ) {
        if ( req.session ) {

            res.status( 200 ).send( {
                'status': 'OK'
            } );
            req.session.destroy( ( error ) => {
                if ( error ) {
                    console.log( error );
                }
            } );
        }
    }

    checkSession( req, res ) {
        const cookieId = req.body.cookieId;

        console.log( cookieId, req.sessionID );
        if ( req.sessionID === cookieId ) {
            res.status( 200 ).send( {
                'status': 'OK'
            } );
        }// else {
        //     res.redirect( '/login' );
        // }
    }

    confirmCodeAndLogin( req, res ) {
        const confirmCode = req.body.confirmCode,
            id = req.body.id;

        User.findOne( { '_id': id } ).then( ( user ) => {
            if ( !user ) {
                return res.status( 404 ).send();
            } else if ( confirmCode === user.code ) {
                user.status = 'active';
                user.save();
                res.status( 200 ).send( {
                    'status': user.status
                } );
            } else {
                res.status( 422 ).json( { 'errors': 'wrong confirmation code' } );
            }
        } ).catch( () => {
            res.status( 404 ).send();
        } );

    }

    refreshCode( req, res ) {
        const id = req.body.id;

        User.findByIdAndUpdate( id ).then( ( user ) => {
            if ( !user ) {
                return res.status( 404 ).send();
            }
            user.code = ( Math.floor( Math.random() * ( 9999 - 1000 + 1 ) ) + 1000 ).toString();
            user.save();
            mailer.sendMail( user.email, user.code );
            res.status( 200 ).send( {
                'status': 'success'
            } );
        } ).catch( () => {
            res.status( 404 ).send();
        } );
    }

}

