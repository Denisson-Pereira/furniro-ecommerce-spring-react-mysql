import { StatusCode } from "../Constants";

export class CategoryExeptions extends Error {
    statusCode: number;

    constructor() {
        super('Error during login.');
        this.name = 'Invalid request';
        this.statusCode = StatusCode.NOT_FOUND;
    }
}