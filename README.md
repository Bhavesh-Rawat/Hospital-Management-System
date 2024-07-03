# Hospital Management System

This is a full-stack hospital management system developed using the MERN stack (MongoDB, Express.js, React, Node.js). The system includes features for managing patient and doctor appointment scheduling and automated email confirmations.

## Features

- **Patient and Doctor Management**: Efficiently manage patient and doctor information.
- **Appointment Scheduling**: Patients can schedule appointments with doctors.
- **Automated Email Confirmations**: Automated emails are sent to patients upon appointment booking to improve communication.
- **User Authentication**: Secure user login and registration.
- **Responsive Design**: Designed to be responsive and user-friendly.

## Technologies Used

- **MongoDB**: Database management
- **Express.js**: Backend API development
- **React**: Frontend user interfaces
- **Node.js**: Server-side scripting

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- **Node.js**: Download from [Node.js official website](https://nodejs.org/).
- **MongoDB**: Download from [MongoDB official website](https://www.mongodb.com/).

### Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/YourUsername/hospital-management-system.git
   cd hospital-management-system
   ```

2. **Install NPM packages**
   ```sh
   cd backend
   npm install
   cd ..
   cd frontend
   npm install
   cd ..
   cd dashboard
   npm install
   ```

3. **Configure Environment Variables**
   Edit the `.env` file located at `backend/config/config.env` and add your MongoDB URI and other necessary environment variables.
   ```sh
   MONGO_URI=your_mongo_db_url
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   ```

4. **Run the application**
   ```sh
   # Run backend
   npm run backend
   
   # Run frontend
   npm run frontend

   # Run dashboard
   npm run dashboard
   ```

## Usage

1. **Register/Login**: Users can register and log in to access the system.
2. **Manage Patients and Doctors**: Add, view, and update patient and doctor details.
3. **Schedule Appointments**: Patients can book appointments with doctors.
4. **Receive Email Confirmations**: Automated email confirmations are sent to patients upon booking.

## Demonstration

Watch the video demonstration of the project [here](https://drive.google.com/file/d/1pnGDt-1ueaYScVB4GW2p9XwuHx-LRlhm/view).

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**
