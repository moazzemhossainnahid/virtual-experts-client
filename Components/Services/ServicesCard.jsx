import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import shape from "../../Assets/Images/others/dummy.png";
import SectionTitle from "../Shared/SectionTitile/SectionTitile";

const ServicesCard = ({ servicesCardData, serviceCardHeader }) => {
    const router = useRouter();
    return <>
        <div className="background-color-skyblue py-5">
            <SectionTitle title={serviceCardHeader?.title} />
            <div className="container">
                <div className="row">
                    {servicesCardData.map((servicesCard) => {
                        let imgType;
                        if (servicesCard.img.contentType === "image/svg+xml") {
                            imgType = "data:image/svg+xml";
                        } else if (servicesCard.img.contentType === "image/png") {
                            imgType = "data:image/png";
                        } else {
                            imgType = "data:image/jpg";
                        }

                        return (
                            <div
                                className="col-md-4 position-relative overflow-hidden serviceCard cursor-pointer my-4"
                                key={servicesCard._id}
                            >
                                <div className="card h-100 border-0 borderRadius overflow-hidden">
                                    <div className="d-flex justify-content-center background-color-skyblue overflow-hidden ">
                                        {servicesCard.img ? (
                                            <Image
                                                src={`${imgType} ; base64, ${servicesCard.img.img}`}
                                                alt={servicesCard.imgAlt}
                                                title={servicesCard.imgTitle}
                                                width={200}
                                                height={200}
                                            />

                                        ) : (
                                            <Image
                                                src={servicesCard.imgURL}
                                                alt={servicesCard.imgAlt}
                                                title={servicesCard.imgTitle}
                                                width={200}
                                                height={200}
                                            />
                                        )}
                                    </div>
                                    <div className="card-body">
                                        <div style={{ height: "300px" }} className="">
                                            <h3 style={{ height: "50px" }} className="fs-18 text-uppercase text-center lh-28 mb-4 fw-bold roboto-font-family fw-normal h-">
                                                {servicesCard.title}
                                            </h3>

                                            <p style={{ height: "140px" }} className="fs-12 lh-22 font-medium m-0 text-justify">
                                                {servicesCard.subTitle}
                                            </p>
                                            {/* {servicesCard.regularReview && (
                                                <p className="fs-14 m-0 lh-26">
                                                    Regular Review : ${servicesCard.regularReview} each
                                                </p>
                                            )} */}
                                            {servicesCard.price && (
                                                <p className="pt-3 fw-bold text-center m-0 lh-26">
                                                    <span className="fs-40">${servicesCard.price}</span>
                                                </p>
                                            )}
                                            {/* {servicesCard.crn && <sub className="text-xs"><span className="text-xs">/</span> {servicesCard.crn}</sub> */}
                                            {servicesCard.crn && (
                                                <p className="pb-2 fw-bold text-center m-0">
                                                    <span className="fs-14">{servicesCard.crn}</span>
                                                </p>
                                            )}
                                            {/* {servicesCard.videoReview && (
                                                <p className="fs-14 m-0 lh-26">
                                                    Video Review : ${servicesCard.videoReview} each
                                                </p>
                                            )} */}
                                            {/* {servicesCard.top50Reviewers && (
                                                <p className="fs-14 m-0 lh-26">
                                                    Top 50 Reviewers : ${servicesCard.top50Reviewers} each
                                                </p>
                                            )} */}

                                            {/* {servicesCard.crn && (
                                                <p className="fs-14 m-0 lh-26">
                                                    Cronology : {servicesCard.crn}
                                                </p>
                                            )} */}
                                            {/* {servicesCard.delivery && (
                                                <p className="fs-14 m-0 lh-26">
                                                    Delivery : {servicesCard.delivery} days
                                                </p>
                                            )} */}
                                            {/* {servicesCard.warranty && (
                                                <p className="fs-14 lh-26">
                                                    Warranty : {servicesCard.warranty}
                                                </p>
                                            )} */}
                                            {/* {servicesCard.maintenance && (
                                                <p className="fs-14 lh-26">
                                                    Maintenence : ${servicesCard.maintenance} per month
                                                </p>
                                            )} */}
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <Link href="/order" scroll>

                                                <button
                                                    className="button px-4 py-1 slide_right mt-3"
                                                    style={{
                                                        padding: "5px 20px",
                                                        backgroundColor: "white",
                                                    }}
                                                >
                                                    <h6 className="fs-14 d-inline">Order Now</h6>
                                                </button>

                                            </Link>
                                        </div>
                                    </div>
                                    <div className="position-absolute end-0 card-shape-bottom ">
                                        <Image src={shape} alt="shape" height="120" width="120" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </>;
};

export default ServicesCard;
