import React, { use, useState } from 'react';
import ModelCart from './ModelCart';
import Cart from './Cart';

const Models = ({modelPromise,carts,setCarts}) => {
    const models = use(modelPromise)
    // console.log (models)

   const [activeTab,setActiveTab] =useState("products")
//    console.log(activeTab)

    return (
        <div className='py-20 max-w-6xl mx-auto '>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
            <p>Choose from our curated collection of premium digital products designed <br></br>to boost your productivity and creativity</p>
            </div>
                 

                 {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center mt-10 mb-10   bg-transparent">
  <input type="radio" name="my_tabs_1"  className= {`tab rounded-full w-40 ${activeTab ==="products" ? " bg-linear-to-r from-purple-600 to-fuchsia-500 text-white": "bg-white text-black"}`} aria-label="Products" defaultChecked onClick={()=>setActiveTab("products")} />
  <input type="radio" name="my_tabs_1"  className= {`tab rounded-full w-40 ${activeTab ==="cart" ? " bg-linear-to-r from-purple-600 to-fuchsia-500 text-white": "bg-white text-black"}`} aria-label="Cart" onClick={()=> setActiveTab("cart")} />
 
</div>
                <div  className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                       {
                models.map(model => 
                    <div>
                   {
                    activeTab==="products" &&      <ModelCart carts={carts} setCarts ={setCarts} key={models.id}  model={model}></ModelCart>
                   }
                    </div>
                )
            }
                </div>
                {
                    activeTab==="cart" &&    <Cart carts={carts}></Cart>
                }
            </div>

            
    );
};

export default Models;