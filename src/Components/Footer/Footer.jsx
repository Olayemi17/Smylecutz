import React from 'react'

export default function Footer() {
  return (
    <div>
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
    </div>
  )
}
