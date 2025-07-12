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

## 📁 Project Structure

```bash
ReWear/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── itemController.js
│   │   ├── swapController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Item.js
│   │   └── Swap.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── items.js
│   │   ├── swaps.js
│   │   └── users.js
│   ├── utils/
│   │   └── helpers.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── App.js
│   ├── package.json
│   └── ...
├── README.md
├── SETUP.md
└── .gitignore



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

## 🏗 Technical Stack

### Frontend
- *React 18* with TypeScript
- *Tailwind CSS* for responsive styling
- *Three.js* for 3D interactive elements
- *React Router* for navigation
- *Axios* for API communication

### Backend
- *Node.js* with Express.js
- *PostgreSQL* for database management
- *JWT* for authentication
- *bcryptjs* for password hashing
- *CORS* for cross-origin requests
- *dotenv* for environment variables

### Development Tools
- *Thunder Client* for API testing
- *Git* for version control
- *ESLint* and *Prettier* for code quality

## 🔌 API Endpoints

### Authentication
- POST /api/auth/signup - User registration
- POST /api/auth/login - User login

### User Management
- GET /api/users/me - Get current user profile
- PUT /api/users/me - Update user profile

### Items
- GET /api/items/ - Get all items
- POST /api/items/ - Create new item
- GET /api/items/:id - Get specific item
- PUT /api/items/:id - Update item
- DELETE /api/items/:id - Delete item

### Swaps
- GET /api/swaps/ - Get user's swaps
- POST /api/swaps/ - Create new swap request
- PUT /api/swaps/:id - Update swap status
- DELETE /api/swaps/:id - Cancel swap

## 🗄 Database Schema

### Users Table
sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    points INTEGER DEFAULT 100,
    size_preferences JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


### Items Table
sql
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    size VARCHAR(50),
    condition VARCHAR(50),
    brand VARCHAR(100),
    images JSONB,
    points_value INTEGER DEFAULT 50,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


### Swaps Table
sql
CREATE TABLE swaps (
    id SERIAL PRIMARY KEY,
    requester_id INTEGER REFERENCES users(id),
    owner_id INTEGER REFERENCES users(id),
    item_id INTEGER REFERENCES items(id),
    offered_item_id INTEGER REFERENCES items(id),
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Installation

1. *Clone the repository*
   bash
   git clone https://github.com/yourusername/rewear.git
   cd rewear
   

2. *Backend Setup*
   bash
   cd backend
   npm install
   
   # Create .env file
   cp .env.example .env
   # Configure your database credentials in .env
   
   # Start the server
   npm start
   

3. *Frontend Setup*
   bash
   cd frontend
   npm install
   
   # Start development server
   npm start
   

### Environment Variables
Create a .env file in the backend directory:
env
DATABASE_URL=postgresql://username:password@localhost:5432/rewear
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development


## 🧪 API Testing

The backend APIs have been thoroughly tested using Thunder Client with the following verified endpoints:

- ✅ User Signup (POST /api/auth/signup) - 201 status
- ✅ User Login (POST /api/auth/login) - 200 status
- ✅ Get User Profile (GET /api/users/me) - 200 status
- ✅ Create Item (POST /api/items/) - 201 status
- ✅ Get Items (GET /api/items/) - 200 status
- ✅ Create Swap (POST /api/swaps/) - 201 status
- ✅ Get Swaps (GET /api/swaps/) - 200 status

*Server Status*: ✅ Running on port 5000 with PostgreSQL connected

## 🌟 Value Proposition

### For Users
- *Sustainable Fashion*: Reduce textile waste and environmental impact
- *Cost-Effective*: Exchange clothes without spending money
- *Unique Finds*: Discover one-of-a-kind pieces from other users
- *Community Building*: Connect with like-minded fashion enthusiasts
- *Engaging Experience*: Interactive 3D interface that makes swapping fun

### For Environment
- *Waste Reduction*: Extend clothing lifecycle
- *Carbon Footprint*: Reduce demand for new textile production
- *Circular Economy*: Promote reuse over disposal
- *Awareness*: Educate users about sustainable fashion practices

## 📈 Development Status

### ✅ Completed Features
- Backend API development with PostgreSQL
- User authentication system
- Item management functionality
- Swap system implementation
- Database schema design
- API testing and validation

### 🚧 In Progress
- Frontend React application
- 3D interactive features with Three.js
- User interface design
- Integration between frontend and backend

### 📋 Upcoming Features
- Image upload functionality
- Real-time notifications
- Advanced search and filtering
- Mobile responsiveness
- Admin dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add some amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team Collaboration

### Development Workflow
- Regular stand-ups and progress updates
- Code reviews and pair programming
- Agile development methodology
- Continuous integration and testing

### Communication
- Discord for daily communication
- GitHub for code collaboration
- Trello for project management
- Regular mentor meetings

## 🔮 Future Vision

### Upcoming Features
- AI-powered style recommendations
- Enhanced virtual try-on capabilities
- Local community swap events
- Mobile application development
- Advanced sustainability metrics

### Long-term Goals
- Expand to global markets
- Partner with sustainable fashion brands
- Implement blockchain-based item authenticity
- Create comprehensive sustainability education platform

---

*ReWear* - Transforming Fashion, One Swap at a Time 🌍✨

Built with passion for sustainability and innovation by Team ReWear

Last Updated: July 2025
