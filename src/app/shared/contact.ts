export class Contact {
    id: number;
    name: string;
    email: string;
    phone: number;
    type: string;

    constructor(id: number, name: string, email: string, phone: number, type: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.type = type;
    }
}
