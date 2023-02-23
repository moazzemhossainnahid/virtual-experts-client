import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import ReactHtmlParser from "react-html-parser";


const AdminWhyChooseVirtualExpertsCard = ({
  cardData,
  setNumber,
  index,
}) => {
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };


  // console.log(file);

  // const handleUpdateInfo = (data) => {
  //   const title = data.title || cardData.title;
  //   const description = data.description || cardData.description;
  //   fetch("https://virtual-experts-server.cyclic.app/virtualService/update", {
  //     method: "PUT",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({ title, _id: cardData._id, description }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       toast.success("Updated Successful");
  //       setNumber((prevNumber) => prevNumber + 10);
  //     });
  // };

  const handleUpdateInfo = (data) => {
    const newTitle = data?.title || cardData?.title;
    const _id = cardData?._id;
    const newDescription = data?.description || cardData?.description;

    const newData = {
      title: newTitle,
      _id: cardData?._id,
      description: newDescription,
      img: cardData?.img,
      uploadImage: false,
    };


    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", newTitle);
    formData.append("_id", _id);
    formData.append("description", newDescription);

    console.log("data in formdata", formData);

    if (file === null) {
      fetch("https://virtual-experts-server.cyclic.app/virtualService/update", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Updated Successful");
          setNumber((prvState) => prvState + 1);
        });
    } else {
      fetch("https://virtual-experts-server.cyclic.app/virtualService/update", {
        method: "PUT",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Updated Successful");
          setNumber((prvState) => prvState + 1);
        });
    }
  };

  let imgType;
  if (cardData?.img?.contentType === "image/svg+xml") {
    imgType = "data:image/svg+xml";
  } else if (cardData?.img?.contentType === "image/png") {
    imgType = "data:image/png";
  } else {
    imgType = "data:image/jpg";
  }


  return (
    <>
      <div className="col-12 col-md-6 my-2">
        <div className="m-2 boxShadow bg-gray2 rounded p-3 h-100">
          <div className="d-flex justify-content-between">
            <h6>{cardData.title}</h6>
          </div>
          <div className="d-flex justify-content-left py-3">
            {cardData?.imgURL ? (
              <Image
                src={cardData?.imgURL}
                title={cardData?.alt}
                alt={cardData?.alt}
                height="60"
                width="60"
              />
            ) : (
              <Image
                src={`${imgType} ; base64, ${cardData?.img?.img}`}
                title={cardData?.alt}
                alt={cardData?.alt}
                height="60"
                width="60"
              />
            )}
          </div>
          <h6 className="fs-18">Title</h6>
          <p className="fs-14">{cardData?.title}</p>
          <h6 className="fs-18">Subtitle</h6>
          <p className="fs-14">{ReactHtmlParser(cardData?.description)}</p>
          <div className="d-flex justify-content-end">
          <AiFillEdit
            size={30}
            className="text-warning bg-dark rounded-circle p-1 cursor-pointer "
            data-bs-toggle="modal"
            data-bs-target={`#aboutVirtualCard${index + 1}`}
          />
        </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={`aboutVirtualCard${index + 1}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit - Why Choose Card
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
                  defaultValue={cardData?.title}
                  {...register("title")}
                  name="title"
                  id="title"
                  className="form-control mb-2"
                ></textarea>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={cardData?.description}
                  {...register("description")}
                  name="description"
                  id="description"
                  className="form-control mb-2"
                ></textarea>
                {/* <input
                  type="file"
                  className="form-control mb-2"
                  name="file"
                  onChange={handleFileChange}
                  id="img"
                /> */}
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

export default AdminWhyChooseVirtualExpertsCard;
