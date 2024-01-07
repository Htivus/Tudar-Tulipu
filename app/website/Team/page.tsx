import Image from 'next/image'
import React from 'react'

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


        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 ">

          <div className="grid  mb-5   gap-2 md:grid-cols-2 md:items-center md:text-left">
            <div className="mx-auto">
              <Image height={300} width={200} src="/src/Core/suvith.png" alt="" className="w-60  rounded-lg"/>
            </div>
            <div>
              <h1 className="mb-2 text-2xl font-semibold"><strong>Technical Team Head</strong><br/>Suvith Kumar
              </h1>
              <p>As a tech aficionado, I'm wired to weave humor into code - transforming errors into witty quips and debugging with a smile!
                As a tech aficionado, I'm wired to weave humor into code - transforming errors into witty quips and debugging with a smile!
              </p>
            </div>
            </div>
          
          <div className="grid  mb-5  gap-2 md:grid-cols-2 md:items-center md:text-left">
              <div className="mx-auto">
                <Image height={300} width={200} src="/src/Core/suvith.png" alt="" className="w-60 rounded-lg"/>
              </div>
              <div>
                <h1 className="mb-2 text-2xl font-semibold"><strong>Technical Team Head</strong><br/>Suvith Kumar
                </h1>
                <p>As a tech aficionado, I'm wired to weave humor into code - transforming errors into witty quips and debugging with a smile!
                  As a tech aficionado, I'm wired to weave humor into code - transforming errors into witty quips and debugging with a smile!
                </p>
              </div>
           </div>
              
        </div>
      </div>
    </div>
  )
}

export default Team;