export interface Customer {
    _id: number,
    agent_id: number,
    guid: string,
    isActive: true,
    balance: string,
    age: number,
    eyeColor: string,
    name: {
        first: string,
        last: string
    }
    company: string,
    email: string,
    phone: string,
    address: string,
    registered: string | Date,
    latitude: string,
    longitude: string,
    tags: string []
}