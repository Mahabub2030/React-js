
// // export default DetailsPage;

import { useLoaderData } from "react-router-dom";


// // Mock product data (assuming you don't have an API yet)
const products = [
  {
    "product_id": "1",
    "product_title": "Dell XPS 13",
    "product_image": "https://i.ibb.co/CWSszVs/laptop-with-blank-black-screen-white-table-1.jpg",
    "category": "computers",
    "price": 999,
    "Location" :"Dhaka",
    "description": "A high-performance laptop with an InfinityEdge display and powerful Intel Core i7 processor.",
    "Specification": [
      "13.3-inch FHD display",
      "16GB RAM",
      "512GB SSD",
      "Intel Iris Xe graphics"
    ],
    "availability": true,
    "rating": 4.8,
    "brand": "Dell",
    "release_year": 2023
  },
  {
    "product_id": "2",
    "product_title": "Apple iPhone 14",
    "product_image": "https://i.ibb.co/CWSszVs/laptop-with-blank-black-screen-white-table-1.jpg",
    "category": "phones",
    "price": 1099,
    "description": "The latest iPhone with an advanced camera system and A15 Bionic chip.",
    "Specification": [
      "6.1-inch Super Retina XDR display",
      "128GB storage",
      "12MP dual-camera system",
      "5G enabled"
    ],
    "availability": true,
    "rating": 4.9,
    "brand": "Apple",
    "release_year": 2023
  },
  {
    "product_id": "3",
    "product_title": "Samsung Galaxy Watch 5",
    "product_image": "https://i.ibb.co/CWSszVs/laptop-with-blank-black-screen-white-table-1.jpg",
    "category": "smart watches",
    "price": 299,
    "description": "A smart watch with health tracking, GPS, and a long-lasting battery.",
    "Specification": [
      "1.4-inch AMOLED display",
      "Water-resistant",
      "GPS and health tracking",
      "Up to 3 days battery life"
    ],
    "availability": false,
    "rating": 4.6,
    "brand": "Samsung",
    "release_year": 2022
  },
  {
    "product_id": "4",
    "product_title": "Anker PowerCore+ 26800mAh",
    "product_image": "https://i.ibb.co/CWSszVs/laptop-with-blank-black-screen-white-table-1.jpg",
    "category": "power banks",
    "price": 59,
    "description": "High-capacity power bank with fast-charging technology for multiple devices.",
    "Specification": [
      "26800mAh capacity",
      "Quick Charge 3.0",
      "USB-C PD input/output",
      "Charge up to 3 devices simultaneously"
    ],
    "availability": true,
    "rating": 4.7,
    "brand": "Anker",
    "release_year": 2021
  },
  {
    "product_id": "5",
    "product_title": "Apple MacBook Pro",
    "product_image": "https://example.com/images/macbook-pro.jpg",
    "category": "computers",
    "price": 1299,
    "description": "Powerful laptop with M1 chip and Retina display.",
    "Specification": [
      "13.3-inch Retina display",
      "8GB RAM",
      "256GB SSD",
      "Apple M1 chip"
    ],
    "availability": true,
    "rating": 4.9,
    "brand": "Apple",
    "release_year": 2023
  },
  {
    "product_id": "6",
    "product_title": "OnePlus Warp Charger",
    "product_image": "https://i.ibb.co/CWSszVs/laptop-with-blank-black-screen-white-table-1.jpg",
    "category": "chargers",
    "price": 39,
    "description": "Fast charger with Warp Charge technology for OnePlus devices.",
    "Specification": [
      "30W output",
      "USB-C",
      "Compact design",
      "Compatible with OnePlus 7 and newer"
    ],
    "availability": true,
    "rating": 4.3,
    "brand": "OnePlus",
    "release_year": 2022
  },
  {
    "product_id": "7",
    "product_title": "Google Pixel 7",
    "product_image": "https://i.ibb.co/CWSszVs/laptop-with-blank-black-screen-white-table-1.jpg",
    "category": "phones",
    "price": 799,
    "description": "The latest Google Pixel phone with an advanced AI camera and Google Assistant.",
    "Specification": [
      "6.3-inch OLED display",
      "128GB storage",
      "AI-powered camera",
      "Android 12"
    ],
    "availability": true,
    "rating": 4.5,
    "brand": "Google",
    "release_year": 2023
  },
  {
    "product_id": "8",
    "product_title": "Sony WH-1000XM4",
    "product_image": "https://i.ibb.co/CWSszVs/laptop-with-blank-black-screen-white-table-1.jpg",
    "category": "headphones",
    "price": 350,
    "description": "Noise-canceling headphones with exceptional sound quality and comfort.",
    "Specification": [
      "Active noise cancellation",
      "30 hours battery life",
      "Quick charge support",
      "Touch sensor controls"
    ],
    "availability": true,
    "rating": 4.8,
    "brand": "Sony",
    "release_year": 2021
  },
  {
    "product_id": "9",
    "product_title": "Huawei MateBook X Pro",
    "product_image": "https://i.ibb.co/CWSszVs/laptop-with-blank-black-screen-white-table-1.jpg",
    "category": "computers",
    "price": 1199,
    "description": "Ultra-slim laptop with immersive display and powerful performance.",
    "Specification": [
      "13.9-inch FullView display",
      "16GB RAM",
      "512GB SSD",
      "NVIDIA GeForce MX250"
    ],
    "availability": false,
    "rating": 4.6,
    "brand": "Huawei",
    "release_year": 2022
  },
  {
    "product_id": "10",
    "product_title": "Xiaomi Mi Power Bank 3",
    "product_image": "https://i.ibb.co/CWSszVs/laptop-with-blank-black-screen-white-table-1.jpg",
    "category": "power banks",
    "price": 45,
    "description": "High-capacity power bank with dual USB output for multiple devices.",
    "Specification": [
      "20000mAh capacity",
      "Dual USB output",
      "Supports Quick Charge",
      "Compact design"
    ],
    "availability": true,
    "rating": 4.4,
    "brand": "Xiaomi",
    "release_year": 2021
  }
  // Add other products here...
];



const DetailsPage = () => {
  const product = useLoaderData();

  // Show "Product Not Found" if no product data
  if (!product) {
    return <p className="text-2xl text-red-500">Product Not Found</p>;
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-[400px]">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product.product_image}
            className="max-w-sm rounded-lg shadow-2xl"
            alt={product.product_title}
          />
          <div>
            <h1 className="text-5xl font-bold">{product.product_title}</h1>
            <p>Price: ${product.price}</p>
            <p className="text-xl font-bold">Specification:</p>
            <ul className="list-disc ml-6">
              {(product.Specification || []).map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
            <p>Rating: {product.rating}</p>
            <p>Brand: {product.brand}</p>
            <p>Release Year: {product.release_year}</p>
            <p className="py-6">{product.description}</p>
            <button className="btn btn-outline rounded-full bg-[#8F36D9] text-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const detailsPageLoader = ({ params }) => {
  const product = products.find((p) => p.product_id === params.product_id); 
  return product ? product : null;  // Ensure this returns null if no product is found
};

export default DetailsPage;
