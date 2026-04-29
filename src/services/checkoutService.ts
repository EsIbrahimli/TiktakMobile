import axios from "axios";


const API_URL = "http://10.0.2.2:8000";


const axiosInstance = axios.create({
  baseURL: API_URL,
});




export type OrderItem = {
  productId: number;
  quantity: number;
};


export type CheckoutPayload = {
  total: string;
  deliveryFee: string;
  paymentMethod: string;
  note: string;
  address: string;
  phone: string;
  items: OrderItem[];
};


export type CheckoutResponse = {
  success: boolean;
  message: string;
  orderId?: number;
};


export const createCheckoutOrder = async (
  payload: CheckoutPayload
): Promise<CheckoutResponse> => {
  try {
    const res = await axiosInstance.post<CheckoutResponse>(
      "/orders/checkout",
      payload
    );

    return res.data;
  } catch (error: any) {
    console.log("Checkout error:", error?.response?.data || error.message);

    throw new Error(
      error?.response?.data?.message || "Sifariş zamanı xəta baş verdi"
    );
  }
};