import { useForm } from "react-hook-form";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const ContactFormSingleData = ({ info,setInfo, index, setNumber }) => {


    const deleteContactForm = (id) => {
        fetch(`http://localhost:5000/contactform/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result) {
              toast.error("Service Delete Successfully");
              const newInfoCard = info.filter(
                (card) => card._id !== id
              );
              setInfo(newInfoCard);
              setNumber((prevState) => prevState + 1);
            }
          });
      };

    return (
        <>
            <section className="col-12 col-md-6">
                <div className="m-2 boxShadow bg-gray2 rounded p-3 h-100">
                    <p style={{ height: "20px", width: "20px" }} className="fs-14 rounded-circle bg-danger text-white text-center">
                        {index + 1}
                    </p>
                    <div className="">
                        <p className="">Name: {info?.name}</p>
                        <p className="">Email: {info?.email}</p>
                        <p className="">Phone: {info?.phone}</p>
                        <p className="">Subject: {info?.subject}</p>
                        <p className="">Message: {info?.message}</p>
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
                  DELETE - {info.name}'s Data
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
                  onClick={() => deleteContactForm(info._id)}
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

export default ContactFormSingleData;
