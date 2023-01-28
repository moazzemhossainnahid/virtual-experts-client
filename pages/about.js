import Head from "next/head";
import React from "react";
import AboutComponents from "../Components/About/About";
import ScheduleMeeting from "../Components/ScheduleMeeting/ScheduleMeeting";

const About = ({
  aboutData,
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
            : "virtual Experts | About"}
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
      <AboutComponents
        aboutData={aboutData}
        aboutTeamData={aboutTeamData}
        aboutUniquetData={aboutUniquetData}
        aboutUniquetListData={aboutUniquetListData}
        teams={teams}
      />
      {/* ===================================== */}
      <ScheduleMeeting />
    </>
  );
};

export default About;

export async function getServerSideProps() {
  const aboutResponse = await fetch(
    "http://localhost:5000/about"
  );
  const aboutData = await aboutResponse.json();

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
      aboutData: aboutData[0],
      aboutUniquetData: aboutUniquetData[0],
      aboutUniquetListData: aboutUniquetListData,
      aboutTeamData: aboutTeamData[0],
      teams,
      metaAbout: metaAbout[0],
    },
  };
}
