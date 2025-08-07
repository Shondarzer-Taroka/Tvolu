import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { format } from 'date-fns';
import { FaArrowLeft, FaShareAlt, FaFacebook, FaTwitter, FaLinkedin, FaRegClock } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';

const SuccessStoryDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedStories, setRelatedStories] = useState([]);
  const [isSharing, setIsSharing] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/success-stories/${id}`);
        setStory(response.data);
        
        // Fetch related stories (optional)
        const relatedResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/success-stories`, {
          params: {
            limit: 3,
            exclude: id
          }
        });
        setRelatedStories(relatedResponse.data.stories);
      } catch (error) {
        console.error('Error fetching story:', error);
        toast.error('Failed to load story. Please try again later.');
        navigate('/success-stories');
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id, navigate]);

  const handleShare = () => {
    setIsSharing(!isSharing);
  };

  const shareOnSocial = (platform) => {
    const url = window.location.href;
    const title = story?.title || 'Amazing Volunteer Success Story';
    const text = story?.storyContent.substring(0, 100) || 'Check out this inspiring volunteer story';

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text)}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
    setIsSharing(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
    setIsSharing(false);
  };

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  if (loading) {
    return (
      <div className="md:h-[700px]flex items-center justify-center bg-gray-50">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="md:h-[700px]flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Story not found</h2>
          <button 
            onClick={() => navigate('/success-stories')}
            className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Back to Stories
          </button>
        </div>
      </div>
    );
  }

  // Check if story has multiple images
  const hasMultipleImages = story.images && story.images.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:h-[700px]bg-gray-50"
    >
      {/* Navigation Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate('/success-stories')}
            className="flex items-center text-orange-600 hover:text-orange-700 font-medium"
          >
            <FaArrowLeft className="mr-2" />
            Back to Stories
          </button>
          <div className="relative">
            <button
              onClick={handleShare}
              className="flex items-center text-gray-600 hover:text-orange-600 font-medium"
            >
              <FaShareAlt className="mr-2" />
              Share
            </button>
            {isSharing && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200"
              >
                <button
                  onClick={() => shareOnSocial('facebook')}
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <FaFacebook className="mr-2 text-blue-600" />
                  Facebook
                </button>
                <button
                  onClick={() => shareOnSocial('twitter')}
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <FaTwitter className="mr-2 text-blue-400" />
                  Twitter
                </button>
                <button
                  onClick={() => shareOnSocial('linkedin')}
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <FaLinkedin className="mr-2 text-blue-700" />
                  LinkedIn
                </button>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <span className="mr-2">🔗</span>
                  Copy Link
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Story Header */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="flex items-center mr-4">
              <FaRegClock className="mr-1" />
              {story.readTime || 4} min read
            </span>
            <span>
              Published on {format(new Date(story.createdAt), 'MMMM d, yyyy')}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{story.title}</h1>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={story.authorImage || 'https://ui-avatars.com/api/?name=' + story.name}
                alt={story.name}
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{story.name}</p>
              {story.location && (
                <p className="flex items-center text-sm text-gray-500">
                  <MdLocationOn className="mr-1" />
                  {story.location}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg relative">
          <img
            src={hasMultipleImages ? story.images[currentImageIndex] : story.imageUrl || 'https://images.unsplash.com/photo-1521791136064-7986c2920216'}
            alt={story.title}
            className="w-full h-96 object-cover"
          />
          {hasMultipleImages && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {story.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-orange-500' : 'bg-white bg-opacity-60'}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Story Content */}
        <article className="prose prose-lg max-w-none mx-auto mb-12">
          <div dangerouslySetInnerHTML={{ __html: story.storyContent }} />
        </article>

        {/* Impact Section */}
        {story.impact && (
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {story.impact.peopleReached && (
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <HiUserGroup className="mx-auto text-4xl text-orange-500 mb-3" />
                  <p className="text-3xl font-bold text-gray-900">{story.impact.peopleReached}</p>
                  <p className="text-gray-600">People Reached</p>
                </div>
              )}
              {story.impact.hoursVolunteered && (
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <FaRegClock className="mx-auto text-4xl text-orange-500 mb-3" />
                  <p className="text-3xl font-bold text-gray-900">{story.impact.hoursVolunteered}</p>
                  <p className="text-gray-600">Hours Volunteered</p>
                </div>
              )}
              {story.impact.fundsRaised && (
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <span className="mx-auto text-4xl text-orange-500 mb-3">$</span>
                  <p className="text-3xl font-bold text-gray-900">{story.impact.fundsRaised}</p>
                  <p className="text-gray-600">Funds Raised</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Testimonial */}
        {story.testimonial && (
          <div className="mb-12">
            <blockquote className="border-l-4 border-orange-500 pl-6 py-2 italic text-xl text-gray-700">
              "{story.testimonial}"
              {story.testimonialAuthor && (
                <footer className="mt-4 not-italic font-medium text-gray-900">
                  — {story.testimonialAuthor}
                  {story.testimonialRole && (
                    <span className="text-gray-600">, {story.testimonialRole}</span>
                  )}
                </footer>
              )}
            </blockquote>
          </div>
        )}

        {/* Gallery */}
        {story.gallery && story.gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {story.gallery.map((image, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-lg overflow-hidden shadow-md cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Related Stories */}
        {relatedStories.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More Inspiring Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedStories.map((relatedStory) => (
                <motion.div
                  key={relatedStory._id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
                  onClick={() => navigate(`/success-stories/${relatedStory._id}`)}
                >
                  <img 
                    src={relatedStory.imageUrl || 'https://images.unsplash.com/photo-1521791136064-7986c2920216'} 
                    alt={relatedStory.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>{format(new Date(relatedStory.createdAt), 'MMM d, yyyy')}</span>
                      <span>{relatedStory.readTime || 4} min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{relatedStory.title}</h3>
                    <p className="text-gray-600 line-clamp-2">{relatedStory.storyContent.substring(0, 150)}...</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Inspired by this story?</h2>
          <p className="text-lg mb-6">Join our community and make your own impact today.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate('/volunteer')}
              className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Become a Volunteer
            </button>
            <button
              onClick={() => navigate('/donate')}
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Make a Donation
            </button>
          </div>
        </div>
      </main>

      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </motion.div>
  );
};

export default SuccessStoryDetailPage;