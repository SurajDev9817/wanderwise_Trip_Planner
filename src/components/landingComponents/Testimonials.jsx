import { Star, Quote } from "lucide-react";
 
const testimonials = [
  {
    name: "Amara Osei",
    location: "Traveled to Bali, Indonesia",
    initials: "AO",
    rating: 5,
    quote:
      "Wonderwise turned a stressful two-week trip into an effortless plan. Every recommendation felt like it came from a friend who actually knew the place.",
  },
  {
    name: "Daniel Cruz",
    location: "Traveled to Lisbon, Portugal",
    initials: "DC",
    rating: 5,
    quote:
      "I usually spend hours juggling tabs to plan a trip. This time I had a full itinerary in minutes, and it still felt personal, not generic.",
  },
  {
    name: "Priya Nair",
    location: "Traveled to Kyoto, Japan",
    initials: "PN",
    rating: 4,
    quote:
      "The day-by-day breakdown saved us so much back and forth. We actually got to enjoy the trip instead of planning it the whole time.",
  },
];
 
const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-teal-600 tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Loved by travelers everywhere
          </h2>
          <p className="mt-4 text-slate-600">
            Here's what people are saying about planning their trips with
            Wonderwise.
          </p>
        </div>
 
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-teal-500 mb-4" />
 
              <p className="text-slate-700 leading-relaxed flex-1">
                "{testimonial.quote}"
              </p>
 
              {/* Rating */}
              <div className="flex items-center gap-1 mt-6">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`w-4 h-4 ${
                      index < testimonial.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-slate-200 text-slate-200"
                    }`}
                  />
                ))}
              </div>
 
              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-slate-200">
                <div className="w-11 h-11 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-slate-500 text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Testimonials;