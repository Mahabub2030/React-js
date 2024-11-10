import { useState } from "react";

import { Link } from "react-router-dom";

const products = [
  {
    product_id: "1",
    product_title: "Dell XPS 13",
    product_image:
      "https://i.ibb.co/YjXgkJL/blank-screen-workspace-with-computer-laptop-table-night-copy-space.jpg",
    category: "computers",
    price: 999,
    location: "Dhaka",
    description:
      "A high-performance laptop with an InfinityEdge display and powerful Intel Core i7 processor.",
    specification: [
      "13.3-inch FHD display",
      "16GB RAM",
      "512GB SSD",
      "Intel Iris Xe graphics",
    ],
    availability: true,
    rating: 4.8,
    brand: "Dell",
    release_year: 2023,
  },
  {
    product_id: "2",
    product_title: "Phones",
    product_image:
      "https://i.ibb.co/LCVXy21/eid-phones-14-pro-perspective-side.jpg",
    category: "phones",
    price: 99,
    location: "Dhaka",
    description:
      "A high-performance laptop with an InfinityEdge display and powerful Intel Core i7 processor.",
    specification: [
      "13.3-inch FHD display",
      "16GB RAM",
      "512GB SSD",
      "Intel Iris Xe graphics",
    ],
    availability: true,
    rating: 4.8,
    brand: "Dell",
    release_year: 2023,
  },

  {
    product_id: "3",
    product_title: "Apple iPhone 14",
    product_image: "https://i.ibb.co/GQBmDRH/adha-phones-14-front-side.jpg",
    category: "phones",
    price: 1099,
    description:
      "The latest iPhone with an advanced camera system and A15 Bionic chip.",
    Specification: [
      "6.1-inch Super Retina XDR display",
      "128GB storage",
      "12MP dual-camera system",
      "5G enabled",
    ],
    availability: true,
    rating: 4.9,
    brand: "Apple",
    release_year: 2023,
  },
  {
    product_id: "4",
    product_title: "Samsung Galaxy Watch 5",
    product_image:
      "https://i.ibb.co/MhDV79F/athletic-man-practicing-sport-outdoor.jpg",
    category: "smart watches",
    price: 299,
    description:
      "A smart watch with health tracking, GPS, and a long-lasting battery.",
    Specification: [
      "1.4-inch AMOLED display",
      "Water-resistant",
      "GPS and health tracking",
      "Up to 3 days battery life",
    ],
    availability: false,
    rating: 4.6,
    brand: "Samsung",
    release_year: 2022,
  },

  {
    product_id: "5",
    product_title: "Anker PowerCore+ 26800mAh",
    product_image: "https://i.ibb.co/C8Kj4Yc/power-bank-mobile-phone-1.jpg",
    category: "power banks",
    price: 59,
    description:
      "High-capacity power bank with fast-charging technology for multiple devices.",
    Specification: [
      "26800mAh capacity",
      "Quick Charge 3.0",
      "USB-C PD input/output",
      "Charge up to 3 devices simultaneously",
    ],
    availability: true,
    rating: 4.7,
    brand: "Anker",
    release_year: 2021,
  },
  {
    product_id: "6",
    product_title: "Anker PowerCore+ 26800mAh",
    product_image: " https://i.ibb.co/qMNq7pV/power-bank-mobile-phone.jpg",
    category: "power banks",
    price: 78,
    description:
      "High-capacity power bank with fast-charging technology for multiple devices.",
    Specification: [
      "26800mAh capacity",
      "Quick Charge 3.0",
      "USB-C PD input/output",
      "Charge up to 3 devices simultaneously",
    ],
    availability: true,
    rating: 4.7,
    brand: "Anker",
    release_year: 2021,
  },
  {
    product_id: "7",
    product_title: "Hp XPS 13",
    product_image:
      "https://i.ibb.co/CWSszVs/laptop-with-blank-black-screen-white-table-1.jpg",
    category: "computers",
    price: 999,
    location: "Dhaka",
    description:
      "A high-performance laptop with an InfinityEdge display and powerful Intel Core i7 processor.",
    specification: [
      "13.3-inch FHD display",
      "16GB RAM",
      "512GB SSD",
      "Intel Iris Xe graphics",
    ],
    availability: true,
    rating: 4.8,
    brand: "Dell",
    release_year: 2023,
  },

  {
    product_id: "8",
    product_title: "Samsung Galaxy Watch 5",
    product_image:
      " https://i.ibb.co/jvzCx0s/top-view-unrecognizable-woman-checking-health-app-her-wrist-gadget.jpg",
    category: "smart watches",
    price: 2990,
    description:
      "A smart watch with health tracking, GPS, and a long-lasting battery.",
    Specification: [
      "1.4-inch AMOLED display",
      "Water-resistant",
      "GPS and health tracking",
      "Up to 3 days battery life",
    ],
    availability: false,
    rating: 4.6,
    brand: "Samsung",
    release_year: 2022,
  },
  {
    product_id: "9",
    product_title: "",
    product_image:
      "https://i.ibb.co/y0pHZTz/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg",
    category: "chargers",
    price: 290,
    description: "A smart faster chargers 10 mint done .",
    Specification: [
      "1.4-inch AMOLED display",
      "Water-resistant",
      "GPS and health tracking",
      "Up to 3 days battery life",
    ],
    availability: false,
    rating: 4.6,
    brand: "Samsung",
    release_year: 2022,
  },
  // Add more products here
];

function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg">
      <img
        src={product.product_image}
        alt={product.product_title}
        className="w-full h-40 object-cover"
      />
      <h3 className="text-xl font-bold">{product.product_title}</h3>
      <p className="text-gray-600">{product.availability}</p>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-semibold">Price: ${product.price}</p>
      <p className="text-sm">Rating: {product.rating}</p>
      <p className="text-sm">Category: {product.category}</p>
      <p className="text-sm">Location: {product.location}</p>
      <Link to={`/products/${product.products_id}`}>
        <button className="btn btn-outline bg-teal-200 rounded-full">
          View Details
        </button>
      </Link>

      {/* <button className="btn btn-outline bg-teal-200 rounded-full">view Detilas</button> */}
    </div>
  );
}

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const activeClass = (category) =>
    `btn rounded-full btn-xl${
      selectedCategory === category ? " bg-gray-500 text-black" : "bg-red-500"
    }`;

  return (
    <div className="mt-20">
      <h2 className="text-6xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h2>

      {/* Sidebar for category selection */}
      <div className="flex flex-row mt-10 gap-10">
        <div className="grid grid-cols-1 w-[200px] h-[400px] border mx-auto mt-10 space-y-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={activeClass("all")}
          >
            All Items
          </button>
          <button
            onClick={() => setSelectedCategory("computers")}
            className={activeClass("computers")}
          >
            Computers
          </button>
          <button
            onClick={() => setSelectedCategory("phones")}
            className={activeClass("phones")}
          >
            Phones
          </button>
          <button
            onClick={() => setSelectedCategory("smart watches")}
            className={activeClass("smart watches")}
          >
            Smart Watches
          </button>
          <button
            onClick={() => setSelectedCategory("power banks")}
            className={activeClass("power banks")}
          >
            Power Banks
          </button>
          <button
            onClick={() => setSelectedCategory("chargers")}
            className={activeClass("chargers")}
          >
            Chargers
          </button>
        </div>

        {/* Display filtered products */}
        <div className="col-span-3 mt-10 border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <ProductCard product ={product} key={product.product_id} />
          ))}
        </div>
      </div>
    </div>
  );
}
