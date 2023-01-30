import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const AdminWhatIsFBAConsultant = () => {
    const [number, setNumber] = useState(0);
    const [fbaData, setFBAData] = useState({});

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const loadData = async () => {
            const fbaResponse = await fetch(
                "http://localhost:5000/amazonfba"
            );
            const fbaData = await fbaResponse.json();
            setFBAData(fbaData[0]);
        };
        loadData();
    }, [number]);

    const onSubmit = (data) => {
        const title = data.title || fbaData.title;
        const description_part_1 = data.description_part_1 || fbaData.description_part_1;
        const description_part_2 = data.description_part_2 || fbaData.description_part_2;
        fetch("http://localhost:5000/amazonfba/update", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ title, _id: fbaData._id, description_part_1, description_part_2 }),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Updated Successful");
                setNumber(number + 1);
            });
    };

    return (
        <>
            <section className="my-3 boxShadow bg-gray rounded me-3 p-3">
                <div className="d-flex justify-content-center">
                    <h1 className="fs-24 spacing-3">{fbaData?.title}</h1>
                </div>
                <h6 className="fs-18 mt-2">Title</h6>
                <p className="fs-14">{fbaData?.title}</p>
                <h6 className="fs-18 mt-2">Banner Description 1</h6>
                <p className="fs-14">{fbaData?.description_part_1}</p>
                <h6 className="fs-18 mt-2">Banner Description 2</h6>
                <p className="fs-14">{fbaData?.description_part_2}</p>
                <div className="d-flex py-3 justify-content-end">
                    <AiFillEdit
                        size={30}
                        className="text-warning bg-dark rounded-circle p-1 cursor-pointer "
                        data-bs-toggle="modal"
                        data-bs-target="#fbaID"
                    />
                </div>
            </section>
            <div
                className="modal fade"
                id="fbaID"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit FBA Banner
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
                                    defaultValue={fbaData?.title}
                                    {...register("title")}
                                    name="title"
                                    id="title"
                                    className="form-control mb-2"
                                ></textarea>
                                <textarea
                                    rows="5"
                                    cols="5"
                                    defaultValue={fbaData?.description_part_1}
                                    {...register("description_part_1")}
                                    name="description_part_1"
                                    id="description_part_1"
                                    className="form-control mb-2"
                                ></textarea>
                                <textarea
                                    rows="5"
                                    cols="5"
                                    defaultValue={fbaData?.description_part_2}
                                    {...register("description_part_2")}
                                    name="description_part_2"
                                    id="description_part_2"
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

export default AdminWhatIsFBAConsultant;
