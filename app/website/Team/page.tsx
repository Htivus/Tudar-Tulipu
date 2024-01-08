// Team.tsx
import React from 'react';
import ProfileCard from './Profile';

const Team = () => {
  return (
    <div className="pt-20 pb-48 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Our Team</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              Meet the pillars of Dynamic team Behind Tudar
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6">
          <ProfileCard
            imageSrc="/src/Core/suvith.png"
            altText="Suvith Kumar"
            title="Technical Team Head"
            description="As a tech aficionado, I'm wired to weave humor into code - transforming errors into witty quips and debugging with a smile!"
          />
          <ProfileCard
            imageSrc="/src/Core/suvith.png"
            altText="Suvith Kumar"
            title="Technical Team Head"
            description="As a tech aficionado, I'm wired to weave humor into code - transforming errors into witty quips and debugging with a smile!"
          />
          <ProfileCard
            imageSrc="/src/Core/suvith.png"
            altText="Suvith Kumar"
            title="Technical Team Head"
            description="As a tech aficionado, I'm wired to weave humor into code - transforming errors into witty quips and debugging with a smile!"
          />
          <ProfileCard
            imageSrc="/src/Core/suvith.png"
            altText="Suvith Kumar"
            title="Technical Team Head"
            description="As a tech aficionado, I'm wired to weave humor into code - transforming errors into witty quips and debugging with a smile!"
          />
          {/* Add more ProfileCard components for other team members */}
        </div>
      </div>
    </div>
  );
};

export default Team;
