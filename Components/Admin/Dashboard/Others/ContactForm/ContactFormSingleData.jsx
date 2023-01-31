import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const ContactFormSingleData = ({ info, index }) => {


    return (
        <>
            <section className="bg-gray2 my-3 rounded p-2">
                <div className="">
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
                        <AiFillEdit
                            size={30}
                            className="text-warning bg-dark rounded-circle p-1 cursor-pointer "
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
