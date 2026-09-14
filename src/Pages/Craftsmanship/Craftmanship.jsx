import React from 'react'
import Nav from "../../Components/Header/Nav";
import Footer from '../../Components/Footer/Footer';

export default function Craftmanship() {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-purple-500 text-white py-16 px-6">

        <div className="max-w-5xl mx-auto">

          <div className="text-center">

            <p className="text-[#d4af37] uppercase tracking-widest font-semibold">
              Our Craftsmanship
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              Where Every Stitch Matters
            </h1>

            <p className="text-gray-300 max-w-2xl mx-auto mt-5 text-lg">
              Great fashion is more than fabric and measurements. It is
              about patience, precision and attention to every detail.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            <div className="border border-gray-700 rounded-2xl p-8">

              <div className="text-4xl mb-5">
                🧵
              </div>

              <h2 className="text-2xl font-bold">
                Premium Fabrics
              </h2>

              <p className="text-gray-300 mt-3">
                We carefully select fabrics that provide the right balance
                of quality, comfort and appearance.
              </p>

            </div>

            <div className="border border-gray-700 rounded-2xl p-8">

              <div className="text-4xl mb-5">
                ✂️
              </div>

              <h2 className="text-2xl font-bold">
                Attention To Detail
              </h2>

              <p className="text-gray-300 mt-3">
                From the first cut to the final stitch, every part of the
                garment receives careful attention.
              </p>

            </div>

            <div className="border border-gray-700 rounded-2xl p-8">

              <div className="text-4xl mb-5">
                👔
              </div>

              <h2 className="text-2xl font-bold">
                Timeless Designs
              </h2>

              <p className="text-gray-300 mt-3">
                We combine traditional African fashion with modern styling
                to create outfits that stand out.
              </p>

            </div>

            <div className="border border-gray-700 rounded-2xl p-8">

              <div className="text-4xl mb-5">
                🏆
              </div>

              <h2 className="text-2xl font-bold">
                Made With Pride
              </h2>

              <p className="text-gray-300 mt-3">
                Every outfit represents our commitment to quality,
                professionalism and customer satisfaction.
              </p>

            </div>

          </div>

        </div>

      </div>
      <Footer />
    </>
  )
}
