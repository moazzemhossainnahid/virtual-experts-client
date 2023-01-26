import Head from "next/head";
import React from "react";
import AmazonFBAConsultant from "../Components/AmazonFBA/AmazonFBAConsultant";

const AmazonFBA = ({
  fbaData,
  fbad1Data,
  whyshouldhireData,
  aboutTeamData,
  aboutUniquetData,
  aboutUniquetListData,
  teams,
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
        aboutTeamData={aboutTeamData}
        aboutUniquetData={aboutUniquetData}
        aboutUniquetListData={aboutUniquetListData}
        teams={teams}
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

  const aboutUniqueResponse = await fetch(
    "http://localhost:5000/aboutUnique"
  );
  const aboutUniquetData = await aboutUniqueResponse.json();

  const aboutUniqueListResponse = await fetch(
    "http://localhost:5000/aboutUniqueList"
  );
  const aboutUniquetListData = await aboutUniqueListResponse.json();

  const aboutTeamResponse = await fetch(
    "http://localhost:5000/aboutTeam"
  );
  const aboutTeamData = await aboutTeamResponse.json();

  const resTeams = await fetch("http://localhost:5000/teams");
  const teams = await resTeams.json();

  const resMetaAbout = await fetch(
    "http://localhost:5000/metaAbout"
  );
  const metaAbout = await resMetaAbout.json();

  return {
    props: {
      fbaData: fbaData[0],
      fbad1Data: fbad1Data[0],
      whyshouldhireData: whyshouldhireData,
      aboutUniquetData: aboutUniquetData[0],
      aboutUniquetListData: aboutUniquetListData,
      aboutTeamData: aboutTeamData[0],
      teams,
      metaAbout: metaAbout[0],
    },
  };
}
