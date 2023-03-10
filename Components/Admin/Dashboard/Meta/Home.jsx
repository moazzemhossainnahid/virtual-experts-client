import React from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const Home = ({ homeData, setNumber }) => {
  const { _id, title, description, keywords } = homeData;
  const newTitle = title;
  const newDescription = description;
  const newKeywords = keywords;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const title = data.title || newTitle;
    const description = data.description || newDescription;
    const keywords = data.keywords || newKeywords;

    fetch("https://virtual-experts-server.cyclic.app/metaHome/update", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id, title, description, keywords }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        toast.success("Updates Successfully");
        setNumber((preState) => preState + 1);
      });
  };

  return (
    <>
      <section className="my-2 boxShadow bg-gray rounded me-3 p-3">
        <div className="d-flex justify-content-center">
          <h1 className="fs-24 spacing-3">Home Page</h1>
        </div>
        <h6 className="fs-18 mt-2">Title</h6>
        <p className="fs-14">{title}</p>
        <h6 className="fs-18 mt-2">Description</h6>
        <p className="fs-14">{description}</p>
        <h6 className="fs-18 mt-2">Keywords</h6>
        <p className="fs-14">{keywords}</p>
        <div className="d-flex py-3 justify-content-end">
          <AiFillEdit
            size={30}
            className="text-warning bg-dark rounded-circle p-1 cursor-pointer "
            data-bs-toggle="modal"
            data-bs-target="#homeModal"
          />
        </div>
      </section>

      {/* =============== modal */}

      <div
        className="modal fade"
        id="homeModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Meta Tag and description For Home
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
                <label htmlFor="title">Meta Title</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={title}
                  {...register("title")}
                  name="title"
                  id="title"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="description">Meta description</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={description}
                  {...register("description")}
                  name="description"
                  id="description"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="keywords">Meta Keywords</label>
                <textarea
                  rows="3"
                  cols="2"
                  defaultValue={keywords}
                  {...register("keywords")}
                  name="keywords"
                  id="keywords"
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

export default Home;
