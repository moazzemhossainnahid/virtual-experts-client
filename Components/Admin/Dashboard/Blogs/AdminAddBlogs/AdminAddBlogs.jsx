import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AdminAddBlogs = ({ setNumber }) => {
  const [file, setFile] = useState(null);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const onSubmit = (data, e) => {

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", data.title);
    formData.append("writerName", data.writerName);
    formData.append("description", data.description);
    formData.append("imgAlt", data.imgAlt);

    fetch(`http://localhost:5000/blogs/post`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.success("Blogs Add Successfully");
          e.target.reset();
          setNumber((prvState) => prvState + 1);
        }
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center mb-4">
        <h6 className="fs-24 spacing-3">Blog Card</h6>
      </div>
      {/* For Add Card data Start */}
      <div
        className="modal fade"
        id="addBlogModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add - Blog Card
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
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    defaultValue=""
                    name="title"
                    id="title"
                    autoComplete="off"
                    className="form-control"
                    {...register("title", { required: true })}
                  />
                  {errors.title && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="title">Writer Name</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("writerName", { required: true })}
                    name="writerName"
                    id="writerName"
                    autoComplete="off"
                    className="form-control"
                  />
                  {errors.writerName && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="img">Image</label>
                  <input
                    type="file"
                    name="img"
                    id="img"
                    className="form-control"
                    {...register("img", { required: true })}
                    onChange={handleFileChange}
                  />
                  {errors.img && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="imgAlt">Image Alt</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("imgAlt", { required: true })}
                    name="imgAlt"
                    id="imgAlt"
                    autoComplete="off"
                    className="form-control"
                  />
                  {errors.imgAlt && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="imgAlt">Description</label>
                  <textarea
                    rows="3"
                    cols="5"
                    type="text"
                    defaultValue=""
                    {...register("description", { required: true })}
                    name="description"
                    id="description"
                    autoComplete="off"
                    className="form-control"
                  ></textarea>
                  {errors.description && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group mt-3">
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-primary"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* For Add Card data Finish */}
    </>
  );
};

export default AdminAddBlogs;
