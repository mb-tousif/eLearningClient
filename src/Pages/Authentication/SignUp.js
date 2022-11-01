import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div>
      <h1 className="text-lg">Sign up Page</h1>
      <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
            Email
          </label>
          <input
            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter Email Address..."
          />
        </div>
        <div class="mb-6 text-center">
          <button
            class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Reset Password
          </button>
        </div>
        <hr class="mb-6 border-t" />
        <div class="text-center">
          <Link
            class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
            to="/login"
          >
            Already have an account? Login!
          </Link>
        </div>
      </form>
    </div>
  );
}
