import  apiClient  from "./instance";
import axios from "axios";

export interface Product {
  id: number;
  title?: string;
  name?: string;
  price: number;
  img_url: string;
  description?: string;
  unit?: string;
  category_id?: number;
  category?: {
    id?: number;
    name?: string;
  };
}


const normalizeProduct = (item: any): Product => {
  const data = item?.data ?? item;

  return {
    id: data.id ?? data.product_id ?? 0,
    title: data.title ?? data.name,
    name: data.name ?? data.title,
    price: Number(data.price ?? 0),
    img_url: data.img_url ?? "https://via.placeholder.com/300",
    description: data.description ?? "",
    unit: data.unit,
    category_id: data.category_id,
    category: data.category,
  };
};


const normalizeProducts = (res: any): Product[] => {
  let arr: any[] = [];

  if (Array.isArray(res)) {
    arr = res;
  } else if (res?.data) {
    if (Array.isArray(res.data)) arr = res.data;
    else arr = [res.data];
  } else if (res?.products) {
    arr = res.products;
  }

  return arr.map(normalizeProduct);
};


export const getProductsByCategory = async (
  categoryId: number
): Promise<Product[]> => {
  const requests = [
    () =>
      apiClient.get("/products", {
        params: { category: categoryId },
      }),
    () =>
      apiClient.get("/products", {
        params: { category_id: categoryId },
      }),
  ];

  let lastError: any;

  for (const request of requests) {
    try {
      const res = await request();
      return normalizeProducts(res.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const status = err.response?.status;

        if (status === 400 || status === 404) {
          lastError = err;
          continue;
        }
      }
      throw err;
    }
  }

  throw lastError ?? new Error("Products fetch failed");
};


export const getProductById = async (id: number): Promise<Product> => {
  const res = await apiClient.get(`/products/${id}`);
  return normalizeProduct(res.data);
};