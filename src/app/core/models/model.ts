export interface loginrequest{
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

export interface registerRequest{

  name: string;
  phone: string;
  password: string;
  password_confirmation: string;
  city: string;
}

export interface registerResponse{

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

export interface register_as_workerRequest{


  name: string;
  phone: string;
  password: string;
  password_confirmation: string;
  job_type_id: number;
  city: string;
  areas: string;
  working_days: string[];

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
    };
    worker: {
      id: number;
      is_available: boolean | null;
      is_verified: boolean | null;
      rating: number | null;
      working_days: string[];
    };
    token: string;
  };
}

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


