import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const AdminTeamSection = () => {
    const [number, setNumber] = useState(0);
    const [teamSection, setAdminTeamSection] = useState({});

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const loadData = async () => {
            const aboutTeamResponse = await fetch(
                "https://virtual-experts-server.cyclic.app/aboutTeam"
            );
            const aboutTeamData = await aboutTeamResponse.json();
            setAdminTeamSection(aboutTeamData[0]);
        };
        loadData();
    }, [number]);

    const onSubmit = (data) => {
        const title = data.title || teamSection.title;
        const discription = data.discription || teamSection.discription;
        fetch("https://virtual-experts-server.cyclic.app/aboutTeam/update", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ title, _id: teamSection._id, discription }),
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
                    <h1 className="fs-24 spacing-3">{teamSection?.title}</h1>
                </div>
                <h6 className="fs-18 mt-2">Title</h6>
                <p className="fs-14">{teamSection?.title}</p>
                <h6 className="fs-18 mt-2">Sub Title</h6>
                <p className="fs-14">{teamSection?.discription}</p>
                <div className="d-flex py-3 justify-content-end">
                    <AiFillEdit
                        size={30}
                        className="text-warning bg-dark rounded-circle p-1 cursor-pointer "
                        data-bs-toggle="modal"
                        data-bs-target="#TeamSection"
                    />
                </div>
            </section>
            <div
                className="modal fade"
                id="TeamSection"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit - Team Section
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
                                    defaultValue={teamSection?.title}
                                    {...register("title")}
                                    name="title"
                                    id="title"
                                    className="form-control mb-2"
                                ></textarea>
                                <textarea
                                    rows="5"
                                    cols="5"
                                    defaultValue={teamSection?.discription}
                                    {...register("discription")}
                                    name="discription"
                                    id="discription"
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

export default AdminTeamSection;
