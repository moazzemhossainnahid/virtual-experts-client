import React from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const AdminServiceBanner = ({ serviceBanner, setNumber }) => {
  const { title, description, subDescription_1, subDescription_2 } = serviceBanner;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const _id = serviceBanner._id;
    const title = data.title || serviceBanner.title;
    const description = data.description || serviceBanner.description;
    const subDescription_1 = data.subDescription_1 || serviceBanner.subDescription_1;
    const subDescription_2 = data.subDescription_2 || serviceBanner.subDescription_2;

    fetch("https://virtual-experts-server.cyclic.app/whatWeDo/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id, title, description, subDescription_1, subDescription_2 }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Service Banner Data Edit Successfully");
          setNumber((prvState) => prvState + 1);
        }
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <h6 className="fs-24 spacing-3">Service Banner</h6>
      </div>
      <h6 className="mt-3 fs-18">Title</h6>
      <p className="fs-14">{title}</p>
      <h6 className="fs-18 mt-3">Description</h6>
      <p className="fs-14">{description}</p>
      <h6 className="fs-18 mt-3">SubDescription 1</h6>
      <p className="fs-14">{subDescription_1}</p>
      <h6 className="fs-18 mt-3">SubDescription 2</h6>
      <p className="fs-14">{subDescription_2}</p>
      <div className="d-flex justify-content-end">
        <AiFillEdit
          size={30}
          className="text-warning bg-dark rounded-circle p-1 cursor-pointer "
          data-bs-toggle="modal"
          data-bs-target="#serviceBanner"
        />
      </div>
      {/* For Edit service banner data Start */}
      <div
        className="modal fade"
        id="serviceBanner"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                EDIT - {title}
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
                <div className="form-group">
                  <label htmlFor="titles">Title</label>
                  <textarea
                    rows="5"
                    cols="5"
                    defaultValue={title}
                    name="title"
                    id="title"
                    className="form-control"
                    {...register("title")}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    rows="5"
                    cols="5"
                    defaultValue={description}
                    name="description"
                    id="description"
                    className="form-control"
                    {...register("description")}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="subDescription_1">Sub Description 1</label>
                  <textarea
                    rows="5"
                    cols="5"
                    defaultValue={subDescription_1}
                    name="subDescription_1"
                    id="subDescription_1"
                    className="form-control"
                    {...register("subDescription_1")}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="subDescription_2">Sub Description 2</label>
                  <textarea
                    rows="5"
                    cols="5"
                    defaultValue={subDescription_2}
                    name="subDescription_2"
                    id="subDescription_2"
                    className="form-control"
                    {...register("subDescription_2")}
                  ></textarea>
                </div>

                <div className="form-group mt-3">
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-primary"
                    value="Save Changes"
                    data-bs-dismiss="modal"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* For Edit service banner data Finish */}
    </>
  );
};

export default AdminServiceBanner;
