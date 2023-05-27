const BASE_URL = "https://dummyjson.com/carts";

// Metodo GET

export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();

  return data;
};

// Metodo POST

export const POST = async (endpoint, body) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};

// POST("/add", {
//   price: 999,
//   rating: 4.89,
//   category: "smartphone",
//   title: "iphone 14 Pro",
// });

// Metodo DELETE

// export const DELETE = async (endpoint) => {
//   const res = await fetch(BASE_URL + endpoint, {
//     method: "DELETE",
//   });
//   const data = await res.json();

//   return data;
// };
