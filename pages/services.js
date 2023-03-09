import Head from "next/head";
import React from "react";
import ScheduleMeeting from "../Components/ScheduleMeeting/ScheduleMeeting";
import ServicesComponents from "../Components/Services/Services";


const Services = ({
  servicesCardData,
  whatWeDo,
  serviceCardHeader,
  metaService,
}) => {
  return (
    <>
      <Head>
        <title>
          {metaService.title
            ? `Virtual Experts |  ${metaService.title}`
            : "virtual Experts | Service"}
        </title>
        <meta
          name="description"
          content={
            metaService.description
              ? ` ${metaService.description}`
              : "virtual Experts"
          }
        />
        <meta
          name="keyword"
          content=
          {
            metaService.keywords
              ? ` ${metaService.keywords}`
              : "Amazon Marketing Services, amazon seller feedback, amazon product review, amazon seo, amazon fba consultant, amazonseo services, amazonsearch engine optimization, amazonseo consultant, amazon seo agency, worst amazon reviews, amazon bad reviews, amazon fba consulting services, listing optimization services, amazon negative review removal, how to remove bad reviews on amazon"
          }
          
        />
      </Head>
      <ServicesComponents whatWeDo={whatWeDo} servicesCardData={servicesCardData} serviceCardHeader={serviceCardHeader} />
      {/* ===================================== */}
      <ScheduleMeeting />
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    "https://virtual-experts-server.cyclic.app/servicesCard"
  );
  const servicesCardData = await res.json();

  const whatWeDoRes = await fetch(
    "https://virtual-experts-server.cyclic.app/whatWeDo"
  );
  const whatWeDo = await whatWeDoRes.json();

  const serviceCardHeaderRes = await fetch(
    "https://virtual-experts-server.cyclic.app/serviceCardHeader"
  );
  const serviceCardHeader = await serviceCardHeaderRes.json();

  const resMetaService = await fetch(
    "https://virtual-experts-server.cyclic.app/metaService"
  );
  const metaService = await resMetaService.json();

  return {
    props: {
      servicesCardData,
      whatWeDo,
      serviceCardHeader,
      metaService: metaService[0],
    },
  };
}

export default Services;
