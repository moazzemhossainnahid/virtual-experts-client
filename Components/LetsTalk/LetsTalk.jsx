import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import {AiFillInstagram} from "react-icons/ai";
import { FaEnvelope, FaFacebook, FaSkype, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { ImTwitter } from "react-icons/im";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../Assets/Images/others/Shape.svg";
import styles from "../../styles/LetsTalk.module.css";
import SideLink from "../Home/Banner/SideLink/SideLink";

const LetsTalk = ({ footerData }) => {
    const router = useRouter();
    const [footerLink, setFooterLink] = useState({});
    const [verfied, setVerifed] = useState(false);
    const [txt, setTxt] = useState("");


    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        fetch("https://virtual-experts-server.cyclic.app/footerLink")
            .then((res) => res.json())
            .then((data) => setFooterLink(data[0]));
    }, []);


    // EmailJS Config
    // const onSubmit = async (data, e) => {
    //     const emailInfo = {
    //         name: data.name,
    //         email: data.email,
    //         subject: data.subject,
    //         phone: data.phone,
    //         message: data.message,
    //     };

    //     const msgTemplate = {
    //         service_id: "service_jpr5wh2",
    //         template_id: "template_jcid58g",
    //         user_id: "user_Gj21qvrXg9jH4lGJolreq",
    //         template_params: {
    //             ...emailInfo,
    //         },
    //     };

    //     const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    //         method: "POST",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(msgTemplate),
    //     });
    //     if (res.status === 200) {
    //         toast.success("Message Sent Successfully");
    //         e.target.reset();
    //     }
    // };
  
  
    //recaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }

    const onSubmit = async (data, e) => {
        const emailInfo = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: txt,
        };

        const res = await fetch("https://virtual-experts-server.cyclic.app/contactform/post", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(emailInfo),
        });
        if (res.status === 200) {
            toast.success("Message Sent Successfully");
            e.target.reset();
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


    return <>
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
        <section className="mb-2  overflow-hidden">
            <div className="background-color-skyblue">
                <div className="container d-md-flex justify-content-between align-items-center py-5">
                    <h2 className="fs-30 roboto-font-family lh-45 fw-400">
                        Let&#x27;s Talk
                    </h2>
                    <p className="fs-14">
                        <span className="cursor-pointer" onClick={() => router.push("/")}>
                            Home
                        </span>{" "}
                        <span className="text-warning mx-2">{`>`}</span>{" "}
                        <span
                            className="cursor-pointer"
                            onClick={() => router.push("/letstalk")}
                        >
                            Let&#x27;s Talk
                        </span>
                    </p>
                </div>
            </div>
            {/* //form part */}
            <div className="container pt-5 mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <Image src={Logo} alt="logo" />
                        </div>
                        <h6
                            className={`${styles.title} fs-24 mt-2 roboto-font-family lh-44 fw-400`}
                        >
                            Amazon Growth & Results.
                        </h6>
                        <p className="text-muted my-4 fs-15 lh-24">
                            Do you have any questions related to Amazon FBA/Kindle & Digital
                            Marketing? Feel free to contact us. For better response use
                            Skype/WhatsApp.
                        </p>
                        <div className="text-muted mb-5 ">
                            <p className="fs-15 d-flex align-items-md-center lh-40 m-0">
                                {" "}
                                <GoLocation className={`${styles.logo} icon-margin-top`} />
                                <span>
                                    <span className="fw-500">Address</span> :{" "}
                                    {footerData[0].address}
                                </span>
                            </p>
                            <p className="fs-15 d-flex align-items-center lh-40 m-0">
                                {" "}
                                <FaEnvelope className={`${styles.logo}`} />
                                <span className="fw-500">Email</span>: {footerData[0].email}
                            </p>
                            <p className="fs-15 d-flex align-items-center lh-40 m-0">
                                {" "}
                                <FaSkype className={`${styles.logo}`} />
                                <span className="fw-500">Skype</span>: {footerData[0].skypeTitle}
                            </p>
                            <p className="fs-15 d-flex align-items-center lh-40 m-0">
                                {" "}
                                <FaWhatsapp className={`${styles.logo}`} />
                                <span className="fw-500">WhatsApp</span>: {footerData[0].whatsAppTitle}
                            </p>
                        </div>
                        <div>
                            <h6
                                className={`${styles.title} fs-18 roboto-font-family lh-24`}
                            >
                                Connect with us
                            </h6>
                            <div className="d-flex mt-2 mt-2">
                                {footerLink?.facebook && (
                                    (<Link href={footerLink.facebook} target="_blank">

                                        <FaFacebook className={`${styles.logo} me-3`} />

                                    </Link>)
                                )}
                                {footerLink?.instagram && (
                                    (<Link href={footerLink.instagram} target="_blank">

                                        <AiFillInstagram className={`${styles.logo} me-3`} />

                                    </Link>)
                                )}

                                {footerLink?.telegram && (
                                    (<Link href={footerLink.telegram} target="_blank">

                                        <FaTelegram className={`${styles.logo} me-3`} />

                                    </Link>)
                                )}

                                {footerLink?.twitter && (
                                    (<Link href={footerLink.twitter} target="_blank">

                                        <ImTwitter className={`${styles.logo} me-3`} />

                                    </Link>)
                                )}
                                {footerLink?.youTube && (
                                    (<Link href={footerLink.youTube} target="_blank">

                                        <FaYoutube className={`${styles.logo} me-3`} />

                                    </Link>)
                                )}
                            </div>
                        </div>
                    </div>

                    {/* form starts here ======================== form starts here */}

                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="d-md-flex gap-4 mt-5 mb-md-3 mb-sm-2 justify-content-center mx-md-2">
                                <div className="col-12 col-md-6">
                                    <input
                                        placeholder="Name"
                                        name="name"
                                        className={`${styles.input} form-control mb-3 mb-md-0 fs-14`}
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name && (
                                        <p className="fs-14 text-danger">Name field required</p>
                                    )}
                                </div>
                                <div className="col-12 col-md-6">
                                    <input
                                        placeholder="Email"
                                        name="email"
                                        className={`${styles.input} form-control fs-14`}
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && (
                                        <p className="fs-14 text-danger">Email field required</p>
                                    )}
                                </div>
                            </div>
                            <div className="d-md-flex gap-4 mt-4 mb-3 justify-content-center fs-14 mx-md-2">
                                <div className="col-12 col-md-6">
                                    <input
                                        placeholder="Phone"
                                        className={`${styles.input} form-control mb-4 mb-md-0 fs-14`}
                                        name="phone"
                                        {...register("phone", { required: true })}
                                    />
                                    {errors.phone && (
                                        <p className="fs-14 text-danger">Phone field required</p>
                                    )}
                                </div>
                                <div className="col-12 col-md-6">
                                    <input
                                        placeholder="Subject"
                                        className={`${styles.input} form-control fs-14`}
                                        name="subject"
                                        {...register("subject", { required: true })}
                                    />
                                    {errors.subject && (
                                        <p className="fs-14 text-danger">
                                            Subject field required
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="mt-4 mb-4">
                                <textarea
                                    className={`${styles.input} form-control w-100 fs-14`}
                                    id="w3review"
                                    name="message"
                                    rows="6"
                                    cols="50"
                                    {...register("message", { required: true })}
                                    onChange={onInputChange}
                                    placeholder="Massage"
                                ></textarea>
                                {errors.message && (
                                    <p className="fs-14 text-danger">Message field required</p>
                                )}
                            </div>
                            <ReCAPTCHA
                                sitekey="6LfcpGQkAAAAACUIxoFBVl6ImItvJnSCJQtLxHJi"
                                onChange={onChange}
                            />
                            <input
                                className={`${styles.button} mt-3`}
                                disabled={!verfied}
                                type="submit"
                                value="send"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className="pt-2">
                {/* <ScheduleMeeting /> */}
            </div>
        </section>
        <SideLink />
    </>;
};

export default LetsTalk;
