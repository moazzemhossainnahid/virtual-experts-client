import Image from "next/image";
import { useEffect, useState } from "react";
import quoteIcon from "../../../Assets/Images/others/icon.svg";
import SectionTitle2 from "../../Shared/SectionTitile/SectionTitile2";

const TopAmazonClients = ({ topclients }) => {
    const [number, setNumber] = useState(0);

    const [currentTestimonials, setCurrentTestimonial] = useState(
        topclients[number]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            if (number >= topclients.length - 1) {
                setNumber(0);
                setCurrentTestimonial(topclients[number]);
            } else {
                setNumber(number + 1);
                setCurrentTestimonial(topclients[number]);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [number, topclients.length, topclients]);

    const handleChange = (id) => {
        setCurrentTestimonial(topclients[id]);
    };

    let imgType;
    if (currentTestimonials.img.contentType === "image/svg+xml") {
        imgType = "data:image/svg+xml";
    } else if (currentTestimonials.img.contentType === "image/png") {
        imgType = "data:image/png";
    } else {
        imgType = "data:image/jpg";
    }

    return (
        <section>
            <div className="container py-5">
                {/* <h2 className={`title1 fs-24 roboto-font-family fw-400`} >
                    Our Top Amazon Clients
                </h2> */}
                <SectionTitle2 title="Our TOP Amazon FBA Clients Feedback" isBgWhite={true} />

                <div className="col-12 col-md-7 boxShadow mx-auto mb-3 mt-5 position-relative">
                    <div className="position-absolute left-38">
                        <Image src={quoteIcon} alt="quoteIcon" height="80" width="80" />
                    </div>
                    <div className="p-2 p-md-5 text-center">
                        <Image
                            src={`${imgType} ; base64, ${currentTestimonials?.img.img}`}
                            alt="Loading..."
                            width="70"
                            height="70"
                            className="rounded-circle borderColor"
                        />
                        <p className="fst-italic my-3 fs-14 lh-32">
                            “{currentTestimonials.review}”
                        </p>
                        <h3 className="fw-bold fs-18 font-family-roboto lh-26">
                            {currentTestimonials.name}
                        </h3>
                        <p className="fs-14 lh-26">{currentTestimonials.jobTitle}</p>
                    </div>
                    <div className="position-absolute right-38 d-flex flex-md-column">
                        {topclients.map((data, index) => {
                            let imgType;
                            if (data.img.contentType === "image/svg+xml") {
                                imgType = "data:image/svg+xml";
                            } else if (data.img.contentType === "image/png") {
                                imgType = "data:image/png";
                            } else {
                                imgType = "data:image/jpg";
                            }
                            return (
                                <div
                                    key={data._id}
                                    className="cursor-pointer mx-1"
                                    onClick={() => handleChange(index)}
                                >
                                    {currentTestimonials._id === data._id ? (
                                        <Image
                                            src={`${imgType} ; base64, ${data.img.img}`}
                                            alt="Loading..."
                                            height="30"
                                            width="30"
                                            className="rounded-circle border border-warning"
                                        />
                                    ) : (
                                        <Image
                                            src={`${imgType} ; base64, ${data.img.img}`}
                                            alt="Loading..."
                                            height="24"
                                            width="24"
                                            className="rounded-circle border border-warning"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopAmazonClients;