export abstract class GetAllBaseUseCase<T> {
    abstract getAll(rota: string): Promise<T[]>;  
    abstract getName(): string;        

    execute(rota: string): Promise<T[]> {
        try {
            return this.getAll(rota);
        } catch (error) {
            throw new Error(`Error when searching all ${this.getName()}`);
        }
    }
}
