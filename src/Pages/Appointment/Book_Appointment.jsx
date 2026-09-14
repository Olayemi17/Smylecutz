import React from 'react'
import Nav from '../../Components/Header/Nav'
import emailjs from "@emailjs/browser";
import { useRef } from 'react';
import Footer from '../../Components/Footer/Footer';

export default function Book_Appointment() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_w2tz7pq",
                "template_01zog81",
                form.current,
                "EdXRNM8cNDw_RJ_F8"
            )
            .then(
                () => {
                    alert("Appointment request sent successfully!");
                },
                () => {
                    alert("Something went wrong. Please try again.");
                }
            );
    };

    return (
        <>
            <Nav />
            <div className="max-w-4xl mx-auto py-10">
                <div className="bg-white rounded-lg border-2 border-orange-400 p-6 md:p-8 lg:p-10 shadow-lg">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <p className="text-[#b58b32] uppercase tracking-[0.2em] font-semibold">
                                Smyle Cuts
                            </p>

                            <h1 className="text-4xl font-bold text-gray-900 mt-2">
                                Book an Appointment
                            </h1>

                            <p className="text-gray-600 mt-3">
                                Schedule a fitting session or place an order for your perfect outfit.
                            </p>
                        </div>
                        {/* Personal Information Section */}
                        <div className="border-t border-gray-200 pt-6 space-y-6">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Customer Information
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label className="text-gray-700 font-medium block">
                                        Full Name:
                                    </label>
                                    <input
                                        type="text"
                                        name="full_name"
                                        placeholder="Enter your full name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 h-12 w-full rounded-md px-4 placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-colors"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-gray-700 font-medium block">
                                        Phone Number:
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter phone number"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 h-12 w-full rounded-md px-4 placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-gray-700 font-medium block">
                                    Email Address:
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter email address"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 h-12 w-full rounded-md px-4 placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        {/* Date and Time Row */}
                        <div className="grid md:grid-cols-2 gap-6 mt-6">

                            <div>
                                <label>Date</label>
                                <input
                                    type="date"
                                    name="appointment_date"
                                    className="w-full h-12 border rounded-lg px-4 mt-2"
                                />
                            </div>

                            <div>
                                <label>Time</label>
                                <input
                                    type="time"
                                    name="preferred_time"
                                    className="w-full h-12 border rounded-lg px-4 mt-2"
                                />
                            </div>

                        </div>
                        {/* Service Type and Passengers Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <label className="text-gray-700 font-medium block">
                                    Outfit Type:
                                </label>

                                <select
                                    name="outfit"
                                    className="bg-gray-50 border border-gray-300 h-12 w-full rounded-md px-4">
                                    <option>Select Outfit</option>
                                    <option>Senator Wear</option>
                                    <option>Agbada</option>
                                    <option>Ankara</option>
                                    <option>Suit</option>
                                    <option>Wedding Attire</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-gray-700 font-medium block">
                                    Occasion:
                                </label>

                                <select
                                    name="occasion"
                                    className="bg-gray-50 border border-gray-300 h-12 w-full rounded-md px-4">
                                    <option>Select Occasion</option>
                                    <option>Wedding</option>
                                    <option>Birthday</option>
                                    <option>Office Wear</option>
                                    <option>Traditional Ceremony</option>
                                    <option>Casual Wear</option>
                                </select>
                            </div>
                            <div className="border-t border-gray-200 pt-6 space-y-6">

                                <h3 className="text-lg font-semibold text-gray-800">
                                    Measurements
                                </h3>

                                <div className="grid md:grid-cols-3 gap-6">

                                    <div>
                                        <label>Chest (inches)</label>
                                        <input
                                            name='chest_measurement'
                                            type="number"
                                            className="w-full h-12 border rounded-md px-4"
                                        />
                                    </div>

                                    <div>
                                        <label>Waist (inches)</label>
                                        <input
                                            name='waist_measurement'
                                            type="number"
                                            className="w-full h-12 border rounded-md px-4"
                                        />
                                    </div>

                                    <div>
                                        <label>Length (inches)</label>
                                        <input
                                            name='length_measurement'
                                            type="number"
                                            className="w-full h-12 border rounded-md px-4"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-gray-700 font-medium">
                                    Additional Notes:
                                </label>

                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Tell us about your preferred style, fabric, color, or design..."
                                    className="w-full border rounded-md p-4"
                                ></textarea>
                            </div>
                        </div>


                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type='submit'
                                className="w-full  border-purple-500 focus:border-purple-500 hover:bg-purple-600 text-[#b58b32] font-semibold h-14 text-lg rounded-md transition-colors duration-200 shadow-md hover:shadow-lg">
                                Book Appointment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
