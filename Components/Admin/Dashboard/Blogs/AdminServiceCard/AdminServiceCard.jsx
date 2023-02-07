import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const AdminBlogCard = ({
  imgType,
  blogsCard,
  index,
  setblogsCardData,
  blogsCardData,
  setNumber,
}) => {
  const {
    title,
    subTitle,
    regularReview,
    videoReview,
    top50Reviewers,
    delivery,
    warranty,
    price,
    maintenance,
    imgTitle,
    imgAlt,
  } = blogsCard;
  const [file, setFile] = useState(null);
  const { register, handleSubmit } = useForm();
  const [showSpinner, setShowSpinner] = useState(false);

  const handleFileChange = (e) => {
    console.log(e)
    console.log(e.target.files)
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  // console.log(file)

  const deleteService = (id) => {
    fetch(`http://localhost:5000/blogsCard/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.error("Service Delete Successfully");
          const newblogsCard = blogsCardData.filter(
            (blogsCard) => blogsCard._id !== id
          );
          setblogsCardData(newblogsCard);
          setNumber((prevState) => prevState + 1);
        }
      });
  };

  const onSubmitEdit = (data) => {
    const newTitle = data.title || blogsCard.title;
    const newDescription = data.description || blogsCard.description;
    const newWriterName = data.writerName || blogsCard.writerName;
    const newImgAlt = data.imgAlt || blogsCard.imgAlt;
    const _id = blogsCard._id;

    const newData = {
      _id: _id,
      title: newTitle,
      description: newDescription,
      writerName: newWriterName,
      imgAlt: newImgAlt,
      img: blogsCard.img,
      uploadImage: false,
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("_id", _id);
    formData.append("title", newTitle);
    formData.append("description", newDescription);
    formData.append("writerName", newWriterName);
    formData.append("imgAlt", newImgAlt);

    if (file === null) {
      fetch("http://localhost:5000/blogs/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Blog Update Successfully");
          setNumber((prvState) => prvState + 1);
        });
    } else {
      fetch("http://localhost:5000/blogs/update", {
        method: "PUT",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Blog Update Successfully");
          setNumber((prvState) => prvState + 1);
        });
    }
  };

  return (
    <div className="col-md-6" key={blogsCard._id}>
      <div className="my-3 mx-1 p-3 border bg-gray2 rounded-3">
        {blogsCard.img ? (
          <Image
            src={`${imgType} ; base64, ${blogsCard.img.img}`}
            alt={blogsCard.imgAlt}
            title={blogsCard.imgTitle}
            width={100}
            height={100}
          />

        ) : (
          <Image
            src={blogsCard.imgURL}
            alt={blogsCard.imgAlt}
            title={blogsCard.imgTitle}
            width={100}
            height={100}
          />
        )}
        <div className="boxShadow p-3 borderRadius" style={{ height: "270px" }}>
          <h6 className="fs-18">{blogsCard.title}</h6>
          <h6 className="fs-14 mt-2">{blogsCard.subTitle}</h6>
          {blogsCard.regularReview && (
            <p className="fs-14">
              Regular Review : ${blogsCard.regularReview} each
            </p>
          )}
          {blogsCard.videoReview && (
            <p className="fs-14">
              Video Review : ${blogsCard.videoReview} each
            </p>
          )}
          {blogsCard.top50Reviewers && (
            <p className="fs-14">
              Top 50 Reviewers : ${blogsCard.top50Reviewers} each
            </p>
          )}
          {blogsCard.price && (
            <p className="fs-14">Price : ${blogsCard.price}</p>
          )}
          {blogsCard.delivery && (
            <p className="fs-14">Delivery : {blogsCard.delivery} days</p>
          )}
          {blogsCard.warranty && (
            <p className="fs-14">Warranty : {blogsCard.warranty}</p>
          )}
          {blogsCard.maintenance && (
            <p className="fs-14">
              Maintenence : ${blogsCard.maintenance} per month
            </p>
          )}
          <div className="d-flex justify-content-end">
            <AiFillEdit
              size={30}
              className="text-warning bg-dark mx-1 rounded-circle p-1 cursor-pointer "
              data-bs-toggle="modal"
              data-bs-target={`#card${index + 1}`}
            />
            <AiFillDelete
              size={30}
              className="text-danger mx-1 bg-dark rounded-circle p-1 cursor-pointer "
              data-bs-toggle="modal"
              data-bs-target={`#cardDelete${index + 1}`}
            />
          </div>

        </div>

        {/* For Edit Card data Start */}
        <div
          className="modal fade"
          id={`card${index + 1}`}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  EDIT - {blogsCard.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmitEdit)}>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
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
                    <label htmlFor="subTitle">Sub Title</label>
                    <textarea
                      rows="5"
                      cols="5"
                      defaultValue={subTitle}
                      name="subTitle"
                      id="subTitle"
                      className="form-control"
                      {...register("subTitle")}
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="regularReview">Regular Review</label>
                    <input
                      type="text"
                      defaultValue={regularReview}
                      {...register("regularReview")}
                      name="regularReview"
                      id="regularReview"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="videoReview">Video Review</label>
                    <input
                      type="text"
                      defaultValue={videoReview}
                      {...register("videoReview")}
                      name="videoReview"
                      id="videoReview"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="top50Reviewers">Top 50 Reviewers</label>
                    <input
                      type="text"
                      defaultValue={top50Reviewers}
                      {...register("top50Reviewers")}
                      name="top50Reviewers"
                      id="top50Reviewers"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="delivery">Delivery</label>
                    <input
                      type="text"
                      defaultValue={delivery}
                      {...register("delivery")}
                      name="delivery"
                      id="delivery"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="warranty">Warranty</label>
                    <input
                      type="text"
                      defaultValue={warranty}
                      {...register("warranty")}
                      name="warranty"
                      id="warranty"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      defaultValue={price}
                      {...register("price")}
                      name="price"
                      id="price"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="maintenance">Maintenance</label>
                    <input
                      type="text"
                      defaultValue={maintenance}
                      {...register("maintenance")}
                      name="maintenance"
                      id="maintenance"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="img">Image</label>
                    <input
                      type="file"
                      name="img"
                      id="img"
                      className="form-control"
                      {...register("img")}
                      onChange={handleFileChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="imgTitle">Image Title</label>
                    <input
                      type="text"
                      defaultValue={imgTitle}
                      {...register("imgTitle")}
                      name="imgTitle"
                      id="imgTitle"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="imgAlt">Image Alt</label>
                    <input
                      type="text"
                      defaultValue={imgAlt}
                      {...register("imgAlt")}
                      name="imgAlt"
                      id="imgAlt"
                      autoComplete="off"
                      className="form-control"
                    />
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
        {/* For Edit Card data Finish */}

        {/* For Delete Card data Start */}
        <div
          className="modal fade"
          id={`cardDelete${index + 1}`}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  DELETE - {blogsCard.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you want to delete this?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={() => deleteService(blogsCard._id)}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* For Delete Card data Finish */}
      </div>
    </div>
  );
};

export default AdminBlogCard;
