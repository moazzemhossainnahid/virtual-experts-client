import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PartnersData } from '../../../Data/PartnersData';
import Image from 'next/image';
import SectionTitle2 from '../../Shared/SectionTitile/SectionTitile2';
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
                    charset="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
                />
                <Slider className='' {...settings}>
                    {
                        PartnersData.map((item, idx) => {
                            return (

                                <div key={idx} className="py-10 h-40 flex justify-center items-center gap-5">
                                    <Image
                                        style={{ filter: "grayscale(100%)" }}
                                        className='w-40 md:w-52 flex justify-center items-center h-30 py-5 px-7'
                                        src={item?.imageURL}
                                        title={item?.alt}
                                        alt={item?.alt}
                                        height="150"
                                        width="150"
                                    />
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