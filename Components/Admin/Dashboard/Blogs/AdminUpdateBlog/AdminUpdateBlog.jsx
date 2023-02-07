// import React from "react";
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useRouter } from "next/router";
// import ReactHtmlParser from "react-html-parser";
// import swal from 'sweetalert';

// const AdminUpdateBlog = () => {
//     const { register, handleSubmit, reset } = useForm();
//     const [btnSpinner, setBtnSpinner] = useState(false);
//     const [get, setGet] = useState(false);
//     const { id } = useParams();
//     const [title, setTitle] = useState();
//     const [desc, setDesc] = useState();
//     const [cate, setCate] = useState();
//     const [img, setImg] = useState('');
//     const [price, setPrice] = useState();
//     const [link, setLink] = useState();

//     const { data: products, refetch, isLoading } = useQuery(["Products"], () =>
//         primaryAxios.get(`/products?_id=${id}`)
//     );

//     const product = products?.data && products?.data?.data?.Products[0];
//     // console.log(product);

//     if (isLoading) {
//         return <Loading></Loading>;
//     };


//     const handleUpdateProduct = () => {
//         setBtnSpinner(true);
//         const productTitle = title;
//         const productImage = img;
//         const productPrice = price;
//         const productCategory = cate;
//         const productDesc = desc;
//         const BuyAmazon = link;
//         const productData = { productTitle, productPrice, productCategory, productImage, productDesc, BuyAmazon };

//         console.log(productData);
//         swal({
//             title: "Are you sure?",
//             text: "Once updated, you will not be able to recover this imaginary file!",
//             icon: "warning",
//             buttons: true,
//             dangerMode: true,
//         }).then((willDelete) => {
//             if (willDelete) {
//                 (async () => {
//                     const { data } = await primaryAxios.patch(`/products?_id=${product?._id}`, productData);
//                     // console.log(data);
//                     if (data?.data?.modifiedCount > 0) {
//                         swal("The Product has been successfully Saved", {
//                             icon: "success",
//                             className: "rounded-xl",
//                         });

//                         reset();
//                         refetch();
//                         window.location.href="/dashboard/addashboard";
//                     }
//                 })();
//             } else {
//                 swal("Your imaginary file is safe!");
//             }
//         })
//     };

//     const handleTitleInput = (e) => {
//         setTitle(e.target.value)
//     }

//     const handleDescInput = (e) => {
//         setDesc(e.target.value)
//     }

//     const handleCateInput = (e) => {
//         setCate(e.target.value)
//     }

//     const handleImgInput = (e) => {
//         setImg(e.target.value)
//     }

//     const handlePriceInput = (e) => {
//         setPrice(e.target.value)
//     }

//     const handleLinkInput = (e) => {
//         setLink(e.target.value)
//     }




//     const handleGetValues = (e) => {
//         e.preventDefault();
//         console.log(product);
//         setTitle(product?.productTitle);
//         setDesc(product?.productDesc);
//         setCate(product?.productCategory);
//         setImg(product?.productImage);
//         setPrice(product?.productPrice);
//         setLink(product?.BuyAmazon);
//         setGet(true);
//     }

//     return (
//         <div className=" bg-gray-200 text-left h-full w-full lg:pt-20 -mt-16">
//             <div className="w-full bg-gray-200 flex items-center justify-center my-12">
//                 <div className="bg-white shadow rounded py-12 lg:px-28 px-8">
//                     <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
//                         Update <span className="text-primary">{product?.productTitle}</span> Product
//                     </p>
//                     <form
//                         onSubmit={handleSubmit(handleUpdateProduct)}
//                         className="mb-32"
//                         action=""
//                     >
//                         <div className="md:flex items-center mt-12">
//                             <div className="md:w-72 flex flex-col">
//                                 <label className="text-base font-semibold leading-none text-gray-800">
//                                     Product Name
//                                 </label>
//                                 <input
//                                     {...register('productTitle')}
//                                     defaultValue={title}
//                                     onChange={handleTitleInput}
//                                     required
//                                     tabIndex={0}
//                                     arial-label="Please input name"
//                                     type="name"
//                                     className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-500"
//                                     placeholder="Please Input Product Name"
//                                 />
//                             </div>
//                             <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
//                                 <label className="text-base font-semibold leading-none text-gray-800">
//                                     Product Category
//                                 </label>

//                                 <select {...register('productCategory')} defaultValue={cate} onChange={handleCateInput} className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-500">
//                                     <option disabled selected>Select Product Category</option>
//                                     <option>Wind Chimes</option>
//                                     <option>Urinal Screen</option>
//                                     <option>Pest Repeller</option>
//                                     <option>Wrap Organizer</option>
//                                     <option>Scrab Brush</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <div className="md:flex items-center mt-12">
//                             <div className="md:w-72 flex flex-col">
//                                 <label className="text-base font-semibold leading-none text-gray-800">
//                                     Product Price
//                                 </label>
//                                 <input
//                                     {...register('productPrice')}
//                                     value={price}
//                                     required
//                                     onChange={handlePriceInput}
//                                     tabIndex={0}
//                                     arial-label="Please input price"
//                                     type="name"
//                                     className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-500"
//                                     placeholder="Please Input Product Price"
//                                 />
//                             </div>
//                             <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
//                                 <label className="text-base font-semibold leading-none text-gray-800">
//                                     Product Image
//                                 </label>

//                                 {
//                                     img === '' ?
//                                         <input
//                                             {...register('photoURL')}
//                                             defaultValue={img}
//                                             onChange={handleImgInput}
//                                             required
//                                             tabIndex={0}
//                                             arial-label="Please Input Price"
//                                             type="file"
//                                             className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-500"
//                                             placeholder="Please Input Product Image"
//                                         /> :
//                                         <div className="w-full h-32 rounded">
//                                             <img src={img} alt="" className="object-cover h-full rounded" />
//                                         </div>
//                                 }

//                             </div>
//                         </div>

//                         <div className="md:flex items-center mt-12">
//                             <div className="md:w-full flex flex-col">
//                                 <label className="text-base font-semibold leading-none text-gray-800">
//                                     Amazon Link
//                                 </label>
//                                 <input
//                                     {...register('amazonLink')}
//                                     defaultValue={link}
//                                     required
//                                     onChange={handleLinkInput}
//                                     tabIndex={0}
//                                     arial-label="Please input email address"
//                                     type="name"
//                                     className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-500"
//                                     placeholder="Please Input Amazon Link"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <div className="w-full flex flex-col mt-8">
//                                 <label className="text-base font-semibold leading-none text-gray-800">
//                                     Product Description
//                                 </label>
//                                 <textarea
//                                     {...register("productDescription")}
//                                     defaultValue={desc}
//                                     required
//                                     onChange={handleDescInput}
//                                     tabIndex={0}
//                                     aria-label="leave a message"
//                                     type="text"
//                                     className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200  resize-none"
//                                     placeholder="Input Product Description"
//                                 />
//                             </div>
//                         </div>

//                         <div className="flex items-center justify-around w-full">
//                             <button
//                                 onClick={handleGetValues}
//                                 type="submit"
//                                 className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-primary rounded hover:bg-warning focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:outline-none"
//                             >
//                                 get Product Values
//                             </button>
//                             <button
//                                 disabled={!get || btnSpinner}
//                                 type="submit"
//                                 className="mt-9 text-base disabled:bg-gray-300 font-semibold leading-none text-white py-4 px-10 bg-warning rounded hover:bg-primary focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:outline-none"
//                             >
//                                 Update Product
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminUpdateBlog;
