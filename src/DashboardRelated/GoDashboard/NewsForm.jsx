// import React, { useContext, useState } from "react";
// import "react-quill/dist/quill.snow.css";
// import ReactQuill from "react-quill";
// import toast, { Toaster } from "react-hot-toast";
// import { AuthContext } from "../../AuthProvider/AuthProvider";


// const NewsForm = ({initialData,onSubmit,onCancel}) => {
//   const { user, logout, spinner, setSpinner }=useContext(AuthContext)
//   console.log(initialData);
  
//   const [newsData, setNewsData] = useState( initialData ||{
//     title: "",
//     category: "",
//     date: "",
//     description: "",
//     newsContent: "",
//     image: null,
//     email:user?.email
//   });

//   const [uploading, setUploading] = useState(false);
//   const [submitting, setSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewsData({
//       ...newsData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "photos"); // Replace with your preset
//     formData.append("cloud_name", "dmly3hx0p"); // Replace with your cloud name

//     try {
//       const response = await fetch(
//         `https://api.cloudinary.com/v1_1/dmly3hx0p/image/upload`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await response.json();
//       setNewsData({
//         ...newsData,
//         image: data.secure_url,
//       });

//       toast.success("Image uploaded successfully!");
//     } catch (error) {
//       console.error("Image upload failed:", error);
//       toast.error("Image upload failed. Please try again.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleEditorChange = (content) => {
//     setNewsData({
//       ...newsData,
//       newsContent: content,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     try {
//       const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/news-content`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newsData),
//       });

//       if (response.ok) {
//         toast.success("News submitted successfully!");
//         setNewsData({
//           title: "",
//           category: "",
//           date: "",
//           description: "",
//           newsContent: "",
//           image: null,
//         });
//       } else {
//         // const errorData = await response.json();
//         toast.error(`Failed to submit news:`);
//       }
//     } catch (error) {
//       console.error("Error submitting news:", error);
//       toast.error("An error occurred while submitting the news.");
//     } finally {
//       setSubmitting(false);
//     }
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
//           />
//           {uploading && <p className="text-blue-500 mt-2">Uploading image...</p>}
//           {newsData.image && (
//             <div className="mt-4">
//               <img src={newsData.image} alt="Uploaded" className="w-full rounded-md" />
//             </div>
//           )}
//         </div>

//         {/* Short Description */}
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
//             Short Description
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             value={newsData.description}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             rows="4"
//             placeholder="Write a short description of the news"
//             required
//           ></textarea>
//         </div>

//         {/* News Content */}
//         <div className="mb-4">
//           <label htmlFor="newsContent" className="block text-gray-700 font-semibold mb-2">
//             News Content
//           </label>
//           <ReactQuill
//             id="newsContent"
//             value={newsData.newsContent}
//             onChange={handleEditorChange}
//             className="bg-white rounded-md"
//             placeholder="Write the news content"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="text-right">
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             disabled={submitting}
//           >
//             {submitting ? "Submitting..." : "Submit"}
//           </button>
//         </div>
//       </form>
//       <Toaster/>
//     </div>
//   );
// };

// export default NewsForm;





import React, { useContext, useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NewsForm = ({ initialData, onSubmit, onCancel }) => {
  const { user } = useContext(AuthContext);

  const [newsData, setNewsData] = useState({
    title: "",
    category: "",
    date: "",
    description: "",
    newsContent: "",
    image: null,
    email: user?.email || "",
  });

  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setNewsData({
        ...newsData,
        ...initialData,
      });
    }
  }, [initialData]);

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

      toast.success("Image uploaded successfully!");
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error("Image upload failed. Please try again.");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
  
    try {
      const endpoint = initialData
        ? `${import.meta.env.VITE_BASE_URL}/api/mynews/update/${initialData._id}`
        : `${import.meta.env.VITE_BASE_URL}/api/news-content`;
  
      const method = initialData ? "PUT" : "POST";
  
      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newsData.title,
          category: newsData.category,
          date: newsData.date,
          description: newsData.description,
          newsContent: newsData.newsContent,
          image: newsData.image,
          email: newsData.email,
        }),
      });
  
      if (response.ok) {
        toast.success(
          initialData
            ? "News updated successfully!"
            : "News created successfully!"
        );
  
        if (onSubmit) {
          onSubmit(newsData);
        }
      } else {
        const errorMessage = await response.text();
        toast.error(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error(`Error ${initialData ? "updating" : "creating"} news:`, error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        {initialData ? "Update News" : "Publish News"}
      </h2>
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

        {/* Submit and Cancel Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : initialData ? "Update" : "Submit"}
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default NewsForm;
