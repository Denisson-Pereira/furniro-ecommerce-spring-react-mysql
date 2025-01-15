export class ProductExeptions extends Error {
    statusCode: number;

    constructor() {
        super('Error during the product request.');
        this.name = 'Invalid request';
        this.statusCode = 500;
    }
}