import React from 'react';
import { Link } from 'react-router-dom';
import { ClothingItem } from '../types';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';

interface ItemCardProps {
  item: ClothingItem;
  className?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, className = '' }) => {
  const conditionColors = {
    new: 'bg-green-100 text-green-800',
    'like-new': 'bg-blue-100 text-blue-800',
    good: 'bg-yellow-100 text-yellow-800',
    fair: 'bg-orange-100 text-orange-800',
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  return (
    <Link
      to={`/item/${item.id}`}
      className={`group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-primary-200 transition-all duration-500 hover:-translate-y-2 ${className}`}
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/20 ${conditionColors[item.condition]}`}>
            {item.condition}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
            {item.pointsValue} pts
          </span>
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <ArrowRight className="w-4 h-4 text-primary-600" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-1 text-lg">
            {item.title}
          </h3>
          <span className="text-sm font-semibold text-gray-500 ml-3 flex-shrink-0 bg-gray-100 px-2 py-1 rounded-lg">
            {item.size}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center ring-2 ring-primary-200/50">
              <span className="text-xs font-bold text-primary-600">
                {item.uploaderName.charAt(0)}
              </span>
            </div>
            <span className="font-medium">{item.uploaderName}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span className="font-medium">{formatDate(item.createdAt)}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {item.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold border border-primary-200/50"
            >
              #{tag}
            </span>
          ))}
          {item.tags.length > 3 && (
            <span className="text-gray-400 text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">+{item.tags.length - 3}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;