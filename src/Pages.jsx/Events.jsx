import { Calendar, Clock, Users, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Family Dinner Party",
    date: "2026-02-10",
    time: "19:00",
    location: "Dhaka, Bangladesh",
    guests: 15
  },
  {
    id: 2,
    title: "Cooking Workshop",
    date: "2026-02-15",
    time: "14:00",
    location: "Chittagong, Bangladesh",
    guests: 25
  },
  {
    id: 3,
    title: "Birthday Celebration",
    date: "2026-02-20",
    time: "17:00",
    location: "Sylhet, Bangladesh",
    guests: 10
  }
];

const Events = () => {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Upcoming <span className="text-green-600">Events</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Join exciting cooking events, workshops, and special celebrations curated by TasteTrail.
          </p>
        </div>
      </section>

      {/* Event List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {events.map(event => (
            <div
              key={event.id}
              className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
              <div className="mt-3 space-y-2 text-gray-600 text-sm">

                <p className="flex items-center gap-2">
                  <Calendar size={18} /> {event.date}
                </p>

                <p className="flex items-center gap-2">
                  <Clock size={18} /> {event.time}
                </p>

                <p className="flex items-center gap-2">
                  <MapPin size={18} /> {event.location}
                </p>

                <p className="flex items-center gap-2">
                  <Users size={18} /> {event.guests} Guests
                </p>

              </div>
              <button className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
                Join Event
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Events;