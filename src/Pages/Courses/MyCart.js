import React from 'react'

export default function MyCart() {
  return (
    <div className="mx-auto">
      <p className="text-lg mt-4 font-bold">My Cart Course Page</p>
      <div class="border-transparent bg-gradient-to-l from-[#165e9c] to-[#ADCDED] rounded-lg text-center p-5 mx-auto md:mx-0 my-2 font-medium z-10 shadow-lg">
        <div class="py-4">
          Professional
          <div id="annual" class="font-bold text-6xl">
            $249.99
          </div>
          <hr />
          <div class="text-sm my-3">1 TB Storage</div>
          <hr />
          <div class="text-sm my-3">5 Users Allowed</div>
          <hr />
          <div class="text-sm my-3">Send up to 10 GB</div>
          <hr />
          <button>Proceed</button>
        </div>
      </div>
    </div>
  );
}
