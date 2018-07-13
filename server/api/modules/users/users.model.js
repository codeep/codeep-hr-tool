import mongoose, { Schema } from 'mongoose';


const userSchema = new Schema( {
    'name': Schema.Types.String,
    'firstName': {
        'type': Schema.Types.String,
        'required': true,
        'trim': true
    },
    'lastName': {
        'type': Schema.Types.String,
        'required': true,
        'trim': true
    },
    'password': {
        'type': Schema.Types.String,
        // maxlength: [32, "tooLong"],
        'minlength': [ 6, 'tooShort' ],
        'required': true
    },
    'email': {
        'type': Schema.Types.String,
        'required': true,
        'trim': true,
        'unique': true,
        'match': /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    'code': {
        'type': Schema.Types.String
    },
    'status': {
        'type': Schema.Types.String,
        'enum': [ 'inactive', 'active' ]
    }
} );


mongoose.model( 'User', userSchema );
