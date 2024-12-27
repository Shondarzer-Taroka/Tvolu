// import React, { useState } from 'react';

// const NewsForm = () => {
//   const [newsData, setNewsData] = useState({
//     title: '',
//     category: '',
//     date: '',
//     description: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewsData({
//       ...newsData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setNewsData({
//       ...newsData,
//       image: e.target.files[0],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(newsData);
//     alert('News submitted successfully!');
//     // Add your form submission logic here
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6">Publish News</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Title */}
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={newsData.title}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter news title"
//             required
//           />
//         </div>

//         {/* Category */}
//         <div className="mb-4">
//           <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
//             Category
//           </label>
//           <select
//             id="category"
//             name="category"
//             value={newsData.category}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           >
//             <option value="">Select a category</option>
//             <option value="Charity">Charity</option>
//             <option value="Events">Events</option>
//             <option value="Updates">Updates</option>
//           </select>
//         </div>

//         {/* Date */}
//         <div className="mb-4">
//           <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
//             Date
//           </label>
//           <input
//             type="date"
//             id="date"
//             name="date"
//             value={newsData.date}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Image */}
//         <div className="mb-4">
//           <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
//             Upload Image
//           </label>
//           <input
//             type="file"
//             id="image"
//             accept="image/*"
//             onChange={handleFileChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Short Description */}
        // <div className="mb-4">
        //   <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
        //     Short Description
        //   </label>
        //   <textarea
        //     id="description"
        //     name="description"
        //     value={newsData.description}
        //     onChange={handleChange}
        //     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        //     rows="4"
        //     placeholder="Write a short description of the news"
        //     required
        //   ></textarea>
        // </div>

//         {/* Submit Button */}
//         <div className="text-right">
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NewsForm;












import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const NewsForm = () => {
  const [newsData, setNewsData] = useState({
    title: "",
    category: "",
    date: "",
    description: "",
    newsContent: "",
    image: null,
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewsData({
      ...newsData,
      [name]: value,
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "photos"); // Replace with your preset
    formData.append("cloud_name", "dmly3hx0p"); // Replace with your cloud name

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dmly3hx0p/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setNewsData({
        ...newsData,
        image: data.secure_url,
      });

      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Image upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleEditorChange = (content) => {
    setNewsData({
      ...newsData,
      newsContent: content,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newsData);
    alert("News submitted successfully!");
    // Add your form submission logic here
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Publish News</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newsData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter news title"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={newsData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a category</option>
            <option value="Charity">Charity</option>
            <option value="Events">Events</option>
            <option value="Updates">Updates</option>
          </select>
        </div>

        {/* Date */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={newsData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Image */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {uploading && <p className="text-blue-500 mt-2">Uploading image...</p>}
          {newsData.image && (
            <div className="mt-4">
              <img src={newsData.image} alt="Uploaded" className="w-full rounded-md" />
            </div>
          )}
        </div>

        {/* Short Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
            Short Description
          </label>
          <textarea
            id="description"
            name="description"
            value={newsData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Write a short description of the news"
            required
          ></textarea>
        </div>

        {/* News Content */}
        <div className="mb-4">
          <label htmlFor="newsContent" className="block text-gray-700 font-semibold mb-2">
            News Content
          </label>
          <ReactQuill
            id="newsContent"
            value={newsData.newsContent}
            onChange={handleEditorChange}
            className="bg-white rounded-md"
            placeholder="Write the news content"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsForm;
