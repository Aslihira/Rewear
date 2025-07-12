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
