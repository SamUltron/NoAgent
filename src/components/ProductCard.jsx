const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl flex flex-col flex-shrink-0 w-full">
  <img 
    src={product.image || 'path/to/fallback-image.jpg'} 
    alt={product.name || 'Product Image'} 
    className="h-96 object-cover w-full rounded-tl-xl rounded-tr-xl" 
  />
  
  <div className="mt-10 p-5 space-y-5 flex-1">
    <h3 className="text-3xl font-semibold truncate">{product.title}</h3>
    <p className="text-[#71717A] text-xl truncate">{product.description}</p>
  
    <div className="flex justify-between items-center gap-2 md:flex-row flex-col">
      <p className="font-semibold md:text-3xl sm:text-xl">&#8358; {product.price}</p>
      <button className="bg-[#CBA135] p-3 rounded-3xl text-white whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
        {product.button || 'View Details'}
      </button>
    </div>
  </div>
</div>

  );
};

export default ProductCard;
