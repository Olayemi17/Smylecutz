import React from 'react'
import Nav from "../../Components/Header/Nav";
import Fashion8 from "../../assets/fashion8.png"
import Fashion7 from "../../assets/fashion7.png"
import Fashion9 from "../../assets/fashion9.png"
import { Link } from 'react-router'
import Footer from '../../Components/Footer/Footer';
const Service = () => {
  return (
    <>
      <Nav />
      <section className="py-20  bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">
              WHY CHOOSE US
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
              Crafted With Passion.
            </h2><span className='text-2xl md:text-3xl font-bold'> Designed For You.</span>
            <p className="max-w-2xl mx-auto text-gray-600 mt-4">
              From premium fabrics to the final stitch, quality is in every detail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1  */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">

              <div className="h-48 overflow-hidden flex items-center justify-center">
                <img
                  src={Fashion8}
                  alt="Fashion"
                  className="w-full h-full object-contain "
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Perfect Fit, Every Time
                </h3>

                <p className="text-gray-600 mb-4">
                  Every outfit is carefully measured and tailored to your unique body
                  shape, giving you a clean and comfortable fit.
                </p>

                <Link to="/Tailoring">
                  <a
                    href="#"
                    className="text-blue-600 font-semibold inline-flex items-center"
                  >
                    Explore our tailoring →
                    <i className="fas fa-arrow-right ml-2" />
                  </a>
                </Link>
              </div>

            </div>
            {/* Feature 2  */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-linear-to-r flex items-center justify-center">
                <img
                  src={Fashion7}
                  alt="Fashion"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Premium Designs
                </h3>
                <p className="text-gray-600 mb-4">
                  From elegant Agbada and Senator wear to sophisticated
                  business suits and wedding attire, we create styles for every occasion.
                </p>
                <Link to="/Collection">
                  <a
                    href="#"
                    className="text-blue-600 font-semibold inline-flex items-center"
                  >
                    View our collections → <i className="fas fa-arrow-right ml-2" />
                  </a>

                </Link>
              </div>
            </div>
            {/* Feature 3  */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-linear-to-r flex items-center justify-center">
                <img
                  src={Fashion9}
                  alt="Fashion"
                  className="w-full h-full object-contain"
                />

              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Quality Craftsmanship
                </h3>
                <p className="text-gray-600 mb-4">
                  We use carefully selected fabrics and pay attention to every
                  stitch, button, and finishing detail to deliver outfits you can be proud to wear.
                </p>
                <Link to="/Craftmanship">
                  <a
                    href="#"
                    className="text-blue-600 font-semibold inline-flex items-center"
                  >
                    Our craftsmanship → <i className="fas fa-arrow-right ml-2" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Service
