import glob from 'glob';
import path from 'path';
import express from 'express';


const api = express(),

    models = glob.sync( path.join( process.cwd(), '/**/*.model.js' ) ),
    router = glob.sync( path.join( process.cwd(), '/**/*.routes.js' ) );

models.forEach( ( model ) => require( model ) );
router.forEach( ( routes ) => require( routes ).init( api ) );

export default api;
