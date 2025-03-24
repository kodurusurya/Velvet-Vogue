// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu, X, LogOut, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileMenuOpen && !event.target.closest('.profile-menu-container')) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileMenuOpen]);

  const handleLogout = () => {
    // Implement manual logout if context logout isn't working
    console.log('Logging out...');
    
    // Clear auth token
    localStorage.removeItem('token');
    
    // Clear any authentication headers
    if (window.axios && window.axios.defaults) {
      window.axios.defaults.headers.common['x-auth-token'] = null;
    }
    
    // Redirect to home page
    navigate('/');
    
    // Force page reload to clear any cached state
    window.location.reload();
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  // Only show welcome message if token actually exists and we have user data
  const showWelcomeMessage = localStorage.getItem('token') && user && user.name;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-serif text-gray-900">VELVET VOGUE</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-gray-600 hover:text-gray-900">
              Shop
            </Link>
            <Link to="/new-arrivals" className="text-gray-600 hover:text-gray-900">
              New Arrivals
            </Link>
            <Link to="/collections" className="text-gray-600 hover:text-gray-900">
              Collections
            </Link>
          </div>

          {/* Icons and User Welcome */}
          <div className="hidden md:flex items-center space-x-6">
            <Search className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-600" />
            
            {showWelcomeMessage ? (
              <div className="relative profile-menu-container">
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <span className="mr-2">Welcome, {user.name.split(' ')[0]}!</span>
                  <User className="h-6 w-6" />
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link 
                      to="/dashboard" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link 
                      to="/orders" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <User className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-600" />
              </Link>
            )}
            
            <Link to="/cart" className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-600" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-gray-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/shop"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/new-arrivals"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals
            </Link>
            <Link
              to="/collections"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </Link>
            {showWelcomeMessage && (
              <div className="px-3 py-2 text-base font-medium text-gray-600">
                Welcome, {user.name.split(' ')[0]}!
              </div>
            )}
            <div className="flex items-center space-x-4 px-3 py-2">
              <Search className="h-6 w-6 text-gray-400" />
              {showWelcomeMessage ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="text-gray-600 hover:text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-6 w-6" />
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <LogOut className="h-6 w-6" />
                  </button>
                </>
              ) : (
                <Link 
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-6 w-6 text-gray-400" />
                </Link>
              )}
              <Link 
                to="/cart" 
                className="relative"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="h-6 w-6 text-gray-400" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;