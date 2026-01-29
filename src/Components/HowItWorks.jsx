import { Search, BookOpen, PlusCircle, Star } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          How <span className="text-green-600">TasteTrail</span> Works
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Start your food journey in just a few simple steps.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Step 1 */}
          <div className="bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600">
              <Search size={28} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Explore Recipes</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Browse hundreds of delicious recipes from different cuisines.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600">
              <BookOpen size={28} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">View Details</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Check ingredients, cooking time, calories and instructions.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600">
              <PlusCircle size={28} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Add Your Recipe</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Share your own special recipes with the community.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600">
              <Star size={28} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Review & Plan</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Review recipes and build your personal meal planner.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;