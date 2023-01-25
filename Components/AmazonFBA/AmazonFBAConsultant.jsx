import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import amazonFBA from "../../Assets/Images/public/amazon-fba.svg";
import styles from "../../styles/About.module.css";
import SideLink from "../Home/banner/SideLink/SideLink";
import SectionTitle2 from "../Shared/SectionTitile/SectionTitile2";

const AmazonFBAConsultant = ({
  fbaData,
  aboutTeamData,
  aboutUniquetData,
  aboutUniquetListData,
  teams,
}) => {
  const router = useRouter();
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
          <SectionTitle2 title="An Amazon FBA Consultant can Provide a wipe range of services, including:" />
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
                  {aboutUniquetListData.map((item, index=11) => (
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

        <div className="container my-5">
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-7 text-center  mt-5 pt-3">
              <h2
                className={`${styles.title1} fs-24 roboto-font-family fw-400`}
              >
                {aboutTeamData?.title}
              </h2>
              <p className="text-muted fs-15 mt-3 mb-5 lh-30">
                {aboutTeamData?.discription}
              </p>
            </div>
          </div>
          <div className="row">
            {teams.map((team) => {
              let imgType;
              if (team.img.contentType === "image/svg+xml") {
                imgType = "data:image/svg+xml";
              } else if (team.img.contentType === "image/png") {
                imgType = "data:image/png";
              } else {
                imgType = "data:image/jpg";
              }
              return (
                <div className="col-12 col-md-4 text-center" key={team._id}>
                  <div className="m-3 p-2 cursor-pointer">
                    {team.imgURL ? (
                      <Image
                        src={team.imgURL}
                        alt={team.alt}
                        title={team.alt}
                        height="350"
                        width="300"
                        layout="responsive"
                        className="pb-1"
                      />
                    ) : (
                      <Image
                        src={`${imgType} ; base64, ${team.img.img}`}
                        alt="loading.."
                        height="350"
                        width="300"
                        layout="responsive"
                        className="pb-1"
                      />
                    )}
                    <div className={`${styles.name} mt-4`}>
                      <h6 className="fs-18 lh-26 fw-500">{team.name}</h6>
                      <p className="fs-15 lh-26">{team.jobTitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* ============================ */}
        {/* <ScheduleMeeting /> */}
      </section>
      <SideLink />
    </>
  );
};

export default AmazonFBAConsultant;
