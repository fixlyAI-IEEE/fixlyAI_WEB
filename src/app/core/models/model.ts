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

