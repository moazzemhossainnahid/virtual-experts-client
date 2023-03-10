import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import ReactHtmlParser from "react-html-parser";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import cardHeaderBg from "../../Assets/Images/others/Group 157.svg";
import cardHeaderImg from "../../Assets/Images/others/v-logo.svg";
// import SideLink from "../../Components/Home/Banner/SideLink/SideLink";
import { BlogData } from "../../Data/BlogData";

const SideLink = dynamic(() => import('../../Components/Home/Banner/SideLink/SideLink'));


const Blog = ({metaBlog}) => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [txt, setTxt] = useState("");
  const [blogsCardData, setBlogsCardData] = useState([]);
  // const [verfied, setVerifed] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    fetch("https://virtual-experts-server.cyclic.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogsCardData(data);
      });
  }, [number]);

    
    //recaptcha function
    // function onChange(value) {
    //   console.log("Captcha value:", value);
    //   setVerifed(true);
    // }

  const onSubmit = async (data) => {
    const Info = {
      name: data.name,
      email: data.email,
      productlink: data.productlink,
      description: txt,
    };

    console.log(Info)

    const res = await fetch("https://virtual-experts-server.cyclic.app/leads/post", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Info),
    });
    if (res.status === 200) {
      const msgTemplate = {
        service_id: "service_rluy6hk",
        template_id: "template_4errde5",
        user_id: "seFfSonT2U8bIGJ8J",
        template_params: Info,
      };

      fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(msgTemplate),
      })
        .then((res) => res.json())
        .then((data) => { });
      reset();
      return swal("Thank You", "Lead Place Successfully.", "success");
    }
  };


  const onInputChange = e => {
    const { value } = e.target;
    console.log('Input value: ', value);

    const re = /^[A-Za-z. ]+(?:[ .-][A-Za-z]+)*$/;
    if (value === "" || re.test(value)) {
      setTxt(value);
    }
  };


  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>
          {metaBlog.title
            ? `Virtual Experts |  ${metaBlog.title}`
            : "virtual Experts | Blog"}
        </title>
        <meta
          name="description"
          content={
            metaBlog.description
              ? ` ${metaBlog.description}`
              : "virtual Experts"
          }
        />
        <meta
          name="keyword"
          content=
          {
            metaBlog.keywords
              ? ` ${metaBlog.keywords}`
              : "Amazon Marketing Services, amazon seller feedback, amazon product review, amazon seo, amazon fba consultant, amazonseo services, amazonsearch engine optimization, amazonseo consultant, amazon seo agency, worst amazon reviews, amazon bad reviews, amazon fba consulting services, listing optimization services, amazon negative review removal, how to remove bad reviews on amazon"
          }
          
        />
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
      <div className="background-color-skyblue">
        <div className="container d-md-flex justify-content-between align-items-center py-5">
          <h6 className="fs-30 roboto-font-family fw-400">Blog</h6>
          <p className="fs-14">
            <span className="cursor-pointer" onClick={() => router.push("/")}>
              Home
            </span>{" "}
            <span className="text-warning mx-2">{`>`}</span>{" "}
            <span
              className="cursor-pointer"
              onClick={() => router.push("/blog")}
            >
              Blog
            </span>
          </p>
        </div>
      </div>
      <SideLink />

      <div className="container mt-5">
        <div className="row ">
          {/* divide two main columns */}
          <div className="col-md-8 mb-md-5">
            <div className="row">
              {BlogData?.map((blog) => (
                <div
                  className="col-12 col-md-6 my-2 cursor-pointer"
                  key={blog.id}
                  onClick={() => router.push(`/blog/${blog.id}`)}
                >
                  <div className="mx-1 boxShadow borderRadius h-100">
                    <Image
                      src={blog.img}
                      title={blog.imgAlt}
                      alt={blog.imgAlt}
                      width="200"
                      height="150"
                      layout="responsive"
                      className="rounded-3"
                    />
                    <div className="d-flex align-items-center justify-content-evenly mt-2 ">
                      <p style={{ fontSize: "14px" }}>
                        {" "}
                        <FaUser className="me-1" /> {blog.writerName}
                      </p>
                      <p style={{ fontSize: "14px" }}>
                        {" "}
                        <AiOutlineClockCircle className="me-1" />{" "}
                        {blog.publishedDate}
                      </p>
                      {/* <p style={{ fontSize: "14px" }}>
                        {" "}
                        <BiMessageRounded className="me-1" /> {blog.view}
                      </p> */}
                    </div>
                    <div className="px-3 mb-3">
                      <h3 className="fs-18 lh-36 m-0">{blog.title}</h3>
                      <p className="fs-14 lh-36 m-0">
                        {ReactHtmlParser(blog.cardDescription)}
                      </p>
                      <button
                        className="fs-14 my-2 px-3 py-2 d-inline-block mb-3 btn btn-orange btn-outline-warning"
                        onClick={() => router.push(`/blog/${blog.id}`)}
                      >
                        See More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {blogsCardData?.map((blog) => {
                let imgType;
                if (blog.img.contentType === "image/svg+xml") {
                  imgType = "data:image/svg+xml";
                } else if (blog.img.contentType === "image/png") {
                  imgType = "data:image/png";
                } else {
                  imgType = "data:image/jpg";
                }
                var date = new Date(blog?.createdAt);
                var original_date = date.toLocaleString('default', { month: 'long' }) + " " + date.getDate() + "," + " " + date.getFullYear();
                console.log(blog.description.slice(100, 500))
                return (
                  <div
                    className="col-12 col-md-6 my-2 cursor-pointer"
                    key={blog._id}
                    onClick={() => router.push(`/blog/${blog._id}`)}
                  >
                    <div className="mx-1 boxShadow borderRadius h-100">
                      {blog.img && (
                        <div style={{ height: "200px", overflow: "hidden" }} className="">
                          <Image
                            src={`${imgType} ; base64, ${blog.img.img}`}
                            title={blog.imgAlt}
                            alt={blog.imgAlt}
                            width="200"
                            height="150"
                            layout="responsive"
                            className="rounded-3"
                          />
                        </div>

                      )}
                      <div className="d-flex align-items-center justify-content-evenly mt-2 ">
                        <p style={{ fontSize: "14px" }}>
                          {" "}
                          <FaUser className="me-1" /> {blog.writerName}
                        </p>
                        <p style={{ fontSize: "14px" }}>
                          {" "}
                          <AiOutlineClockCircle className="me-1" />{" "}
                          {original_date}
                        </p>

                      </div>
                      <div className="px-3 mb-3">
                        <h3 className="fs-18 lh-36 m-0">{blog.title}</h3>
                        <p className="fs-14 lh-36 m-0">
                          {ReactHtmlParser(blog.cardDescription)}...
                        </p>
                        <button
                          className="fs-14 my-2 px-3 py-2 d-inline-block mb-3 btn btn-orange btn-outline-warning"
                          onClick={() => router.push(`/blog/${blog._id}`)}
                        >
                          See More
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ========================================================================================== */}
          {/* main 2nd col */}
          <div className="col-md-4 mt-2">
            <div className="boxShadow">
              <div className="position-relative">
                <div className="w-full overflow-hidden mx-auto rounded">
                  <Image className="" src={cardHeaderBg} alt="header" />
                </div>
                <div className="cardHeaderImg">
                  <Image
                    src={cardHeaderImg}
                    className="mt-2 p-2"
                    alt="cardImage"
                  />
                </div>
              </div>

              <div className="card-body mx-auto bg-white borderRadius">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mx-md-2 mx-0"
                >
                  <div className="my-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name/Brand Name"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <p className="fs-14 text-danger">Name Required</p>
                    )}
                  </div>

                  <div className="my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <p className="fs-14 text-danger">Email Required</p>
                    )}
                  </div>

                  <div className="my-3">
                    <input
                      type="text"
                      name="productLink/ASIN"
                      placeholder="Product Link/ASIN"
                      {...register("productlink", { required: true })}
                      className="form-control mt-3"
                    />
                    {errors.productLinkOrASIN && (
                      <p className="fs-14 text-danger">
                        Product Link/ASIN Required
                      </p>
                    )}
                  </div>

                  <div className="my-3">
                    <textarea
                      rows="5"
                      col="3"
                      placeholder="Description"
                      name="description"
                      {...register("description", { required: true })}
                      onChange={onInputChange}
                      className="form-control my-4"
                    />
                    {errors.description && (
                      <p className="fs-14 text-danger">Description Required</p>
                    )}
                  </div>
                  {/* <ReCAPTCHA
                    sitekey="6LfcpGQkAAAAACUIxoFBVl6ImItvJnSCJQtLxHJi"
                    onChange={onChange}
                  /> */}
                  <button className="card-button mt-2 d-block" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {

  const resMetaBlog = await fetch(
    "https://virtual-experts-server.cyclic.app/metaBlog"
  );
  const metaBlog = await resMetaBlog.json();

  return {
    props: {
      metaBlog: metaBlog[0],
    },
  };
}


export default Blog;
