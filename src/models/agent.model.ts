export interface Agent {
    _id: number,
    name: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    tier: number,
    phone: {
        primary: string,
        mobile: string
    }
}