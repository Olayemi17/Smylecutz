import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";
import Nav from "../../Components/Header/Nav";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Footer from "../../Components/Footer/Footer";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                },
                () => {
                    alert("Something went wrong. Please try again.");
                }
            );
    };
    return (
        <>
            <Nav />
            <div className="bg-[#f8f6f1] min-h-screen">

                {/* Hero Section */}
                <section className="bg-black text-white py-24 px-6 text-center">
                    <p className="text-[#b58b32] uppercase tracking-[0.3em] text-sm mb-4">
                        Get In Touch
                    </p>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold">
                        Contact Us
                    </h1>

                    <p className="max-w-2xl mx-auto mt-6 text-gray-300 text-lg">
                        Have a question about our designs, fabrics, or tailoring services?
                        We would love to hear from you.
                    </p>
                </section>


                {/* Contact Information + Form */}
                <section className="max-w-6xl mx-auto px-6 py-20">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

                        {/* Left Side */}
                        <div>

                            <p className="text-[#b58b32] uppercase tracking-widest text-sm font-semibold">
                                Let's Talk
                            </p>

                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-3">
                                We’re Here To Help
                            </h2>

                            <p className="text-gray-600 mt-5 leading-7">
                                Whether you need help choosing a design, selecting the perfect
                                fabric, or have a question about your order, feel free to reach
                                out to us.
                            </p>


                            {/* Phone */}
                            <div className="flex items-center gap-5 mt-10">
                                <div className="w-12 h-12 rounded-full bg-black text-[#b58b32] flex items-center justify-center">
                                    <FaPhone />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Call Us</p>
                                    <p className="font-semibold text-gray-900">
                                        +234 704 502 1843
                                    </p>
                                </div>
                            </div>


                            {/* WhatsApp */}
                            <div className="flex items-center gap-5 mt-6">


                                <div>
                                    <a
                                        href="https://wa.me/2347045021843?text=Hello%2C%20SMYLE%20would%20like%20to%20make%20an%20inquiry%20about%20your%20tailoring%20services."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-black text-[#b58b32] flex items-center justify-center">
                                            <FaWhatsapp />
                                        </div>


                                        <div>
                                            <p className="text-sm text-gray-500">WhatsApp</p>
                                            <p className="font-semibold">Chat with us</p>
                                        </div>
                                    </a>
                                </div>
                            </div>


                            {/* Email */}
                            <div className="flex items-center gap-5 mt-6">
                                <div className="w-12 h-12 rounded-full bg-black text-[#b58b32] flex items-center justify-center">
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-semibold text-gray-900">
                                        mustaphaolayiwola866@gmail.com
                                    </p>
                                </div>
                            </div>


                            {/* Location */}
                            <div className="flex items-center gap-5 mt-6">
                                <div className="w-12 h-12 rounded-full bg-black text-[#b58b32] flex items-center justify-center">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Visit Our Studio</p>
                                    <p className="font-semibold text-gray-900">
                                        1,Kasali Street,Meiran,Lagos Nigeria
                                    </p>
                                </div>
                            </div>


                            {/* Business Hours */}
                            <div className="mt-10 border-t border-gray-300 pt-7">
                                <h3 className="font-serif text-xl font-bold text-gray-900">
                                    Opening Hours
                                </h3>

                                <div className="mt-4 text-gray-600 space-y-2">
                                    <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                                    <p>Saturday: 10:00 AM – 6:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>

                        </div>


                        {/* Right Side - Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">

                            <h2 className="text-2xl font-serif font-bold text-gray-900">
                                Send Us A Message
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Fill out the form below and we'll get back to you.
                            </p>

                            <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-5">

                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        name="full_name"
                                        placeholder="Enter your full name"
                                        className="w-full h-12 px-4 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#b58b32]"
                                    />
                                </div>


                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="w-full h-12 px-4 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#b58b32]"
                                    />
                                </div>


                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        className="w-full h-12 px-4 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#b58b32]"
                                    />
                                </div>


                                {/* Subject */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>

                                    <select
                                        name="subject"

                                        className="w-full h-12 px-4 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#b58b32]"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="General Inquiry">
                                            General Inquiry
                                        </option>
                                        <option value="Custom Design">
                                            Custom Design
                                        </option>
                                        <option value="Fabric Inquiry">
                                            Fabric Inquiry
                                        </option>
                                        <option value="Order Inquiry">
                                            Order Inquiry
                                        </option>
                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </div>


                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Message
                                    </label>

                                    <textarea
                                        name="message"
                                        rows="5"
                                        placeholder="Write your message here..."
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#b58b32]"
                                    ></textarea>
                                </div>


                                {/* Button */}
                                <button
                                    type="submit"
                                    className="w-full h-14 bg-black hover:bg-[#b58b32] text-white font-semibold rounded-md transition-colors duration-300"
                                >
                                    Send Message
                                </button>

                            </form>
                        </div>

                    </div>
                </section>


                {/* CTA */}
                <section className="bg-black text-white py-20 px-6 text-center">

                    <p className="text-[#b58b32] uppercase tracking-widest text-sm">
                        Ready To Create?
                    </p>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3">
                        Let's Create Something Exceptional
                    </h2>

                    <p className="text-gray-400 max-w-xl mx-auto mt-4">
                        From traditional Nigerian wear to modern suits, let us create
                        something that fits your style perfectly.
                    </p>

                    <Link
                        to="/Book_Appointment"
                        className="inline-block mt-8 px-8 py-4 bg-[#b58b32] hover:bg-[#9a7528] text-white font-semibold rounded-md transition"
                    >
                        Book An Appointment
                    </Link>

                </section>

                <section className="max-w-6xl mx-auto px-6 pb-20">

                    <div className="mb-8">
                        <p className="text-[#b58b32] uppercase tracking-widest text-sm">
                            Find Us
                        </p>

                        <h2 className="text-3xl font-serif font-bold mt-2">
                            Visit Our Studio
                        </h2>

                        <p className="text-gray-600 mt-3">
                            Come visit us and let's bring your next outfit to life.
                        </p>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.979636091447!2d3.2712710728396517!3d6.649445521691398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b90b3f283747f%3A0x8dad8798b1764c38!2sKasali%20St%2C%20Abule%20Egba%2C%20Abule-Egba%2FAboru%2FMeiran%2FAlagbado%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1789323107002!5m2!1sen!2sng"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Our Studio Location"
                        ></iframe>
                    </div>

                </section>
            </div>
            <Footer />
        </>
    );
}

export default Contact;