import Head from "next/head";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../../Components/Admin/Dashboard/Others/Sidebar/Sidebar";
import AdminServiceBanner from "../../Components/Admin/Dashboard/Services/AdminServiceBanner/AdminServiceBanner";
import Spinner from "../../Components/Others/Spinner";
import WithAdminAuth from "../../Components/Others/WithAdminAuth";

const Service = () => {
  const [serviceBanner, setServiceBanner] = useState({});
  const [servicesCardData, setServicesCardData] = useState([]);
  const [serviceCardHeader, setServiceCardHeader] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setShowSpinner(true);
    fetch("http://localhost:5000/whatWeDo")
      .then((res) => res.json())
      .then((data) => setServiceBanner(data));

    fetch("http://localhost:5000/serviceCardHeader")
      .then((res) => res.json())
      .then((data) => setServiceCardHeader(data));

    fetch("http://localhost:5000/servicesCard")
      .then((res) => res.json())
      .then((data) => {
        setServicesCardData(data);
      });
    setServiceBanner(false);
  }, [number]);
  return (
    <>
      <Head>
        <title>Virtual Experts | Admin-Service</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="overflow-hidden">
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
        <div className="row">
          <div className="col-12 col-md-2 d-none d-md-block">
            <Sidebar />
          </div>
          <div className="d-md-none col-12 mt-2 me-2">
            <BiMenu
              size={32}
              className="ms-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight4"
              aria-controls="offcanvasRight"
            />
            <div
              className="offcanvas offcanvas-start bg-dark"
              tabIndex="-1"
              id="offcanvasRight4"
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
          <div className="col-12 col-md-10 container pt-5 vh-100 scroll">
            <div className="p-3 boxShadow me-4 mb-5">
              <AdminServiceBanner
                serviceBanner={serviceBanner}
                setNumber={setNumber}
              />
            </div>

            {/* <div className="p-3 boxShadow me-4 mb-5">
              <ServiceCardHeader
                serviceCardHeader={serviceCardHeader}
                setNumber={setNumber}
              />
            </div> */}

            {/* <div className="p-3 boxShadow me-4 mb-5">
              <AdminAddServices setNumber={setNumber} />
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WithAdminAuth(Service);

Service.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
