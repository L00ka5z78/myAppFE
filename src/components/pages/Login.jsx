import React, { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3x1 my-3 font-bold">Login</h1>
      <form action="">
        <div className="mb-3">
          <input
            type="email"
            placeholder="insert valid email..."
            className="focus:outline-none border-none p-2 rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            placeholder="insert password..."
            className="focus:outline-none border-none p-2 rounded w-full rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-black text-white w-full py-2">
          Login
        </button>
      </form>
    </div>
  );
};
