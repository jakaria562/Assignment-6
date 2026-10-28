import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = ({carts,setCarts}) => {
  const totalPrice = carts.reduce((sum,item)=>sum+item.price,0)
  const handlePament= ()=>{
        setCarts([])
       
     }
    return (
        <div>
            <h1 className='text-2xl font-bold'>
                Your Carts
            </h1>

            {
                carts.length === 0? <div className='text-center w-300 h-60 mt-10 shadow-2xl'>
                    <p className='text-2xl pt-5 '>Cart is empty</p>
                    <div className='text-5xl flex justify-center items-center mt-10'><FaShoppingCart/></div>
                    </div>:
                    <>
                      <div>
               {
            carts.map(item => <div className=' flex justify-between shadow-2xl mb-5 p-5 rounded-2xl' key={item.id}>
                 

                 <div  className='flex '>
                   <div>
                     <img src={item.img} alt="" />
                   </div>
                        <div className=' ml-10'>
                                <h1 className='text-xl font-semibold'>{item.name}</h1>   <p>
                               $ {item.price}
                              </p>
                        </div>
                     
                             
                           
                 </div>
                    <div>
                            <button className='p-2  text-red-600 rounded-2xl bg-red-100'>Remove</button>
                        </div>
                        
            </div>)
            
           }
        </div>

            <div className='flex  justify-between text-black p-8 m-8 rounded-3xl text-2xl'>
                <div>
                    Total
                </div>
                <div className='text-black'>
                ${totalPrice} </div>
            </div>
              <div className='text-center bg-linear-to-r from-purple-600 to-fuchsia-500 text-2xl font text-white p-5 m-5 rounded-3xl'>
                <button onClick={handlePament}>Proceed to Checkout</button>
            </div>
                    </>
            }
      
        </div>

    );
};

export default Cart;