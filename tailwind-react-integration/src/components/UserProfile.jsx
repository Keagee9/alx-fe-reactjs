import React from 'react';

const UserProfile = () => {
  return (
    <div className="container mx-auto p-4 sm:p-8 max-w-xs sm:max-w-sm"> {/* Responsive container */}
      <div className="flex flex-col items-center">
        <img
          src="profile-picture.jpg" // Replace with the actual path to your image
          alt="Profile Picture"
          className="rounded-full w-24 h-24 sm:w-36 sm:h-36" // Responsive image size
        />
        <h1 className="text-lg sm:text-xl font-bold mt-4">John Doe</h1> {/* Responsive heading */}
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          nisi in odio varius, id tincidunt quam viverra.
        </p> {/* Responsive paragraph */}
      </div>
    </div>
  );
};

export default UserProfile;