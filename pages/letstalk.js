import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
// import LetsTalk from "../Components/LetsTalk/LetsTalk";

const LetsTalk = dynamic(() => import('../Components/LetsTalk/LetsTalk'));

const LetsTalks = ({ footerData, metaLetsTalk }) => {
  return (
    <>
      <Head>
        <title>
          {metaLetsTalk.title
            ? `Virtual Experts |  ${metaLetsTalk.title}`
            : "virtual Experts | Let's Talk"}
        </title>
        {/* <title>Virtual Experts | Let&apos;s Talk</title> */}
        <meta
          name="description"
          content={
            metaLetsTalk.description
              ? ` ${metaLetsTalk.description}`
              : "virtual Experts"
          }
        />
      </Head>
      <LetsTalk footerData={footerData} />
    </>
  );
};

export default LetsTalks;

export async function getServerSideProps() {
  const res = await fetch("https://virtual-experts-server.cyclic.app/footer");
  const footerData = await res.json();

  const resmetaLetsTalk = await fetch(
    "https://virtual-experts-server.cyclic.app/metaLetsTalk"
  );
  const metaLetsTalk = await resmetaLetsTalk.json();

  return {
    props: {
      footerData,
      metaLetsTalk: metaLetsTalk[0],
    },
  };
}
