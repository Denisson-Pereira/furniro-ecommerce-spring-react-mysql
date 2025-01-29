import { describe, vi } from "vitest";
import { GetAllProductsUseCase } from "./GetAllProductsUseCase";
import { IGetProductsRepository } from "../../contracts/IGetProductsRepository";
import { IProduct } from "../../models/IProduct";

describe("GetAllProducts", () => {
    let mockRepository: IGetProductsRepository;
    let getAllProducts: GetAllProductsUseCase;

    beforeEach(() => {
        mockRepository = {
            getAll: vi.fn(),
            getById: vi.fn()
        };

        getAllProducts = new GetAllProductsUseCase(mockRepository);
    })

    it("Should sucessfully fetch all categories", async () => {
        const products: IProduct[] = [
            {
                id: 1,
                name: "Product A",
                description: "Product A",
                image: "Image A",
                category: "Category A",
                price: "1200"
            },
            {
                id: 2,
                name: "Product B",
                description: "Product B",
                image: "Image B",
                category: "Category B",
                price: "1200"
            },
        ];

        (mockRepository.getAll as any).mockResolvedValue(products);

        const result = await getAllProducts.execute();

        expect(mockRepository.getAll).toHaveBeenCalledTimes(1);
        expect(result).toEqual(products);
    })
})