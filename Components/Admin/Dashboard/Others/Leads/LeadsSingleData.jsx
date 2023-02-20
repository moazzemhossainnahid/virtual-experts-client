import { useForm } from "react-hook-form";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const LeadsSingleData = ({ leadData, setLeadData, lead, index, setNumber }) => {


    const deleteLeads = (id) => {
        fetch(`https://virtual-experts-server.cyclic.app/leads/delete/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    toast.error("Leads Delete Successfully");
                    const newinfoCard = leadData.filter(
                        (card) => card._id !== id
                    );
                    setLeadData(newinfoCard);
                    setNumber((prevState) => prevState + 1);
                }
            });
    };

    return (
        <>
            <section className="col-12 col-md-6 mt-3">
                <div className="m-2 boxShadow bg-gray2 rounded p-3 h-100">
                    <p style={{ height: "20px", width: "20px" }} className="fs-14 rounded-circle bg-danger text-white text-center">
                        {index + 1}
                    </p>
                    <div className="">
                        <p className=""><span className="font-weight-bold text-dark">Name:</span> {lead?.name}</p>
                        <p className=""><span className="font-weight-bold text-dark">Email:</span> {lead?.email}</p>
                        <p className=""><span className="font-weight-bold text-dark">Product Link:</span> {lead?.productlink}</p>
                        <p className=""><span className="font-weight-bold text-dark">Description:</span> {lead?.description}</p>
                    </div>

                    <div className="d-flex justify-content-end">
                        <AiFillDelete
                            size={30}
                            className="text-danger bg-dark rounded-circle p-1 cursor-pointer "
                            data-bs-toggle="modal"
                            data-bs-target={`#cardDelete${index + 1}`}
                        />
                    </div>
                </div>
            </section>


            {/* For Delete Card data Start */}
            <div
                className="modal fade"
                id={`cardDelete${index + 1}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {`DELETE - ${lead?.name}'s Data`}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you want to delete this?</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => deleteLeads(lead._id)}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                className="btn btn-success"
                                data-bs-dismiss="modal"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* For Delete Card data Finish */}
        </>
    );
};

export default LeadsSingleData;
