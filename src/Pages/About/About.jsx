import React from 'react'
import Nav from "../../Components/Header/Nav";
import Fashion2 from "../../assets/fashion4.png";
import Footer from '../../Components/Footer/Footer';

export default function About() {
  return (
    <>
      <Nav />
      <div className=''>
        <section className="relative pt-2 lg:pt-2">
          <div className="mx-auto w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
            <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">

              <img src={Fashion2} alt="Fashion"
                className='lg:absolute lg:w-full lg:h-full rounded-3xl
               object-cover lg:max-h-none max-h-96' />
            </div>
            <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
              <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-yellow-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
              <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-yellow-600 blur-xl opacity-80" />
            </div>
            <span className="w-4/12 lg:w-2/12 aspect-square bg-linear-to-tr from-purple-600 to-purple-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
            <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
              <p className="mb-4 text-yellow-400 font-extrabold">ABOUT US</p>
              <h1 className="text-xs leading-tight sm:text-xl md:text-2xl xl:text-3xl font-medium text-gray-900">
                Quality.Passion.Perfection

              </h1>
              <p className="mt-8 text-gray-900">
                We are a team of skilled tailors dedicated to creating
                high-quality, stylish and comfortable outfits that
                makes you stand out. Every piece is handmade with
                premium fabrics and attention to every detail.
              </p>


            </div>

          </div>
        </section>
        <div className='mt-16'>
         <section className=" py-20 bg-linear-to-br from-indigo-600 to-purple-700 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {/* Stat 1 */}
              <div className="p-6">
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-indigo-200 font-medium">Years Of Experience</div>
              </div>
              {/* Stat 2 */}
              <div className="p-6">
                <div className="text-5xl font-bold mb-2">5,000+</div>
                <div className="text-indigo-200 font-medium">Outfits Designed</div>
              </div>
              {/* Stat 3 */}
              <div className="p-6">
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-indigo-200 font-medium">Returning Customers</div>
              </div>
              {/* Stat 4 */}
              <div className="p-6">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-indigo-200 font-medium">Customer Satisfaction</div>
              </div>
            </div>
          </div>
         </section>
        </div>
      </div>
      <Footer/>
    </>
  )
}
