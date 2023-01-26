import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import amazonFBA from "../../Assets/Images/public/amazon-fba.svg";
import styles from "../../styles/About.module.css";
import SideLink from "../Home/banner/SideLink/SideLink";
import SectionTitle2 from "../Shared/SectionTitile/SectionTitile2";
import SectionTitle3 from "../Shared/SectionTitile/SectionTitle3";
import SectionTitle4 from "../Shared/SectionTitile/SectionTitle4";

const AmazonFBAConsultant = ({
  fbaData,
  fbad1Data,
  aboutTeamData,
  aboutUniquetData,
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

        <div className="container my-5">
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
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div>
                  {aboutUniquetListData.map((item, index) => (
                    <div key={item._id} className="d-flex fs-15 lh-30 mt-2">
                      <span className="me-2 numberBefore fw-500 text-dark">
                        {index + 1 > 9 ? index + 1 : ` 0${index + 1}`}
                      </span>
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-6 text-muted">
                <div>
                  {aboutUniquetListData.map((item, index = 11) => (
                    <div key={item._id} className="d-flex fs-15 lh-30 mt-2">
                      <span className="me-2 numberBefore fw-500 text-dark">
                        {index + 1 > 9 ? index + 1 : ` 0${index + 1}`}
                      </span>
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}

        <SectionTitle3/>
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
            {/* <div className="row">
              {servicesCardData.map((servicesCard) => {
                return (
                  <div
                    className="col-md-4 position-relative overflow-hidden serviceCard cursor-pointer my-4"
                    key={servicesCard._id}
                  >
                    <div className="card h-100 border-0 borderRadius overflow-hidden">
                      <div className="mx-1 bg-white p-3 h-100">
                        <h3 className="fs-16 mt-2 lh-26 font-family-popins fw-500">
                          {virtualService?.title}
                        </h3>
                        <p className="fs-15 lh-30">{virtualService?.description}</p>
                      </div>
                      <div className="position-absolute end-0 card-shape-bottom ">
                        <Image src={shape} alt="shape" height="120" width="120" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
        <SectionTitle4/>
        {/* ============================ */}
        {/* <ScheduleMeeting /> */}
      </section>
      <SideLink />
    </>
  );
};

export default AmazonFBAConsultant;
