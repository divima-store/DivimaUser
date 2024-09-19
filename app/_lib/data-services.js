import { supabase } from "./supabase";
import { shuffle } from 'lodash';

export const getProducts = async function () {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Error fetching products:", error.message);
    return [];
  }

  // Shuffle the products array before returning
  return shuffle(data);
};

export const getProduct = async function (productId) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId)
    .single();
  // console.log(data);
  if (error) {
    console.error("Error fetching product:", error.message);
    return null;
  }

  return data;
};

export const getusers = async function () {
  const { data, error } = await supabase.from("users").select("*");
  // console.log(data);
  if (error) {
    console.error("Error fetching users:", error);
    return [];
  }
  return data;
};

export const getOrderById = async function (orderId) {
  // Query to select the order with the specific ID
  let query = supabase
    .from("orders")
    .select(
      `
        *,
        product:productId (
          id,
          name,
          price,
          imageUrl
        )
      `
    )
    .eq("id", orderId)
    .single(); // Ensure only one order is fetched

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching order:", error);
    throw new Error(`Failed to fetch order: ${error.message}`);
  }

  // Format the data to include product details directly in the order object
  const formattedOrder = {
    ...data,
    productName: data.product?.name,
    productPrice: data.product?.price,
    productImageUrl: data.product?.imageUrl,
  };

  // console.log("Formatted Order:", formattedOrder); // For debugging

  return formattedOrder;
};



export const CreateOrder = async function (order) {
  // console.log(order);
  
  const { data, error } = await supabase.from("orders").insert(order).select()
  if (error) {
    throw error
  }
  // else {
  //   console.log(data);
  // }
}

async function getOrders(email) {
  const { data: orderIds, error: orderIdsError } = await supabase
    .from('users')
    .select('orders')
    .eq('email', email)

  if (orderIdsError) {
    console.error('Error fetching order IDs:', orderIdsError)
    return
  }

  // const { data: orders, error: ordersError } = await supabase
  //   .from('orders')
  //   .select('*')
  //   .in('id', orderIds.map(order => order.order_id))

  // if (ordersError) {
  //   console.error('Error fetching orders:', ordersError)
  //   return
  // }
}

