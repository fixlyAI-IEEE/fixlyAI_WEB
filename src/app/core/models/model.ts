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

