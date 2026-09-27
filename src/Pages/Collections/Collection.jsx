import React from 'react'
import Nav from '../../Components/Header/Nav'
import Footer from '../../Components/Footer/Footer';
import { useState } from "react";

import Fashion1 from "../../assets/fashion8.png";
import Fashion2 from "../../assets/fashion7.png";

import Fashion3 from "../../assets/Ankara4.jpeg";
import Fashion9 from "../../assets/Ankara3.jpeg";
import Fashion11 from "../../assets/Ankara.jpeg";

import Fashion4 from "../../assets/Senator.jpeg";
import Fashion7 from "../../assets/Senator2.jpeg";
import Fashion15 from "../../assets/Senator3.jpeg";
import Fashion14 from "../../assets/Senator5.jpeg"
import Fashion12 from "../../assets/Senator6.jpeg"
import Fashion17 from "../../assets/Senator7.jpeg"
import Fashion20 from "../../assets/Senator8.jpeg"
import Fashion18 from "../../assets/Senator9.jpeg"


import Fashion5 from "../../assets/Agbada.jpeg";
import Fashion8 from "../../assets/Agbada2.jpeg";
import Fashion10 from "../../assets/Agbada3.jpeg";

import Fashion6 from "../../assets/Jalamia.jpeg";

import Fashion13 from "../../assets/Cap.jpeg"

import Fashion16 from "../../assets/Cooperate wears.jpeg"

import Fashion21 from "../../assets/Design.jpeg"

import Fashion22 from "../../assets/Embroidery.jpeg"

import Fashion23 from "../../assets/Monogram design.jpeg"
import Fashion24 from "../../assets/Monogram design2.jpeg"

import Fashion25 from "../../assets/Smylewears.jpeg"
import Fashion26 from "../../assets/Smylewears2.jpeg"
import Fashion27 from "../../assets/Smylewears3.jpeg"
import Fashion28 from "../../assets/Smylewears4.jpeg"





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
      name: "Modern Ankara Shirt",
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
      image: Fashion8,
      name: "Luxury Agbada",
      category: "Agbada",
    },
    {
      image: Fashion9,
      name: "Modern Ankara Shirt",
      category: "Ankara",
    },
    {
     image: Fashion10,
      name: "Premium Senator",
      category: "Senator",
    },
    {
      image: Fashion11,
      name: "Classic Ankara",
      category: "Ankara",
    },
    {
     image: Fashion12,
      name: "Modern Senator",
      category: "Senator",
    },
    {
      image: Fashion13,
      name: "Fila",
      category: "Cap",
    },
    {
      image:Fashion14,
      name: "Classic Senator Design",
      category: "Senator"
    },
    {
     image: Fashion15,
      name: "Premium Senator",
      category: "Senator",
    },
    {
      image: Fashion16,
      name: "Cooperate Shirt",
      category: "Cooperate Wear",
    },
    {
      image: Fashion17,
      name: "Senator Wear",
      category: "Senator",
    },
    {
      image: Fashion18,
      name: "Classic Senator",
      category: "Senator",
    },
    {
      image: Fashion20,
      name: "Classic Senator",
      category: "Senator",
    },
    {
      image: Fashion22,
      name: "Classic Embroidery Wear",
      category: "Embroidery Wear",
    },
    {
      image: Fashion23,
      name: "Simple Embroidery Wears",
      category: "Embroidery Wear",
    },
    {
      image: Fashion24,
      name: "African Embroidery Wear",
      category: "Embroidery Wear",
    },
    {
      image: Fashion25,
      name: "Simple African Attire",
      category: "African Attire",
    },
    {
      image: Fashion21,
      name: "Embroidery Design",
      category: "Embroidery Wear",
    },
    {
      image: Fashion26,
      name: "African Men Clothing",
      category: "African Attire",
    },
    {
      image: Fashion28,
      name: "Modern Ankara Design",
      category: "Ankara",
    },
    {
      image: Fashion27,
      name: "Simple African Attire Design",
      category: "African Attire",
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

  <button
    onClick={() => setSelectedCategory("Cooperate Wear")}
    className={`px-6 py-2 rounded-full border border-[#b58b32] transition ${
  selectedCategory === "Cooperate Wear"
    ? "bg-[#b58b32] text-white"
    : "text-gray-800 hover:bg-[#b58b32] hover:text-white"
}`}
  >
    Cooperate Wear
  </button>

  <button
    onClick={() => setSelectedCategory("Embroidery Wear")}
    className={`px-6 py-2 rounded-full border border-[#b58b32] transition ${
   selectedCategory === "Embroidery Wear"
    ? "bg-[#b58b32] text-white"
    : "text-gray-800 hover:bg-[#b58b32] hover:text-white"
}`}
  >
    Embroidery Wear
  </button>

  <button
    onClick={() => setSelectedCategory("African Attire")}
    className={`px-6 py-2 rounded-full border border-[#b58b32] transition ${
  selectedCategory === "African Attire"
    ? "bg-[#b58b32] text-white"
    : "text-gray-800 hover:bg-[#b58b32] hover:text-white"
}`}
  >
    African Attire
  </button>

  <button
    onClick={() => setSelectedCategory("Cap")}
    className={`px-6 py-2 rounded-full border border-[#b58b32] transition ${
  selectedCategory === "Cap"
    ? "bg-[#b58b32] text-white"
    : "text-gray-800 hover:bg-[#b58b32] hover:text-white"
}`}
  >
    Cap
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
