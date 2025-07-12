import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Star, MessageSquare, Calendar, User, MapPin } from 'lucide-react';
import { mockItems } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const ItemDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [showPointsModal, setShowPointsModal] = useState(false);

  const item = mockItems.find(item => item.id === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Item Not Found</h2>
          <Link to="/browse" className="text-green-600 hover:text-green-700">
            Back to Browse
          </Link>
        </div>
      </div>
    );
  }

  const conditionColors = {
    new: 'bg-green-100 text-green-800',
    'like-new': 'bg-blue-100 text-blue-800',
    good: 'bg-yellow-100 text-yellow-800',
    fair: 'bg-orange-100 text-orange-800',
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/browse"
            className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Browse
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img
                src={item.images[currentImageIndex]}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {item.images.length > 1 && (
              <div className="flex space-x-2">
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-green-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${item.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{item.title}</h1>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                    <Heart className="w-6 h-6" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${conditionColors[item.condition]}`}>
                  {item.condition.charAt(0).toUpperCase() + item.condition.slice(1)}
                </span>
                <span className="text-2xl font-bold text-green-600">{item.pointsValue} points</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{item.description}</p>

              {/* Item Specifications */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-sm font-medium text-gray-500">Category</span>
                  <p className="text-gray-900 capitalize">{item.category}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Type</span>
                  <p className="text-gray-900">{item.type}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Size</span>
                  <p className="text-gray-900">{item.size}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Listed</span>
                  <p className="text-gray-900">{formatDate(item.createdAt)}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Owner Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Item Owner</h3>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{item.uploaderName}</p>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span>4.8 (24 reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {user && user.id !== item.uploaderId && (
              <div className="space-y-3">
                <button
                  onClick={() => setShowPointsModal(true)}
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                  disabled={user.points < item.pointsValue}
                >
                  {user.points >= item.pointsValue 
                    ? `Redeem with ${item.pointsValue} Points`
                    : `Need ${item.pointsValue - user.points} more points`
                  }
                </button>
                
                <button
                  onClick={() => setShowSwapModal(true)}
                  className="w-full bg-white text-green-600 py-4 rounded-xl font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors"
                >
                  Propose a Swap
                </button>

                <button className="w-full bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Message Owner
                </button>
              </div>
            )}

            {!user && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <p className="text-yellow-800 mb-4">Sign in to request this item or propose a swap.</p>
                <div className="flex space-x-3">
                  <Link
                    to="/login"
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="flex-1 bg-white text-green-600 py-3 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors text-center"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Points Modal */}
      {showPointsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Redeem with Points</h3>
            <p className="text-gray-600 mb-6">
              You're about to redeem this item for {item.pointsValue} points. This action cannot be undone.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowPointsModal(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Confirm Redemption
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Swap Modal */}
      {showSwapModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Propose a Swap</h3>
            <p className="text-gray-600 mb-6">
              Select an item from your collection to propose as a swap for this item.
            </p>
            <div className="space-y-3 mb-6">
              <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                <p className="font-medium">Your Item 1</p>
                <p className="text-sm text-gray-500">Similar value • Good condition</p>
              </div>
              <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                <p className="font-medium">Your Item 2</p>
                <p className="text-sm text-gray-500">Higher value • Like new condition</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowSwapModal(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Send Proposal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailPage;