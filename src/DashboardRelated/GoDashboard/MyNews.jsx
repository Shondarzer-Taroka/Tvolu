// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaTrashAlt } from 'react-icons/fa';
// import { AuthContext } from '../../AuthProvider/AuthProvider';

// const MyNews = () => {
//   const [news, setNews] = useState([]);
//   const {user}=useContext(AuthContext)
//   const [loading,setLoading]=useState(true)
//   // Fetch data from the API
//   console.log(news);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         setLoading(true)
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/mynews/${user?.email}`); // Replace with dynamic email if needed
//         setNews(response.data);
//         setLoading(false)
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }

//     };
//     fetchNews();
//   }, [user?.email]);

//   // Handle delete operation
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/mynews/${id}`);
//       setNews((prevNews) => prevNews.filter((item) => item._id !== id));
//     } catch (error) {
//       console.error('Error deleting news:', error);
//     }
//   };

//   if (loading) {
//     return <h1>loading.....</h1>
//   }
//   if (news.length===0) {
//     return <h1>No data found</h1>
//   }
//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">My News</h1>
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 px-4 py-2">Title</th>
//               <th className="border border-gray-300 px-4 py-2">Email</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {news.length>0 && news.map((item) => (
//               <tr key={item._id} className="hover:bg-gray-100">
//                 <td className="border border-gray-300 px-4 py-2">{item.title}</td>
//                 <td className="border border-gray-300 px-4 py-2">{item.email}</td>
//                 <td className="border border-gray-300 px-4 py-2 text-center">
//                   <button
//                     className="text-red-500 hover:text-red-700"
//                     onClick={() => handleDelete(item._id)}
//                   >
//                     <FaTrashAlt />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     // <div></div>
//   );
// };

// export default MyNews;






// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaTrashAlt } from 'react-icons/fa';
// import { AuthContext } from '../../AuthProvider/AuthProvider';
// import toast, { Toaster } from 'react-hot-toast'; // Import React Hot Toast

// const MyNews = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showDialog, setShowDialog] = useState(false);
//   const [selectedId, setSelectedId] = useState(null);
//   const { user } = useContext(AuthContext);

//   // Fetch data from the API
//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `${import.meta.env.VITE_BASE_URL}/api/mynews/${user?.email}`
//         );
//         setNews(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };
//     fetchNews();
//   }, [user?.email]);

//   // Open the confirmation dialog
//   const confirmDelete = (id) => {
//     setSelectedId(id);
//     setShowDialog(true);
//   };

//   // Handle delete operation
//   const handleDelete = async () => {
//     try {
//       await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/mynews/${selectedId}`);
//       setNews((prevNews) => prevNews.filter((item) => item._id !== selectedId));
//       toast.success('News deleted successfully!');
//     } catch (error) {
//       console.error('Error deleting news:', error);
//       toast.error('Failed to delete news. Please try again.');
//     } finally {
//       setShowDialog(false);
//       setSelectedId(null);
//     }
//   };

//   if (loading) return <h1>Loading...</h1>;
//   if (news.length === 0) return <h1>No data found</h1>;

//   return (
//     <div className="p-4">
//       <Toaster /> {/* Render toast notifications */}
//       <h1 className="text-xl font-bold mb-4">My News</h1>
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 px-4 py-2">Title</th>
//               <th className="border border-gray-300 px-4 py-2">Email</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {news.map((item) => (
//               <tr key={item._id} className="hover:bg-gray-100">
//                 <td className="border border-gray-300 px-4 py-2">{item.title}</td>
//                 <td className="border border-gray-300 px-4 py-2">{item.email}</td>
//                 <td className="border border-gray-300 px-4 py-2 text-center">
//                   <button
//                     className="text-red-500 hover:text-red-700"
//                     onClick={() => confirmDelete(item._id)}
//                   >
//                     <FaTrashAlt />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Custom Confirmation Dialog */}
//       {showDialog && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
//             <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
//             <p className="text-gray-700 mb-6">
//               Are you sure you want to delete this news? This action cannot be undone.
//             </p>
//             <div className="flex justify-end space-x-4">
//               <button
//                 className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
//                 onClick={() => setShowDialog(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded"
//                 onClick={handleDelete}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyNews;













import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import NewsForm from './NewsForm';

const MyNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingNews, setEditingNews] = useState(null);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/api/mynews/${user?.email}`
                );
                setNews(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchNews();
    }, [user?.email]);

    const confirmDelete = (id) => {
        setSelectedId(id);
        setShowDialog(true);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/mynews/${selectedId}`);
            setNews((prevNews) => prevNews.filter((item) => item._id !== selectedId));
            toast.success('News deleted successfully!');
        } catch (error) {
            console.error('Error deleting news:', error);
            toast.error('Failed to delete news. Please try again.');
        } finally {
            setShowDialog(false);
            setSelectedId(null);
        }
    };

    const openEditModal = (newsItem) => {
        setEditingNews(newsItem);
        setShowEditModal(true);
    };

    // const handleUpdate = async (updatedNews) => {
    //     try {
         
    //         const response = await axios.put(
    //             `${import.meta.env.VITE_BASE_URL}/api/mynews/${updatedNews._id}`,
    //             updatedNews
    //         );
    //         if (response.status === 200) {
    //             setNews((prevNews) =>
    //                 prevNews.map((item) =>
    //                     item._id === updatedNews._id ? response.data : item
    //                 )
    //             );
    //             toast.success('News updated successfully!');
    //             setShowEditModal(false);
    //             setEditingNews(null);
    //         }
    //     } catch (error) {
    //         console.error('Error updating news:', error);
    //         toast.error('Failed to update news. Please try again.');
    //     }
    // };




    const handleUpdate = async (updatedNews) => {
        try {
          const response = await axios.put(
            `${import.meta.env.VITE_BASE_URL}/api/mynews/update/${updatedNews._id}`,
            updatedNews
          );
          
          if (response.status === 200) {
            setNews((prevNews) =>
              prevNews.map((item) =>
                item._id === updatedNews._id ? response.data : item
              )
            );
            // toast.success('News updated successfully!');
            setShowEditModal(false);
            setEditingNews(null);
          }
        } catch (error) {
          console.error('Error updating news:', error);
          toast.error('Failed to update news. Please try again.');
        }
      };
      
 
    

    if (loading) return <h1>Loading...</h1>;
    if (news.length === 0) return <h1>No data found</h1>;

    return (
        <div className="p-4">
            <Toaster />
            <h1 className="text-xl font-bold mb-4">My News</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {news.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.email}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button
                                        className="text-blue-500 hover:text-blue-700 mr-4"
                                        onClick={() => openEditModal(item)}
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => confirmDelete(item._id)}
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showEditModal && editingNews && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full overflow-auto max-h-[90vh]">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Edit News</h2>
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                onClick={() => setShowEditModal(false)}
                            >
                                X
                            </button>
                        </div>
                        <NewsForm
                            initialData={editingNews}
                            onSubmit={handleUpdate}
                            onCancel={() => {
                                setShowEditModal(false);
                                setEditingNews(null);
                            }}
                        />
                    </div>
                </div>
            )}

            {showDialog && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                        <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                        <p className="text-gray-700 mb-6">
                            Are you sure you want to delete this news? This action cannot be undone.
                        </p>
                        <div className="flex justify-end space-x-4">
                            <button
                                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                                onClick={() => setShowDialog(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyNews;
