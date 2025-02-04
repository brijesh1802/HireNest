import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const JobInterviews = ({ companies }) => {
  return (
    <section className="py-16 bg-gray-100 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          🚀 Interview Questions By Company
        </h2>
        <p className="text-gray-300 text-center mt-2">
          Get ready for your next big opportunity with real company interview
          questions.
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:flex justify-center items-center mt-8">
          <div className="grid grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl flex items-center space-x-4 border border-gray-300 hover:scale-105 transition transform duration-300 cursor-pointer"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{company.name}</h3>
                  <p className="text-gray-300">📌 488 Interview Questions</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Slider */}
        <Swiper
          slidesPerView={1.2}
          spaceBetween={15}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="md:hidden mt-8"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl flex items-center space-x-4 border border-gray-300">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-14 h-14 P-3"
                />
                <div>
                  <h3 className="text-lg font-semibold">{company.name}</h3>
                  <p className="text-gray-300">📌 488 Interview Questions</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default JobInterviews;
