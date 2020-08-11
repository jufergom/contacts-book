export class Contact {
    name: string;
    email: string;
    phone: number;
    type: string;

    constructor(name: string, email: string, phone: number, type: string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.type = type;
    }
}
