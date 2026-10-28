import React from 'react';

const StatsSection = () => {
    return (
        <div>
             <section className="w-full px-0 py-10">
      <div className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-8 text-white shadow-lg">
        <div className="grid grid-cols-3 text-center">

          <div className="border-r border-white/20">
            <h2 className="text-2xl font-bold md:text-3xl">
              50K+
            </h2>
            <p className="mt-1 text-xs text-purple-100 md:text-sm">
              Active Users
            </p>
          </div>

          <div className="border-r border-white/20">
            <h2 className="text-2xl font-bold md:text-3xl">
              200+
            </h2>
            <p className="mt-1 text-xs text-purple-100 md:text-sm">
              Premium Tools
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              4.9
            </h2>
            <p className="mt-1 text-xs text-purple-100 md:text-sm">
              Rating
            </p>
          </div>

        </div>
      </div>
    </section>
        </div>
    );
};

export default StatsSection;