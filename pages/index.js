import Head from "next/head";
import Amazon from "../Components/Home/Amazon/Amazon";
import Banner from "../Components/Home/banner/banner";
import WhyChooseVirtualExperts from "../Components/Home/WhyChooseVirtualExperts/WhyChooseVirtualExperts";

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
          content="Amazon Marketing Service,
        amazon ppc,
        amazon seller feedback,
        amazon marketing strategy ,
        amazon product review,
        amazon fba consultant,
        amazon seo agency,
        worst amazon reviews,
        amazon seo consultant,
        amazon seo services,
        amazon bad reviews,
        amazon negative review removal,
        listing optimization services"
        />
      </Head>
      <main>
        <Banner bannerData={bannerData} footerLink={footerLink} />
        <Amazon amazonData={amazonData} />
        {/* <WhyChooseVirtualExperts
          virtualServicesData={virtualServicesData}
          headerInfoVirtualExpertsData={headerInfoVirtualExpertsData}
        /> */}

        {/* <TopServices
          topServicesData={topServicesData}
          headerInfoTopServicesData={headerInfoTopServicesData}
        /> */}
        {/* <HowToPlaceAnOrder
          placeAnOrderData={placeAnOrderData}
          placeAnOrderListData={placeAnOrderListData}
        /> */}
        {/* <Testimonial testimonials={testimonials} /> */}
        {/* <ScheduleMeeting /> */}
      </main>
    </>
  );
}
//top three services fetching
export async function getServerSideProps(context) {
  const resTopServices = await fetch(
    "http://localhost:5000/topServices"
  );
  const topServicesData = await resTopServices.json();

  const resHeaderInfoTopServices = await fetch(
    "http://localhost:5000/headerInfoTopServices"
  );
  const headerInfoTopServicesData = await resHeaderInfoTopServices.json();

  const resVirtualService = await fetch(
    "http://localhost:5000/virtualService"
  );
  const virtualServicesData = await resVirtualService.json();

  const resHeaderInfoVirtualExperts = await fetch(
    "http://localhost:5000/headerInfoVirtualExports"
  );
  const headerInfoVirtualExpertsData = await resHeaderInfoVirtualExperts.json();

  const resBanner = await fetch(
    "http://localhost:5000/banner"
  );
  const bannerData = await resBanner.json();

  const resTestimonials = await fetch(
    "http://localhost:5000/testimonials"
  );
  const testimonials = await resTestimonials.json();

  const resAmazon = await fetch(
    "http://localhost:5000/amazon"
  );
  const amazonData = await resAmazon.json();

  const resPlaceAnOrderList = await fetch(
    "http://localhost:5000/placeAnOrderList"
  );
  const placeAnOrderListData = await resPlaceAnOrderList.json();

  const resPlaceAnOrder = await fetch(
    "http://localhost:5000/placeAnOrder"
  );
  const placeAnOrderData = await resPlaceAnOrder.json();

  const resFooter = await fetch(
    "http://localhost:5000/footer"
  );
  const footerLink = await resFooter.json();

  const resMetaHome = await fetch(
    "http://localhost:5000/metaHome"
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
