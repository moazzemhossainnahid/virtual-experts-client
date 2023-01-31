import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const WhyShouldHireFBASingleData = ({ answer, index, setNumber }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const title = data.title || answer.title;
        const description = data.description || answer.description;
        fetch("http://localhost:5000/whyshouldhire/update", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ title, _id: answer._id, description }),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Updated Successful");
                setNumber((prevState) => prevState + 1);
            });
    };

    return (
        <>
            <section className="d-flex bg-gray2 my-3 rounded p-2 justify-content-between">
                <p className="fs-14">
                    {index + 1}
                    {". "}
                    {answer?.title}
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

            {/* modal start here */}
            <div
                className="modal fade"
                id={`answer${index + 1}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit - Why Should FBA Data
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <textarea
                                    rows="2"
                                    cols="5"
                                    defaultValue={answer?.title}
                                    {...register("title")}
                                    name="title"
                                    id="title"
                                    className="form-control mb-2"
                                ></textarea>
                                <textarea
                                    rows="5"
                                    cols="5"
                                    defaultValue={answer?.description}
                                    {...register("description")}
                                    name="description"
                                    id="description"
                                    className="form-control mb-2"
                                ></textarea>
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    value="Save Changes"
                                    data-bs-dismiss="modal"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyShouldHireFBASingleData;
