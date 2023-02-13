import Head from "next/head";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminAddBlogs from "../../../Components/Admin/Dashboard/Blogs/AdminAddBlogs/AdminAddBlogs";
import AdminBlogCard from "../../../Components/Admin/Dashboard/Blogs/AdminServiceCard/AdminServiceCard";
import Sidebar from "../../../Components/Admin/Dashboard/Others/Sidebar/Sidebar";
import Spinner from "../../../Components/Others/Spinner";

const Blog = () => {
  const [blogsCardData, setBlogsCardData] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setShowSpinner(true);
    fetch("https://virtual-experts-server.cyclic.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogsCardData(data);
      });
  }, [number]);


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

          <div className="p-3 boxShadow bg-gray rounded me-4 mb-5">
            <AdminAddBlogs setNumber={setNumber} />
            {!showSpinner ? (
              <Spinner />
            ) : (
              <div className="row">
                {blogsCardData.map((blogsCard, index) => {
                  let imgType;
                  if (blogsCard.img.contentType === "image/svg+xml") {
                    imgType = "data:image/svg+xml";
                  } else if (blogsCard.img.contentType === "image/png") {
                    imgType = "data:image/png";
                  } else {
                    imgType = "data:image/jpg";
                  }
                  return (
                    <AdminBlogCard
                      key={blogsCard._id}
                      blogsCard={blogsCard}
                      imgType={imgType}
                      index={index}
                      blogsCardData={blogsCardData}
                      setBlogsCardData={setBlogsCardData}
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
                data-bs-target="#addBlogModal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
};

export default Blog;
