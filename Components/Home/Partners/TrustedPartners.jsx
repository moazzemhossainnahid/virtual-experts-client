import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PartnersData } from '../../../Data/PartnersData';
import Image from 'next/image';
import SectionTitle from '../../Shared/SectionTitile/SectionTitile';

const TrustedPartners = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="flex justify-center items-center w-full mx-auto bg-slate-200 ">

      <SectionTitle title="The Brands we have worked with" isBgWhite={true} />

      <div className="w-full max-w-7xl mx-auto">
        <link
          rel="stylesheet"
          type="text/css"
          charet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
        <Slider className='' {...settings}>
          {
            PartnersData.map((item) => {
              return (
                <div key={item.alt} className="py-10 d-flex justify-content-center align-items-center gap-5">
                  <div style={{ position: 'relative', width: '150px', height: '150px', }} className="d-flex justify-content-center mx-auto">
                    <Image
                      style={{ filter: "grayscale(100%)", objectFit: 'cover' }}
                      className='d-flex justify-content-center align-items-center py-5 px-7'
                      src={item?.imageURL}
                      title={item?.alt}
                      alt={item?.alt}
                      fill={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>

              )
            })
          }
        </Slider>

      </div>
    </div>
  );
};

export default TrustedPartners;