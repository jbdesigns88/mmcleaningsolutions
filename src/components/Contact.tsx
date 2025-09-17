 

export default function Contact() {
  return (
    <div className="w-full max-w-md mx-auto text-center p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Us</h2>
      <p className="text-gray-600 mb-4">
        Have questions or need help? Reach us anytime at:
      </p>
      <a
        href="mailto:mmsanitationsolutions@gmail.com"
        className="inline-block text-purple-700 font-medium underline hover:text-purple-500 transition"
      >
       mmsanitationsolutions@gmail.com
      </a>
    </div>
  );
}
