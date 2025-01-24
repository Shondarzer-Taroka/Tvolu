


import  { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddDonation = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    collected: '',
    target: '',
    image: '',
    category: '',
    email: user?.email || '',
  });
  const [isUploading, setIsUploading] = useState(false);

  // Handle input change for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload to Cloudinary
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageData = new FormData();
    imageData.append('file', file);
    imageData.append('upload_preset', 'photos'); // Replace with your Cloudinary preset
    imageData.append('cloud_name', 'dmly3hx0p'); // Replace with your Cloudinary cloud name

    setIsUploading(true);
    toast.loading('Uploading image...');

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dmly3hx0p/image/upload', {
        method: 'POST',
        body: imageData,
      });

      const data = await response.json();
      setFormData((prev) => ({ ...prev, image: data.secure_url }));
      setIsUploading(false);
      toast.dismiss();
      toast.success('Image uploaded successfully!');
    } catch (error) {
      console.error('Image upload failed:', error);
      setIsUploading(false);
      toast.dismiss();
      toast.error('Image upload failed. Please try again.');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      toast.error('Please upload an image before submitting.');
      return;
    }

    try {
      toast.loading('Submitting donation...');
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/donations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create donation');
      }

      const result = await response.json();
      console.log('Donation created:', result);
      toast.dismiss();
      toast.success('Donation created successfully!');
      setFormData({
        title: '',
        description: '',
        collected: '',
        target: '',
        image: '',
        category: '',
        email: user?.email || '',
      });
    } catch (error) {
      console.error('Error creating donation:', error);
      toast.dismiss();
      toast.error('Error creating donation. Please try again.');
    }
  };

  return (
    <div>
      {/* Hot-toast container */}
      <Toaster position="top-center" reverseOrder={false} />

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg space-y-4 max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Create a Donation Card</h2>

        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter card title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter card description"
            rows="3"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Collected Amount</label>
          <input
            type="number"
            name="collected"
            value={formData.collected}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter collected amount"
            min="0"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Target Amount</label>
          <input
            type="number"
            name="target"
            value={formData.target}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter target amount"
            min="1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Social">Social</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          disabled={isUploading}
        >
          {isUploading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default AddDonation;

