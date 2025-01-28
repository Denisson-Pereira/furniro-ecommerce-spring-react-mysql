import { StatusCode } from "../constants";

export class ContactExeptions extends Error {
    statusCode: number;

    constructor() {
        super('Error during the contact request.');
        this.name = 'Invalid request';
        this.statusCode = StatusCode.BAD_REQUEST;
    }
}