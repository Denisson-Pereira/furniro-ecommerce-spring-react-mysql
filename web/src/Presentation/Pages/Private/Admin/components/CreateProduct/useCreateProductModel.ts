import { useState } from "react";
import { CreateProductUseCase } from "../../../../../../Core/UseCases/CreateProductUseCase/CreateProductUseCase";
import { GetProductRepositoryImpl } from "../../../../../../Infra/Repositories/GetProductsRepositotyImpl";

export const useCreateProductModel = () => {
  const repository = new GetProductRepositoryImpl();
  const createProductUseCase = new CreateProductUseCase(repository);

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await createProductUseCase.execute({
        name,
        description,
        image,
        category,
        price,
      });

      if (response) {
        alert("Product created successfully!");
        setName("");
        setDescription("");
        setImage("");
        setCategory("");
        setPrice("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleFormSubmit,
    name,
    setName,
    description,
    setDescription,
    image,
    setImage,
    loading,
    price,
    setPrice,
    category,
    setCategory,
  };
};
