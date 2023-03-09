import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
// import SectionTitle from "../Components/Shared/SectionTitile/SectionTitile";

const SectionTitle = dynamic(() => import('../Components/Shared/SectionTitile/SectionTitile'));

const Order = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { handleSubmit, register, formState: { errors }, } = useForm();

  const onSubmit = (data, e) => {
    const newArray = Object.keys(data);
    const test = newArray.filter((a, index) => data[newArray[index]] !== false);
    const service = test.filter(
      (a) =>
        a !== "email" &&
        a !== "name" &&
        a !== "productLinkOrASIN" &&
        a !== "description"
    );
    const info = test.filter(
      (a) =>
        a === "email" ||
        a === "name" ||
        a === "productLinkOrASIN" ||
        a === "description"
    );

    const services = service.map((a) => data[a]);

    const otherInfo = info.map((a) => data[a]);
    const orderInfo = {};
    orderInfo.name = otherInfo[0];
    orderInfo.email = otherInfo[1];
    orderInfo.productLinkOrASIN = otherInfo[2];
    orderInfo.description = otherInfo[3];
    orderInfo.selectedServices = [...services];

    fetch("https://virtual-experts-server.cyclic.app/order/post", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          const subject = "You got a new order";
          const id = data._id;
          const msgTemplate = {
            service_id: "service_rluy6hk",
            template_id: "template_os982z1",
            user_id: "seFfSonT2U8bIGJ8J",
            template_params: {
              orderID:id,
              name:orderInfo.name,
              email:orderInfo.email,
              productLinkOrASIN:orderInfo.productLinkOrASIN,
              description:orderInfo.description,
              selectedServices:orderInfo.selectedServices,


            },
          };

          fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(msgTemplate),
          })
            .then((res) => res.json())
            .then((data) => {});
          e.target.reset();
          return swal("Thank You", "Order Place Successfully.", "success");
        }
      });
  };

  return (
    <>
      <Head>
        <title>Virtual Experts | Order</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="order-bg position-relative">
        <div className="background-color-skyblue">
          <div className="container d-md-flex justify-content-between align-items-center py-5">
            <h6 className="fs-30 roboto-font-family fw-400">Order Now</h6>
            <p className="fs-14">
              <span className="cursor-pointer" onClick={() => router.push("/")}>
                Home
              </span>{" "}
              <span className="text-warning mx-2">{`>`}</span>{" "}
              <span
                className="cursor-pointer"
                onClick={() => router.push("/order")}
              >
                Order Now
              </span>
            </p>
          </div>
        </div>

        <div className="py-5 container">
          <SectionTitle title="Place an order to start" isBgWhite={true} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-12 col-md-6 mx-auto">
              <div className="row my-4">
                <div className="col-12 col-md-6">
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
                <div className="col-12 col-md-6 mt-3 mt-md-0">
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
              </div>
              <h6>Select Your item</h6>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("ProductListingimagesDesign")}
                      className="me-2 my-3"
                      value="Product Listing images Design"
                      id="Product Listing images Design"
                    />{" "}
                    <label
                      htmlFor="Product Listing images Design"
                      className="fs-15 cursor-pointer"
                    >
                      Product Listing images Design
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("ProductPackageDesign")}
                      value="Product Package Design"
                      className="me-2 my-3"
                      id="Product Package Design"
                    />{" "}
                    <label
                      htmlFor="Product Package Design"
                      className="fs-15 cursor-pointer"
                    >
                      Product Package Design
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("SearchTermsKeywordsAnalysis")}
                      value="Search Terms/Keywords Analysis"
                      className="me-2 my-3"
                      id="Search Terms/Keywords Analysis"
                    />{" "}
                    <label
                      htmlFor="Search Terms/Keywords Analysis"
                      className="fs-15 cursor-pointer"
                    >
                      Search Terms/Keywords Analysis
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("DesignAmazonEnhancedBrandContent")}
                      value="Design Amazon Enhanced Brand Content"
                      className="me-2 my-3"
                      id="Design Amazon Enhanced Brand Content"
                    />{" "}
                    <label
                      htmlFor="Design Amazon Enhanced Brand Content"
                      className="fs-15 cursor-pointer"
                    >
                     Design Amazon Enhanced Brand Content
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("ListingOptimization")}
                      value="Listing Optimization"
                      className="me-2 my-3"
                      id="Listing Optimization"
                    />{" "}
                    <label
                      htmlFor="Listing Optimization"
                      className="fs-15 cursor-pointer"
                    >
                      Listing Optimization
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("AMAZONFBAAZCONSULTANCY")}
                      value="AMAZON FBA A-Z CONSULTANCY!"
                      className="me-2 my-3"
                      id="AMAZON FBA A-Z CONSULTANCY!"
                    />{" "}
                    <label
                      htmlFor="AMAZON FBA A-Z CONSULTANCY!"
                      className="fs-15 cursor-pointer"
                    >
                      AMAZON FBA A-Z CONSULTANCY!
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("AmazonBrandStorefrontDesign")}
                      value="Amazon Brand Storefront Design"
                      className="me-2 my-3"
                      id="Amazon Brand Storefront Design"
                    />{" "}
                    <label htmlFor="Amazon Brand Storefront Design" className="fs-15">
                      Amazon Brand Storefront Design
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("ApplyforTrademarkBrandName")}
                      value="Apply for Trademark & Brand Name"
                      className="me-2 my-3"
                      id="Apply for Trademark & Brand Name"
                    />{" "}
                    <label
                      htmlFor="Apply for Trademark & Brand Name"
                      className="fs-15 cursor-pointer"
                    >
                      Apply for Trademark & Brand Name
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("ProductVideoAdsCommercials")}
                      value="Product Video Ads & Commercials"
                      className="me-2 my-3"
                      id="Product Video Ads & Commercials"
                    />{" "}
                    <label
                      htmlFor="Product Video Ads & Commercials"
                      className="fs-15 cursor-pointer"
                    >
                      Product Video Ads & Commercials
                    </label>
                  </div>

                </div>
                {/*  */}
                <div className="col-12 col-md-6">
                <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("ProductResearchSelection")}
                      value="Product Research & Selection"
                      className="me-2 my-3"
                      id="Product Research & Selection"
                    />{" "}
                    <label
                      htmlFor="Product Research & Selection"
                      className="fs-15 cursor-pointer"
                    >
                      Product Research & Selection
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("UPCFNSKUCodeIssues")}
                      value="UPC/FNSKU Code Issues"
                      className="me-2 my-3"
                      id="UPC/FNSKU Code Issues"
                    />{" "}
                    <label
                      htmlFor="UPC/FNSKU Code Issues"
                      className="fs-15 cursor-pointer"
                    >
                      UPC/FNSKU Code Issues
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("CouponAdsDealsSetup")}
                      value="Coupon Ads/Deals Setup"
                      className="me-2 my-3"
                      id="Coupon Ads/Deals Setup"
                    />{" "}
                    <span
                      htmlFor="Coupon Ads/Deals Setup"
                      className="fs-15 cursor-pointer"
                    >
                      Coupon Ads/Deals Setup
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("SupplierProductsourcing")}
                      value="Supplier/Product sourcing"
                      className="me-2 my-3"
                      id="Supplier/Product sourcing"
                    />{" "}
                    <label
                      htmlFor="Supplier/Product sourcing"
                      className="fs-15 cursor-pointer"
                    >
                      Supplier/Product sourcing
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("InventoryManagement")}
                      value=" Inventory Management"
                      className="me-2 my-3"
                      id="Inventory Management"
                    />{" "}
                    <label
                      htmlFor="Inventory Management"
                      className="fs-15 cursor-pointer"
                    >
                      Inventory Management
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("PPCCampaignManagement")}
                      value="PPC Campaign Management"
                      className="me-2 my-3"
                      id="PPC Campaign Management"
                    />{" "}
                    <label
                      htmlFor="PPC Campaign Management"
                      className="fs-15 cursor-pointer"
                    >
                      PPC Campaign Management
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("PhotoshootoftheProduct")}
                      value="Photoshoot of the Product"
                      className="me-2 my-3"
                      id="Photoshoot of the Product"
                    />{" "}
                    <label
                      htmlFor="Photoshoot of the Product"
                      className="fs-15 cursor-pointer"
                    >
                      Photoshoot of the Product
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("ProductShipmenttoAmazonwarehouse")}
                      value="Product Shipment to Amazon warehouse"
                      className="me-2 my-3"
                      id="Product Shipment to Amazon warehouse"
                    />{" "}
                    <label
                      htmlFor="Product Shipment to Amazon warehouse"
                      className="fs-15 cursor-pointer"
                    >
                      Product Shipment to Amazon warehouse
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      {...register("GoogleAdsMarketingPlan")}
                      value="Google Ads & Marketing Plan"
                      className="me-2 my-3"
                      id="Google Ads & Marketing Plan"
                    />{" "}
                    <label
                      htmlFor="Google Ads & Marketing Plan"
                      className="fs-15 cursor-pointer"
                    >
                      Google Ads & Marketing Plan
                    </label>
                  </div>


                </div>
                <div>
                  <input
                    type="text"
                    name="productLink/ASIN"
                    placeholder="Product Link/ASIN"
                    {...register("productLinkOrASIN", { required: true })}
                    className="form-control mt-3"
                  />
                  {errors.productLinkOrASIN && (
                    <p className="fs-14 text-danger">
                      Product Link/ASIN Required
                    </p>
                  )}
                  <textarea
                    rows="5"
                    col="3"
                    placeholder="Description"
                    name="description"
                    {...register("description", { required: true })}
                    className="form-control my-4"
                  />
                  {errors.description && (
                    <p className="fs-14 text-danger">Description Required</p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-orange px-3 fs-15 py-2 text-white border-0 btn"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Order;
