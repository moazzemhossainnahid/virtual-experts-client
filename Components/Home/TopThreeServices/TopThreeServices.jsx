import Image from "next/image";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import styles from "../../../styles/TopServices.module.css";


const TopThreeServices = ({ topServicesData, headerInfoTopServicesData }) => {
    return (
        <div className="container py-5">
            <div className="py-5">
                <h2 className={`${styles.title1} fs-24 roboto-font-family fw-400`} >
                    {headerInfoTopServicesData[0].title}
                </h2>
                <div className="row">
                    {topServicesData.map((service, index) => {
                        let imgType;
                        if (service.img.contentType === "image/svg+xml") {
                            imgType = "data:image/svg+xml";
                        } else if (service.img.contentType === "image/png") {
                            imgType = "data:image/png";
                        } else {
                            imgType = "data:image/jpg";
                        }
                        return (
                            <div
                                key={service._id}
                                className={`${styles.serviceCard} col-12 col-md-4 mx-auto p-4 mt-md-5`}
                            >
                                <div className="d-flex justify-content-center">
                                    {service.imgURL ? (
                                        <Image
                                            src={service.imgURL}
                                            title={service.alt}
                                            alt={service.alt}
                                            height="150"
                                            width="150"
                                        />
                                    ) : (
                                        <Image
                                            src={`${imgType} ; base64, ${service.img.img}`}
                                            alt="Loading..."
                                            height="150"
                                            width="150"
                                        />
                                    )}
                                </div>
                                <h3 className="text-center mt-5 font-family-roboto fs-18 fs-600 lh-28">
                                    {service.title}
                                </h3>
                                <p className="text-center fs-15 lh-30 mt-3 text-color ">
                                    {service.description}
                                </p>
                                <Link
                                    href="/order"
                                    className="text-center order-color d-block buttonLink px-3 fs-14">
                                    Order Now<RiArrowRightSLine />

                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <Link href="/services" className="button slide_right bg-white py-1 px-3">

                        <h4 className="d-inline font-family-roboto fs-14">
                            View all Amazon Services
                        </h4>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopThreeServices;