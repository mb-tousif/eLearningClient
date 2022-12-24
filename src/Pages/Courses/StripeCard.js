import React from 'react'
import creditCard from "../../Assets/creditCard.png"

export default function StripeCard() {
  return (
    <div className="container mb-4">
      <div className="m-4">
        <div className="w-full sm:w-2/3 p-2 shadow-lg mx-auto rounded-xl bg-[#795a04d9]">
          <header className="container sm:w-2/3 mx-auto my-auto">
            <img src={creditCard} alt="credit card" className="w-auto" />
          </header>
          <main className="mt-4 p-4">
            <h1 className="text-xl font-semibold text-gray-700 text-center">
              Payment Gateway
            </h1>
            <div className="">
              <div className="my-3">
                <input
                  type="text"
                  className="block w-full px-5 py-2 border rounded-lg shadow-lg placeholder-gray-400 text-[#fff] bg-[#070c42de] focus:ring focus:outline-none"
                  placeholder="Card Holder"
                  maxLength="22"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  className="block w-full px-5 py-2 border rounded-lg shadow-lg placeholder-gray-400 text-[#fff] bg-[#070c42de] focus:ring focus:outline-none"
                  placeholder="Card Number"
                  maxLength="19"
                />
              </div>
              <div className="my-3 flex flex-col">
                <div className="mb-2">
                  <label for="" className="text-gray-700">
                    Expired
                  </label>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <select
                    className="form-select appearance-none block w-full px-5 py-2 border rounded-lg shadow-lg placeholder-gray-400 text-[#fff] bg-[#070c42de] focus:ring focus:outline-none"
                  >
                    <option value="" selected disabled>
                      MM
                    </option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select
                    className="form-select appearance-none block w-full px-5 py-2 border rounded-lg shadow-lg placeholder-gray-400 text-[#fff] bg-[#070c42de] focus:ring focus:outline-none"
                    x-model="expired.year"
                  >
                    <option value="" selected disabled>
                      YY
                    </option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
                  <input
                    type="text"
                    className="block w-full col-span-2 px-5 py-2 border rounded-lg placeholder-gray-400 text-[#fff] bg-[#070c42de] focus:ring focus:outline-none"
                    placeholder="Security Code"
                    maxLength="3"
                  />
                </div>
              </div>
            </div>
          </main>
          <footer className="mt-2 p-2">
            <button className="text-[#fff] hover:text-[#FFFF00] bg-[#070c42de] transition duration-700 ease-in-out hover:bg-[#1f5119] mt-2 px-3 py-1.5 rounded-xl w-full">
              Pay Now
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
