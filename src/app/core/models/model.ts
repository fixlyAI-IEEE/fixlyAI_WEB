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

