import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiCloudLightRain, BiMenu } from "react-icons/bi";
import AdminUpdateBlog from "../../../Components/Admin/Dashboard/Blogs/AdminUpdateBlog/AdminUpdateBlog";
import Sidebar from "../../../Components/Admin/Dashboard/Others/Sidebar/Sidebar";


const BlogDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [blogsData, setBlogsData] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setShowSpinner(true);
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        // setBlogsData(data);
        const currentBlog = data.find((blog) => blog._id === id);
        // console.log(currentBlog)
        setBlogsData(currentBlog);

      });
  }, [id]);


  // const currentBlog = blogsData && blogsData?.find((blog) => blog.id === id);

  console.log(blogsData);

  return (
    <>
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

              {
                blogsData && <AdminUpdateBlog blogsData={blogsData} />
              }

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
