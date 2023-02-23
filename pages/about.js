import Head from "next/head";
import React from "react";
import AboutComponents from "../Components/About/About";
import ScheduleMeeting from "../Components/ScheduleMeeting/ScheduleMeeting";

const About = ({
  aboutData,
  aboutTeamData,
  aboutUniquetData,
  aboutUniquetListData,
  aboutMissionData,
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
          content=
          {
            metaAbout.keywords
              ? ` ${metaAbout.keywords}`
              : "amazon fba consultant, amazon seo services, amazon seo consultant, amazon seo agency"
          }
          
        />
      </Head>
      <AboutComponents
        aboutData={aboutData}
        aboutTeamData={aboutTeamData}
        aboutUniquetData={aboutUniquetData}
        aboutMissionData={aboutMissionData}
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
    "https://virtual-experts-server.cyclic.app/about"
  );
  const aboutData = await aboutResponse.json();

  const aboutUniqueResponse = await fetch(
    "https://virtual-experts-server.cyclic.app/aboutUnique"
  );
  const aboutUniquetData = await aboutUniqueResponse.json();

  const aboutMissionResponse = await fetch(
    "https://virtual-experts-server.cyclic.app/aboutMission"
  );
  const aboutMissionData = await aboutMissionResponse.json();

  const aboutUniqueListResponse = await fetch(
    "https://virtual-experts-server.cyclic.app/aboutUniqueList"
  );
  const aboutUniquetListData = await aboutUniqueListResponse.json();

  const aboutTeamResponse = await fetch(
    "https://virtual-experts-server.cyclic.app/aboutTeam"
  );
  const aboutTeamData = await aboutTeamResponse.json();

  const resTeams = await fetch("https://virtual-experts-server.cyclic.app/teams");
  const teams = await resTeams.json();

  const resMetaAbout = await fetch(
    "https://virtual-experts-server.cyclic.app/metaAbout"
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
