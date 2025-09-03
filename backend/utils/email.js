import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Send OTP email
 * @param {string} to - recipient email
 * @param {string} otp - generated OTP
 */
export const sendOtpEmail = async (to, otp) => {
  try {
    const mailOptions = {
      from: `"MFA App" <${process.env.EMAIL_USER}>`,
      to,
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}. It will expire in 5 minutes.`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ OTP sent to ${to}`);
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    throw new Error("Email could not be sent");
  }
};
