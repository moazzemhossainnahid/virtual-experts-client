import Image from "next/image";
import { useRef, useState } from "react";
import JoditEditor from 'jodit-react';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AdminUpdateBlog = ({
  // imgType,
  blogsData,
  // index,
  // blogsCardData,
  // setBlogsCardData,
  setNumber,
}) => {
  const [file, setFile] = useState(null);
  const { register, handleSubmit } = useForm();
  const editor = useRef(null);
  const [content, setContent] = useState('');

  console.log(blogsData);


  var date = new Date(blogsData?.createdAt);
  var original_date = date.getDate() + " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();


  // console.log(original_date);

  const handleFileChange = (e) => {
    // console.log(e)
    console.log(e.target.files)
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  // console.log(file)

  const onSubmitEdit = (data) => {
    const newTitle = data.title || blogsData.title;
    const newDescription = content || blogsData.description;
    const newWriterName = data.writerName || blogsData.writerName;
    const newImgAlt = data.imgAlt || blogsData.imgAlt;
    const _id = blogsData._id;

    const newData = {
      _id: _id,
      title: newTitle,
      description: newDescription,
      writerName: newWriterName,
      imgAlt: newImgAlt,
      img: blogsData.img,
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
    <div className=" bg-white text-left h-100 w-100 pt-lg-20 -mt-16">
      <div className="w-full px-0 py-3 px-md-4 bg-gray-200 flex items-center justify-center my-12">
        <div className="bg-white shadow rounded py-12 lg:px-28 px-8">
          {/* <h2 className="">{original_date}</h2> */}
          <h2 className="bg-warning fs-24 py-2 text-center rounded font-weight-bold">Update Blog - {blogsData?.title}</h2>
          <form onSubmit={handleSubmit(onSubmitEdit)} className="mb-32" action="" >

            <div class="form-row d-flex flex-column flex-md-row p-2">
              <div class="form-group col-md-5 mx-auto m-1">
                <label for="title">Blog Title</label>
                <input {...register("title")} defaultValue={blogsData.title} type="text" class="form-control" id="title" placeholder="Blog Title" />
              </div>
              <div class="form-group col-md-5 mx-auto m-1">
                <label for="author">Writer Name</label>
                <input {...register("writerName")} defaultValue={blogsData.writerName} type="text" class="form-control" id="author" placeholder="Writer Name" />
              </div>
            </div>
            <div class="form-row d-flex flex-column flex-md-row p-2">
              <div class="form-group col-md-5 mx-auto m-1">
                <label for="img">Blog Image</label>
                <input {...register("img")} onChange={handleFileChange} type="file" class="form-control" id="img" placeholder="Blog Image" />
              </div>
              <div class="form-group col-md-5 mx-auto m-1">
                <label for="imgAlt">Image Alt</label>
                <input {...register("imgAlt")} defaultValue={blogsData.imgAlt} type="text" class="form-control" id="imgAlt" placeholder="Image Alt" />
              </div>
            </div>
            <div class="form-row col-11 mx-auto p-2">
              <div class="form-group m-1">
                <label for="desc">Blog Descriptions</label>
                {/* <JoditEditor type="text" ref={editor} value={content} onBlur={newContent => setContent(newContent)} class="form-control" id="desc" placeholder="Blog Descriptions"/> */}
                <JoditEditor
                  ref={editor}
                  value={blogsData.description}
                  // config={config}
                  tabIndex={1} // tabIndex of textarea
                  onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={newContent => { }}
                />
              </div>
            </div>
            <div class="form-row col-11 mx-auto p-2">
              <div class="form-group m-1 d-flex justify-content-center">
                <button type="submit" class="btn btn-warning px-5">Update</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdateBlog;
