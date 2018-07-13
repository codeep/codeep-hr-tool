import app from './lib/express';
import config from './config';
import { init } from './lib/mongoose';

init();


const express = require( 'express' ),
    router = express.Router(),
    mongoose = require( 'mongoose' );

mongoose.connect( config.db );

const db = mongoose.connection;

db.on( 'error', console.error.bind( console, 'connection error:' ) );
db.once( 'open', () => {
    console.log( 123 );
    // we're connected!
} );

// const users = require('./api/modules/users/users.routes');

app.listen( config.port, ( err ) => {
    console.log( 'port', config.port );
} );
