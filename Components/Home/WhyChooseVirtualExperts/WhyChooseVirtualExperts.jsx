import Image from "next/image";
import ReactHtmlParser from "react-html-parser";
import SectionTitle2 from "../../Shared/SectionTitile/SectionTitile2";

const WhyChooseVirtualExperts = ({ virtualServicesData, headerInfoVirtualExpertsData }) => {

  return (
    <section className="py-5 background-color-skyblue">
      <div className="container">
      <SectionTitle2 title={headerInfoVirtualExpertsData[0].title} isBgWhite={true} />

        {/* <h2 className={`title1 fs-24 roboto-font-family fw-400`} >
          {headerInfoVirtualExpertsData[0].title}
        </h2> */}

        <p className="col-12 col-md-11 text-justify mx-auto fs-14 pt-3 lh-26">
          {headerInfoVirtualExpertsData[0].description_part_1}
        </p>
        <p className="col-12 col-md-11 mx-auto fs-14 pt-3 lh-26 text-justify">
          {ReactHtmlParser(headerInfoVirtualExpertsData[0].description_part_2)}
        </p>
        <div className="row mt-1">
          {virtualServicesData.map((virtualService) => {
            let imgType;
            if (virtualService?.img?.contentType === "image/svg+xml") {
              imgType = "data:image/svg+xml";
            } else if (virtualService?.img?.contentType === "image/png") {
              imgType = "data:image/png";
            } else {
              imgType = "data:image/jpg";
            }
            return (
              <div className="col-12 my-3 col-md-4 hoverable " key={virtualService._id}>
                <div className="mx-1 bg-white p-3 h-100">
                  <div className="d-flex justify-content-left">
                    {virtualService?.imgURL ? (
                      <Image
                        src={virtualService?.imgURL}
                        title={virtualService?.alt}
                        alt={virtualService?.alt}
                        height="60"
                        width="60"
                      />
                    ) : (
                      <Image
                        src={`${imgType} ; base64, ${virtualService?.img?.img}`}
                        title={virtualService?.alt}
                        alt={virtualService?.alt}
                        height="60"
                        width="60"
                      />
                    )}
                  </div>
                  <h3 className="fs-16 mt-2 lh-26 font-family-popins fw-500">
                    {virtualService?.title}
                  </h3>
                  <p className="fs-15 lh-30">{ReactHtmlParser(virtualService?.description)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVirtualExperts;
