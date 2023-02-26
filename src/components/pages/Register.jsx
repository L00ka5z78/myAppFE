import React from 'react';

export const Register = () => {
  return (
    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3x1 my-3 font-bold">Register</h1>
      <form action="">
        <div className="mb-3">
          <input
            type="text"
            placeholder="insert name..."
            className="focus:outline-none border-none p-2 rounded w-full"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="insert valid email..."
            className="focus:outline-none border-none p-2 rounded w-full"
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            placeholder="insert age..."
            className="focus:outline-none border-none p-2 rounded w-full"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="insert password..."
            className="focus:outline-none border-none p-2 rounded w-full"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="confirm password..."
            className="focus:outline-none border-none p-2 rounded w-full"
          />
        </div>
      </form>
    </div>
  );
};
