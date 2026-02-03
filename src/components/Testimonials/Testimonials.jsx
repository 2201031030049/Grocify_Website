import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-350 mx-auto px-10 py-20">
        <Heading highlight="Customer" header="Sayings" />

        <div className="flex justify-end py-5 mt-5 gap-x-3">
          <button
            className="flex custom-prev text-zinc-800 text-2xl rounded-lg w-11 h-11 justify-center
                items-center bg-zinc-100 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500
                 hover:text-white cursor-pointer"
          >
            <IoIosArrowBack />
          </button>
          <button
            className="flex custom-next text-zinc-800 text-2xl rounded-lg w-11 h-11 justify-center
                items-center bg-zinc-100 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500
                 hover:text-white cursor-pointer"
          >
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper 
        navigation={{
          prevEl: ".custom-prev", 
          nextEl: ".custom-next"
        }}
        loop={true}
        breakpoints={{
          640: {slidesPerView: 1, spaceBetween: 20},
          768: {slidesPerView: 2, spaceBetween: 20},
          1024: {slidesPerView: 3, spaceBetween: 20},
        }} 
        modules={[Navigation]} className="mySwiper">
          {reviews.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 p-8 rounded-xl">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full outline-2 bg-red-500 outline-orange-500 outline-offset-4 overflow-hidden">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex mt-2">
                      {Array.from({ length: item.rating }, (_, i) => (
                        <span key={i} className="text-yellow-400"><FaStar/></span>
                      ))}
                    </span>
                  </div>
                </div>

                <div className="mt-10 min-h-25">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const reviews = [
  {
    id: 1,
    name: "Lisa johnson",
    profession: "Software Engineer",
    rating: 5,
    para: "it was a great experience shopping with Grocify. The website is user-friendly, and the delivery was prompt. Highly recommend!",
    image: Customer1,
  },
  {
    id: 2,
    name: "Jane Smith",
    profession: "Food Blogger",
    rating: 4,
    para: "I love the variety of products available on Grocify. The quality is consistently high, and the prices are very competitive.",
    image: Customer2,
  },
  {
    id: 3,
    name: "Ellyse Perry",
    profession: "Marketing Manager",
    rating: 4,
    para: "The customer service is excellent. They responded quickly to my queries and resolved all issues efficiently.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Michael Brown",
    profession: "Teacher",
    rating: 4,
    para: "I was impressed by the fast delivery and the quality of the products. Everything was exactly as described.",
    image: Customer4,
  },
  {
    id: 5,
    name: "Sarah Williams",
    profession: "Content Creator",
    rating: 5,
    para: "I was very satisfied with my purchase. The products were fresh and of high quality. Will definitely shop here again!",
    image: Customer5,
  },
];
