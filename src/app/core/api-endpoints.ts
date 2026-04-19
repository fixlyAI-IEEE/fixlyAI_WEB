import { environment } from '../../environments/environment';

const BASE_URL = environment.baseUrl;

export const apiEndpoints = {

    // Auth----------------------
    login: `${BASE_URL}/auth/user/login`,
    register_as_worker: `${BASE_URL}/auth/worker/register`,
    register_as_user: `${BASE_URL}/auth/user/register`,
    verify_acc: `${BASE_URL}/auth/verify-phone`,
    send_otp: `${BASE_URL}/auth/password/send-otp`,
    verify_otp: `${BASE_URL}/auth/password/verify-otp`,
    reset_password: `${BASE_URL}/auth/password/reset`,

    //Ai_Chatbot
    chat: `${BASE_URL}/chat`,
      // Services----------------------
    messagesContact: `${BASE_URL}/messages`,
    createRequest: `${BASE_URL}/requests`,
    getOffers: (requestId: number) => `${BASE_URL}/requests/${requestId}/offers`,
};
