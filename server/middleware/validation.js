import mongoose from 'mongoose';

const { check, validationResult, body } = require( 'express-validator/check' ),
    User = mongoose.model( 'User' );

export class Validation {

    constructor() {
    }

    createValidationFor( route ) {
        switch ( route ) {
            case 'registration':
                return [
                    body( 'email' ).custom( ( value ) => {
                        return User.findOne( { 'email': value } ).then( ( user ) => {
                            if ( user ) {
                                return Promise.reject( 'E-mail already in use' );
                            }
                        } );
                    } ).isEmail().normalizeEmail().withMessage( 'Wrong email' ),
                    check( 'password' ).isLength( { 'min': 6 } ).withMessage( 'must be at least 6 chars long' )
                        .matches( /\d/ ).withMessage( 'must contain a number' ),
                    body( 'firstName' )
                        .not().isEmpty()
                        .trim()
                        .escape().withMessage( 'first name is empty' ),
                    body( 'lastName' )
                        .not().isEmpty()
                        .trim()
                        .escape().withMessage( 'last name is empty' ),
                    this.checkValidationResult
                ];

            default:
                return [];
        }
    }

    checkValidationResult( req, res, next ) {
        const result = validationResult( req );

        if ( result.isEmpty() ) {
            return next();
        }
        res.status( 422 ).json( { 'errors': result.array() } );
    }
}
