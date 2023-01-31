import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const ContactFormSingleData = ({ info, index }) => {


    return (
        <>
            <section className="d-flex bg-gray2 my-3 rounded p-2 justify-content-between">
                <p className="fs-14">
                    {index + 1}
                    {". "}
                    {info?.name}
                </p>

                <div className="d-flex justify-content-end">
                    <AiFillEdit
                        size={30}
                        className="text-warning bg-dark rounded-circle p-1 cursor-pointer "
                        data-bs-toggle="modal"
                        data-bs-target={`#answer${index + 1}`}
                    />
                </div>
            </section>

        </>
    );
};

export default ContactFormSingleData;
