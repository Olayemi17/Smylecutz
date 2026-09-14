import React from 'react'
import Nav from '../../Components/Header/Nav'
import Footer from '../../Components/Footer/Footer';
import { useState } from "react";

import Fashion1 from "../../assets/fashion8.png";
import Fashion2 from "../../assets/fashion7.png";

import Fashion3 from "../../assets/Ankara4.jpeg";
import Fashion11 from "../../assets/Ankara3.jpeg";
import Fashion12 from "../../assets/Ankara.jpeg";

import Fashion4 from "../../assets/Senator.jpeg";
import Fashion7 from "../../assets/Senator2.jpeg";
import Fashion8 from "../../assets/Senator3.jpeg";



import Fashion5 from "../../assets/Agbada.jpeg";
import Fashion9 from "../../assets/Agbada2.jpeg";
import Fashion10 from "../../assets/Agbada3.jpeg";

import Fashion6 from "../../assets/jalamia.jpeg";



export default function Collection() {
   const [selectedCategory, setSelectedCategory] = useState("All");

     const designs = [
    {
      image: Fashion1,
      name: "Classic Senator",
      category: "Senator",
    },
    {
      image: Fashion2,
      name: "Royal Agbada",
      category: "Agbada",
    },
    {
      image: Fashion3,
      name: "Modern Ankara",
      category: "Ankara",
    },
    {
      image: Fashion4,
      name: "Premium Senator",
      category: "Senator",
    },
    {
      image: Fashion5,
      name: "Luxury Agbada",
      category: "Agbada",
    },
    {
      image: Fashion6,
      name: "Jalamia",
      category: "Jalamia",
    },
    {
     image: Fashion7,
      name: "Premium Senator",
      category: "Senator",
    },
    {
      image: Fashion9,
      name: "Luxury Agbada",
      category: "Agbada",
    },
    {
      image: Fashion11,
      name: "Modern Ankara",
      category: "Ankara",
    },
    {
     image: Fashion8,
      name: "Premium Senator",
      category: "Senator",
    },
    {
      image: Fashion12,
      name: "Classic Ankara",
      category: "Ankara",
    },
     {
      image: Fashion10,
      name: "Royal Agbada",
      category: "Agbada",
    },
  ];
  const filteredDesigns =
  selectedCategory === "All"
    ? designs
    : designs.filter((design) => design.category === selectedCategory);

  return (
    <>
    <Nav/>
    <section className="min-h-screen bg-[#f8f5ef] py-16 px-6">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-[#b58b32] uppercase tracking-[0.2em] font-semibold">
          Our Collections
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
          Explore Our Designs
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg">
          Discover our collection of carefully crafted designs,
          from traditional African wear to modern formal styles.
        </p>

      </div>


      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-10">

  <button
    onClick={() => setSelectedCategory("All")}
    className={`px-6 py-2 rounded-full border border-[#b58b32] transition ${
  selectedCategory === "All"
    ? "bg-[#b58b32] text-white"
    : "text-gray-800 hover:bg-[#b58b32] hover:text-white"
}`}
  >
    All
  </button>

  <button
    onClick={() => setSelectedCategory("Senator")}
    className={`px-6 py-2 rounded-full border border-[#b58b32] transition ${
  selectedCategory === "Senator"
    ? "bg-[#b58b32] text-white"
    : "text-gray-800 hover:bg-[#b58b32] hover:text-white"
}`}
  >
    Senator
  </button>

  <button
    onClick={() => setSelectedCategory("Agbada")}
    className={`px-6 py-2 rounded-full border border-[#b58b32] transition ${
  selectedCategory === "Agbada"
    ? "bg-[#b58b32] text-white"
    : "text-gray-800 hover:bg-[#b58b32] hover:text-white"
}`}
  >
    Agbada
  </button>

  <button
    onClick={() => setSelectedCategory("Ankara")}
    className={`px-6 py-2 rounded-full border border-[#b58b32] transition ${
  selectedCategory === "Ankara"
    ? "bg-[#b58b32] text-white"
    : "text-gray-800 hover:bg-[#b58b32] hover:text-white"
}`}
  >
    Ankara
  </button>

  <button
    onClick={() => setSelectedCategory("Jalamia")}
    className={`px-6 py-2 rounded-full border border-[#b58b32] transition ${
  selectedCategory === "Jalamia"
    ? "bg-[#b58b32] text-white"
    : "text-gray-800 hover:bg-[#b58b32] hover:text-white"
}`}
  >
    Jalamia
  </button>

</div>


      {/* Gallery */}
     <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">

  {filteredDesigns.map((design, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl overflow-hidden shadow-lg group"
    >

      <div className="h-105 overflow-hidden">
        <img
          src={design.image}
          alt={design.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">

        <p className="text-sm text-[#b58b32] uppercase tracking-wider">
          {design.category}
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-1">
          {design.name}
        </h2>

      </div>

    </div>
  ))}

</div>

    </section>
    <Footer/>
    </>
  )
}
