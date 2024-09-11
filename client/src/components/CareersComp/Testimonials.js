import React, { useState } from "react";
import { testimonials } from "../../InformationFiles/CareersInfo";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    const visibleIndices = [
      (currentIndex - 1 + testimonials.length) % testimonials.length,
      currentIndex,
      (currentIndex + 1) % testimonials.length,
    ];
    return visibleIndices.map((index) => testimonials[index]);
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">

        {/* <div className="relative mb-10">
          <h2
            className="text-[8rem] font-bold text-gray-300 absolute inset-0 flex items-center justify-center tracking-wide hidden md:flex"
            aria-hidden="true"
          >
            Thinkers
          </h2>
          <h2 className="text-5xl font-bold text-gray-900 relative z-10">
            Speak
          </h2>
        </div> */}
        <h1 className="text-center text-5xl font-bold mb-4">Thinker's Speak</h1>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-4"></div>
        <p className="text-lg text-orange-500 font-semibold mb-3 relative z-10">
          What our employees have to say
        </p>

        <div className="flex justify-center items-center space-x-4">
          <button onClick={prevTestimonial} className="text-3xl">
            &lt;
          </button>
          <div className="flex justify-center items-center space-x-4 md:flex-row flex-col">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white p-6 rounded-lg shadow-lg ${
                  index === 1 ? "md:scale-110 z-10" : "md:scale-90 md:blur-[1px]"
                } transition-all duration-600 hover:scale-105 hover:shadow-2xl mb-4 md:mb-0`}
                style={{ width: "300px", maxWidth: "100%" }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mr-4"
                  />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-2 text-left">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
          <button onClick={nextTestimonial} className="text-3xl">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
