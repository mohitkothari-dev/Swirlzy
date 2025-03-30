import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

// Define common props interface
interface AnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

// Fade in animation
export const FadeIn: React.FC<AnimationProps> = ({ children, delay = 0, duration = 0.5 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

// Slide up animation
export const SlideUp: React.FC<AnimationProps> = ({ children, delay = 0, duration = 0.5 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

// Scale animation
export const ScaleIn: React.FC<AnimationProps> = ({ children, delay = 0, duration = 0.5 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

// Staggered children animation
interface StaggerProps {
  children: ReactNode;
  staggerChildren?: number;
}

export const StaggerContainer: React.FC<StaggerProps> = ({ children, staggerChildren = 0.1 }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren,
        },
      },
    }}
    initial="hidden"
    animate="show"
  >
    {children}
  </motion.div>
);

// Child item for staggered animations
interface StaggerItemProps {
  children: ReactNode;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ children }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    }}
  >
    {children}
  </motion.div>
);

// Hover animation for buttons and cards
interface HoverScaleProps {
  children: ReactNode;
  scale?: number;
}

export const HoverScale: React.FC<HoverScaleProps> = ({ children, scale = 1.05 }) => (
  <motion.div
    whileHover={{ scale }}
    whileTap={{ scale: 0.98 }}
    className="cursor-pointer"
  >
    {children}
  </motion.div>
);

// Rotating animation
interface RotateProps {
  children: ReactNode;
  duration?: number;
}

export const Rotate: React.FC<RotateProps> = ({ children, duration = 20 }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      ease: "linear" 
    }}
  >
    {children}
  </motion.div>
);

// Floating animation
interface FloatProps {
  children: ReactNode;
  duration?: number;
  y?: number;
}

export const Float: React.FC<FloatProps> = ({ children, duration = 3, y = 10 }) => (
  <motion.div
    animate={{ y: [-y, y, -y] }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      repeatType: "reverse" 
    }}
  >
    {children}
  </motion.div>
);