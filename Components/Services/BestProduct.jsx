import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

const BestProduct = () => {



    return <>
        <div className="container my-5 pb-3 px-md-5">
            <div className="background-color-skyblue borderRadius">
                <div style={{ height: '80px', backgroundColor: "#000000" }} className=" d-flex align-items-center justify-content-center col-12 mx-auto mb-3 text-center">
                    <h2 style={{ letterSpacing: '2px' }} className="text-light fw-bold text-uppercase fs-30">Our Top Selling Product</h2>
                </div>
                <div className="w-full position-relative">
                    <div style={{ marginTop: "-30px" }} className="d-flex justify-content-left align-items-center ">
                        <Image
                            style={{ zIndex: "5" }}
                            src={`https://i.ibb.co/gPPFLNS/no1.png`}
                            alt="no-1"
                            title="no-1"
                            width={50}
                            height={50}
                        />
                        <div style={{ backgroundImage: "url('https://i.ibb.co/3Tzr0bh/Seek-Png-com-orange-banner.png')", backgroundRepeat: "no-repeat", marginLeft: "-10px", zIndex: "1" }} className="px-3 py-1 text-light">
                            Best in Test 2023
                        </div>
                    </div>
                    <div style={{marginTop:"-30px"}} className="d-flex flex-column flex-md-row row justify-content-center bg-warning align-items-center">
                        <div className="col-12 col-md-3 bg-danger">
                            <h2 className="">hey there</h2>
                        </div>
                        <div className="col-12 col-md-6 bg-dark">
                            <h2 className="">hey there</h2>
                        </div>
                        <div className="col-12 col-md-3 bg-info">
                            <h2 className="">hey there</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default BestProduct;
