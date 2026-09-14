import React from 'react'
import Nav from "../../Components/Header/Nav";
import Footer from '../../Components/Footer/Footer';

export default function Tailoring() {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-[#f8f5ef] py-16 px-6">

        <div className="max-w-5xl mx-auto">

          <div className="text-center">

            <p className="text-[#b58b32] uppercase tracking-widest font-semibold">
              Our Tailoring
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              Tailored Specifically For You
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg">
              Every outfit begins with your measurements, your style and
              your vision. We turn them into an outfit made specifically
              for you.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-5">📏</div>

              <h2 className="text-2xl font-bold">
                Precise Measurements
              </h2>

              <p className="text-gray-600 mt-3">
                We carefully take your measurements to ensure your outfit
                fits comfortably and looks great.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-5">✂️</div>

              <h2 className="text-2xl font-bold">
                Custom Tailoring
              </h2>

              <p className="text-gray-600 mt-3">
                Your outfit is cut and sewn according to your measurements,
                preferences and desired style.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-5">✨</div>

              <h2 className="text-2xl font-bold">
                Final Fitting
              </h2>

              <p className="text-gray-600 mt-3">
                Before delivery, we make sure every detail is properly
                finished and the outfit fits exactly as it should.
              </p>
            </div>

          </div>

          <div className="text-center mt-14">

            <a
              href="#contact"
              className="inline-block bg-[#b58b32] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#967329] transition"
            >
              Book Your Appointment
            </a>

          </div>

        </div>

      </div>
      <Footer />
    </>
  )
}
