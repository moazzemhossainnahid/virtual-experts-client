import Head from "next/head";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLeads from "../../Components/Admin/Dashboard/Others/Leads/Leads";
import Sidebar from "../../Components/Admin/Dashboard/Others/Sidebar/Sidebar";
import WithAdminAuth from "../../Components/Others/WithAdminAuth";


const Leads = () => {
  return (
    <>
      <Head>
        <title>Virtual Experts | Admin-Leads</title>
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
            <AdminLeads/>

          </div>
        </div>
      </section>
    </>
  );
};

export default WithAdminAuth(Leads);

Leads.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
