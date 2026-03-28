export const COLORS = {
  primary: "#1B4D6E",
  primaryLight: "#2A6F97",
  primaryDark: "#0F3048",
  accent: "#E8763A",
  accentLight: "#F09A68",
  warm: "#F7F3EE",
  warmDark: "#EDE5DA",
  success: "#2D9C6F",
  text: "#1A1A2E",
  textLight: "#4A4A68",
  textMuted: "#7A7A96",
  border: "#E2DED8",
};

export const FORMSPREE_DEMO = "https://formspree.io/f/YOUR_DEMO_FORM_ID";
export const FORMSPREE_CONTACT = "https://formspree.io/f/YOUR_CONTACT_FORM_ID";
export const CALENDLY_URL = "https://calendly.com/YOUR_CALENDLY_LINK";
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export const CONTACT_INFO = {
  email: "brent@authorizationiq.ai",
  phone: "(330) 883-7131",
  name: "Brent Whetstone",
  title: "Founder, Donation Advocates",
};

export const PRODUCTS = [
  {
    id: "predict",
    name: "aIQ Predict",
    subtitle: "Predictive Analytics Engine",
    icon: "Target",
    color: COLORS.primary,
    colorKey: "primary",
    shortDesc:
      "Predictive analytics that analyze historical data, demographic factors, and case variables to forecast authorization likelihood and recommend optimal approach strategies.",
    longDesc:
      "aIQ Predict harnesses the power of historical data, demographic variables, and case-specific factors to forecast authorization likelihood before the first family conversation begins.",
    features: [
      "Analyze 50+ variables per case to predict authorization probability",
      "Identify optimal approach timing and strategy recommendations",
      "Surface demographic and cultural factors that influence outcomes",
      "Provide risk scores that help coordinators prepare more effectively",
      "Generate data-driven approach plans tailored to each case",
    ],
    audience: "OPO Executives & Clinical Directors",
    video: "/videos/aIQ-Predict.mp4",
  },
  {
    id: "navigator",
    name: "aIQ Navigator",
    subtitle: "AI Conversation Support",
    icon: "MessageCircle",
    color: COLORS.accent,
    colorKey: "accent",
    shortDesc:
      "Real-time AI conversation support that guides donation coordinators through family discussions with evidence-based prompts, cultural sensitivity, and emotional intelligence.",
    longDesc:
      "aIQ Navigator provides real-time, AI-powered guidance during family conversations — helping coordinators navigate the most emotionally complex discussions with confidence, cultural sensitivity, and evidence-based support.",
    features: [
      "Real-time conversation prompts and suggested approaches",
      "Cultural sensitivity guidelines based on family demographics",
      "Emotional intelligence cues and de-escalation strategies",
      "Evidence-based talking points tailored to each situation",
      "Post-conversation analysis and improvement suggestions",
    ],
    audience: "Donation Coordinators",
    video: "/videos/aIQ-Navigator.mp4",
  },
  {
    id: "insights",
    name: "aIQ Insights",
    subtitle: "Performance Dashboards",
    icon: "BarChart3",
    color: COLORS.success,
    colorKey: "success",
    shortDesc:
      "Comprehensive performance dashboards that give leadership real-time visibility into authorization metrics, team performance, and outcome trends across the organization.",
    longDesc:
      "aIQ Insights gives OPO leadership the visibility they need to understand performance trends, identify optimization opportunities, and make data-driven decisions about team development and resource allocation.",
    features: [
      "Real-time authorization rate tracking across teams",
      "Performance benchmarking against regional and national metrics",
      "Team and individual coordinator performance analytics",
      "Trend analysis and predictive outcome modeling",
      "Custom reports for board presentations and CMS reporting",
    ],
    audience: "OPO Leadership & Hospital Partners",
    video: "/videos/aIQ-Insights.mp4",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Data Integration",
    desc: "Securely connects with existing OPO systems via HIPAA-compliant APIs — no rip-and-replace required.",
    icon: "Database",
  },
  {
    num: "02",
    title: "Predictive Analysis",
    desc: "Processes 50+ case variables to generate a real-time authorization likelihood score and recommended approach strategy.",
    icon: "Target",
  },
  {
    num: "03",
    title: "Coordinator Support",
    desc: "aIQ Navigator provides live, evidence-based guidance to coordinators during every family conversation.",
    icon: "MessageCircle",
  },
  {
    num: "04",
    title: "Performance Insights",
    desc: "Every outcome is aggregated into aIQ Insights, giving leadership real-time visibility into trends and team performance.",
    icon: "BarChart3",
  },
  {
    num: "05",
    title: "Continuous Learning",
    desc: "The platform learns from every case, improving its predictive models and conversation guidance over time.",
    icon: "TrendingUp",
  },
];
