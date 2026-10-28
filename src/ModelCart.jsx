import React, { useState } from 'react';

const ModelCart = ({model,carts,setCarts}) => {

      const [buy,setBuy] = useState(false)
      const handleBuy =()=>{
              setBuy(true);
              setCarts([...carts,model])
      }
    return (
        <div className=''>
            <div className="card  shadow-2xl  w-85 bg-base-100 rounded-2xl">
  <div className="card-body">
  <div className='flex justify-between items-center'>
    <img src={model.img} alt="" />
      <span className= {`rounded-full  px-2 py-1 text-xs ${
    model.tag === "Best Seller"
      ? "bg-orange-100 text-orange-600"
      : model.tag === "Popular"
      ? "bg-purple-100 text-purple-600"
      : model.tag === "New"
      ? "bg-green-100 text-green-600"
      : "bg-gray-100 text-gray-600"
  }`}>{model.tag} </span>
  </div>
    <div className="">
      <h2 className="text-xl font-bold">{model.name}</h2>
      <span className="text-xl"> ${model.price} </span>
    </div>
    <ul className="mt-3 space-y-2">
  {model.features.map((feature, index) => (
    <li key={index} className="flex items-center text-xs text-gray-500">
      <span className="mr-2 text-green-500">✓</span>
      {feature}
    </li>
  ))}
</ul>
    <div className="mt-6">
      <button className="btn bg-linear-to-r from-purple-600 to-fuchsia-500 text-white rounded-3xl btn-block" onClick={handleBuy}>{buy? "Added to Cart" : "Buy Now"} </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ModelCart;