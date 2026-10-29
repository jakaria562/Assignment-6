import React from 'react';
import rocket from "../src/assets/rocket.png"
import user from "../src/assets/user.png"
import pack from "../src/assets/package.png"


const GetStart = () => {
    return (
 <div>

      <div className='text-center pt-15 pb-5'>
        <h1 className='text-3xl font-bold pb-5'>Get Started in 3 Steps</h1>
        <p className='pb-5'>Start using premium digital tools in minutes, not hours.</p>
      </div>

           
     <div className='mt-10 grid md:grid-cols-2 mx-auto ml-15 lg:grid-cols-3 gap-6'>
          <div className=''>
            <div className="card w-96 bg-base-100 shadow-2xl">
  <div className="card-body">
    <span className="badge badge-xs absolute right-3 top-3 w-8 h-8  bg-purple-500 text-white px-3 py-3 rounded-full badge-warning">01</span>
   
   
        <div className='text-center pt-10'>
                  <div className='h-25 w-25 p-5 items-center mx-auto justify-center rounded-full bg-purple-100'>  <img src={user} className='flex justify-between items-center mx-auto mb-3' alt="" /></div>
                    <h1 className='text-xl font-semibold pt-5 pb-5'>Create Account</h1>
                    <p className='pb-20'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
    
  </div>
</div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-2xl">
  <div className="card-body">
    <span className="badge badge-xs absolute w-8 h-8 right-3 top-3 text-white bg-purple-500 px-3 py-3 rounded-full badge-warning">02</span>
   
   
        <div className='text-center pt-10'>
                  <div className='h-25 w-25 p-5 items-center mx-auto justify-center rounded-full bg-purple-100'>
                      <img src={pack} className='flex justify-between items-center mx-auto mb-3' alt="" />
                  </div>
                    <h1 className='text-xl font-semibold pt-5 pb-5'>Create Account</h1>
                    <p className='pb-20'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
    
  </div>
</div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-2xl">
  <div className="card-body">
    <span className="badge badge-xs absolute right-3 top-3  w-8 h-8 bg-purple-500 text-white px-3 py-3 rounded-full badge-warning">03</span>
   
   
        <div className='text-center pt-10'>
                  <div className='h-25 w-25 p-5 items-center mx-auto justify-center rounded-full bg-purple-100'>
                      <img src={rocket} className='flex justify-between items-center mx-auto mb-3' alt="" />
                  </div>
                    <h1 className='text-xl pt-5 pb-5 font-semibold'>Create Account</h1>
                    <p className='pb-20'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
    
  </div>
</div>
          </div>
     </div>
 </div>
    )
}

export default GetStart;