import React from 'react'
import Fashion2 from "../../assets/fashion4.png";
import Fashion from "../../assets/Smylelogo.jpeg";
import Fashion7 from "../../assets/fashion7.png"
import Fashion8 from "../../assets/fashion8.png"
import Fashion9 from "../../assets/fashion9.png"
import Nav from "../../Components/Header/Nav";
import { Link } from 'react-router';



export default function Body() {
  return (
    <div>
      <>
        <Nav />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Smyle Cutz</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        @keyframes float {\n            0%, 100% { transform: translateY(0); }\n            50% { transform: translateY(-10px); }\n        }\n        .floating { animation: float 6s ease-in-out infinite; }\n        .gradient-text {\n            background-clip: text;\n            -webkit-background-clip: text;\n            color: transparent;\n        }\n    "
          }}
        />
        {/* Hero Section */}
        <section className="relative bg-linear-to-br from-purple-900 via-indigo-800 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </div>
          <div className="container mx-auto px-6 py-24 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <p className='text-yellow-500 text-lg font-medium'>WELCOME TO SMYLE CUTZ</p>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Crafting Elegance{" "}
                  <span className="gradient-text bg-linear-to-r from-purple-400 to-yellow-500">
                    One Stitch at a Time
                  </span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-lg">
                  Custom-made outfits tailored with precision, passion and perfection for every occassion
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                 <Link to="/Book_Appointment">
                    <button className="bg-linear-to-r from-purple-800 to-yellow-500 text-white px-8 py-4 rounded-lg font-bold hover:from-pink-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg">
                    Book Appointment
                  </button>
                 </Link>
                 <Link to="/Collection">
                   <button className="bg-purple-500 cursor-pointer bg-linear-to-r bg-opacity-20 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-800 hover:to-yellow-500 transition-all border border-white border-opacity-30">
                    View Collection
                  </button>
                 </Link>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-30" />
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-30" />
                  {/* <img
              src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
              alt="Hero Image"
              className="relative z-10 w-full floating"
            /> */}
                  <img src={Fashion} alt="Fashion" className='relative z-10 w-full floating' />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-50 to-transparent" />
        </section>


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




        {/* Features Section  */}
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




        {/* Stats Section */}
        <section className="py-20 bg-linear-to-br from-indigo-600 to-purple-700 text-white">
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

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">
                SmyleCutz Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                What Our Clients Say
              </h2>
              <h5 className='text-4xl md:text:5xl font-bold text-purple-600 mt-4'>Trusted By Many</h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500 transform hover:scale-105 transition-all">
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Sarah J.</h4>
                    {/* <p className="text-blue-600">CEO, TechStart</p> */}
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  ""From the first consultation to the final fitting, the experience was seamless.
                  The attention to detail and quality exceeded my expectations. I'll definitely be coming back."
                </p>
                <div className="mt-4 text-yellow-400">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500 transform hover:scale-105 transition-all">
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Michael Chen"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Michael C.</h4>
                    {/* <p className="text-purple-600">Marketing Director</p> */}
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Mo fẹ́ràn iṣẹ́ yín gan-an. Aṣọ tí wọ́n rán fún mi jókòó lórí ara dáadáa, iṣẹ́ ọwọ́ sì mọ́ gan.
                  Gbogbo ènìyàn ń béèrè ibi tí mo ti rán aṣọ náà. Èmi yóò sì tún máa ṣe aṣọ níbí ní gbogbo ìgbà."
                </p>
                <div className="mt-4 text-yellow-400">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-pink-500 transform hover:scale-105 transition-all">
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Emma Rodriguez"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Emmanuel R.</h4>
                    {/* <p className="text-pink-600">Product Manager</p> */}
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The quality and attention to detail is unmatched I always gets compliments whenever i wear their clothes"
                </p>
                <div className="mt-4 text-yellow-400">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
         <section className="py-20 bg-linear-to-r  from-indigo-600 to-purple-700 text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Create Something Exceptional?
      </h2>
      <p className="max-w-2xl mx-auto text-blue-100 mb-8 text-xl">
        Let us craft an outfit specifically made for you.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link to="/Book_Appointment">
          <button className="bg-white text-purple-500 px-8 py-4 rounded-xl font-bold hover:bg-gray-100  transition-all transform hover:scale-105 shadow-lg">
          Book Appointment
        </button>
        </Link>
        {/* <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-purple-500 hover:bg-opacity-10 transition-all">
          View Designs
        </button> */}
      </div>
    </div>
  </section> 

        {/* Footer */}
         <footer className=" text-gray-400 py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-gray-400 text-lg font-semibold mb-4">Brand</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Our Craft
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Gallery
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-gray-400 text-lg font-semibold mb-4">Collections</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Agbada
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Senator Wear
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Native Wear
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Suits
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-gray-400 text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Smyle Cutz
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Measurements
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Alterations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Custom Designs
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-gray-400 text-lg font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              <i className="fab fa-youtube" />
            </a>
          </div>
          
          
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <a
            href="#"
            className="text-gray-400 text-2xl font-bold flex items-center"
          >
            <i className="fas fa-crown text-yellow-500 mr-2" /> SmyleCutz
          </a>
        </div>
        <div className="text-sm">© 2023 SmyleCutz. All rights reserved.</div>
      </div>
    </div>
  </footer> 
      </>

    </div>
  )
}
