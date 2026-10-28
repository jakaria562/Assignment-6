import React from 'react';

const Transform = () => {
    return (
        <div>
                <section className="bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-16 mt-25 text-center text-white md:py-20">
      <h2 className="mb-3 text-2xl font-bold md:text-3xl">
        Ready To Transform Your Workflow?
      </h2>

      <p className="mx-auto mb-6 max-w-lg text-sm leading-6 text-white/75">
        Join thousands of professionals who are already using DigiTools
        to work smarter.
        <br />
        Start your free trial today.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-violet-600 transition hover:bg-gray-100">
          Explore Products
        </button>

        <button className="rounded-full border border-white/60 px-5 py-2 text-sm transition hover:bg-white hover:text-violet-600">
          View Pricing
        </button>
      </div>

      <p className="mt-5 text-xs text-white/60">
        14-day free trial · No credit card required · Cancel anytime
      </p>
    </section>
        </div>
    );
};

export default Transform;