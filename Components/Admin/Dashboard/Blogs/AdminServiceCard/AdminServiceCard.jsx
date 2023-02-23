import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import ReactHtmlParser from "react-html-parser";


const AdminBlogCard = ({
  imgType,
  blogsCard,
  index,
  blogsCardData,
  setBlogsCardData,
  setNumber,
}) => {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const { register, handleSubmit } = useForm();


  var date = new Date(blogsCard?.createdAt)
  var original_date = date.getDate() + " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();


  // console.log(original_date);

  const handleFileChange = (e) => {
    // console.log(e)
    console.log(e.target.files)
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  // console.log(file)

  const deleteBlog = (id) => {
    fetch(`https://virtual-experts-server.cyclic.app/blogs/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.error("Blog Delete Successfully");
          const newblogsCard = blogsCardData.filter(
            (blog) => blog._id !== id
          );
          setBlogsCardData(newblogsCard);
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
      fetch("https://virtual-experts-server.cyclic.app/blogs/update", {
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
      fetch("https://virtual-experts-server.cyclic.app/blogs/update", {
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
        {blogsCard.img && (
          <Image
            src={`${imgType} ; base64, ${blogsCard.img.img}`}
            alt={blogsCard.imgAlt}
            title={blogsCard.imgTitle}
            width={100}
            height={100}
          />

        )}
        <div className="boxShadow p-3 borderRadius" style={{ height: "270px" }}>
          <h6 className="fs-20 font-bold">{blogsCard.title}</h6>
          <h6 className="fs-16 mt-3">Author: {blogsCard.writerName}</h6>
          <h6 className="fs-14 mt-3">{ReactHtmlParser(blogsCard.description.slice(0,150))}</h6>
          <h6 className="fs-14 mt-5">Published Date: {original_date}</h6>
          <div className="d-flex justify-content-end">
            <AiFillEdit
              size={30}
              className="text-warning bg-dark mx-1 rounded-circle p-1 cursor-pointer "
              onClick={() => router.push(`/richard/blog/${blogsCard._id}`)}
            />
            <AiFillDelete
              size={30}
              className="text-danger mx-1 bg-dark rounded-circle p-1 cursor-pointer "
              data-bs-toggle="modal"
              data-bs-target={`#blogDelete${index + 1}`}
            />
          </div>

        </div>

        {/* For Edit Card data Start */}
        <div
          className="modal fade"
          id={`blog${index + 1}`}
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
                      rows="2"
                      cols="5"
                      defaultValue={blogsCard.title}
                      name="title"
                      id="title"
                      className="form-control"
                      {...register("title")}
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="writerName">Writer Name</label>
                    <input
                      type="text"
                      defaultValue={blogsCard.writerName}
                      {...register("writerName")}
                      name="writerName"
                      id="writerName"
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
                    <label htmlFor="imgAlt">Image Alt</label>
                    <input
                      type="text"
                      defaultValue={blogsCard.imgAlt}
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
          id={`blogDelete${index + 1}`}
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
                  onClick={() => deleteBlog(blogsCard._id)}
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
