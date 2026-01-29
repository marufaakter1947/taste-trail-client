import { Utensils, Users, Leaf, Target } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white">

      {/* Hero / Intro */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              About <span className="text-green-600">TasteTrail</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              TasteTrail is a modern recipe sharing platform built to connect food lovers,
              home cooks, and professional chefs in one simple and powerful space.
            </p>
            <p className="mt-3 text-gray-600">
              Our goal is to make discovering, sharing, and planning meals easier, faster,
              and more enjoyable for everyone.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://t3.ftcdn.net/jpg/05/88/38/88/240_F_588388858_dQCgiLncb8Yijqial32JuXjD8fNcxNNM.jpg"
              alt="About TasteTrail"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our <span className="text-green-600">Purpose</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Mission */}
            <div className="bg-green-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <Target className="mx-auto text-green-600" size={36} />
              <h3 className="mt-4 text-xl font-semibold">Our Mission</h3>
              <p className="mt-2 text-gray-600 text-sm">
                To simplify cooking by giving people easy access to reliable recipes
                and smart meal planning tools.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-green-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <Users className="mx-auto text-green-600" size={36} />
              <h3 className="mt-4 text-xl font-semibold">Our Vision</h3>
              <p className="mt-2 text-gray-600 text-sm">
                To build the world’s most loved community-driven recipe and meal planning platform.
              </p>
            </div>

            {/* Values */}
            <div className="bg-green-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <Leaf className="mx-auto text-green-600" size={36} />
              <h3 className="mt-4 text-xl font-semibold">Our Values</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Simplicity, quality, healthy living, and respect for diverse food cultures.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why TasteTrail */}
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Choose <span className="text-green-600">TasteTrail</span>?
            </h2>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✅ Discover unique and authentic recipes</li>
              <li>✅ Share your own cooking creativity</li>
              <li>✅ Plan meals and save time</li>
              <li>✅ Trusted and moderated community</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
              <Utensils className="mx-auto text-green-600" size={50} />
              <h3 className="mt-4 text-2xl font-semibold">Made for Food Lovers</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Whether you are a beginner or a professional chef, TasteTrail is your perfect kitchen partner.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;