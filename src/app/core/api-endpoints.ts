import { environment } from '../../environments/environment';

const BASE_URL = environment.baseUrl;

export const apiEndpoints = {

    // Auth----------------------
    // /api/auth/user/login
    login: `${BASE_URL}/api/auth/user/login`,
    // register_as_user: `${BASE_URL}/auth/register-as-user`,
    // register_as_worker: `${BASE_URL}/auth/register-as-worker`,
    // http://127.0.0.1:8000/api/auth/worker/register
    register_as_worker: `${BASE_URL}/api/auth/worker/register`,

};


