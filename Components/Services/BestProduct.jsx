import Image from "next/image";
import Link from "next/link";
import angle from "../../Assets/Images/others/Rectangle 266.svg";
import ring from "../../Assets/Images/service/Ellipse 261.svg";

const BestProduct = () => {



    return <>
        <div className="container col-11 position-relative my-5 pb-3">
            <div className="bg-white ring-title ">
                {/* <div style={{ height: '80px', backgroundColor: "#000000" }} className=" d-flex align-items-center  mb-3 text-center">
                    <h2 style={{ letterSpacing: '2px' }} className="text-light fw-bold text-uppercase fs-30">Our Top Selling Product</h2>
                </div> */}
                <div className="w-full d-none d-md-block shadow position-relative">
                    <div style={{ marginTop: "45px" }} className="d-flex justify-content-left align-items-center ">
                        <Image
                            style={{ zIndex: "5" }}
                            src={`https://i.ibb.co/gPPFLNS/no1.png`}
                            alt="no-1"
                            title="no-1"
                            width={50}
                            height={50}
                        />
                        <div style={{ backgroundImage: "url('https://i.ibb.co/3Tzr0bh/Seek-Png-com-orange-banner.png')", backgroundRepeat: "no-repeat", marginLeft: "-10px", zIndex: "1" }} className="px-3 py-1 fs-12 text-light">
                            Best Amazon FBA Service 2023
                        </div>
                    </div>
                    <div style={{ marginTop: "-50px" }} className="d-flex row justify-content-center align-items-center">
                        <div className="col-12 col-md-3 bg-white">
                            <Image
                                style={{}}
                                src={`https://i.ibb.co/DzfHjH3/fba.png`}
                                alt="amazon-fba-a-z-consultancy"
                                title="amazon-fba-a-z-consultancy"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="col-12 col-md-5 py-2 bg-white border">
                            <h3 className="fs-20 pb-3 text-center">AMAZON FBA (A-Z) CONSULTANCY!</h3>
                            <p className="fs-14 text-justify">{`Are you tired of struggling to make your Amazon business succeed? Let us help you take your business to the next level with our comprehensive Amazon FBA consultancy service package worth $3000. We'll handle everything from product and keyword research, and supplier sourcing to product manufacturing, packaging design, product listing, product photography, image design, shipment handling, and PPC management. Our professional team has nine years of experience in the Amazon FBA business, and we can reduce your workload and grow your brands on Amazon. Don't wait any longer, contact us today to take advantage of this unbeatable offer!`}</p>
                        </div>
                        <div className="col-12 col-md-3">
                            <p className="pt-3 pb-2 fw-bold text-center m-0 lh-26">
                                <span className="fs-40">$3000</span>
                            </p>
                            <p className="pb-5 fw-bold text-center m-0">
                                <span className="fs-14">All Service Included</span>
                            </p>
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
                    </div>
                </div>


                <div className="w-full d-block d-md-none shadow position-relative">
                    <div style={{ marginTop: "45px" }} className="d-flex justify-content-left align-items-center ">
                        <Image
                            style={{ zIndex: "5" }}
                            src={`https://i.ibb.co/gPPFLNS/no1.png`}
                            alt="no-1"
                            title="no-1"
                            width={50}
                            height={50}
                        />
                        <div style={{ backgroundImage: "url('https://i.ibb.co/3Tzr0bh/Seek-Png-com-orange-banner.png')", backgroundRepeat: "no-repeat", marginLeft: "-10px", zIndex: "1" }} className="px-3 py-1 fs-12 text-light">
                            Best Amazon FBA Service 2023
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center p-2">
                        <div className="bg-white p-3">
                            <Image
                                style={{}}
                                src={`https://i.ibb.co/DzfHjH3/fba.png`}
                                alt="amazon-fba-a-z-consultancy"
                                title="amazon-fba-a-z-consultancy"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="">
                            <h3 className="fs-20 pb-3 text-center">AMAZON FBA (A-Z) CONSULTANCY!</h3>
                            <p className="fs-14 text-justify">{`Are you tired of struggling to make your Amazon business succeed? Let us help you take your business to the next level with our comprehensive Amazon FBA consultancy service package worth $3000. We'll handle everything from product and keyword research, and supplier sourcing to product manufacturing, packaging design, product listing, product photography, image design, shipment handling, and PPC management. Our professional team has nine years of experience in the Amazon FBA business, and we can reduce your workload and grow your brands on Amazon. Don't wait any longer, contact us today to take advantage of this unbeatable offer!`}</p>
                        </div>
                        <div className="">
                            <p className="pt-3 pb-2 fw-bold text-center m-0 lh-26">
                                <span className="fs-40">$3000</span>
                            </p>
                            <p className="pb-5 fw-bold text-center m-0">
                                <span className="fs-14">All Service Included</span>
                            </p>
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
                    </div>
                </div>
            </div>
            <div className="ring d-none d-md-block">
                <Image src={ring} alt="angle" />
            </div>

            <div className="angle d-none d-md-block">
                <Image src={angle} alt="angle" />
            </div>

            <div className="ring-mobile-size d-md-none d-block">
                <Image src={ring} height={50} width={50} alt="ring" />
            </div>

            <div className="angle-mobile-size d-md-none d-block">
                <Image src={angle} height={50} width={50} alt="ring" />
            </div>
        </div>
    </>;
};

export default BestProduct;
