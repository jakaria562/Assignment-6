import React from 'react';

const Footer = () => {
    return (
        <div>
                <footer className="bg-[#0f1728] px-6 py-12 text-gray-300 md:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-5">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="mb-3 text-2xl font-bold text-white">
            DigiTools
          </h2>

          <p className="text-sm leading-6 text-gray-400">
            Premium digital tools for creators, professionals, and
            businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="mb-4 font-semibold text-white">Product</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Templates</a></li>
            <li><a href="#" className="hover:text-white">Integrations</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 font-semibold text-white">Company</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="mb-4 font-semibold text-white">Resources</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="mb-4 font-semibold text-white">Social Links</h3>

          <div className="flex gap-3">
            <a href="#" aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-bold text-[#0f1728] hover:bg-violet-400">
              f
            </a>

            <a href="#" aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-bold text-[#0f1728] hover:bg-violet-400">
              in
            </a>

            <a href="#" aria-label="X"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-bold text-[#0f1728] hover:bg-violet-400">
              X
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mx-auto mt-10 flex max-w-6xl flex-col justify-between gap-4 border-t border-gray-700 pt-5 text-xs text-gray-500 sm:flex-row">
        <p>© 2026 DigiTools. All rights reserved.</p>

        <div className="flex gap-5">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer> 
        </div>
    );
};

export default Footer;