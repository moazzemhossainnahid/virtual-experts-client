import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const AdminUpdateBlog = ({
  imgType,
  currentBlog,
  index,
  blogsCardData,
  setBlogsCardData,
  setNumber,
}) => {
  const [file, setFile] = useState(null);
  const { register, handleSubmit } = useForm();

  console.log(currentBlog)


  var date = new Date(currentBlog?.createdAt)
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
    fetch(`http://localhost:5000/blogs/delete/${id}`, {
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
    const newTitle = data.title || currentBlog.title;
    const newDescription = data.description || currentBlog.description;
    const newWriterName = data.writerName || currentBlog.writerName;
    const newImgAlt = data.imgAlt || currentBlog.imgAlt;
    const _id = currentBlog._id;

    const newData = {
      _id: _id,
      title: newTitle,
      description: newDescription,
      writerName: newWriterName,
      imgAlt: newImgAlt,
      img: currentBlog.img,
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
      {/* <div className="w-full bg-gray-200 flex items-center justify-center my-12">
        <div className="bg-white shadow rounded py-12 lg:px-28 px-8"> */}
          <p className="md:text-3xl text-xl font-bold text-center text-dark">
            Update <span className="text-danger">{currentBlog?.title}</span> currentBlog
          </p>
          <h2 className="">{original_date}</h2>
          <h2 className="bg-warning fs-30 font-weight-bold">Update Blog</h2>
          {/* <form
            onSubmit={handleSubmit()}
            className="mb-32"
            action=""
          >
            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  currentBlog Name
                </label>
                <input
                  {...register('currentBlogTitle')}
                  // defaultValue={title}
                  // onChange={handleTitleInput}
                  required
                  tabIndex={0}
                  arial-label="Please input name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-500"
                  placeholder="Please Input currentBlog Name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  currentBlog Category
                </label>

                <select {...register('currentBlogCategory')} defaultValue={cate} onChange={handleCateInput} className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-500">
                  <option disabled selected>Select currentBlog Category</option>
                  <option>Wind Chimes</option>
                  <option>Urinal Screen</option>
                  <option>Pest Repeller</option>
                  <option>Wrap Organizer</option>
                  <option>Scrab Brush</option>
                </select>
              </div>
            </div>

            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  currentBlog Price
                </label>
                <input
                  {...register('currentBlogPrice')}
                  value={price}
                  required
                  onChange={handlePriceInput}
                  tabIndex={0}
                  arial-label="Please input price"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-500"
                  placeholder="Please Input currentBlog Price"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  currentBlog Image
                </label>

                {
                  img === '' ?
                    <input
                      {...register('photoURL')}
                      defaultValue={img}
                      onChange={handleImgInput}
                      required
                      tabIndex={0}
                      arial-label="Please Input Price"
                      type="file"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-500"
                      placeholder="Please Input currentBlog Image"
                    /> :
                    <div className="w-full h-32 rounded">
                      <img src={img} alt="" className="object-cover h-full rounded" />
                    </div>
                }

              </div>
            </div>

            <div className="md:flex items-center mt-12">
              <div className="md:w-full flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Amazon Link
                </label>
                <input
                  {...register('amazonLink')}
                  defaultValue={link}
                  required
                  onChange={handleLinkInput}
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-500"
                  placeholder="Please Input Amazon Link"
                />
              </div>
            </div>

            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="text-base font-semibold leading-none text-gray-800">
                  currentBlog Description
                </label>
                <textarea
                  {...register("currentBlogDescription")}
                  defaultValue={desc}
                  required
                  onChange={handleDescInput}
                  tabIndex={0}
                  aria-label="leave a message"
                  type="text"
                  className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200  resize-none"
                  placeholder="Input currentBlog Description"
                />
              </div>
            </div>

            <div className="flex items-center justify-around w-full">
              <button
                onClick={handleGetValues}
                type="submit"
                className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-primary rounded hover:bg-warning focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:outline-none"
              >
                get currentBlog Values
              </button>
              <button
                disabled={!get || btnSpinner}
                type="submit"
                className="mt-9 text-base disabled:bg-gray-300 font-semibold leading-none text-white py-4 px-10 bg-warning rounded hover:bg-primary focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:outline-none"
              >
                Update currentBlog
              </button>
            </div>
          </form> */}
        {/* </div>
      </div> */}
    </div>
  );
};

export default AdminUpdateBlog;
