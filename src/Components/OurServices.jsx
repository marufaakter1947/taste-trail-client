import { Utensils, CalendarCheck, Star, ShieldCheck } from "lucide-react";

const OurServices = () => {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our <span className="text-green-600">Services</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Everything you need to explore, manage, and enjoy recipes in one place.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Service 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600">
              <Utensils size={28} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Recipe Discovery</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Explore a wide range of recipes from different cuisines and categories.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600">
              <CalendarCheck size={28} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Meal Planning</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Organize your weekly meals easily with our smart meal planner.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600">
              <Star size={28} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Reviews & Ratings</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Share your experience and see what others think before cooking.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600">
              <ShieldCheck size={28} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Admin Moderation</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Safe and quality recipes ensured through admin review system.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurServices;