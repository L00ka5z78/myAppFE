import React from 'react';

export const Profile = () => {
  return (
    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3x1 my-3 font-bold">Profile</h1>
      <div className="mt-3">
        <h2 className="text-2xl">Name:</h2>
        <h2 className="text-2xl">Email:</h2>
        <h2 className="text-2xl">Age:</h2>
      </div>
      <div className="mt-3">
        <button className="my-2 bg-green-600 text-white w-full py-2 rounded">
          Update profile
        </button>
        <button className="my-2 bg-green-600 text-white w-full py-2 rounded">
          Update password
        </button>
        <button className="my-2 bg-green-600 text-white w-full py-2 rounded">
          Logout
        </button>
        <button className="my-2 bg-red-600 text-white w-full py-2 rounded">
          Delete Account
        </button>
      </div>
    </div>
  );
};
