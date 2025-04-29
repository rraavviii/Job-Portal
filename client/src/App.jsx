import './App.css';
import { motion } from 'framer-motion';

const features = [
  "🔐 User Authentication (Login/Register)",
  "🏢 Company Profiles",
  "💼 Job Listings & Search",
  "📄 Apply to Jobs",
  "📊 Admin Dashboard",
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-200 p-10">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 uppercase tracking-wider mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Job Portal Frontend Coming Soon 🚀
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        We're building a responsive and modern interface to help users find and apply for jobs, manage profiles, and more.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            <h2 className="text-xl font-semibold text-gray-800">{feature}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
