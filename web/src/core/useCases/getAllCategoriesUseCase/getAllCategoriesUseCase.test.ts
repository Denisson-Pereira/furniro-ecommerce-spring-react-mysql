import { describe, vi } from "vitest";
import { ICategory } from "../../models/ICategory";
import { GetAllCategoriesUseCase } from "./GetAllCategoriesUseCase";
import { IGetAllCategoriesRepository } from "../../contracts/IGetAllCategoriesRepository";

describe("GetAllCategories", () => {
    let mockRepository: { api: ReturnType<typeof vi.fn> } & IGetAllCategoriesRepository; 
    let getAllCategories: GetAllCategoriesUseCase;

    beforeEach(() => {
        mockRepository = {
            api: vi.fn() 
        };

        getAllCategories = new GetAllCategoriesUseCase(mockRepository);
    })

    it("Should successfully fetch all categories", async () => {
        const category: ICategory[] = [
            {
                id: 1,
                name: "category A",
                description: "A category description",
                image: "A category image"
            },
            {
                id: 2,
                name: "category B",
                description: "B category description",
                image: "B category image"
            }
        ];

        mockRepository.api.mockResolvedValue(category);

        const result = await getAllCategories.execute("route");

        expect(mockRepository.api).toHaveBeenCalledTimes(1);
        expect(result).toEqual(category);
    });
});
