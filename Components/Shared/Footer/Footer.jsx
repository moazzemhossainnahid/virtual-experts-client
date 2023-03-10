import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaSkype, FaTelegram, FaYoutube } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Logo from "../../../Assets/Images/others/Logo.svg";
import BTC from "../../../Assets/Images/others/Bitcoin.svg";
import Payoneer from "../../../Assets/Images/others/Payoneer.svg";
import PayPal from "../../../Assets/Images/others/PayPal.svg";
import skrill from "../../../Assets/Images/others/Skrill.svg";
import styles from "../../../styles/Footer.module.css";

const Footer = () => {
  const router = useRouter();
  const [footer, setFooter] = useState(null);
  const [footerLink, setFooterLink] = useState({});
  useEffect(() => {
    fetch("https://virtual-experts-server.cyclic.app/footer")
      .then((res) => res.json())
      .then((data) => setFooter(data[0]))

    fetch("https://virtual-experts-server.cyclic.app/footerLink")
      .then((res) => res.json())
      .then((data) => setFooterLink(data[0]))
  }, []);
  // console.log('footer', footer);
  // console.log('footerLink', footerLink);

  const today = new Date();
  const year = today.getFullYear();


  return (
    <footer
      className={
        router.pathname === "/richard" ||
          router.pathname === "/richard/service" ||
          router.pathname === "/richard/fba" ||
          router.pathname === "/richard/about" ||
          router.pathname === "/richard/blog" ||
          router.pathname === "/richard/blog/[id]" ||
          router.pathname === "/richard/cform" ||
          router.pathname === "/richard/leads" ||
          router.pathname === "/richard/footer" ||
          router.pathname === "/richard/orders" ||
          router.pathname === "/richard/invoice" ||
          router.pathname === "/richard/meta"
          ? "d-none"
          : ""
      }
    >
      <section className={`${styles.main}`}>
        <div className={`container py-3`}>
          <div className={`${styles.bottom} row p-2 p-md-5`}>
            <div className="col-md-4">
              <Image src={Logo} alt="logo" />
              <p className="fs-14 mt-2 lh-26 text-muted text-justify text-md-start">
                {footer?.description}
              </p>
            </div>
            <div className="col-md-4 px-5">
              <div className="text-center text-md-start">
                <h3 className={`${styles.title} fs-16 mt-2 mt-md-0 lh-30 fw-500`} >
                  Get in Touch
                </h3>
              </div>
              <div className="d-flex flex-column justify-content-center justify-content-md-start">
                <Link href={`mailto:${footer?.email}`} target="_blank" legacyBehavior>

                  <p className={`mt-3 px-xs-0 px-3 px-md-0 text-muted fs-14 lh-30`}>
                    <MdEmail className={`${styles.logo}`} />
                    <span className={`${styles.hilight}`}>
                      <span className="fw-500">Email</span> : {footer?.email}
                    </span>
                  </p>

                </Link>
                <Link href={`${footer?.skype}`} target="_blank" legacyBehavior>

                  <p className="px-xs-0 px-3 px-md-0 text-muted fs-14 lh-30">
                    <FaSkype className={`${styles.logo}`} />
                    <span className={`${styles.hilight}`}>
                      <span className="fw-500">Skype</span> : {footer?.skypeTitle}
                    </span>
                  </p>

                </Link>
                <Link href={`${footer?.whatsApp}`} target="_blank" legacyBehavior>

                  <p className="px-xs-0 px-3 px-md-0 text-muted fs-14 lh-30">
                    <IoLogoWhatsapp className={`${styles.logo}`} />
                    <span className={`${styles.hilight}`}>
                      <span className="fw-500">WhatsApp</span> :{" "}
                      {footer?.whatsAppTitle}
                    </span>
                  </p>

                </Link>
              </div>
            </div>
            <div className="col-md-4 text-center text-md-start mt-4 mt-md-0">
              <h6 className={`${styles.title} fs-16 mt-2 mt-md-0 lh-30 fw-500`}>
                Let’s Get Social
              </h6>
              <div className="d-flex align-items-center my-3 justify-content-center justify-content-md-start">
                {footerLink?.facebook && (
                  (<Link href={footerLink.facebook} target="_blank" legacyBehavior>

                    <FaFacebook className={`${styles.logo} me-3`} />

                  </Link>)
                )}
                {footerLink?.instagram && (
                  (<Link href={footerLink.instagram} target="_blank" legacyBehavior>

                    <AiFillInstagram className={`${styles.logo} me-3`} />

                  </Link>)
                )}

                {footerLink?.telegram && (
                  (<Link href={footerLink.telegram} target="_blank" legacyBehavior>

                    <FaTelegram className={`${styles.logo} me-3`} />

                  </Link>)
                )}

                {footerLink?.twitter && (
                  (<Link href={footerLink.twitter} target="_blank" legacyBehavior>

                    <ImTwitter className={`${styles.logo} me-3`} />

                  </Link>)
                )}
                {footerLink?.youTube && (
                  (<Link href={footerLink.youTube} target="_blank" legacyBehavior>

                    <FaYoutube className={`${styles.logo} me-3`} />

                  </Link>)
                )}
              </div>
              <h6 className={`${styles.title} fs-16 mt-2 mt-md-0 lh-30 fw-500`}>
                Payment method
              </h6>
              <div className="d-flex align-items-center mt-2 justify-content-center justify-content-md-start">
                <div className="me-2 my-3">
                  <Image src={PayPal} alt="paypal" />
                </div>
                <div className="mx-2">
                  <Image src={Payoneer} alt="Payoneer" />
                </div>
                <div className="mx-2">
                  <Image src={skrill} alt="skrill" />
                </div>
                <div className="mx-2">
                  <Image src={BTC} alt="BTC" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-muted">
          {/* <p className="pt-3 fs-14 text-muted">{footer?.copyRightText}</p> */}
          {/* Footer Link */}
          <p className="pt-3 fs-14 text-muted">© 2014-{year} Virtual Experts Limited | All Right Reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
