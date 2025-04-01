import './FeatureSection.css';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUtensils, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    title: "Workout Tracker",
    icon: <FaDumbbell className="feature-icon" />,
    description: "Track your daily workouts, set goals, and monitor your progress with ease.",
  },
  {
    title: "Meal Planner",
    icon: <FaUtensils className="feature-icon" />,
    description: "Get personalized meal plans that suit your fitness goals and preferences.",
  },
  {
    title: "Progress Insights",
    icon: <FaChartLine className="feature-icon" />,
    description: "Visualize your fitness journey with progress charts and analytics.",
  },
  {
    title: "Data Privacy",
    icon: <FaShieldAlt className="feature-icon" />,
    description: "Your data is safe with us. We prioritize your privacy and security.",
  },
];

export default function FeatureSection() {
  return (
    <section className="features-section">
    <motion.h2 
      className="features-title"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Why <span>FitBro</span> Hits Different
    </motion.h2>

    <div className="features-grid">
      {features.map((feature, index) => (
        <motion.div
          className="feature-card"
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-name">{feature.title}</h3>
          <p className="feature-desc">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
  );
}
