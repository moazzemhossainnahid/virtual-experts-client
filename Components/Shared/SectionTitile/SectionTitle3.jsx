import Image from "next/image";
import angle from "../../../Assets/Images/others/Rectangle 266.svg";

const SectionTitle3 = ({ title, isBgWhite }) => {
  return (
    <div className="position-relative col-11 col-md-9 mx-auto">
      <div style={{backgroundColor:"#FFF3E8"}}
        className={`border border-warning my-5 ring-title ${
          isBgWhite ? "bg-white" : "background-color-skyblue"
        }`}
      >
        <h2 className="text-center fs-28 lh-44 p-3 textCenterAfterEffect font-family-roboto">
          {title}
        </h2>
      </div>

      <div className="angle d-none d-md-block">
        <Image src={angle} alt="angle" />  
      </div>

      <div className="angle2 d-none d-md-block">
        <Image src={angle} alt="angle" />
      </div>

      <div className="angle-mobile-size2 d-md-none d-block">
        <Image src={angle} height={50} width={50} alt="ring" />
      </div>

      <div className="angle-mobile-size d-md-none d-block">
        <Image src={angle} height={50} width={50} alt="ring" />
      </div>
    </div>
  );
};

export default SectionTitle3;
