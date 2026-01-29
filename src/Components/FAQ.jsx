import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is TasteTrail?",
    a: "TasteTrail is a recipe-sharing platform where you can explore recipes, add your own, review dishes, and plan meals easily."
  },
  {
    q: "Is TasteTrail free to use?",
    a: "Yes, TasteTrail is completely free. You can browse recipes and create an account to add or review recipes."
  },
  {
    q: "Can I add my own recipes?",
    a: "Absolutely! After logging in, you can add your own recipes and share them with the community."
  },
  {
    q: "How does the meal planner work?",
    a: "The meal planner helps you organize recipes for different days so you can easily manage your weekly meals."
  },
  {
    q: "Are recipes verified?",
    a: "Yes, recipes go through an admin review process to ensure quality and safety."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Frequently Asked <span className="text-green-600">Questions</span>
        </h2>
        <p className="mt-3 text-center text-gray-600">
          Find answers to the most common questions about TasteTrail.
        </p>

        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-green-100 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 bg-green-50 hover:bg-green-100 transition"
              >
                {item.q}
                <ChevronDown
                  className={`transition ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="p-4 text-gray-600 bg-white">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;