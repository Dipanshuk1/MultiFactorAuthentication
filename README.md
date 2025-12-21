Multi-Factor Authentication (MFA) System – MERN Stack
A secure, production-ready Multi-Factor Authentication system built using the MERN stack that adds an extra layer of security beyond traditional username/password login.
This project demonstrates real-world authentication flows, OTP verification, JWT-based authorization, and secure backend design — commonly used in modern fintech, SaaS, and enterprise applications.

  Live Features Overview
✔️ User Registration & Login
✔️ Password Hashing & Secure Storage
✔️ OTP-Based Second Factor Authentication
✔️ Email OTP Verification
✔️ JWT-Based Authentication
✔️ Protected Routes
✔️ Role-Ready Authorization Structure
✔️ Clean & Modular Code Architecture

  Why This Project Matters
In real-world applications, password-only authentication is not enough.
This project simulates how companies like banks, fintech apps, and enterprise platforms secure user accounts using Multi-Factor Authentication (MFA).

🏗️ Tech Stack Used
Frontend
React.js
Axios
React Router DOM
Modern Component-Based Architecture
Backend
Node.js
Express.js
MongoDB + Mongoose
JWT (JSON Web Tokens)
bcrypt.js (Password Hashing)
Nodemailer (OTP Email Service)

🔐 Authentication Flow (How It Works)
Step 1: User Registration
User registers with email & password
Password is hashed using bcrypt
User data is stored securely in MongoDB
Step 2: Login (Factor 1)
User enters email & password
Backend validates credentials
Step 3: OTP Generation (Factor 2)
A time-based OTP is generated
OTP is sent to user's registered email
OTP stored temporarily for verification
Step 4: OTP Verification
User submits OTP
Backend validates OTP
On success, JWT token is issued
Step 5: Authorized Access
JWT token is used to access protected routes
Token is verified on each request
🗂️ Project Structure
Multi_Factor_Authentication/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│
├── .env
├── package.json
└── README.md
🛡️ Security Best Practices Implemented
🔒 Password hashing with bcrypt
🔐 JWT-based authentication
⏳ OTP expiry handling
🚫 Protected routes using middleware
📧 Secure email-based OTP delivery
🧱 Scalable authorization structure
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Dipanshuk1/Multi_Factor_Authentication.git
2️⃣ Backend Setup
cd backend
npm install
npm start
Create a .env file:
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
3️⃣ Frontend Setup
cd frontend
npm install
npm start
🧪 API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login (Password check)
POST	/api/auth/verify-otp	Verify OTP
GET	/api/auth/protected	Protected route
📈 Possible Enhancements
SMS-based OTP (Twilio)
Google Authenticator (TOTP)
Refresh Token Implementation
Account Lockout on Failed Attempts
Rate Limiting & Brute Force Protection
Dockerized Deployment

📬 Contact
Dipanshu Kumar
💼 MERN Stack Developer
🔗 GitHub: https://github.com/Dipanshuk1
⭐ If You Like This Project
Give it a ⭐ — it motivates me to build more real-world projects!