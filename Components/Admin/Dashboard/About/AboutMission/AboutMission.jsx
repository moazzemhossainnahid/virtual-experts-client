import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import ReactHtmlParser from "react-html-parser";


const AdminAboutMission = () => {
    const [number, setNumber] = useState(0);
    const [aboutMissionData, setAboutMissionData] = useState({});

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const loadData = async () => {
            const aboutMissionResponse = await fetch(
                "https://virtual-experts-server.cyclic.app/aboutMission"
            );
            const aboutMissionData = await aboutMissionResponse.json();
            setAboutMissionData(aboutMissionData[0]);
        };
        loadData();
    }, [number]);

    const onSubmit = (data) => {
        const mission = data.mission || aboutMissionData.mission;
        const vision = data.vision || aboutMissionData.vision;
        fetch("https://virtual-experts-server.cyclic.app/aboutMission/update", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ mission, _id: aboutMissionData._id, vision }),
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
                    <h1 className="fs-24 spacing-3">About Mission Data</h1>
                </div>
                <h6 className="fs-18 mt-2">Mission</h6>
                <p className="fs-14">{aboutMissionData?.mission}</p>
                <h6 className="fs-18 mt-2">Vision</h6>
                <p className="fs-14">{ReactHtmlParser(aboutMissionData?.vision)}</p>
                <div className="d-flex py-3 justify-content-end">
                    <AiFillEdit
                        size={30}
                        className="text-warning bg-dark rounded-circle p-1 cursor-pointer "
                        data-bs-toggle="modal"
                        data-bs-target="#aboutMissionID"
                    />
                </div>
            </section>
            <div
                className="modal fade"
                id="aboutMissionID"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit Banner
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
                                    rows="5"
                                    cols="5"
                                    defaultValue={aboutMissionData?.mission}
                                    {...register("mission")}
                                    name="mission"
                                    placeholder="Edit Mission"
                                    id="mission"
                                    className="form-control mb-2"
                                ></textarea>
                                <textarea
                                    rows="5"
                                    cols="5"
                                    defaultValue={aboutMissionData?.vision}
                                    {...register("vision")}
                                    name="vision"
                                    placeholder="Edit Vision"
                                    id="vision"
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

export default AdminAboutMission;
