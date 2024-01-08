"use client";
import React, { useState, useEffect } from 'react';


interface ProfileCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageSrc, altText, title, description }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      setIsLoaded(true);
    };
  }, [imageSrc]);

  return (
    <div
      className={`grid mb-8 md:grid-cols-2 md:items-center md:text-left p-6 md:p-8 rounded-lg bg-black shadow-lg ${
        isLoaded ? 'opacity-100 scale-105' : 'opacity-0 scale-75'
      } transition-all duration-300`}
    >
      <div className="md:mx-auto">
        <img
          src={imageSrc}
          alt={altText}
          width={300}
          height={200}
          className={`w-full h-full rounded-lg transition-opacity ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="mt-6 md:mt-0 md:ml-6">
        <h1 className="mb-2 text-2xl md:text-3xl font-bold text-white">
          <strong>{title}</strong>
        </h1>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
