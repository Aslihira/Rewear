import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, Users, Award, Sparkles, Search } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import ItemCard from '../components/ItemCard';
import { mockItems } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const LandingPage: React.FC = () => {
  const { user } = useAuth();
  const featuredItems = mockItems.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden from-primary-50 via-white to-secondary-50 section-padding">
        {/* Spline 3D Background */}
        <div className="absolute inset-0 w-full h-full">
          <Spline 
            scene="https://prod.spline.design/N6VS-pL6bCmWvrFf/scene.splinecode" 
            className="w-full h-full object-cover opacity-60"
            style={{
              filter: 'none',
              backdropFilter: 'none'
            }}
          />
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-200/30 to-success-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container-custom relative">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-success-100 to-primary-100 text-success-800 px-6 py-3 rounded-full text-sm font-semibold border border-success-200/50 shadow-lg animate-bounce-gentle">
                <Sparkles className="w-5 h-5 text-success-600" />
                <span>Sustainable Fashion Revolution</span>
              </div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-8 leading-tight text-shadow">
              Give Your Clothes a{' '}
              <span className="relative inline-block">
                <span className="gradient-text">Second Life</span>
                <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-primary-300/60 via-secondary-300/60 to-accent-300/60 rounded-full animate-pulse"></div>
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
              Join our community of eco-conscious fashion lovers. Swap, trade, and discover amazing pre-loved clothing while reducing textile waste.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
              <Link
                to={user ? "/browse" : "/signup"}
                className="btn-primary text-lg px-10 py-4 group"
              >
                Start Swapping
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/browse"
                className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm text-primary-600 px-10 py-4 rounded-xl text-lg font-semibold border-2 border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Browse Items
                <Search className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/30 via-transparent to-secondary-50/30"></div>
        <div className="container-custom relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center group animate-fade-in">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-success-100 to-success-200 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Recycle className="w-10 h-10 text-success-600 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-success-400/20 rounded-2xl blur-lg group-hover:bg-success-500/30 transition-all duration-300"></div>
              </div>
              <h3 className="text-4xl lg:text-5xl font-display font-bold bg-gradient-to-r from-success-600 to-primary-600 bg-clip-text text-transparent mb-3">15,000+</h3>
              <p className="text-gray-600 font-semibold text-lg">Items Exchanged</p>
            </div>
            
            <div className="text-center group animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Users className="w-10 h-10 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-primary-400/20 rounded-2xl blur-lg group-hover:bg-primary-500/30 transition-all duration-300"></div>
              </div>
              <h3 className="text-4xl lg:text-5xl font-display font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-3">5,200+</h3>
              <p className="text-gray-600 font-semibold text-lg">Active Members</p>
            </div>
            
            <div className="text-center group animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Award className="w-10 h-10 text-accent-600 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-accent-400/20 rounded-2xl blur-lg group-hover:bg-accent-500/30 transition-all duration-300"></div>
              </div>
              <h3 className="text-4xl lg:text-5xl font-display font-bold bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent mb-3">98%</h3>
              <p className="text-gray-600 font-semibold text-lg">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-secondary-200/20 to-accent-200/20 rounded-full blur-3xl"></div>
        <div className="container-custom relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 text-shadow">
              <span className="gradient-text">Featured</span> Items
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Discover amazing pre-loved fashion pieces from our community of style enthusiasts
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredItems.map((item, index) => (
              <div key={item.id} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <ItemCard item={item} className="card-hover" />
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in">
            <Link
              to="/browse"
              className="inline-flex items-center justify-center btn-primary text-lg px-10 py-4 group shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              View All Items
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-to-br from-white via-primary-50/20 to-secondary-50/20 relative overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent-200/20 to-success-200/20 rounded-full blur-3xl"></div>
        <div className="container-custom relative">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 text-shadow">
              How <span className="gradient-text">ReWear</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Simple steps to start your sustainable fashion journey and make a positive impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="text-center group animate-slide-up">
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                <span className="text-3xl font-display font-bold text-primary-600">1</span>
                <div className="absolute inset-0 bg-primary-400/20 rounded-3xl blur-lg group-hover:bg-primary-500/30 transition-all duration-300"></div>
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                List Your Items
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Upload photos and details of clothes you no longer wear. Earn points for each approved listing and help build our community.
              </p>
            </div>
            
            <div className="text-center group animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-3xl mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                <span className="text-3xl font-display font-bold text-secondary-600">2</span>
                <div className="absolute inset-0 bg-secondary-400/20 rounded-3xl blur-lg group-hover:bg-secondary-500/30 transition-all duration-300"></div>
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Browse & Discover
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Explore thousands of unique pieces from our community. Find your next favorite outfit and discover new styles.
              </p>
            </div>
            
            <div className="text-center group animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent-100 to-accent-200 rounded-3xl mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                <span className="text-3xl font-display font-bold text-accent-600">3</span>
                <div className="absolute inset-0 bg-accent-400/20 rounded-3xl blur-lg group-hover:bg-accent-500/30 transition-all duration-300"></div>
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Swap or Redeem
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Use points to get items you love or propose direct swaps with other members. Create meaningful fashion exchanges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <div className="animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-white mb-8 text-shadow-lg leading-tight">
              Ready to Transform Your{' '}
              <span className="relative inline-block">
                Wardrobe?
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"></div>
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
              Join thousands of fashion lovers making sustainable choices every day and be part of the circular fashion revolution.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
            {!user && (
              <Link
                to="/signup"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group"
              >
                Join ReWear Today
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            
            <Link
              to={user ? "/add-item" : "/browse"}
              className="inline-flex items-center justify-center bg-transparent text-white px-10 py-4 rounded-xl text-lg font-bold border-2 border-white/50 hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl group"
            >
              {user ? "List Your First Item" : "Explore Items"}
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;