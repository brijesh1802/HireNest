import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { X } from "lucide-react";

const ForgotPassword = ({ closeModal }) => {
  const { userType } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!email) return;

    setLoading(true);
    setError("");

    // API URL based on userType
    const url =
      userType === "candidate"
        ? `${import.meta.env.VITE_BASE_URL}/api/v1/candidates/forgot-password`
        : `${import.meta.env.VITE_BASE_URL}/api/v1/employers/forgot-password`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Password reset link sent successfully!"); // Show success alert
        closeModal(); // Close modal after success
      } else {
        setError(data.msg || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative bg-white p-8 sm:w-96 max-w-full rounded-lg shadow-lg">
        {/* Close Button */}
        <X
          className="absolute top-4 right-4 text-gray-900 p-1 hover:cursor-pointer hover:bg-gray-200 rounded-full"
          onClick={closeModal}
        />

        {/* Modal Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Forgot Password
        </h2>

        {/* Input Field */}
        <div className="relative mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2 pl-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            required
          />
        </div>

        {/* Error Message Inside Modal */}
        {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className={`w-full py-2 text-white bg-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
            !email ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600"
          }`}
          disabled={!email}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        {/* Back to Login */}
        <p className="text-sm text-gray-500 mt-4">
          Remember your password?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={closeModal}
          >
            Back to Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
