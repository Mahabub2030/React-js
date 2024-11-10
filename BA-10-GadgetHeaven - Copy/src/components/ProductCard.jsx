

// import { Link } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   if (!product|| !product.product_id) {
//     return <p>Error: Product ID is missing.</p>;
//   }

//   const { product_id, product_image, product_title } = product;

//   return (
//     <div className="border p-4 rounded-lg">
//       <img
//         src={product_image}
//         alt={product_title}
//         className="w-full h-40 object-cover"
//       />
//       <h3 className="text-xl font-bold">{product_title}</h3>
//       <Link to = {`/products/${product_id}`}> {/* Correct path */}
//         <button className="btn btn-outline bg-teal-200 rounded-full">
//           View Details
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => { // Destructure "product" properly from props
  if (!product || !product.product_id) {
    return <p>Error: Product ID is missing.</p>;
  }

  const { product_id, product_image, product_title } = product; // Corrected from products to product

  return (
    <div className="border p-4 rounded-lg">
      <img
        src={product_image}
        alt={product_title}
        className="w-full h-40 object-cover"
      />
      <h3 className="text-xl font-bold">{product_title}</h3>
      <Link to={`/products/${product_id}`}> {/* Correct path */}
        <button className="btn btn-outline bg-teal-200 rounded-full">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;





