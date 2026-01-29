import { 
  Utensils, 
  CalendarCheck, 
  Star, 
  ShieldCheck, 
  UploadCloud, 
  Search 
} from "lucide-react";

const Services = () => {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our <span className="text-green-600">Services</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            TasteTrail provides powerful features to explore recipes, share ideas,
            and manage your meals smarter.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <ServiceCard 
            icon={<Search size={28} />}
            title="Recipe Discovery"
            desc="Find thousands of recipes from different cuisines with smart search and filters."
          />

          <ServiceCard 
            icon={<Utensils size={28} />}
            title="Detailed Cooking Guides"
            desc="View ingredients, steps, cooking time, and nutrition in one clean interface."
          />

          <ServiceCard 
            icon={<UploadCloud size={28} />}
            title="Add & Share Recipes"
            desc="Upload your own recipes and inspire others with your cooking creativity."
          />

          <ServiceCard 
            icon={<Star size={28} />}
            title="Reviews & Ratings"
            desc="Rate recipes and read community feedback before you start cooking."
          />

          <ServiceCard 
            icon={<CalendarCheck size={28} />}
            title="Meal Planning"
            desc="Plan your weekly meals and organize your food routine easily."
          />

          <ServiceCard 
            icon={<ShieldCheck size={28} />}
            title="Admin Moderation"
            desc="Quality and safety ensured through admin review and approval system."
          />

        </div>
      </section>

      {/* Extra Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Smart services for <span className="text-green-600">food lovers</span>
            </h2>
            <p className="mt-4 text-gray-600">
              TasteTrail is not just a recipe app. It's a complete food management
              platform designed to save time, improve cooking skills, and build
              a trusted food community.
            </p>

            <ul className="mt-5 space-y-2 text-gray-600">
              <li>✅ Beginner friendly</li>
              <li>✅ Community powered</li>
              <li>✅ Secure and moderated</li>
              <li>✅ Modern and responsive UI</li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold">All-in-one Food Platform</h3>
            <p className="mt-3 text-gray-600 text-sm">
              Cook smarter, eat better, and share your passion with TasteTrail.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-green-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
      <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  );
};

export default Services;