import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  // PinterestIcon,
  // PinterestShareButton,
  // RedditIcon,
  // RedditShareButton,
  // TumblrIcon,
  // TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { BlogData } from "../../Data/BlogData";

const BlogDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [sBlog, setSBlog] = useState([]);
  const [newBlog, setNewBlog] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setSBlog(data);
        const cBlog = data.find((blog) => blog._id === id);
        // console.log(currentBlog)
        setNewBlog(cBlog);

      });
  }, [id]);

  console.log(newBlog);
  const currentBlog = BlogData?.find((blog) => blog.id === id);

  var date = new Date(newBlog?.createdAt)
  var original_date = date.getDate() + " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();


  let imgType;
  if (newBlog?.img?.contentType === "image/svg+xml") {
    imgType = "data:image/svg+xml";
  } else if (newBlog?.img?.contentType === "image/png") {
    imgType = "data:image/png";
  } else {
    imgType = "data:image/jpg";
  }
  return (
    <>
      <Head>
        <title>{currentBlog?.metaTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={currentBlog?.metaDescription} />
        <meta name="keyword" content={currentBlog?.metaKeyword} />
      </Head>

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
            <span className="text-warning mx-2">{`>`}</span>{" "}
            <span>{currentBlog?.title || newBlog?.title}</span>
          </p>
        </div>
      </div>

      <div className="blog-title-background py-md-5">
        <div className="container py-5">
          <h1 className="text-center text-white">{currentBlog?.title || newBlog?.title}</h1>
        </div>
      </div>

      <div className="w-100">
        <div className="container">
          <div className="row">
            <div className="col-md-8 my-md-5 mt-4">
              <div className="boxShadow border py-3 px-md-5 px-3">
                <div className="d-none d-md-block">
                  {currentBlog && (
                    <Image
                      src={currentBlog?.img}
                      alt={currentBlog?.imgAlt}
                      title={currentBlog?.imgAlt}
                      layout="responsive"
                      height="420"
                      width="1000"
                      className="borderRadius mt-4"
                    />
                  )}
                  {newBlog?.img && (
                    <Image
                      src={`${imgType} ; base64, ${newBlog.img.img}`}
                      alt={newBlog.imgAlt}
                      title={newBlog.imgTitle}
                      width={100}
                      height={100}
                    />)}
                </div>
                <div className="d-block d-md-none">
                  {newBlog?.img && (
                    <Image
                      src={`${imgType} ; base64, ${newBlog.img.img}`}
                      alt={newBlog?.imgAlt}
                      title={newBlog?.imgAlt}
                      layout="responsive"
                      height="450"
                      width="1000"
                      className="borderRadius"
                    />
                  )}
                  {currentBlog && (
                    <Image
                      src={currentBlog?.img}
                      alt={currentBlog?.imgAlt}
                      title={currentBlog?.imgAlt}
                      layout="responsive"
                      height="450"
                      width="1000"
                      className="borderRadius"
                    />
                  )}
                </div>
                <div className="d-flex align-items-center justify-content-evenly mt-4 ">
                  <p style={{ fontSize: "14px" }}>
                    {" "}
                    <FaUser className="me-1" /> {currentBlog?.writerName || newBlog?.writerName}
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    {" "}
                    <AiOutlineClockCircle className="me-1" />{" "}
                    {currentBlog?.publishedDate || original_date}
                  </p>
                </div>

                <h1 className="fs-32 my-4 lh-36">
                  {ReactHtmlParser(currentBlog?.title || newBlog?.title)}
                </h1>

                {(currentBlog?.tableOfContent || newBlog?.tableOfContent) &&
                  <h6 className="my-3">Table Of Contents</h6>
                }
                <p className="table-of-content cursor-pointer d-inline-block">
                  {ReactHtmlParser(currentBlog?.tableOfContent || newBlog?.tableOfContent)}
                </p>

                <div className="fs-28 my-4 lh-30">
                  {ReactHtmlParser(currentBlog?.subTitle)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description || newBlog?.description)}
                </p>

                <div className="fs-28 my-4 lh-30">
                  {ReactHtmlParser(currentBlog?.subTitle_1)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description_2)}
                </p>

                <div className="fs-28 lh-30">
                  {ReactHtmlParser(currentBlog?.subTitle_2)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description_3)}
                </p>

                <div className="fs-28 mb-4 lh-30">
                  {ReactHtmlParser(currentBlog?.subTitle_3)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description_4)}
                </p>

                <div className="fs-28 my-4 lh-3">
                  {ReactHtmlParser(currentBlog?.subTitle_4)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description_5)}
                </p>

                <div className="fs-28 my-4 lh-36">
                  {ReactHtmlParser(currentBlog?.subTitle_5)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description_6)}
                </p>

                <div className="fs-28 my-4 lh-36">
                  {ReactHtmlParser(currentBlog?.subTitle_6)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description_7)}
                </p>

                <div className="fs-28 my-4 lh-36">
                  {ReactHtmlParser(currentBlog?.subTitle_7)}
                </div>
                <p className="fs-14 lh-36 text-justify mb-5">
                  {ReactHtmlParser(currentBlog?.description_8)}
                </p>

                <div className="fs-28 my-4 lh-36">
                  {ReactHtmlParser(currentBlog?.subTitle_8)}
                </div>
                <p className="fs-14 lh-36 text-justify">
                  {ReactHtmlParser(currentBlog?.description_9)}
                </p>

                <div className="fs-28 my-4 lh-36">
                  {ReactHtmlParser(currentBlog?.subTitle_9)}
                </div>
                <p className="fs-14 lh-36 text-justify">
                  {ReactHtmlParser(currentBlog?.description_10)}
                </p>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <div className="">
                {BlogData?.map((blog) => (
                  <div
                    className="col-12 cursor-pointer p-3 mb-4 border boxShadow rounded-1"
                    key={blog.id}
                    onClick={() => router.push(`/blog/${blog.id}`)}
                  >
                    <div className="row">
                      <div className="col-md-4">
                        <Image
                          src={blog.img}
                          title={blog.imgAlt}
                          alt={blog.imgAlt}
                          width="200"
                          height="150"
                          layout="responsive"
                          className="rounded-3 mt-3"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="px-3">
                          <h3 className="fs-18 lh-36 m-0">{blog.title}</h3>
                          <div className="d-flex justify-content-between">
                            <p>{blog.writerName}</p>
                            <p>{blog.publishedDate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {sBlog?.map((blog) => {
                  var date = new Date(blog?.createdAt)
                  var original_date = date.getDate() + " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();

                  let imgType;
                  if (blog?.img?.contentType === "image/svg+xml") {
                    imgType = "data:image/svg+xml";
                  } else if (blog?.img?.contentType === "image/png") {
                    imgType = "data:image/png";
                  } else {
                    imgType = "data:image/jpg";
                  }
                  return (
                    <div
                      className="col-12 cursor-pointer p-3 mb-4 border boxShadow rounded-1"
                      key={blog._id}
                      onClick={() => router.push(`/blog/${blog._id}`)}
                    >
                      <div className="row">
                        <div className="col-md-4">
                          {blog?.img && (
                            <Image
                              src={`${imgType} ; base64, ${blog.img.img}`}
                              title={blog.imgAlt}
                              alt={blog.imgAlt}
                              width="200"
                              height="150"
                              layout="responsive"
                              className="rounded-3 mt-3"
                            />)}
                        </div>
                        <div className="col-md-8">
                          <div className="px-3">
                            <h3 className="fs-18 lh-36 m-0">{blog?.title}</h3>
                            <div className="d-flex justify-content-between">
                              <p>{blog?.writerName}</p>
                              <p>{original_date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`position-fixed bg-light rounded m-3 shadow-lg py-3 left-0 top-30`}>
        <FacebookShareButton
          url="https://virtualexperts.net/"
          className="d-block p-2"
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        {/* <LinkedinShareButton
          url="https://virtualexperts.net/"
          className="d-block p-2"
        >
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton> */}

        {/* <PinterestShareButton
          url="https://virtualexperts.net/"
          className="d-block p-2"
        >
          <PinterestIcon size={32} round={true} />
        </PinterestShareButton>

        <RedditShareButton
          url="https://virtualexperts.net/"
          className="d-block p-2"
        >
          <RedditIcon size={32} round={true} />
        </RedditShareButton> */}

        <TwitterShareButton
          url="https://virtualexperts.net/"
          className="d-block p-2"
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>

        {/* <TumblrShareButton
          url="https://virtualexperts.net/"
          className="d-block p-2"
        >
          <TumblrIcon size={32} round={true} />
        </TumblrShareButton> */}
      </div>
    </>
  );
};

export default BlogDetails;
