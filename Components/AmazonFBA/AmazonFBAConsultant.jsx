import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import amazonFBA from "../../Assets/Images/public/amazon-fba.svg";
import shape from "../../Assets/Images/others/dummy.png";
import styles from "../../styles/About.module.css";
import SectionTitle2 from "../Shared/SectionTitile/SectionTitile2";
import SectionTitle3 from "../Shared/SectionTitile/SectionTitle3";
import SectionTitle4 from "../Shared/SectionTitile/SectionTitle4";
import angle from "../../Assets/Images/others/Rectangle 266.svg";
import SideLink from "../Home/Banner/SideLink/SideLink";
// import ScheduleMeeting from "../ScheduleMeeting/ScheduleMeeting";


const AmazonFBAConsultant = ({
  fbaData,
  fbad1Data,
  whyshouldhireData,
  fbaServiceData,
  aboutUniquetListData,
  teams,
}) => {
  const router = useRouter();

  console.log(fbad1Data?.discription)
  return (
    <>
      <section className="overflow-hidden">
        <div className="background-color-skyblue">
          <div className="container d-md-flex justify-content-between align-items-center py-5">
            <h2 className="fs-30 lh-45 roboto-font-family fw-400">Amazon FBA Consultant</h2>
            <p className="fs-14">
              <span className="cursor-pointer" onClick={() => router.push("/")}>
                Home
              </span>{" "}
              <span className="text-warning mx-2">{`>`}</span>{" "}
              <span
                className="cursor-pointer"
                onClick={() => router.push("/fba")}
              >
                Amazon FBA Consultant
              </span>
            </p>
          </div>
        </div>

        {/* ================================= */}

        <div className="container">
          <div className="row py-5">
            <div className="col-md-6 order-2 order-md-1">
              <h2
                className={`${styles.title} fs-28 roboto-font-family lh-44 fw-400`}
              >
                {fbaData?.title}
              </h2>
              <p className="text-muted fs-15 lh-30 text-justify">
                {ReactHtmlParser(fbaData?.description_part_1)}
              </p>
              <p className="text-muted fs-15 lh-30 text-justify">
                {ReactHtmlParser(fbaData?.description_part_2)}
              </p>
            </div>
            <div className="col-md-6 text-center order-1 order-md-2 px-4">
              <Image
                src={amazonFBA}
                alt="amazon-fba-consultant-about-virtual-experts"
                title="amazon-fba-consultant-about-virtual-experts"
              />
            </div>
          </div>
        </div>

        {/* ================================= */}

        <div className="py-5">
          <div className="container my-5">
            <SectionTitle2 title="An Amazon FBA Consultant can Provide a wipe range of services, including:" isBgWhite={true} />
            <div className="row">
              <div className="col-md-6 d-flex justify-content-left justify-content-md-center align-items-center">
                <div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      01
                    </span>
                    <p>{fbaServiceData[0]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      02
                    </span>
                    <p>{fbaServiceData[1]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      03
                    </span>
                    <p>{fbaServiceData[2]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      04
                    </span>
                    <p>{fbaServiceData[3]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      05
                    </span>
                    <p>{fbaServiceData[4]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      06
                    </span>
                    <p>{fbaServiceData[5]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      07
                    </span>
                    <p>{fbaServiceData[6]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      08
                    </span>
                    <p>{fbaServiceData[7]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      09
                    </span>
                    <p>{fbaServiceData[8]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      10
                    </span>
                    <p>{fbaServiceData[9]?.title}</p>
                  </div>

                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-left justify-content-md-center align-items-center">
              <div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      11
                    </span>
                    <p>{fbaServiceData[10]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      12
                    </span>
                    <p>{fbaServiceData[11]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      13
                    </span>
                    <p>{fbaServiceData[12]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      14
                    </span>
                    <p>{fbaServiceData[13]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      15
                    </span>
                    <p>{fbaServiceData[14]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      16
                    </span>
                    <p>{fbaServiceData[15]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      17
                    </span>
                    <p>{fbaServiceData[16]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      18
                    </span>
                    <p>{fbaServiceData[17]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      19
                    </span>
                    <p>{fbaServiceData[18]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      20
                    </span>
                    <p>{fbaServiceData[19]?.title}</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}

        <SectionTitle3 />
        {/* ========================================= */}

        <div style={{ backgroundColor: "#F5F8FE" }}>
          <div className="container my-5">
            <div className="d-flex justify-content-center align-items-center">
              <div className="col-12 text-center  mt-5 pt-3">
                <SectionTitle2 title="Why you should hire an Amazon FBA Consultant for your Amazon Marketing Service?" isBgWhite={true} />
                <p className="text-muted fs-15 mt-3 mb-5 lh-30">
                  Hiring an Amazon FBA consultant for your Amazon Marketing Service (AMS) can provide several benefits for your business:
                </p>
              </div>
            </div>
            <div className="row">
              {whyshouldhireData?.map((servicesCard) => {
                return (
                  <div
                    className="col-md-6 position-relative serviceCard cursor-pointer my-4"
                    key={servicesCard._id}
                  >
                    <div className="angle3 d-none d-md-block">
                      <Image src={angle} alt="angle" />
                    </div>
                    <div className="card position-relative h-100 border-0 overflow-hidden">
                      <div className="mx-1 bg-white p-3 h-100">
                        <h3 className="title2 fs-16 mt-2 lh-26 font-family-popins fw-500">
                          {servicesCard?.title}
                        </h3>
                        <p className="fs-15 mt-3 lh-30">{servicesCard?.description}</p>
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
        <SectionTitle4 />
      </section>
      <SideLink />
    </>
  );
};

export default AmazonFBAConsultant;
