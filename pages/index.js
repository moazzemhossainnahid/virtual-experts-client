import Head from "next/head";
import Amazon from "../Components/Home/Amazon/Amazon";
import Banner from "../Components/Home/Banner/Banner";
import HowToPlaceAnOrder from "../Components/Home/HowToPlaceAnOrder/HowToPlaceAnOrder";
import TrustedPartners from "../Components/Home/Partners/TrustedPartners";
import TopAmazonClients from "../Components/Home/TopAmazonClients/TopAmazonClients";
import TopThreeServices from "../Components/Home/TopThreeServices/TopThreeServices";
import WhyChooseVirtualExperts from "../Components/Home/WhyChooseVirtualExperts/WhyChooseVirtualExperts";
import ScheduleMeeting from "../Components/ScheduleMeeting/ScheduleMeeting";

export const config = {
  unstable_runtimeJS: false
};

export default function Home({
  topServicesData,
  virtualServicesData,
  bannerData,
  headerInfoVirtualExpertsData,
  headerInfoTopServicesData,
  testimonials,
  amazonData,
  placeAnOrderListData,
  placeAnOrderData,
  footerLink,
  metaHome,
}) {
  return (
    <>
      <Head>
        <title>
          {metaHome.title
            ? `Virtual Experts |  ${metaHome.title}`
            : "virtual Experts | Home"}
        </title>
        {/* <title>Virtual Experts | Home</title> */}
        <meta
          name="description"
          content={
            metaHome.description
              ? ` ${metaHome.description}`
              : "virtual Experts"
          }
        />
        <meta
          name="keyword"
          content=
          {
            metaHome.keywords
              ? ` ${metaHome.keywords}`
              : "Amazon Marketing Service, amazon ppc, amazon seller feedback, amazon marketing strategy, amazon product review, amazon fba consultant, amazon seo agency, worst amazon reviews, amazon seo consultant, amazon seo services, amazon bad reviews, amazon negative review removal, listing optimization services"
          }
        />
      </Head>
      <main>
        <Banner bannerData={bannerData} footerLink={footerLink} />
        <Amazon amazonData={amazonData} />
        <WhyChooseVirtualExperts
          virtualServicesData={virtualServicesData}
          headerInfoVirtualExpertsData={headerInfoVirtualExpertsData}
        />
        <TopThreeServices
          topServicesData={topServicesData}
          headerInfoTopServicesData={headerInfoTopServicesData}
        />
        <TrustedPartners />
        <HowToPlaceAnOrder
          placeAnOrderData={placeAnOrderData}
          placeAnOrderListData={placeAnOrderListData}
        />
        <TopAmazonClients topclients={testimonials} />
        <ScheduleMeeting />
      </main>
    </>
  );
}
//top three services fetching
export async function getServerSideProps(context) {
  const resTopServices = await fetch(
    "https://virtual-experts-server.cyclic.app/topServices"
  );
  const topServicesData = await resTopServices.json();

  const resHeaderInfoTopServices = await fetch(
    "https://virtual-experts-server.cyclic.app/headerInfoTopServices"
  );
  const headerInfoTopServicesData = await resHeaderInfoTopServices.json();

  const resVirtualService = await fetch(
    "https://virtual-experts-server.cyclic.app/virtualService"
  );
  const virtualServicesData = await resVirtualService.json();

  const resHeaderInfoVirtualExperts = await fetch(
    "https://virtual-experts-server.cyclic.app/headerInfoVirtualExports"
  );
  const headerInfoVirtualExpertsData = await resHeaderInfoVirtualExperts.json();

  const resBanner = await fetch(
    "https://virtual-experts-server.cyclic.app/banner"
  );
  const bannerData = await resBanner.json();

  const resTestimonials = await fetch(
    "https://virtual-experts-server.cyclic.app/testimonials"
  );
  const testimonials = await resTestimonials.json();

  const resAmazon = await fetch(
    "https://virtual-experts-server.cyclic.app/amazon"
  );
  const amazonData = await resAmazon.json();

  const resPlaceAnOrderList = await fetch(
    "https://virtual-experts-server.cyclic.app/placeAnOrderList"
  );
  const placeAnOrderListData = await resPlaceAnOrderList.json();

  const resPlaceAnOrder = await fetch(
    "https://virtual-experts-server.cyclic.app/placeAnOrder"
  );
  const placeAnOrderData = await resPlaceAnOrder.json();

  const resFooter = await fetch(
    "https://virtual-experts-server.cyclic.app/footer"
  );
  const footerLink = await resFooter.json();

  const resMetaHome = await fetch(
    "https://virtual-experts-server.cyclic.app/metaHome"
  );
  const metaHome = await resMetaHome.json();

  return {
    props: {
      topServicesData,
      headerInfoTopServicesData,
      headerInfoVirtualExpertsData,
      virtualServicesData,
      bannerData,
      testimonials,
      amazonData,
      placeAnOrderListData,
      placeAnOrderData,
      footerLink,
      metaHome: metaHome[0],
    },
  };
}
