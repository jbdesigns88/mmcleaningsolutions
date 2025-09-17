import { useState, useEffect } from "react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Homeowner",
    quote:
      "M&M Sanitation made my house sparkle! Their attention to detail is unmatched.",
  },
  {
    id: 2,
    name: "Michael Smith",
    role: "Business Owner",
    quote:
      "Reliable and professional service every single time. Highly recommend!",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Property Manager",
    quote:
      "Their team is amazing. My tenants always comment on how clean everything looks.",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto text-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 transition-all duration-700">
        <p className="text-lg italic mb-4">"{testimonials[currentIndex].quote}"</p>
        <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
        <span className="text-gray-500 text-sm">{testimonials[currentIndex].role}</span>
      </div>

      {/* dots */}
      <div id='testimonail-controls' className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "active" : "inactive"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
