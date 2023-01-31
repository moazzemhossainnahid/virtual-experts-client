import { useForm } from "react-hook-form";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const ContactFormSingleData = ({ info, index }) => {


    const deleteContactForm = (id) => {
        fetch(`http://localhost:5000/contactform/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result) {
              toast.error("Service Delete Successfully");
              const newServicesCard = servicesCardData.filter(
                (servicesCard) => servicesCard._id !== id
              );
              setServicesCardData(newServicesCard);
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
                            data-bs-target={`#answer${index + 1}`}
                        />
                    </div>
                </div>
            </section>

        </>
    );
};

export default ContactFormSingleData;
