import { Router } from 'express';
import { Registration } from './users.handler';
import { Validation } from '../../../middleware/validation';


const valid = new Validation(),
    reg = new Registration();

export function init( api ) {
    const router = new Router();

    router.post( '/registration', valid.createValidationFor( 'registration' ), reg.regNewUser );
    router.post( '/login', reg.login );
    router.post( '/verification', reg.refreshCode );
    router.post( '/confirm', reg.confirmCodeAndLogin );
    router.post( '/logout', reg.logout );
    router.post( '/session', reg.checkSession );

    api.use( '/users', router );
}
