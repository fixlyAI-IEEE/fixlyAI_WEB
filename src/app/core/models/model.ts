export interface loginrequest {
  phone: string;
  password: string;
}

export interface loginresponse {
  message: string;
  data: {
    user: {
      id: number;
      name: string;
      phone: string;
      role: string;
      city: string;
      areas: null;
    },
    token: string;
  }
}

export interface registerRequest {

  name: string;
  phone: string;
  password: string;
  password_confirmation: string;
  city: string;
}

export interface registerResponse {

  "message": string,
  "data": {
    "user": {
      "id": number,
      "name": string,
      "phone": string,
      "role": string,
      "city": string,
      "areas": null
    },
    "token": string
  }
}

export interface register_as_workerRequest {

  name: string;
  phone: string;
  password: string;
  password_confirmation: string;
  job_type_id: number;
  city: string;
  areas: string;
  working_days: string[];
  avg_price: number;
  profile_picture: File;

}

export interface RegisterAsWorkerResponse {
  message: string;
  data: {
    user: {
      id: number;
      name: string;
      phone: string;
      role: string;
      city: string;
      areas: string;
      profile_picture: string | null;
      is_verified: boolean;
      created_at: string;
    };
    worker: {
      id: number;
      is_available: boolean | null;
      is_verified: boolean | null;
      rating: number | null;
      avg_price: number;
      working_days: string[];
    };
    token: string;
  };
}
export interface VerifyAccRequest {
  phone: string;
  otp: string;
}
export interface VerifyAccResponse {

  "message": string,
  "data": {
    "id": number,
    "name": string,
    "phone": string,
    "role": string,
    "city": string,
    "areas": string,
    "profile_picture": null,
    "is_verified": boolean,
    "created_at": string
  }
}


export interface SendOtpRequest {
  phone: string;
}

export interface SendOtpResponse {
  message: string;
}


export interface VerifyOtpRequest {
  phone: string;
  otp: string;
}
export interface VerifyOtpResponse {
  message: string;
}

export interface ResetPasswordRequest {
  phone: string;
  password: string;
  password_confirmation: string;
}

export interface ResetPasswordResponse {
  message: string;
}
//---------------------------------------------------------

//Ai_Chatbot
export interface ChatRequest {
  message: string;
}
export interface ChatResponse {

  "message": string,
  "suggested_buttons": [
    {
      "label": "Show available workers",
      "action": "show_workers",
      "job_type_id": number
    },
    {
      "label": "Send a request",
      "action": "send_request",
      "job_type_id": number
    },
    {
      "label": "Ask another question",
      "action": "new_question"
    }
  ],
  "recommended_job_type": {
    "id": number,
    "name": string
  },
  "recommended_workers": []
}

//---------------------------------------------------------


export interface Service {
  id: number;
  name: string;
  image: string;
  icon: string;
}
export interface Worker {
  id: number;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  image: string;
}
export interface Review {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
}

export interface ContactResponse {
  message: string;
  data: {
    id: number;
    name: string;
    phone: string;
    message: string;
    created_at: string;
    updated_at: string;
  };
}
export interface ContactRequest {
  name: string;
  phone: string;
  message: string;
}
export interface RequestServiceRequest {
  job_type_id: number;
  description: string;
  city: string;
}

export interface RequestServiceResponse {
  message: string;
  data: {
    id: number;
    description: string;
    city: string;
    status: string;
    job_type: {
      id: number;
      name: string;
    };
    created_at: string;
  };
}
export interface Offer {
  worker_id: number;
  name: string;
  rating: number;
  job_type: string;
}

export interface OffersResponse {
  data: Offer[];
}
export interface RatingRequest {
  rate: number;
  comment: string;
}

export interface RatingResponse {
  message: string;
  data: {
    rate: number;
    comment: string;
  };
}

// Request Model
export interface ConfirmWorkerRequest {
  worker_id: number;
}

// Response Model
export interface ConfirmWorkerResponse {
  message: string;
  data: {
    id: number;
    description: string;
    city: string;
    status: string;
    job_type: {
      id: number;
      name: string;
    };
    accepted_worker: {
      id: number;
      name: string;
      phone: string;
      city: string;
      areas: string;
      is_available: boolean;
      is_verified: boolean;
      rating: number;
      working_days: string[];
    };
    created_at: string;
  };
}
