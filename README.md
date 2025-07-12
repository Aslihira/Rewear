# ReWear - Sustainable Fashion Exchange Platform 🌱👗

## Overview
ReWear is a revolutionary web-based platform that transforms how we think about fashion sustainability. By enabling users to exchange unused clothing through direct swaps or a point-based redemption system, we're creating a circular economy for fashion that reduces textile waste and promotes conscious consumption.

## 👥 Team

### Frontend Development
- *Devam Gandhi* - Lead Frontend Developer
  - React architecture and component development
  - User interface design and experience optimization
  
- *Prem Rana* - Frontend Developer & 3D Specialist
  - Three.js implementation and 3D animations
  - Interactive elements and visual effects

### Backend Development
- *Vrunda Thakkar* - Backend Lead & System Architecture
  - Node.js API development and system design
  - Authentication and integration management
  
- *Arpi Patel* - Database Engineer & Backend Developer
  - PostgreSQL database design and optimization
  - Data modeling and API development

## ✨ Key Features

### 🔐 User Authentication
- Secure email/password registration and login  
- Profile management with size preferences  
- Points balance tracking  
- JWT-based authentication system  

### 🏠 Landing Page
- Compelling platform introduction  
- Clear calls-to-action: "Start Swapping", "Browse Items", "List an Item"  
- Featured items carousel showcasing popular exchanges  
- Environmental impact statistics  

### 📊 User Dashboard
- Personal profile with points balance  
- Uploaded items overview with status tracking  
- Ongoing and completed swaps history  
- *Virtual Closet* - Interactive 3D floating grid of user's items  

### 🛍 Item Management
- Detailed item pages with image galleries  
- Comprehensive item information (size, condition, brand, category)  
- Swap request and points redemption options  
- Enhanced item cards with hover effects  

### 🔄 Swap System
- Direct item-to-item exchanges  
- Points-based redemption system  
- *Animated swap confirmations* with visual feedback  
- Real-time swap status updates  

### 🛡 Admin Panel
- Item listing moderation and approval  
- Spam and inappropriate content removal  
- User management capabilities  
- Platform analytics dashboard  

---

## 🎯 3D Interactive Features

### Virtual Closet Experience
- *Floating Items Grid*: User's clothing items displayed in a magical 3D floating grid  
- *Smooth Animations*: Items gently bob and rotate in 3D space  
- *Interactive Hover Effects*: Items lift up and glow when hovered  
- *Category Filtering*: Smooth transitions when filtering by clothing type  

### Enhanced User Experience
- *Swap Success Animation*: Celebratory 3D effects when trades are completed  
- *Points Visualization*: Floating coin animations when earning/spending points  
- *Interactive Item Cards*: Enhanced browsing with 3D hover effects throughout the platform  

---

## 🏗 Technical Stack

### Frontend
- **React 18** with TypeScript  
- **Tailwind CSS** for responsive styling  
- **Three.js** for 3D interactive elements  
- **React Router** for navigation  
- **Axios** for API communication  

### Backend
- **Node.js** with Express.js  
- **PostgreSQL** for database management  
- **JWT** for authentication  
- **bcryptjs** for password hashing  
- **CORS** for cross-origin requests  
- **dotenv** for environment variables  

### Development Tools
- **Thunder Client** for API testing  
- **Git** for version control  
- **ESLint** and **Prettier** for code quality  

---

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration  
- `POST /api/auth/login` - User login  

### User Management
- `GET /api/users/me` - Get current user profile  
- `PUT /api/users/me` - Update user profile  

### Items
- `GET /api/items/` - Get all items  
- `POST /api/items/` - Create new item  
- `GET /api/items/:id` - Get specific item  
- `PUT /api/items/:id` - Update item  
- `DELETE /api/items/:id` - Delete item  

### Swaps
- `GET /api/swaps/` - Get user's swaps  
- `POST /api/swaps/` - Create new swap request  
- `PUT /api/swaps/:id` - Update swap status  
- `DELETE /api/swaps/:id` - Cancel swap  

---
