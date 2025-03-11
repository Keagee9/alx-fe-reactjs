import React from 'react';

const UserProfile = () => {
  return (
    <div className="container mx-auto p-4 sm:p-8 md:p-12 max-w-xs sm:max-w-sm md:max-w-md">
      <div className="flex flex-col items-center">
        <img
          src="profile-picture.jpg"
          alt="Profile Picture"
          className="rounded-full w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48"
        />
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold mt-4">John Doe</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          nisi in odio varius, id tincidunt quam viverra.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;