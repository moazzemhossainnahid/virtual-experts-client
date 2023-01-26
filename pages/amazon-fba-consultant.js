import Head from "next/head";
import React from "react";
import AmazonFBAConsultant from "../Components/AmazonFBA/AmazonFBAConsultant";

const AmazonFBA = ({
  fbaData,
  fbad1Data,
  whyshouldhireData,
  fbaServiceData,
  metaAbout,
}) => {
  return (
    <>
      <Head>
        <title>
          {metaAbout.title
            ? `Virtual Experts |  ${metaAbout.title}`
            : "virtual Experts | Amazon FBA Consultant"}
        </title>
        <meta
          name="description"
          content={
            metaAbout.description
              ? ` ${metaAbout.description}`
              : "virtual Experts"
          }
        />
        <meta
          name="keyword"
          content="amazon fba consultant,
        amazon seo services,
        amazon seo consultant,
        amazon seo agency"
        />
      </Head>
      <AmazonFBAConsultant
        fbaData={fbaData}
        fbad1Data={fbad1Data}
        whyshouldhireData={whyshouldhireData}
        fbaServiceData={fbaServiceData}
      />
    </>
  );
};

export default AmazonFBA;

export async function getServerSideProps() {
  const fbaResponse = await fetch(
    "http://localhost:5000/amazonfba"
  );
  const fbaData = await fbaResponse.json();

  const fbad1Response = await fetch(
    "http://localhost:5000/fbadesc1"
  );
  const fbad1Data = await fbad1Response.json();

  const whyshouldhireResponse = await fetch(
    "http://localhost:5000/whyshouldhire"
  );
  const whyshouldhireData = await whyshouldhireResponse.json();

  const fbaServiceResponse = await fetch(
    "http://localhost:5000/fbaservice"
  );
  const fbaServiceData = await fbaServiceResponse.json();

  const resMetaAbout = await fetch(
    "http://localhost:5000/metaAbout"
  );
  const metaAbout = await resMetaAbout.json();

  return {
    props: {
      fbaData: fbaData[0],
      fbad1Data: fbad1Data[0],
      whyshouldhireData: whyshouldhireData,
      fbaServiceData: fbaServiceData,
      metaAbout: metaAbout[0],
    },
  };
}
