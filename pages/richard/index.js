import Head from "next/head";
import { BiMenu } from "react-icons/bi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WithAdminAuth from "../../Components/Others/WithAdminAuth";
import AdminAmazon from "../../Components/Admin/Dashboard/Home/Amazon/Amazon";
import AdminBanner from "../../Components/Admin/Dashboard/Home/Banner/Banner";
import Sidebar from "../../Components/Admin/Dashboard/Others/Sidebar/Sidebar";
import AdminHowToPlaceAnOrder from "../../Components/Admin/Dashboard/Home/HowToPlaceAnOrder/HowToPlaceAnOrder";
import AdminWhyChooseVirtualExperts from "../../Components/Admin/Dashboard/Home/WhyChooseVirtualExperts/WhyChooseVirtualExperts";
import AdminTopThreeService from "../../Components/Admin/Dashboard/Home/TopThreeServices/TopThreeServices";
import { AiOutlineClose } from "react-icons/ai";
import AdminTestimonials from "../../Components/Admin/Dashboard/Home/Testimonials/Testimonials";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Virtual Experts | Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="overflow-hidden">
        <div className="row">
          <div className="col-12 col-md-2 d-none d-md-block">
            <Sidebar />
          </div>
          <div className="d-md-none col-12 mt-2 me-2">
            <BiMenu
              size={32}
              className="ms-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight3"
              aria-controls="offcanvasRight"
            />
            <div
             style={{backgroundColor:"#828B9A"}}
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasRight3"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <AiOutlineClose
                  size={32}
                  className="text-reset d-block ms-auto mt-2"
                  style={{ color: "#fff!important" }}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <Sidebar />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-10 py-4 vh-100 scroll">
            <AdminBanner />
            <AdminAmazon />
            <AdminWhyChooseVirtualExperts />
            <AdminTopThreeService />
            <AdminHowToPlaceAnOrder />
            <AdminTestimonials />
            {/* <ScheduleMeeting /> */}
            {/* <AdminFooter /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WithAdminAuth(Dashboard);

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
