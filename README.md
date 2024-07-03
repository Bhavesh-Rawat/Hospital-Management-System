# Hospital Management System

This is a full-stack hospital management system developed using the MERN stack (MongoDB, Express.js, React, Node.js). The system includes features for managing patient and doctor appointment scheduling and automated email confirmations.

## Features

- **Patient and Doctor Management**: Manage patient and doctor information efficiently.
- **Appointment Scheduling**: Patients can schedule appointments with doctors.
- **Automated Email Confirmations**: Automated emails are sent to patients upon appointment booking to improve communication.
- **User Authentication**: Secure user login and registration.
- **Responsive Design**: The system is designed to be responsive and user-friendly.

## Technologies Used

- **MongoDB**: Database management
- **Express.js**: Backend API development
- **React**: Frontend user interfaces
- **Node.js**: Server-side scripting

## Installation

To get a local copy up and running follow these simple steps.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from [Node.js official website](https://nodejs.org/).
- **MongoDB**: Ensure you have MongoDB installed and running. You can download it from [MongoDB official website](https://www.mongodb.com/).

### Setup

1. **Clone the repo**
   ```sh
   git clone https://github.com/YourUsername/hospital-management-system.git
   cd hospital-management-system
   ```

2. **Install NPM packages**
   ```sh
   cd backend
   npm install
   cd  .. 
   cd frontend
   npm install
   cd  ..
   cd dashboard
   npm install
   ```

3. **Edit .env file present in backend\config\config.env**
   Edit the `.env` file present in backend\config\config.env and add your MongoDB URI and other necessary environment variables.
   ```sh
   MONGO_URI= Paste your mongo db url here
   CLOUDINARY_CLOUD_NAME= your CLOUDINARY CLOUD NAME
   CLOUDINARY_API_SECRET= API Secret Key
   CLOUDINARY_API_KEY= API KEY
   ```

4. **Run the application**
   ```sh
   # Run backend
   npm run backend
   
   # Run frontend
   npm run frontend

   #Run dashboard
   npm run dashboard
   ```

## Usage

1. **Register/Login**: Users can register and log in to access the system.
2. **Manage Patients and Doctors**: Add, view, and update patient and doctor details.
3. **Schedule Appointments**: Patients can book appointments with doctors.
4. **Receive Email Confirmations**: Automated email confirmations are sent to patients upon booking.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

