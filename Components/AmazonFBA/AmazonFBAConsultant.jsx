import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import amazonFBA from "../../Assets/Images/public/amazon-fba.svg";
import shape from "../../Assets/Images/others/dummy.png";
import styles from "../../styles/About.module.css";
import SectionTitle2 from "../Shared/SectionTitile/SectionTitile2";
import SectionTitle3 from "../Shared/SectionTitile/SectionTitle3";
import SectionTitle4 from "../Shared/SectionTitile/SectionTitle4";
import angle from "../../Assets/Images/others/Rectangle 266.svg";
import SideLink from "../Home/Banner/SideLink/SideLink";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import cardHeaderBg from "../../Assets/Images/others/Group 157.svg";
import cardHeaderImg from "../../Assets/Images/others/v-logo.svg";
// import ScheduleMeeting from "../ScheduleMeeting/ScheduleMeeting";


const AmazonFBAConsultant = ({
  fbaData,
  fbad1Data,
  whyshouldhireData,
  fbaServiceData,
  aboutUniquetListData,
  teams,
}) => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  // const [verfied, setVerifed] = useState(false);
  const [txt, setTxt] = useState("");

  // const onSubmit = async (data, e) => {
  //   data.subject = `You got a new mail from ${data.name}`;
  //   const msgTemplate = {
  //     service_id: "",
  //     template_id: "",
  //     user_id: "",
  //     template_params: data,
  //   };

  //   const sendMessage = async () => {
  //     const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
  //       method: "POST",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify(msgTemplate),
  //     });
  //     if (res.status === 200) {
  //       toast.success("Message Sent Successfully");
  //     }
  //   };

  //   sendMessage();
  //   e.target.reset();
  // };


    //recaptcha function
    
    function onChange(value) {
      console.log("Captcha value:", value);
      setVerifed(true);
    }

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


  // console.log(fbad1Data?.discription);
  return (
    <>
      <section className="overflow-hidden">
        <div className="background-color-skyblue">
          <div className="container d-md-flex justify-content-between align-items-center py-5">
            <h2 className="fs-30 lh-45 roboto-font-family fw-400">Amazon FBA Consultant</h2>
            <p className="fs-14">
              <span className="cursor-pointer" onClick={() => router.push("/")}>
                Home
              </span>{" "}
              <span className="text-warning mx-2">{`>`}</span>{" "}
              <span
                className="cursor-pointer"
                onClick={() => router.push("/fba")}
              >
                Amazon FBA Consultant
              </span>
            </p>
          </div>
        </div>

        {/* ================================= */}

        <div className="container">
          <div className="row py-5">
            <div className="col-md-6 order-2 order-md-1">
              <h2
                className={`${styles.title} fs-28 roboto-font-family lh-44 fw-400`}
              >
                {fbaData?.title}
              </h2>
              <p className="text-muted fs-15 lh-30 text-justify">
                {ReactHtmlParser(fbaData?.description_part_1)}
              </p>
              <p className="text-muted fs-15 lh-30 text-justify">
                {ReactHtmlParser(fbaData?.description_part_2)}
              </p>
            </div>
            <div className="col-md-6 text-center order-1 order-md-2 px-4">
              <Image
                src={amazonFBA}
                alt="amazon-fba-consultant-about-virtual-experts"
                title="amazon-fba-consultant-about-virtual-experts"
              />
            </div>
          </div>
        </div>

        {/* ================================= */}

        <div className="py-5">
          <div className="container my-5">
            <SectionTitle2 title="An Amazon FBA Consultant can Provide a wide range of services, including:" isBgWhite={true} />
            <div className="row">
              <div className="col-md-6 d-flex justify-content-left justify-content-md-center align-items-center">
                <div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      01
                    </span>
                    <p>{fbaServiceData[0]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      02
                    </span>
                    <p>{fbaServiceData[1]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      03
                    </span>
                    <p>{fbaServiceData[2]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      04
                    </span>
                    <p>{fbaServiceData[3]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      05
                    </span>
                    <p>{fbaServiceData[4]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      06
                    </span>
                    <p>{fbaServiceData[5]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      07
                    </span>
                    <p>{fbaServiceData[6]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      08
                    </span>
                    <p>{fbaServiceData[7]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      09
                    </span>
                    <p>{fbaServiceData[8]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      10
                    </span>
                    <p>{fbaServiceData[9]?.title}</p>
                  </div>

                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-left justify-content-md-center align-items-center">
                <div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      11
                    </span>
                    <p>{fbaServiceData[10]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      12
                    </span>
                    <p>{fbaServiceData[11]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      13
                    </span>
                    <p>{fbaServiceData[12]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      14
                    </span>
                    <p>{fbaServiceData[13]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      15
                    </span>
                    <p>{fbaServiceData[14]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      16
                    </span>
                    <p>{fbaServiceData[15]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      17
                    </span>
                    <p>{fbaServiceData[16]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      18
                    </span>
                    <p>{fbaServiceData[17]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      19
                    </span>
                    <p>{fbaServiceData[18]?.title}</p>
                  </div>
                  <div className="d-flex fs-15 lh-30 mt-2">
                    <span className="me-2 numberBefore fw-500 text-dark">
                      20
                    </span>
                    <p>{fbaServiceData[19]?.title}</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        <div style={{marginTop: "-50px"}} className="d-flex text-align-center justify-content-center">
          <button
            className="button px-4 py-1 slide_right"
            data-bs-toggle="modal"
            data-bs-target="#popup2"
          >
            <h4 className="d-inline fs-20 font-family-roboto font-semibold">
              Get a Free Quote!
            </h4>
          </button>
        </div>
        {/* ========================================= */}

        <SectionTitle3 />

        {/* ========================================= */}

        <div style={{ backgroundColor: "#F5F8FE" }}>
          <div className="container my-5">
            <div className="d-flex justify-content-center align-items-center">
              <div className="col-12 text-center  mt-5 pt-3">
                <SectionTitle2 title="Why you should hire an Amazon FBA Consultant for your Amazon Marketing Service?" isBgWhite={true} />
                <p className="text-muted fs-15 mt-3 mb-5 lh-30">
                  Hiring an Amazon FBA consultant for your Amazon Marketing Service (AMS) can provide several benefits for your business:
                </p>
              </div>
            </div>
            <div className="row">
              {whyshouldhireData?.map((servicesCard) => {
                return (
                  <div
                    className="col-md-6 position-relative serviceCard cursor-pointer my-4"
                    key={servicesCard._id}
                  >
                    <div className="angle3 d-none d-md-block">
                      <Image src={angle} alt="angle" />
                    </div>
                    <div className="card position-relative h-100 border-0 overflow-hidden">
                      <div className="mx-1 bg-white p-3 h-100">
                        <h3 className="title2 fs-16 mt-2 lh-26 font-family-popins fw-500">
                          {servicesCard?.title}
                        </h3>
                        <p className="fs-15 mt-3 lh-30">{servicesCard?.description}</p>
                      </div>
                      <div className="position-absolute end-0 card-shape-bottom ">
                        <Image src={shape} alt="shape" height="120" width="120" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <SectionTitle4 />
      </section>
      <SideLink />
      {/* PopUp Modal */}
      <div
        className="modal fade"
        id="popup2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="position-relative">
                <div className="cardHeaderBg">
                  <Image src={cardHeaderBg} alt="header" />
                </div>
                <div className="cardHeaderImg">
                  <Image
                    src={cardHeaderImg}
                    className="mt-2 p-2"
                    alt="cardImage"
                  />
                </div>
                <div className="btn-popup cursor-pointer">
                  <AiOutlineClose
                    size={24}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
              </div>

              <div className="card-body mx-auto bg-white borderRadius">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                      name="productlink"
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
                  <button className={`cursor-pointer card-button mt-2 d-block`} type="submit">
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

export default AmazonFBAConsultant;
