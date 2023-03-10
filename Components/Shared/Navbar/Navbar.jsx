import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../Assets/Images/others/Logo.svg";
import mobileLogo from "../../../Assets/Images/others/v-logo.svg";
import { NavbarData } from "../../../Data/NavbarData";
import styles from "../../../styles/Navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const id = router.query.id;

  // if( == `/richard/blog/${id}`){

  //   console.log(`/richard/blog/${id}`)
  // }

  // console.log(router);
  return (
    <nav
      className={
        router.pathname === "/richard" ||
          router.pathname === "/richard/fba" ||
          router.pathname === "/richard/service" ||
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
      <div className={`${styles.marginBottomNavbar}`}>
        <div className={`fixed-top bg-white`}>
          <div className="d-flex justify-content-between z-50 align-items-center container py-3">
            <div className="d-none d-md-block">
              <Link href="/" scroll legacyBehavior>

                <Image
                  src={logo}
                  alt="virtual-experts"
                  title="virtual-experts"
                  height="50"
                  width="278"
                />

              </Link>
            </div>
            <div className="d-block d-md-none">
              <Link href="/" scroll legacyBehavior>

                <Image src={logo} alt="logo" height="31" width="170" />

              </Link>
            </div>
            <div className="d-none d-md-block">
              <ul className="d-flex align-items-center">
                {NavbarData?.map((nav) => (
                  <li key={nav.id} className="mx-3 position-relative">
                    <Link
                      href={nav.link}
                      className={`${currentPath === nav.link ? `${styles.active}` : ""
                        } ${styles.navItem}`}
                      legacyBehavior>

                      {nav.title}

                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="d-block d-md-none p-3 cursor-pointer"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span className={styles.menu1}></span>
              <span className={styles.menu2}></span>
              <span className={styles.menu3}></span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none">
        <div
          style={{ backgroundColor: "#828B9A" }}
          className={`offcanvas offcanvas-end ${styles.zIndex}`}
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <div className="ms-auto text-white">
              <AiOutlineClose
                size={24}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
          </div>
          <div className="mx-auto">
            <Link href="/" scroll legacyBehavior>

              <Image
                src={mobileLogo}
                height={100}
                width={150}
                alt="loading..."
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />

            </Link>
          </div>
          <div className="offcanvas-body">
            <div className="text-center">
              {NavbarData?.map((nav) => (
                <div
                  key={nav.id}
                  className={`${styles.navItemMobileHover} my-2 py-2`}
                >
                  <Link href={nav.link} passHref legacyBehavior>
                    <span
                      className={`cursor-pointer`}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <a href={nav.link} className={styles.navItemMobile}>{nav.title}</a>
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
