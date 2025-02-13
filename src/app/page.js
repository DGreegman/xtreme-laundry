import React from 'react';
import { Phone, Mail, MapPin, Clock, Check, Star, Instagram, Facebook, Twitter } from 'lucide-react';
import LocationMap from '@/components/LocationMap';

const LaundryWebsite = () => {
  const services = [
    { title: 'Wash & Fold', price: 'From $2.50/lb', time: '24h turnaround' },
    { title: 'Dry Cleaning', price: 'From $6/item', time: '48h turnaround' },
    { title: 'Express Service', price: '+50% charge', time: 'Same day' },
    { title: 'Ironing', price: 'From $3/item', time: '24h turnaround' }
  ];

  const features = [
    'Eco-friendly detergents',
    'Free pickup & delivery',
    'Expert stain removal',
    'Garment repairs',
    'Wedding dress preservation',
    'Commercial services'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative h-screen max-h-[600px] bg-blue-600">
        <div className="absolute inset-0">
          <img
            src="/laundry1.jpg"
            alt="Laundry Service"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Laundry & Dry Cleaning Services
            </h1>
            <p className="text-xl mb-8">
              Let us take care of your garments with our premium cleaning services
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Book Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-blue-600 font-bold mb-2">{service.price}</p>
                <p className="text-gray-600">{service.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-4">
                <Check className="text-blue-600 flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Exceptional service! My clothes have never been cleaner. The staff is professional and friendly. Xtreme-Laundry is the Best"
                </p>
                <p className="font-semibold">- Happy Customer {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-600" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-600" />
                  <span>contact@laundryservice.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-blue-600" />
                  <span>123 Clean Street, Laundry City, LC 12345</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="text-blue-600" />
                  <span>Mon-Sat: 7am-9pm, Sun: 8am-6pm</span>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border rounded-lg"
              />
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <LocationMap />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                Professional laundry services with over 10 years of experience in keeping your garments fresh and clean.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Services</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Book Now</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Facebook className="hover:text-blue-400 cursor-pointer" />
                <Instagram className="hover:text-pink-400 cursor-pointer" />
                <Twitter className="hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Laundry Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LaundryWebsite;