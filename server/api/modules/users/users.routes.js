import { Router } from 'express';
import { Registration } from './users.handler';
import { Validation } from '../../../middleware/validation';


const valid = new Validation(),
    reg = new Registration();

export function init( api ) {
    const router = new Router();

    router.get( '/', reg.getAllUsers );
    router.post( '/registration', valid.createValidationFor( 'registration' ), reg.regNewUser );
    router.post( '/login', reg.checkAuth );
    router.post( '/verification', reg.refreshCode );
    router.post( '/confirm', reg.confirmCodeAndLogin );

    api.use( '/users', router );
}
