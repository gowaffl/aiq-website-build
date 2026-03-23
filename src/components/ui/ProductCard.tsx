import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, MessageCircle, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = { Target, MessageCircle, BarChart3 };

interface ProductCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  link: string;
}

export default function ProductCard({
  icon,
  title,
  subtitle,
  description,
  color,
  link,
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[icon as keyof typeof iconMap];

  return (
    <Link
      to={link}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block bg-white rounded-2xl p-8 border-2 transition-all duration-300 ease-out no-underline group"
      style={{
        borderColor: hovered ? color : "#E2DED8",
        boxShadow: hovered
          ? `0 20px 48px ${color}25`
          : "0 2px 8px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      {/* Icon */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300"
        style={{
          backgroundColor: hovered ? `${color}18` : `${color}10`,
          color: color,
        }}
      >
        {Icon && <Icon size={28} />}
      </div>

      {/* Subtitle tag */}
      <span
        className="inline-block text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 transition-colors duration-300"
        style={{
          backgroundColor: `${color}12`,
          color: color,
        }}
      >
        {subtitle}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed text-sm mb-6">{description}</p>

      {/* Hover CTA */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-2 text-sm font-semibold"
        style={{ color }}
      >
        Learn more <ArrowRight size={14} />
      </motion.div>
    </Link>
  );
}
