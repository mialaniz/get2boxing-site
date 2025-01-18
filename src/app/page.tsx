'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-blue-600">Welcome to Get2Boxing</h1>
          <p className="text-xl mb-8 text-blue-600">Your premier boxing training experience</p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Meet Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-blue-600">
            {[
              { name: "Founder Names and Bio", image: "/boxing-1.JPG" },
              
            ].map((founder, index) => (
              <div key={index} className="text-center">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                <p className="text-gray-600">
                  Passionate about boxing and dedicated to helping others achieve their fitness goals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">About Get2Boxing</h2>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-600">
            Get2Boxing was founded by passionate boxing enthusiasts with a mission to bring high-quality boxing training to everyone. Our founders combine decades of experience in boxing, fitness, and business to create a unique and effective training program that caters to all skill levels.
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 text-black">
            {[
              "Oceanside, CA",
            ].map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{location}</h3>
                <p className="text-gray-600">3365 Mission Ave Suite F, 92058</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}