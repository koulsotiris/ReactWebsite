import './AboutUsSection.css';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="about-outer">
      <div className="about-inner">
        <motion.div 
          className="about-phone-frame"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="phone-top-notch">
            <div className="camera"></div>
          </div>

          <div className="about-phone-header">
            <span className="header-title">FitBro App</span>
          </div>

          <div className="about-phone-screen">
            <h2>About FitBro</h2>
            <p>
              FitBro isn’t just a fitness app — it’s your pocket-sized personal coach.
              Our mission is to help you take control of your fitness through smart tracking, 
              personalized plans, and motivational insights.
            </p>
            <p>
              Our mission is to empower people everywhere to take control of their health and build long-lasting habits that improve quality of life. 
              We believe fitness should be fun, flexible, and accessible to all.
            </p>
            <p className="signature">— The FitBro Team </p>
          </div>

        </motion.div>

        <div className="about-image-side">
          <img src="/photos/fitbro-about.jpg" alt="FitBro Visual" />
        </div>
      </div>
    </section>
  );
}


