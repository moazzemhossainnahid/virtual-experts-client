import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import ReactHtmlParser from "react-html-parser";

import AdminWhyChooseVirtualExpertsCard from "./WhyChooseVirtualExpertsCard";

const AdminWhyChooseVirtualExperts = () => {
  const [info, setInfo] = useState({});
  const [number, setNumber] = useState(0);
  const [cardsData, setCardsData] = useState([]);

  const titleData = info.title;
  const description1Data = info.description_part_1;
  const description2Data = info.description_part_2;

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch("https://virtual-experts-server.cyclic.app/headerInfoVirtualExports")
      .then((res) => res.json())
      .then((result) => {
        setInfo(result[0]);
      });

    fetch("https://virtual-experts-server.cyclic.app/virtualService")
      .then((res) => res.json())
      .then((result) => setCardsData(result));
  }, [number]);

  const handleUpdateInfo = (data) => {
    const title = data.title || titleData;
    const description_part_1 = data.description_part_1 || description1Data;
    const description_part_2 = data.description_part_2 || description2Data;
    fetch(
      "https://virtual-experts-server.cyclic.app/headerInfoVirtualExports/update",
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, _id: info._id, description_part_1, description_part_2 }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Updated Successful");
        setNumber(number + 1);
      });
  };

  return (
    <>
      <div className="p-3 boxShadow bg-gray rounded me-3 my-3">
        <div className="d-flex justify-content-center">
          <h6 className="fs-24 spacing-3">Why Choose Virtual Experts</h6>
        </div>
        <h6 className="mt-3 fs-18">Title</h6>
        <p className="fs-14">{info.title}</p>
        <h6 className="fs-18 mt-3">Description 1</h6>
        <p className="fs-14">{info.description_part_1}</p>
        <h6 className="fs-18 mt-3">Description 2</h6>
        <p className="fs-14">{ReactHtmlParser(info.description_part_2)}</p>
        <div className="my-2 row">
          {cardsData.map((cardData, index) => (
            <AdminWhyChooseVirtualExpertsCard
              key={cardData._id}
              cardData={cardData}
              index={index}
              setNumber={setNumber}
            />
          ))}
        </div>
        <div className="d-flex justify-content-end">
          <AiFillEdit
            size={30}
            className="text-warning bg-dark rounded-circle p-1 cursor-pointer "
            data-bs-toggle="modal"
            data-bs-target="#whyVirtualId"
          />
        </div>
      </div>

      <div
        className="modal fade"
        id="whyVirtualId"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit - Why Choose Banner
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(handleUpdateInfo)}>
                <textarea
                  rows="2"
                  cols="5"
                  defaultValue={info.title}
                  {...register("title")}
                  name="title"
                  id="title"
                  className="form-control mb-2"
                ></textarea>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={info.description_part_1}
                  {...register("description_part_1")}
                  name="description_part_1"
                  id="description_part_1"
                  className="form-control mb-2"
                ></textarea>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={info.description_part_2}
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

export default AdminWhyChooseVirtualExperts;
