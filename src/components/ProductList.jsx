import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import {details} from "../data/detailss"

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isFull, setIsFull] = useState(false);

  // const apiUrl = !isFull
  //   ? "http://localhost:4000/details?_limit=3"
  //   : "http://localhost:4000/details";
  // fetch(apiUrl)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     setProducts(data);
  //   })
  //   .catch((error) => console.error(error.message));

  useEffect(() => {

    const apiData = isFull ? details.slice(0, 3) : details.slice(0, 6)
    setProducts(apiData)
  }, [isFull]);

  return (
    <>
      <div className="grid md:grids-cols-1 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 sm:gap-20 md:gap-10 gap-8 mt-10 transition duration-1000 ease-in-out max-w-full">
  {products.map((product) => (
    <div
      key={product.id}
      className="transform transition-all duration-500 hover:scale-105 flex-shrink-0"
    >
      <ProductCard product={product} />
    </div>
  ))}
</div>

<button
  className="flex mx-auto bg-[#CBA135] p-3 rounded-lg mt-10 text-white text-xl items-center justify-between gap-2 focus:outline-none hover:bg-[#edba38]"
  onClick={() => setIsFull((prev) => !prev)}
>
  {isFull ? "View All Properties" : "View Less"} <MdOutlineKeyboardArrowRight size={30} />
</button>

    </>
  );
};

export default ProductList;

// Sample products data
// const products = [
//   {
//     name: 'Product 1',
//     description: 'This is a cool product.',
//     price: '19.99',
//     image: 'https://via.placeholder.com/150', // Example image
//   },
//   {
//     name: 'Product 2',
//     description: 'Another great product.',
//     price: '29.99',
//     image: 'https://via.placeholder.com/150', // Example image
//   },
//   {
//     name: 'Product 3',
//     description: 'You will love this one.',
//     price: '39.99',
//     image: 'https://via.placeholder.com/150', // Example image
//   },
//   {
//     name: 'Product 4',
//     description: 'Best product ever.',
//     price: '49.99',
//     image: 'https://via.placeholder.com/150', // Example image
//   },
// ];

// const toggleLike = (index) => {
//   const updatedLikes = [...likedProducts];
//   updatedLikes[index] = !updatedLikes[index]; // Toggle the like state
//   setLikedProducts(updatedLikes);
// };
