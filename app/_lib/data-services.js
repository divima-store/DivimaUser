import { supabase } from "./supabase";
import { shuffle } from 'lodash';

export const createUserId = async function (email) { 
  const randomNum = Math.floor(100000 + Math.random() * 900000); // 6-digit random number

  // Create a hash from the email string and convert it to a numerical value
  const emailHash = [...email].reduce((acc, char) => acc + char.charCodeAt(0), 0);

  // Combine the random number with part of the email hash to ensure it's 12 digits
  const userId = parseInt(`${randomNum}${emailHash % 1000000}`); // 6 random digits + 6 hash digits = 12 digits
  return userId;
};

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

export const getUser = async function (email) {
  const { data, error } = await supabase.from("users").select().eq("email", email).single();
  // console.log(data);
  if (error) {
    console.error("Error fetching user:", error);
    return null;
  }
  return data;
};
export const CreateUser = async function (email) {
  const id = await createUserId(email)
  const { data, error } = await supabase.from("users").insert({ id, email }).select().single();
  // console.log(data);
  if (error) {
    console.error("Error creating user:", error);
    return null;
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


  // console.log("Formatted Order:", formattedOrder); // For debugging

  return data;
};

export const getUserById = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single(); // Fetch a single user by ID

    if (error) {
      console.error("Error fetching user by ID:", error);
      return null; // Return null or handle error appropriately
    }

    return data; // Return the user data
  } catch (err) {
    console.error("Unexpected error:", err);
    throw new Error("Failed to fetch user by ID");
  }
};


export const CreateOrder = async function (order) {
  try {
    // Insert the new order
    const { data, error } = await supabase.from("orders").insert(order).select().single();

    if (error) {
      throw error; // Handle the error as needed
    }

    // Get the user details to update
    const user = await getUserById(order.userId); // Assuming order has userId

    if (user) {
      // Update the user to add the new order ID to the orders array
      const updatedOrders = [...(user.orders || []), data.id]; // Add the new order ID

      const { error: updateError } = await supabase
        .from("users")
        .update({ orders: updatedOrders }) // Update orders column
        .eq('id', user.id); // Match the user by ID

      if (updateError) {
        throw updateError; // Handle update error
      }
    } else {
      console.error("User not found.");
    }

    return data; // Return the newly created order data
  } catch (err) {
    console.error("Error creating order:", err);
    throw new Error("Failed to create order");
  }
};

export const getOrders = async function (id) {
  const { data: userData, error: orderIdsError } = await supabase
    .from('users')
    .select('orders')
    .eq('id', id)
    .single()

  if (orderIdsError) {
    console.error('Error fetching order IDs:', orderIdsError)
    return []
  }

  if (!userData || !userData.orders) {
    return []
  }

  const orderPromises = userData.orders.map(orderId => getOrderById(orderId))
  const orders = await Promise.all(orderPromises)

  return orders
}


