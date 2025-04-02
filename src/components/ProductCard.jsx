

const ProductCard = ({ product}) => {
  return (
    <div className="border rounded-xl flex flex-col">
      <img src={product.image} alt={product.name} className="h-96 object-fill w-full rounded-tl-xl rounded-tr-xl" />
      <div className="mt-10 p-5 space-y-5">
        <h3 className="text-3xl font-semibold">{product.title}</h3>
        <p className="text-[#71717A] text-xl">{product.description}</p>
        <div className="flex justify-between">
          <p className="font-semibold text-2xl">&#8358; {product.price}</p>
          <button className="bg-[#CBA135] p-3 rounded-[28px] text-white">{product.button}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


