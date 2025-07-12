import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import ItemCard from '../components/ItemCard';
import { mockItems } from '../data/mockData';
import { ClothingItem } from '../types';

const BrowsePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', 'tops', 'bottoms', 'dresses', 'outerwear', 'shoes', 'accessories'];
  const conditions = ['all', 'new', 'like-new', 'good', 'fair'];
  const sizes = ['all', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'One Size'];

  const filteredItems = mockItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesCondition = selectedCondition === 'all' || item.condition === selectedCondition;
    const matchesSize = selectedSize === 'all' || item.size === selectedSize;

    return matchesSearch && matchesCategory && matchesCondition && matchesSize;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50/40 to-accent-50/30">
      <div className="container-custom py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold gradient-text mb-4 animate-fadeIn">Browse Items</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Discover amazing clothing items shared by our community</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/90 backdrop-blur-lg border border-primary-200/50 shadow-xl rounded-2xl p-8 mb-12 animate-slideUp bg-gradient-to-r from-white via-primary-50/20 to-secondary-50/20">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400 w-5 h-5 group-focus-within:text-secondary-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search items, brands, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-primary-200 rounded-xl focus:ring-4 focus:ring-secondary-500/30 focus:border-secondary-500 transition-all duration-300 bg-white/90 backdrop-blur-sm text-lg shadow-sm"
                />
              </div>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center px-6 py-4 border-2 border-primary-300 rounded-xl hover:bg-primary-50 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl text-primary-700 font-medium"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filters
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-4 border-2 border-primary-200 rounded-xl focus:ring-4 focus:ring-secondary-500/30 focus:border-secondary-500 transition-all duration-300 bg-white/90 backdrop-blur-sm text-base font-medium min-w-[160px] shadow-sm hover:shadow-md"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>

              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="px-4 py-4 border-2 border-primary-200 rounded-xl focus:ring-4 focus:ring-secondary-500/30 focus:border-secondary-500 transition-all duration-300 bg-white/90 backdrop-blur-sm text-base font-medium min-w-[160px] shadow-sm hover:shadow-md"
              >
                {conditions.map((condition) => (
                  <option key={condition} value={condition}>
                    {condition === 'all' ? 'All Conditions' : condition.charAt(0).toUpperCase() + condition.slice(1)}
                  </option>
                ))}
              </select>

              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="px-4 py-4 border-2 border-primary-200 rounded-xl focus:ring-4 focus:ring-secondary-500/30 focus:border-secondary-500 transition-all duration-300 bg-white/90 backdrop-blur-sm text-base font-medium min-w-[120px] shadow-sm hover:shadow-md"
              >
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size === 'all' ? 'All Sizes' : size}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-6 pt-6 border-t border-primary-200/50">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-4 focus:ring-secondary-500/30 focus:border-secondary-500 transition-all duration-300 bg-white/90 backdrop-blur-sm text-base font-medium shadow-sm hover:shadow-md"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                  <select
                    value={selectedCondition}
                    onChange={(e) => setSelectedCondition(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-4 focus:ring-secondary-500/30 focus:border-secondary-500 transition-all duration-300 bg-white/90 backdrop-blur-sm text-base font-medium shadow-sm hover:shadow-md"
                  >
                    {conditions.map((condition) => (
                      <option key={condition} value={condition}>
                        {condition === 'all' ? 'All Conditions' : condition.charAt(0).toUpperCase() + condition.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-4 focus:ring-secondary-500/30 focus:border-secondary-500 transition-all duration-300 bg-white/90 backdrop-blur-sm text-base font-medium shadow-sm hover:shadow-md"
                  >
                    {sizes.map((size) => (
                      <option key={size} value={size}>
                        {size === 'all' ? 'All Sizes' : size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fadeIn">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-secondary-200 via-primary-200 to-accent-200 rounded-full flex items-center justify-center shadow-xl border-4 border-white/50">
              <Search className="w-12 h-12 text-secondary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No items found</h3>
            <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">Try adjusting your search or filters to find what you're looking for.</p>
            <div className="mt-8">
              <button
                onClick={() => {
                   setSearchTerm('');
                   setSelectedCategory('');
                   setSelectedCondition('');
                   setSelectedSize('');
                 }}
                className="btn-primary"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowsePage;