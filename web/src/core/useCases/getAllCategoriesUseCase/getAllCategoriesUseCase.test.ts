import { IGetAllCategoriesRepository } from "../../contracts/IGetAllCategoriesRepository"
import { ICategory } from "../../models/ICategory";
import { GetAllCategoriesUseCase } from "./GetAllCategoriesUseCase";

describe("GetAllCategories", () => {
    let mockRepository: jest.Mocked<IGetAllCategoriesRepository>;
    let getAllCategories: GetAllCategoriesUseCase;

    beforeEach(() => {
        mockRepository = {
            api: jest.fn()
        };

        getAllCategories = new GetAllCategoriesUseCase(mockRepository);
    })

    it("Should sucessffully fetch all categories", async () => {
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
        ]

        mockRepository.api.mockResolvedValue(category);

        const result = await getAllCategories.execute("route");

        expect(mockRepository.api).toHaveBeenCalledTimes(1);
        expect(result).toEqual(category);

    })
})