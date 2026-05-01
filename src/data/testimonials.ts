import { iTestimonial } from '../components/ui/retro-testimonial';

type TestimonialDetails = {
  [key: string]: iTestimonial & { id: string };
};

export const testimonialData = {
  ids: [
    "testimonial-001",
    "testimonial-002",
    "testimonial-003",
    "testimonial-004",
    "testimonial-005",
    "testimonial-006",
  ],
  details: {
    "testimonial-001": {
      id: "testimonial-001",
      description:
        "The interpreter training program gave me the confidence and skills to start my career in medical interpreting. The hands-on practice with real scenarios was invaluable. I now work full-time at a major hospital.",
      profileImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
      name: "Maria Rodriguez",
      designation: "Certified Medical Interpreter, Memorial Hospital",
    },
    "testimonial-002": {
      id: "testimonial-002",
      description:
        "As someone who struggled with English in professional settings, the ESL for Professionals course transformed my career. I went from avoiding meetings to leading presentations. The investment paid for itself within months through my promotion.",
      profileImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
      name: "Ahmed Hassan",
      designation: "Senior Project Manager, Global Tech Solutions",
    },
    "testimonial-003": {
      id: "testimonial-003",
      description:
        "The corporate training we received was exceptional. Our entire team improved their cross-cultural communication skills, which directly impacted our international client relationships. Highly recommend for any global organization.",
      profileImage:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop",
      name: "Jennifer Chen",
      designation: "VP of International Operations, Healthcare Innovations",
    },
    "testimonial-004": {
      id: "testimonial-004",
      description:
        "Hanane's teaching style is incredibly effective. She combines theoretical knowledge with practical application in a way that makes learning natural. The 60-hour Community Interpreter Training prepared me for certification and real-world challenges.",
      profileImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
      name: "Carlos Mendez",
      designation: "Community Interpreter, Department of Social Services",
    },
    "testimonial-005": {
      id: "testimonial-005",
      description:
        "I enrolled in the Medical Interpreter Fundamentals course and it exceeded all expectations. The curriculum is comprehensive, the instructors are experienced professionals, and the certification is respected in the healthcare industry.",
      profileImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
      name: "Lisa Patel",
      designation: "Medical Interpreter, City Medical Center",
    },
    "testimonial-006": {
      id: "testimonial-006",
      description:
        "The Professional Communication program helped me land my dream job at an international company. The skills I learned about global meeting etiquette and cross-cultural negotiation have been essential to my success.",
      profileImage:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop",
      name: "David Kim",
      designation: "International Business Development Manager, Fortune 500",
    },
  } as TestimonialDetails,
};
