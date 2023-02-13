import { PDFDownloadLink } from "@react-pdf/renderer";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiFillEye, AiFillFilePdf, AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import ReactPaginate from "react-paginate";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminInvoice from "../../Components/Admin/Dashboard/Invoice/Invoice";
import Sidebar from "../../Components/Admin/Dashboard/Others/Sidebar/Sidebar";
import WithAdminAuth from "../../Components/Others/WithAdminAuth";


const Invoice = () => {
    const [invoiceData, setInvoiceData] = useState([]);
    const [totalData, setTotalData] = useState(0);
    const [number, setNumber] = useState(0);

    const router = useRouter();
    const page = router.query.page;

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch("http://localhost:5000/invoice", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ page: page }),
            });
            const invoicesData = await res.json();
            const invoiceData = invoicesData.result;
            setInvoiceData(invoiceData);
            const totalData = invoicesData.totalData;
            setTotalData(totalData);
        };
        loadData();
    }, [page, number]);

    const totalPage = Math.ceil(totalData / 5);

    const handlePageChange = (page) => {
        router.push(`/richard/invoice?page=${page.selected + 1}`);
    };

    const handleDeleteInvoice = (id) => {
        const _id = id;
        fetch("http://localhost:5000/invoice/delete", {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ _id }),
        })
            .then((res) => res.json())
            .then((data) => {
                setNumber((prevState) => prevState + 1);
                toast.success("Deleted Successfully");
            });
    };

    return (
        <>
            <Head>
                <title>Virtual Experts | Admin-Invoice</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
            <section className="overflow-hidden">
                <div className="row">
                    <div className="col-12 col-md-2 d-none d-md-block">
                        <Sidebar />
                    </div>
                    <div className="d-block d-md-none col-12 mt-2 me-2">
                        <BiMenu
                            size={32}
                            className="ms-2"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight1"
                            aria-controls="offcanvasRight"
                        />
                        <div
                            className="offcanvas offcanvas-start bg-gray3"
                            tabIndex="-1"
                            id="offcanvasRight1"
                            aria-labelledby="offcanvasRightLabel"
                        >
                            <div className="offcanvas-header">
                                <AiOutlineClose
                                    size={32}
                                    className="text-reset d-block ms-auto mt-2"
                                    style={{ color: "#fff!important" }}
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="offcanvas-body">
                                <Sidebar />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-10 boxShadow bg-gray py-4 vh-100 scroll">
                        {/*  */}
                        <div className="pt-2 d-flex justify-content-center">
                            <h2 className="fs-22 roboto-font-family spacing-3">
                                Total Invoice - {totalData}
                            </h2>
                        </div>
                        <div className="">
                            <AdminInvoice />
                        </div>
                        {/*  */}
                        {invoiceData.map((info, index) => (
                            <div key={info._id}>
                                <div className="boxShadow bg-gray2 rounded p-3 my-3 d-flex  flex-column flex-md-row justify-content-between align-items-center">
                                    <p className="fs-14">
                                        <span className="fw-bold">Invoice Id</span> - {info._id}
                                    </p>
                                    <p className="fs-14">
                                        <span className="fw-bold">Invoice Date</span> - {info?.date}
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <small
                                            className="cursor-pointer bg-info px-5 py-2 mx-2 rounded"
                                            data-bs-toggle="modal"
                                            data-bs-target={`#order${index + 100}`}
                                        >
                                            <AiFillFilePdf
                                                size={30}
                                                className="text-danger p-1 cursor-pointer "
                                            />   Download PDF
                                        </small>

                                        <MdDelete
                                            size={30}
                                            className="text-warning bg-dark rounded-circle p-1 mx-2 cursor-pointer"
                                            data-bs-toggle="modal"
                                            data-bs-target={`#orderDelete${index + 100}`}
                                        />
                                    </div>
                                </div>

                                {/* modal */}
                                <div
                                    className="modal fade"
                                    id={`order${index + 100}`}
                                    tabIndex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h3 className="fs-14">
                                                    <span className="fw-bold">Order Id</span> - {info._id}
                                                </h3>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div className="modal-body">
                                                <p className="fs-14">
                                                    {" "}
                                                    <span className="fw-bold">Name : </span> {info.name}
                                                </p>
                                                <p className="fs-14">
                                                    <span className="fw-bold">Email : </span> {info.email}
                                                </p>
                                                <p className="fs-14">
                                                    <span className="fw-bold">ProductLink : </span>{" "}
                                                    {info.productLinkOrASIN}
                                                </p>
                                                <p className="fs-14">
                                                    <span className="fw-bold">Description : </span>{" "}
                                                    {info.description}
                                                </p>
                                                <p className="fs-14 fw-bold">Selected Services</p>
                                                {info.selectedServices.map((service, index) => (
                                                    <p key={service} className="fs-14">
                                                        {index + 1} . {service}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* modal for delete */}
                                <div
                                    className="modal fade"
                                    id={`orderDelete${index + 100}`}
                                    tabIndex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex align-items-center">
                                                <p className="fs-18 text-danger m-0">
                                                    Do you want to delete it?{" "}
                                                </p>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="text-end">
                                                    <button className="btn btn-primary px-4">No</button>
                                                    <button
                                                        className="btn btn-danger px-4 ms-3"
                                                        onClick={() => handleDeleteInvoice(info._id)}
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    >
                                                        Yes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* modal 2 end */}
                            </div>
                        ))}
                        {/* <div className="d-flex justify-content-center">
                            <ReactPaginate
                                pageCount={totalPage}
                                onPageChange={handlePageChange}
                            />
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default WithAdminAuth(Invoice);

Invoice.getLayout = function PageLayout(page) {
    return <>{page}</>;
};
