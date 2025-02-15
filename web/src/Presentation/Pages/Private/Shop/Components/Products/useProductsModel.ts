import { useEffect, useState } from "react";
import { IProduct } from "../../../../../../Core/Models/IProduct";
import { useHandlePage } from "../../../../../Hooks/useHandlePage";
import { getAllProductsServiceLocator } from "../../../../../../Infra/Services/getProductsServiceLocator";
import { FiltersProductsEnums } from "../../../../../../Shared/Enums/filtersProductsEnums";

export const useProductsModel = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [size, setSize] = useState<string>("8");
  const [productsList, setProductsList] = useState<boolean>(false);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selecFilter, setSelectFilter] = useState<string>("featured");
  const [loading, setLoading] = useState<boolean>(false);
  const [productsSearch, setProductsSearch] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handlePage = useHandlePage();

  useEffect(() => {
    setLoading(true);
    async function fetchProducts() {
      try {
        const response =
          await getAllProductsServiceLocator.getAllProductsUseCase.execute(
            "products"
          );
        switch (selecFilter) {
          case FiltersProductsEnums.featured:
            setProducts(response);
            break;
          case FiltersProductsEnums.highest:
            setProducts(
              response.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
            );
            break;
          case FiltersProductsEnums.lowest:
            setProducts(
              response.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
            );
            break;
          default:
            console.log("Error when filtering products");
        }
        const initialSize = parseInt(size);
        setPages(
          Array.from(
            { length: Math.ceil(response.length / initialSize) },
            (_, index) => index + 1
          )
        );
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [selecFilter]);

  useEffect(() => {
    if (searchTerm === "") {
      setProductsSearch([]);
    } else {
      setProductsSearch(
        products.filter((products) =>
          products.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, products]);

  useEffect(() => {
    const parsedSize = parseInt(size);
    if (!isNaN(parsedSize) && parsedSize > 0) {
      const newPages = Array.from(
        { length: Math.ceil(products.length / parsedSize) },
        (_, index) => index + 1
      );
      setPages(newPages);
      setCurrentPage(1);
    }
  }, [size, products]);


  const productsPerPage = parseInt(size) || 8;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  return {
    loading,
    selecFilter,
    setSelectFilter,
    setProductsList,
    startIndex,
    endIndex,
    products,
    size,
    setSize,
    searchTerm,
    setSearchTerm,
    productsSearch,
    handlePage,
    productsList,
    visibleProducts,
    pages,
    currentPage,
    setCurrentPage,
  };
};
