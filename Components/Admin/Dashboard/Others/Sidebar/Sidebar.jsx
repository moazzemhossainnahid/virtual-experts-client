import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import Logo from "../../../../../Assets/Images/others/v-logo.svg";
import { UserContext } from "../../../../../pages/_app";

const Sidebar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [signedUser, setSignedUser] = useContext(UserContext);

  const logout = () => {
    setSignedUser({});
    localStorage.clear();
  };

  return (
    <nav className="vh-100 bg-dark px-3 text-white">
      <Link href="/" className="d-block mx-auto w-100 text-center">

        <Image
          src={Logo}
          alt="virtual-logo"
          height="100"
          width="150"
          className="d-block mx-auto"
        />

      </Link>
      <div className="pt-1">
        <Link
          href="/dashboard/"
          className={`d-block py-2 ${
            pathname === "/dashboard" ? "bg-orange" : ""
          } px-3 rounded-3 text-white my-2 navHover`}>
          
            Home
          
        </Link>
        <Link
          href="/dashboard/service"
          className={`d-block py-2 ${
            pathname === "/dashboard/service" ? "bg-orange" : ""
          } px-3 rounded-3 text-white my-2 navHover`}>
          
            Service
          
        </Link>
        <Link
          href="/dashboard/about"
          className={`d-block py-2 ${
            pathname === "/dashboard/about" ? "bg-orange" : ""
          } px-3 rounded-3 text-white my-2 navHover`}>
          
            About
          
        </Link>
        <Link
          href="/dashboard/orders"
          className={`d-block py-2 ${
            pathname === "/dashboard/orders" ? "bg-orange" : ""
          } px-3 rounded-3 text-white my-2 navHover`}>
          
            Orders
          
        </Link>
        <Link
          href="/dashboard/invoice"
          className={`d-block py-2 ${
            pathname === "/dashboard/invoice" ? "bg-orange" : ""
          } px-3 rounded-3 text-white my-2 navHover`}>
          
            Invoice
          
        </Link>
        <Link
          href="/dashboard/meta"
          className={`d-block py-2 ${
            pathname === "/dashboard/meta" ? "bg-orange" : ""
          } px-3 rounded-3 text-white my-2 navHover`}>
          
            Meta
          
        </Link>
        <Link
          href="/"
          className={`d-block py-2 px-3 rounded-3 text-white my-2 navHover`}
          onClick={logout}>
          
            Logout
          
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
