import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="bg-linear-to-r from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Discover Flavors with <span className="text-green-600">TasteTrail</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Explore, share, and enjoy delicious recipes from around the world. 
            Your journey to amazing taste starts here.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
to="/dashboard/recipes"
className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
>
Explore Recipes
</Link>


<Link
to="/dashboard/add-recipe"
className="px-6 py-3 border border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition"
>
Add Recipe
</Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Delicious food"
            className="w-full max-w-md drop-shadow-xl rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;