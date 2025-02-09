import { StatusCode } from "../Constants";

export class CategoryExeptions extends Error {
    statusCode: number;

    constructor() {
        super('Error during the category request.');
        this.name = 'Invalid request';
        this.statusCode = StatusCode.BAD_REQUEST;
    }
}