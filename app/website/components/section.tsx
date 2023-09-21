import React from 'react'

export default function Section() {
  return (
    <div>
        <section className="bg-cover bg-center bg-indigo-600 text-white py-16">
        <div className="container mx-auto text-center">
            <h1 className="text-4xl font-semibold">Welcome to Your Website</h1>
            <p className="mt-4 text-lg">Your tagline goes here.</p>
            <a href="#" className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition duration-300">Learn More</a>
        </div>
    </section>

    <section className="py-16">
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold">About Us</h2>
            <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor est, eget interdum nisi venenatis a.</p>
        </div>
    </section>

    <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold">Our Services</h2>
            <ul className="mt-4 space-y-2">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
            </ul>
        </div>
    </section>

    <section className="py-16">
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <p className="mt-4 text-lg">Email: example@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
        </div>
    </section>
    </div>
  )
}




    





