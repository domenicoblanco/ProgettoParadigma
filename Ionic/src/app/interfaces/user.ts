export interface User {
    email: string;
    password?: string;
    name: string;
    surname: string;
    _id: string;
    image: string | ArrayBuffer;
}
