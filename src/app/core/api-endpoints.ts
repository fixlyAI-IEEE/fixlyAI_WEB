import { environment } from '../../environments/environment';

const BASE_URL = environment.baseUrl;

export const apiEndpoints = {

    // Auth----------------------
    login: `${BASE_URL}/api/auth/user/login`,
    register_as_worker: `${BASE_URL}/api/auth/worker/register`,
    register_as_user: `${BASE_URL}/api/auth/user/register`,
    send_otp: `${BASE_URL}/api/auth/password/send-otp`,
    verify_otp: `${BASE_URL}/api/auth/password/verify-otp`,
    reset_password: `${BASE_URL}/api/auth/password/reset`,
};


