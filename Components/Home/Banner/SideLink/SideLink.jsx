import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaSkype } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import styles from "../../../../styles/SideLink.module.css";

const SideLink = () => {
  const [footerLink, setFooterLink] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/footer")
      .then((res) => res.json())
      .then((data) => setFooterLink(data[0]));
  }, []);

  console.log(footerLink);

  return <>
    <div className={`position-fixed left-0 top-30 ${styles.zIndex}`}>
      <Link
        href={`${footerLink.skype}`}
        target="_blank"
        title={footerLink.skypeTitle}
        className="position-relative d-flex align-items-center test">

        <FaSkype
          className={`d-block cursor-pointer px-2 order-color fixedIcon ${styles.sidelinkColor}`}
          size={40}
        />
        <span
          className={`social-address fs-12 ms-1 text-secondary bg-light p-1`}
        >
          skype:{footerLink.skypeTitle}
        </span>

      </Link>
      <Link
        href={`${footerLink.whatsApp}`}
        target="_blank"
        title={footerLink.whatsAppTitle}
        className="position-relative d-flex align-items-center test">

        <IoLogoWhatsapp
          className={`d-block cursor-pointer px-2 order-color fixedIcon ${styles.sidelinkColor}`}
          size={40}
        />
        <span className="social-address fs-12 ms-1 text-secondary bg-light p-1">
          WhatsApp:{footerLink.whatsAppTitle}
        </span>

      </Link>
      <Link
        href={`mailto:${footerLink.email}`}
        target="_blank"
        title={footerLink.email}
        className="position-relative d-flex align-items-center test">

        <MdEmail  
          className={`d-block cursor-pointer px-2 order-color fixedIcon ${styles.sidelinkColor}`}
          size={40}
        />
        <span className="social-address fs-12 ms-1 text-secondary bg-light p-1">
          {footerLink.email}
        </span>

      </Link>
    </div>
  </>;
};

export default SideLink;
