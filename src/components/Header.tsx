import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Recycle, User, Plus, Search, LogOut, BarChart3 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="glass-effect shadow-lg border-b border-white/30 sticky top-0 z-50 backdrop-blur-xl">
      <div className="container-custom">
        <div className="flex justify-between items-center h-18">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Recycle className="h-9 w-9 text-primary-600 group-hover:text-primary-700 transition-all duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-primary-600/20 rounded-full blur-lg group-hover:bg-primary-700/30 transition-all duration-300"></div>
            </div>
            <span className="text-2xl font-display font-bold gradient-text">ReWear</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/browse"
              className={`relative text-sm font-semibold transition-all duration-300 ${
                isActive('/browse')
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              } group`}
            >
              Browse Items
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-300 ${
                isActive('/browse') ? 'w-full' : 'group-hover:w-full'
              }`}></span>
            </Link>
            {user && (
              <>
                <Link
                  to="/add-item"
                  className={`relative text-sm font-semibold transition-all duration-300 ${
                    isActive('/add-item')
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  } group`}
                >
                  List Item
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-300 ${
                    isActive('/add-item') ? 'w-full' : 'group-hover:w-full'
                  }`}></span>
                </Link>
                <Link
                  to="/dashboard"
                  className={`relative text-sm font-semibold transition-all duration-300 ${
                    isActive('/dashboard')
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  } group`}
                >
                  Dashboard
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-300 ${
                    isActive('/dashboard') ? 'w-full' : 'group-hover:w-full'
                  }`}></span>
                </Link>
              </>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-success-50 to-primary-50 px-4 py-2 rounded-full border border-success-200/50">
                  <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold bg-gradient-to-r from-success-600 to-primary-600 bg-clip-text text-transparent">
                    {user.points} points
                  </span>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center ring-2 ring-primary-200/50 group-hover:ring-primary-300/70 transition-all duration-300">
                      <User className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-success-400 to-success-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="hidden sm:block text-sm font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                    {user.name}
                  </span>
                </div>

                {user.isAdmin && (
                  <Link
                    to="/admin"
                    className="p-2.5 text-gray-600 hover:text-accent-600 hover:bg-accent-50 rounded-xl transition-all duration-300"
                    title="Admin Panel"
                  >
                    <BarChart3 className="w-5 h-5" />
                  </Link>
                )}

                <button
                  onClick={logout}
                  className="p-2.5 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-300"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-sm font-semibold text-gray-700 hover:text-primary-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-primary-50"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="btn-primary text-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;