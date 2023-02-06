import Head from "next/head";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminAddBlogs from "../../Components/Admin/Dashboard/Blogs/AdminAddBlogs/AdminAddBlogs";
import Sidebar from "../../Components/Admin/Dashboard/Others/Sidebar/Sidebar";
import WithAdminAuth from "../../Components/Others/WithAdminAuth";


const Blog = () => {
  return (
    <>
      <Head>
        <title>Virtual Experts | Admin-Blog</title>
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
              data-bs-target="#offcanvasRight2"
              aria-controls="offcanvasRight"
            />
            <div
              className="offcanvas offcanvas-start bg-gray3"
              tabIndex="-1"
              id="offcanvasRight2"
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
          <div className="col-12 col-md-10 scroll vh-100">
            {/* <AdminWhoAreVirtualExperts />
            <AdminWhyWeAreUnique />
            <AdminTeamSection />
            <AdminTeams /> */}
            <div className="p-3 boxShadow bg-gray rounded me-4 mb-5">
              <AdminAddBlogs setNumber={setNumber} />
              {!showSpinner ? (
                <Spinner />
              ) : (
                <div className="row">
                  {servicesCardData.map((servicesCard, index) => {
                    let imgType;
                    if (servicesCard.img.contentType === "image/svg+xml") {
                      imgType = "data:image/svg+xml";
                    } else if (servicesCard.img.contentType === "image/png") {
                      imgType = "data:image/png";
                    } else {
                      imgType = "data:image/jpg";
                    }
                    return (
                      <AdminServiceCard
                        key={servicesCard._id}
                        servicesCard={servicesCard}
                        imgType={imgType}
                        index={index}
                        servicesCardData={servicesCardData}
                        setServicesCardData={setServicesCardData}
                        setNumber={setNumber}
                      />
                    );
                  })}
                </div>
              )}
              <div className="d-flex justify-content-end">
                <GoPlus
                  size={30}
                  className="text-warning bg-dark rounded-circle p-1 cursor-pointer "
                  data-bs-toggle="modal"
                  data-bs-target="#addServiceModal"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WithAdminAuth(Blog);

Blog.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
