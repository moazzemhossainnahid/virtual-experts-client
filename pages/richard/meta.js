import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "../../Components/Admin/Dashboard/Meta/About";
import Blog from "../../Components/Admin/Dashboard/Meta/Blog";
import FBA from "../../Components/Admin/Dashboard/Meta/FBA";
import Home from "../../Components/Admin/Dashboard/Meta/Home";
import LetsTalk from "../../Components/Admin/Dashboard/Meta/LetsTalk";
import Service from "../../Components/Admin/Dashboard/Meta/Service";
import Sidebar from "../../Components/Admin/Dashboard/Others/Sidebar/Sidebar";

const Meta = () => {
  const [number, setNumber] = useState(0);
  const [homeData, setHomeData] = useState({});
  const [fbaData, setFBAData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [serviceData, setServiceData] = useState({});
  const [blogData, setBlogData] = useState({});
  const [letsTalkData, setletsTalkData] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/metaHome")
      .then((res) => res.json())
      .then((data) => setHomeData(data[0]));

    fetch("http://localhost:5000/metaFBA")
      .then((res) => res.json())
      .then((data) => setFBAData(data[0]));

    fetch("http://localhost:5000/metaAbout")
      .then((res) => res.json())
      .then((data) => setAboutData(data[0]));

    fetch("http://localhost:5000/metaService")
      .then((res) => res.json())
      .then((data) => setServiceData(data[0]));

    fetch("http://localhost:5000/metaBlog")
      .then((res) => res.json())
      .then((data) => setBlogData(data[0]));

    fetch("http://localhost:5000/metaLetsTalk")
      .then((res) => res.json())
      .then((data) => setletsTalkData(data[0]));
  }, [number]);
  return (
    <>
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
              className="offcanvas offcanvas-start bg-dark"
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
            <Home setNumber={setNumber} homeData={homeData} />
            <FBA setNumber={setNumber} fbaData={fbaData} />
            <Service setNumber={setNumber} serviceData={serviceData} />
            <About setNumber={setNumber} aboutData={aboutData} />
            <Blog setNumber={setNumber} blogData={blogData} />
            <LetsTalk setNumber={setNumber} letsTalkData={letsTalkData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Meta;
