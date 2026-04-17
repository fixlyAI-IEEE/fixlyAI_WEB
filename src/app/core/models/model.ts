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


