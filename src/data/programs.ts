import { BookOpen, Globe, Users, Award, type LucideIcon } from 'lucide-react';

export interface Module {
  title: string;
  topics: string[];
  duration?: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle?: string;
  category: 'interpreting' | 'esl' | 'professional-development' | 'foreign-languages';
  icon: LucideIcon;
  color: string;
  image: string;
  shortDescription: string;
  duration: string;
  weeks?: string;
  format: string;
  classCapacity: string;
  certification?: string;
  price?: string;
  overview: string;
  whatYouWillLearn: string[];
  targetAudience: string[];
  curriculum: Module[];
  instructor: {
    name: string;
    title: string;
    bio: string;
  };
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export const programs: Program[] = [
  {
    id: 'community-interpreter-60',
    title: '60-hour Community Interpreter Training',
    subtitle: 'Professional Certification Program',
    category: 'interpreting',
    icon: BookOpen,
    color: 'from-emerald-500 to-emerald-600',
    image: 'https://cdn.mississippitoday.org/wp-content/uploads/2024/10/04191406/3X0A1134-1200x823.jpg',
    shortDescription: 'Comprehensive training for community interpreters with ethics, terminology, and practical skills development.',
    duration: '60 hours',
    weeks: '6–8 weeks',
    format: 'Hybrid — Online with in-person coaching sessions and exams only',
    classCapacity: '6–13 students',
    price: '$1,299',
    overview: 'Our 60-hour Community Interpreter Training Program is designed to prepare you for professional interpreting in legal, educational, and social service settings. This comprehensive program combines theory with extensive hands-on practice, ensuring you develop the skills needed to bridge language barriers in your community with professionalism and accuracy.',
    whatYouWillLearn: [
      'Professional ethics and standards of practice for community interpreting',
      'Consecutive and simultaneous interpreting techniques',
      'Legal and educational terminology in multiple languages',
      'Cultural competency and cross-cultural communication',
      'Memory development and note-taking strategies',
      'Sight translation and document interpretation',
      'Professional conduct in legal, educational, and social service settings',
      'Self-care and stress management for interpreters'
    ],
    targetAudience: [
      'Bilingual professionals seeking certification',
      'Community advocates and social workers',
      'Education professionals working with multilingual populations',
      'Individuals transitioning to interpreting careers',
      'Heritage speakers wanting to formalize their language skills'
    ],
    curriculum: [
      {
        title: 'Module 1: Introduction to Community Interpreting',
        duration: '8 hours',
        topics: [
          'Role and responsibilities of the community interpreter',
          'Professional ethics and code of conduct',
          'HIPAA and confidentiality requirements',
          'Interpreter positioning and protocols'
        ]
      },
      {
        title: 'Module 2: Interpreting Techniques & Skills',
        duration: '16 hours',
        topics: [
          'Consecutive interpreting fundamentals',
          'Simultaneous interpreting introduction',
          'Memory enhancement techniques',
          'Note-taking systems for interpreters',
          'Managing linguistic challenges and gaps'
        ]
      },
      {
        title: 'Module 3: Specialized Terminology',
        duration: '12 hours',
        topics: [
          'Legal terminology and court procedures',
          'Educational system terminology and IEP meetings',
          'Social services and community resources vocabulary',
          'Healthcare basics for community settings'
        ]
      },
      {
        title: 'Module 4: Cultural Competency',
        duration: '8 hours',
        topics: [
          'Cross-cultural communication principles',
          'Cultural mediation vs. interpreting',
          'Understanding cultural context in interpretation',
          'Managing cultural differences professionally'
        ]
      },
      {
        title: 'Module 5: Professional Practice',
        duration: '12 hours',
        topics: [
          'Sight translation techniques',
          'Handling difficult situations and conflict',
          'Building your interpreting business',
          'Professional development and continuing education',
          'Self-care and vicarious trauma prevention'
        ]
      },
      {
        title: 'Module 6: Practical Application & Assessment',
        duration: '4 hours',
        topics: [
          'Role-play scenarios and simulations',
          'Performance evaluation and feedback',
          'Certification preparation',
          'Final assessment and review'
        ]
      }
    ],
    instructor: {
      name: 'Hanane Benalia, MBA',
      title: 'Founder & Lead Instructor',
      bio: 'Hanane Benalia, MBA brings over 15 years of experience in language education and interpreter training. With extensive background in cross-cultural communication, she has trained hundreds of professional interpreters who now serve communities across the country.'
    },
    testimonial: {
      text: 'This program transformed my bilingual skills into a professional career. The hands-on practice and expert feedback prepared me for real-world interpreting situations. I now work confidently in legal and educational settings.',
      author: 'Maria Rodriguez',
      role: 'Certified Community Interpreter'
    }
  },
  {
    id: 'medical-interpreter-40',
    title: '40-hour Medical Interpreter Fundamentals',
    subtitle: 'Healthcare Communication Certification',
    category: 'interpreting',
    icon: BookOpen,
    color: 'from-emerald-500 to-emerald-600',
    image: 'https://patch.com/img/cdn20/users/2725512/20180216/090634/styles/raw/public/processed_images/istock_000018458918_large-1518788973-2879.jpg',
    shortDescription: 'Specialized training for medical interpreters focusing on healthcare terminology, ethics, and patient-centered communication.',
    duration: '40 hours',
    weeks: '6–8 weeks',
    format: 'Hybrid — Online with in-person coaching sessions and exams only',
    classCapacity: '6–13 students',
    certification: 'Certificate in Medical Interpreter Fundamentals — Healthcare communication certification meeting industry standards',
    price: '$999',
    overview: 'The 40-Hour Medical Interpreter Fundamentals program provides essential training for interpreters working in healthcare settings. This specialized program covers medical terminology, healthcare systems, patient-centered communication, and the unique ethical considerations of medical interpreting. Includes individual coaching sessions to refine your skills.',
    whatYouWillLearn: [
      'Medical terminology across body systems and specialties',
      'HIPAA compliance and patient confidentiality',
      'Ethical challenges specific to medical interpreting',
      'Consecutive and simultaneous interpreting in medical contexts',
      'Cultural considerations in healthcare',
      'Anatomy and physiology basics for interpreters',
      'Mental health terminology and sensitive communication',
      'Professional boundaries in healthcare settings'
    ],
    targetAudience: [
      'Bilingual healthcare workers seeking certification',
      'Community interpreters expanding to medical settings',
      'Healthcare professionals with language skills',
      'Recent graduates entering the interpreting field',
      'Experienced interpreters specializing in healthcare'
    ],
    curriculum: [
      {
        title: 'Module 1: Healthcare Systems & Ethics',
        duration: '8 hours',
        topics: [
          'US healthcare system overview',
          'Medical interpreter role and scope',
          'HIPAA and patient privacy laws',
          'Ethical dilemmas in medical interpreting',
          'Professional standards and certification pathways'
        ]
      },
      {
        title: 'Module 2: Medical Terminology Foundation',
        duration: '12 hours',
        topics: [
          'Body systems and anatomical terminology',
          'Common diseases and conditions',
          'Diagnostic procedures and tests',
          'Pharmaceutical terminology and prescriptions',
          'Medical abbreviations and documentation'
        ]
      },
      {
        title: 'Module 3: Interpreting in Clinical Settings',
        duration: '10 hours',
        topics: [
          'Patient interviews and history taking',
          'Informed consent interpretation',
          'Mental health and sensitive topics',
          'Pediatric and geriatric communication',
          'Emergency and trauma situations'
        ]
      },
      {
        title: 'Module 4: Cultural Competency in Healthcare',
        duration: '6 hours',
        topics: [
          'Cultural beliefs about health and illness',
          'Traditional medicine and complementary practices',
          'Health literacy considerations',
          'Religious and cultural considerations in treatment'
        ]
      },
      {
        title: 'Module 5: Professional Skills & Practice',
        duration: '4 hours',
        topics: [
          'Medical sight translation',
          'Telephone and video remote interpreting',
          'Self-care and compassion fatigue',
          'Building your medical interpreting career',
          '1:1 coaching sessions (individual feedback)'
        ]
      }
    ],
    instructor: {
      name: 'Hanane Benalia, MBA',
      title: 'Founder & Lead Instructor',
      bio: 'Hanane Benalia, MBA brings over 15 years of experience in language education and interpreter training. With extensive background in cross-cultural communication, she has trained hundreds of professional interpreters who now serve communities across the country.'
    },
    testimonial: {
      text: 'The medical terminology and practical scenarios were invaluable. The 1:1 coaching helped me overcome my challenges and build confidence. I passed my certification exam on the first try!',
      author: 'Ahmed Hassan',
      role: 'Certified Medical Interpreter'
    }
  },
  {
    id: 'esl-beginner',
    title: 'ESL for Professionals: Beginner Level',
    subtitle: '10-Week Intensive Program',
    category: 'esl',
    icon: Globe,
    color: 'from-blue-600 to-blue-700',
    image: 'https://images.pexels.com/photos/18955789/pexels-photo-18955789.jpeg',
    shortDescription: 'Build foundational English skills for workplace success. Perfect for professionals starting their English learning journey.',
    duration: '20 hours',
    weeks: '10 weeks',
    format: 'Hybrid — Online with in-person coaching sessions and exams only',
    classCapacity: '6–13 students',
    price: '$599',
    overview: 'Our ESL Beginner program is designed specifically for working professionals who need to build English language skills for career advancement. This 10-week intensive course focuses on practical workplace communication, helping you gain confidence in professional settings while building a strong foundation in English grammar and vocabulary.',
    whatYouWillLearn: [
      'Basic English grammar and sentence structure',
      'Essential workplace vocabulary and phrases',
      'Professional email writing fundamentals',
      'Telephone communication basics',
      'Meeting participation and small talk',
      'Reading and understanding workplace documents',
      'Pronunciation and accent reduction basics',
      'Cultural norms in English-speaking workplaces'
    ],
    targetAudience: [
      'International professionals new to English-speaking environments',
      'Employees seeking career advancement through English proficiency',
      'Skilled immigrants entering the US workforce',
      'Business professionals preparing for relocation',
      'Anyone starting their English learning journey for work'
    ],
    curriculum: [
      {
        title: 'Weeks 1-2: Foundations & Introductions',
        topics: [
          'Basic grammar: present tense, pronouns, articles',
          'Introducing yourself professionally',
          'Common workplace greetings and small talk',
          'Numbers, dates, and time expressions',
          'Basic email structure'
        ]
      },
      {
        title: 'Weeks 3-4: Workplace Communication',
        topics: [
          'Asking and answering questions at work',
          'Following instructions and directions',
          'Describing your job and responsibilities',
          'Office vocabulary and common phrases',
          'Simple phone conversations'
        ]
      },
      {
        title: 'Weeks 5-6: Written Communication',
        topics: [
          'Writing professional emails',
          'Filling out forms and documents',
          'Understanding workplace notices and memos',
          'Past tense for reporting completed work',
          'Basic business writing conventions'
        ]
      },
      {
        title: 'Weeks 7-8: Meetings & Collaboration',
        topics: [
          'Understanding meeting agendas and discussions',
          'Expressing opinions and preferences',
          'Agreeing, disagreeing, and clarifying politely',
          'Working with colleagues in English',
          'Time management vocabulary'
        ]
      },
      {
        title: 'Weeks 9-10: Professional Development',
        topics: [
          'Talking about skills and experience',
          'Making requests and offers',
          'Problem-solving language',
          'Cultural awareness in the workplace',
          'Final project: workplace presentation',
          'Level assessment and next steps'
        ]
      }
    ],
    instructor: {
      name: 'Hanane Benalia, MBA',
      title: 'Founder & Lead Instructor',
      bio: 'Hanane Benalia, MBA brings over 15 years of experience in language education and interpreter training. With extensive background in cross-cultural communication, she has trained hundreds of professional interpreters who now serve communities across the country.'
    },
    testimonial: {
      text: 'This course gave me the confidence to speak English at work. The focus on workplace situations made everything immediately useful. I got promoted within 6 months of completing the program!',
      author: 'Lin Chen',
      role: 'Project Coordinator'
    }
  },
  {
    id: 'esl-intermediate',
    title: 'ESL for Professionals: Intermediate Level',
    subtitle: '10-Week Intensive Program',
    category: 'esl',
    icon: Globe,
    color: 'from-blue-600 to-blue-700',
    image: 'https://images.pexels.com/photos/6340630/pexels-photo-6340630.jpeg',
    shortDescription: 'Enhance your business English skills and workplace confidence. Ideal for professionals with basic English looking to advance.',
    duration: '20 hours',
    weeks: '10 weeks',
    format: 'Hybrid — Online with in-person coaching sessions and exams only',
    classCapacity: '6–13 students',
    price: '$699',
    overview: 'The Intermediate ESL program builds on foundational English skills to develop more sophisticated workplace communication abilities. This course focuses on business English, professional writing, presentation skills, and the cultural nuances of English-speaking work environments. Perfect for professionals ready to take their careers to the next level.',
    whatYouWillLearn: [
      'Advanced grammar for professional communication',
      'Business email and report writing',
      'Presentation skills and public speaking',
      'Negotiation and persuasion language',
      'Professional networking in English',
      'Understanding complex workplace documents',
      'Accent refinement and clarity',
      'Cross-cultural business communication'
    ],
    targetAudience: [
      'Professionals with basic English seeking advancement',
      'Managers and team leaders',
      'Business owners communicating with English-speaking clients',
      'Employees preparing for international assignments',
      'Anyone transitioning to English-speaking professional roles'
    ],
    curriculum: [
      {
        title: 'Weeks 1-2: Professional Communication',
        topics: [
          'Complex sentence structures and conjunctions',
          'Formal vs. informal professional language',
          'Advanced email writing and tone',
          'Scheduling and coordinating meetings',
          'Professional voicemail and messaging'
        ]
      },
      {
        title: 'Weeks 3-4: Business Writing',
        topics: [
          'Writing reports and proposals',
          'Creating professional presentations',
          'Business correspondence etiquette',
          'Editing and proofreading skills',
          'Persuasive writing techniques'
        ]
      },
      {
        title: 'Weeks 5-6: Meetings & Presentations',
        topics: [
          'Leading and participating in meetings',
          'Presenting ideas clearly and confidently',
          'Using visual aids effectively',
          'Handling questions and feedback',
          'Debate and discussion skills'
        ]
      },
      {
        title: 'Weeks 7-8: Negotiation & Problem-Solving',
        topics: [
          'Negotiation language and strategies',
          'Conflict resolution at work',
          'Making and responding to suggestions',
          'Decision-making discussions',
          'Diplomatic language for difficult situations'
        ]
      },
      {
        title: 'Weeks 9-10: Professional Excellence',
        topics: [
          'Networking and professional relationships',
          'Job interview skills in English',
          'Understanding workplace culture and politics',
          'Leadership communication',
          'Final project: business presentation',
          'Level assessment and advancement planning'
        ]
      }
    ],
    instructor: {
      name: 'Hanane Benalia, MBA',
      title: 'Founder & Lead Instructor',
      bio: 'Hanane Benalia, MBA brings over 15 years of experience in language education and interpreter training. With extensive background in cross-cultural communication, she has trained hundreds of professional interpreters who now serve communities across the country.'
    },
    testimonial: {
      text: 'The business English focus was exactly what I needed. I can now lead meetings, write reports, and present to executives with confidence. This program was a game-changer for my career.',
      author: 'Priya Sharma',
      role: 'Operations Manager'
    }
  },
  {
    id: 'esl-advanced',
    title: 'ESL for Professionals: Advanced Level',
    subtitle: '10-Week Intensive Program',
    category: 'esl',
    icon: Globe,
    color: 'from-blue-600 to-blue-700',
    image: 'https://images.pexels.com/photos/7433898/pexels-photo-7433898.jpeg',
    shortDescription: 'Master executive-level English communication. For professionals ready to lead and influence in English-speaking environments.',
    duration: '20 hours',
    weeks: '10 weeks',
    format: 'Hybrid — Online with in-person coaching sessions and exams only',
    classCapacity: '6–13 students',
    price: '$799',
    overview: 'Our Advanced ESL program is designed for accomplished professionals who need executive-level English communication skills. This course focuses on sophisticated business communication, strategic thinking in English, advanced writing, and the subtle nuances of high-level professional interactions. Prepare to lead, influence, and excel in English-speaking business environments.',
    whatYouWillLearn: [
      'Executive-level business communication',
      'Advanced presentation and public speaking',
      'Strategic writing and persuasive communication',
      'Cross-cultural leadership communication',
      'Nuanced understanding of idioms and expressions',
      'Complex negotiation and influence strategies',
      'Professional networking at senior levels',
      'English for specific industries and sectors'
    ],
    targetAudience: [
      'Senior managers and executives',
      'Professionals working in international contexts',
      'Business leaders managing English-speaking teams',
      'Consultants and advisors',
      'Anyone seeking C-suite level English proficiency'
    ],
    curriculum: [
      {
        title: 'Weeks 1-2: Executive Communication',
        topics: [
          'Strategic communication for leaders',
          'Influencing and persuading senior stakeholders',
          'Executive presence in English',
          'High-stakes presentation skills',
          'Managing difficult conversations'
        ]
      },
      {
        title: 'Weeks 3-4: Advanced Business Writing',
        topics: [
          'Executive summaries and briefs',
          'Strategic proposals and white papers',
          'Crisis communication writing',
          'Thought leadership content',
          'Professional editing and style'
        ]
      },
      {
        title: 'Weeks 5-6: Leadership & Influence',
        topics: [
          'Leading cross-cultural teams in English',
          'Change management communication',
          'Inspiring and motivating others',
          'Strategic storytelling for business',
          'Managing organizational politics'
        ]
      },
      {
        title: 'Weeks 7-8: Complex Negotiations',
        topics: [
          'High-level negotiation strategies',
          'Multi-party negotiation facilitation',
          'Understanding subtlety and implication',
          'Cultural intelligence in negotiations',
          'Closing deals and agreements'
        ]
      },
      {
        title: 'Weeks 9-10: Professional Mastery',
        topics: [
          'Industry-specific terminology and trends',
          'Board-level communication',
          'Media relations and public speaking',
          'Mentoring and coaching in English',
          'Final project: executive presentation',
          'Professional certification and portfolio'
        ]
      }
    ],
    instructor: {
      name: 'Hanane Benalia, MBA',
      title: 'Founder & Lead Instructor',
      bio: 'Hanane Benalia, MBA brings over 15 years of experience in language education and interpreter training. With extensive background in cross-cultural communication, she has trained hundreds of professional interpreters who now serve communities across the country.'
    },
    testimonial: {
      text: 'This advanced program refined my English to an executive level. I now negotiate complex deals, present to boards, and lead international teams with complete confidence. Worth every investment.',
      author: 'Carlos Mendoza',
      role: 'Vice President, Global Operations'
    }
  },
  {
    id: 'global-meeting-communication',
    title: 'Global Meeting Communication',
    subtitle: '20-Hour Professional Development Module',
    category: 'professional-development',
    icon: Users,
    color: 'from-teal-600 to-teal-700',
    image: 'https://images.pexels.com/photos/5486096/pexels-photo-5486096.jpeg',
    shortDescription: 'Master virtual and in-person international meeting dynamics. Essential for professionals leading global teams.',
    duration: '20 hours',
    weeks: '',
    format: 'Hybrid — Online with in-person coaching sessions and exams only',
    classCapacity: '6–13 students',
    price: '$499',
    overview: 'In today\'s global business environment, effective meeting communication across cultures and time zones is essential. This 20-hour module provides practical strategies for leading and participating in international meetings, whether virtual or in-person. Learn to navigate cultural differences, manage diverse perspectives, and drive productive outcomes in multilingual settings.',
    whatYouWillLearn: [
      'Facilitating productive international meetings',
      'Managing communication across time zones and cultures',
      'Virtual meeting best practices and technology',
      'Inclusive meeting leadership strategies',
      'Handling language barriers and misunderstandings',
      'Decision-making in multicultural teams',
      'Follow-up and action item management',
      'Cultural intelligence for global collaboration'
    ],
    targetAudience: [
      'Project managers leading international teams',
      'Executives managing global operations',
      'Team leaders with remote international staff',
      'Consultants working with multinational clients',
      'Anyone facilitating cross-cultural meetings'
    ],
    curriculum: [
      {
        title: 'Module 1: Foundations of Global Meeting Success',
        duration: '4 hours',
        topics: [
          'Understanding cultural dimensions in meetings',
          'Communication styles across cultures',
          'Time orientation and scheduling challenges',
          'Building trust in virtual environments',
          'Setting clear meeting objectives'
        ]
      },
      {
        title: 'Module 2: Virtual Meeting Mastery',
        duration: '4 hours',
        topics: [
          'Technology platforms and best practices',
          'Engaging remote participants effectively',
          'Managing hybrid meeting dynamics',
          'Visual communication and screen sharing',
          'Handling technical difficulties gracefully'
        ]
      },
      {
        title: 'Module 3: Facilitation Skills',
        duration: '4 hours',
        topics: [
          'Structuring meetings for maximum productivity',
          'Managing diverse perspectives and opinions',
          'Handling conflict and disagreement',
          'Encouraging participation from all attendees',
          'Time management and agenda discipline'
        ]
      },
      {
        title: 'Module 4: Cross-Cultural Communication',
        duration: '4 hours',
        topics: [
          'Direct vs. indirect communication styles',
          'High-context vs. low-context cultures',
          'Power distance and hierarchy in meetings',
          'Language accommodation strategies',
          'Building psychological safety'
        ]
      },
      {
        title: 'Module 5: Action & Follow-Through',
        duration: '4 hours',
        topics: [
          'Creating clear action items across cultures',
          'Effective follow-up communication',
          'Accountability in international teams',
          'Continuous improvement of meeting practices',
          'Final project: facilitating a global meeting simulation'
        ]
      }
    ],
    instructor: {
      name: 'Hanane Benalia, MBA',
      title: 'Founder & Lead Instructor',
      bio: 'Hanane Benalia, MBA brings over 15 years of experience in language education and interpreter training. With extensive background in cross-cultural communication, she has trained hundreds of professional interpreters who now serve communities across the country.'
    },
    testimonial: {
      text: 'This training transformed how I run meetings with my global team. The cultural insights and practical strategies have made our meetings more productive and inclusive. My team engagement has increased dramatically.',
      author: 'Jennifer Kim',
      role: 'Global Program Director'
    }
  },
  {
    id: 'cross-cultural-intelligence',
    title: 'Cross-Cultural Intelligence for Professionals',
    subtitle: '20-Hour Professional Development Module',
    category: 'professional-development',
    icon: Users,
    color: 'from-teal-600 to-teal-700',
    image: 'https://images.pexels.com/photos/7868979/pexels-photo-7868979.jpeg',
    shortDescription: 'Develop cultural competence for international business success. Navigate global business relationships with confidence.',
    duration: '20 hours',
    weeks: '',
    format: 'Hybrid — Online with in-person coaching sessions and exams only',
    classCapacity: '6–13 students',
    price: '$499',
    overview: 'Cultural Intelligence (CQ) is the capability to function effectively across different cultural contexts. This comprehensive 20-hour module develops your ability to understand, appreciate, and navigate cultural differences in professional settings. Enhance your effectiveness in international business, build stronger global relationships, and drive success in diverse environments.',
    whatYouWillLearn: [
      'Four dimensions of cultural intelligence (CQ Drive, Knowledge, Strategy, Action)',
      'Understanding cultural frameworks and dimensions',
      'Adapting communication styles across cultures',
      'Building trust in multicultural relationships',
      'Negotiating across cultural boundaries',
      'Managing multicultural teams effectively',
      'Recognizing and overcoming cultural biases',
      'Developing a personal cultural intelligence action plan'
    ],
    targetAudience: [
      'International business professionals',
      'Team leaders managing diverse groups',
      'HR professionals and diversity officers',
      'Sales and business development professionals',
      'Anyone working in multicultural environments'
    ],
    curriculum: [
      {
        title: 'Module 1: Introduction to Cultural Intelligence',
        duration: '4 hours',
        topics: [
          'What is Cultural Intelligence and why it matters',
          'Four capabilities of CQ (Drive, Knowledge, Strategy, Action)',
          'Self-assessment: Your current CQ level',
          'Cultural intelligence vs. cultural awareness',
          'Business case for developing CQ'
        ]
      },
      {
        title: 'Module 2: Cultural Frameworks & Dimensions',
        duration: '4 hours',
        topics: [
          'Hofstede\'s cultural dimensions',
          'The Lewis Model of cultural types',
          'Trompenaars\' seven dimensions of culture',
          'Hall\'s high-context vs. low-context cultures',
          'Applying frameworks to real business situations'
        ]
      },
      {
        title: 'Module 3: Communication Across Cultures',
        duration: '4 hours',
        topics: [
          'Direct vs. indirect communication styles',
          'Verbal and non-verbal communication differences',
          'Listening across cultures',
          'Written communication in global contexts',
          'Managing language barriers and misunderstandings'
        ]
      },
      {
        title: 'Module 4: Working with Multicultural Teams',
        duration: '4 hours',
        topics: [
          'Building trust across cultures',
          'Motivation and engagement in diverse teams',
          'Conflict resolution with cultural sensitivity',
          'Decision-making in multicultural groups',
          'Giving and receiving feedback across cultures'
        ]
      },
      {
        title: 'Module 5: CQ in Action',
        duration: '4 hours',
        topics: [
          'International negotiation strategies',
          'Leading change in multicultural organizations',
          'Developing your personal CQ action plan',
          'Case studies: CQ successes and failures',
          'Final project: cultural intelligence application',
          'Certification and continued development'
        ]
      }
    ],
    instructor: {
      name: 'Hanane Benalia, MBA',
      title: 'Founder & Lead Instructor',
      bio: 'Hanane Benalia, MBA brings over 15 years of experience in language education and interpreter training. With extensive background in cross-cultural communication, she has trained hundreds of professional interpreters who now serve communities across the country.'
    },
    testimonial: {
      text: 'This program opened my eyes to cultural dynamics I never noticed before. I\'m now much more effective working with our international partners and have avoided several potential misunderstandings.',
      author: 'David Thompson',
      role: 'International Business Development Manager'
    }
  },
  {
    id: 'public-speaking-global-audiences',
    title: 'Public Speaking for Global Audiences',
    subtitle: '20-Hour Professional Development Module',
    category: 'professional-development',
    icon: Users,
    color: 'from-teal-600 to-teal-700',
    image: 'https://images.pexels.com/photos/6949979/pexels-photo-6949979.jpeg',
    shortDescription: 'Present with confidence to international audiences. Master the art of cross-cultural public speaking.',
    duration: '20 hours',
    weeks: '',
    format: 'Hybrid — Online with in-person coaching sessions and exams only',
    classCapacity: '6–13 students',
    price: '$549',
    overview: 'Public speaking to international audiences requires unique skills beyond traditional presentation training. This 20-hour module teaches you to craft compelling messages that resonate across cultures, adapt your delivery style for diverse audiences, and handle the challenges of presenting in multilingual settings. Build confidence and impact as a global communicator.',
    whatYouWillLearn: [
      'Crafting culturally-appropriate messages',
      'Adapting presentation style for international audiences',
      'Using stories and examples across cultures',
      'Managing language barriers as a presenter',
      'Visual design for global audiences',
      'Handling Q&A with diverse perspectives',
      'Virtual presentation skills for global reach',
      'Building credibility across cultural contexts'
    ],
    targetAudience: [
      'Executives presenting to international stakeholders',
      'Conference speakers at global events',
      'Sales professionals pitching to international clients',
      'Academic researchers presenting internationally',
      'Anyone presenting to multicultural audiences'
    ],
    curriculum: [
      {
        title: 'Module 1: Foundations of Global Public Speaking',
        duration: '4 hours',
        topics: [
          'Differences between domestic and international presentations',
          'Understanding audience expectations across cultures',
          'Credibility and trust-building globally',
          'Speaking with or without interpreters',
          'Ethical considerations in cross-cultural speaking'
        ]
      },
      {
        title: 'Module 2: Message Development',
        duration: '4 hours',
        topics: [
          'Structuring presentations for diverse audiences',
          'Choosing culturally-appropriate examples',
          'Using humor across cultures (dos and don\'ts)',
          'Storytelling that transcends borders',
          'Avoiding idioms and culture-specific references'
        ]
      },
      {
        title: 'Module 3: Delivery Techniques',
        duration: '4 hours',
        topics: [
          'Speaking clearly for non-native English speakers',
          'Pace, pause, and pronunciation',
          'Body language and gestures across cultures',
          'Eye contact and personal space',
          'Using your voice effectively'
        ]
      },
      {
        title: 'Module 4: Visual Communication',
        duration: '4 hours',
        topics: [
          'Designing slides for international audiences',
          'Visual literacy across cultures',
          'Using images, icons, and symbols appropriately',
          'Text-heavy vs. visual-heavy presentations',
          'Color and design considerations'
        ]
      },
      {
        title: 'Module 5: Advanced Skills & Practice',
        duration: '4 hours',
        topics: [
          'Handling challenging questions across cultures',
          'Managing technical difficulties and interpreters',
          'Virtual presentations to global audiences',
          'Recording presentations for international distribution',
          'Final project: global audience presentation',
          'Certification and feedback'
        ]
      }
    ],
    instructor: {
      name: 'Hanane Benalia, MBA',
      title: 'Founder & Lead Instructor',
      bio: 'Hanane Benalia, MBA brings over 15 years of experience in language education and interpreter training. With extensive background in cross-cultural communication, she has trained hundreds of professional interpreters who now serve communities across the country.'
    },
    testimonial: {
      text: 'I used to dread presenting to international audiences. This training gave me the tools and confidence to engage effectively with diverse groups. My last keynote at a global conference received outstanding feedback!',
      author: 'Robert Chang',
      role: 'Technology Director'
    }
  },
  {
    id: 'spanish-travel-business',
    title: 'Spanish for Travel & Business',
    subtitle: 'Practical Language Skills',
    category: 'foreign-languages',
    icon: Award,
    color: 'from-blue-500 to-emerald-500',
    image: 'https://media.istockphoto.com/id/1294958620/photo/candid-close-up-of-hispanic-businesswoman-in-office-meeting.jpg?s=612x612&w=0&k=20&c=KuVpI7HS3IbtrsXtLiL5v3_v5ccQbHYp5IR2TOmLQWY=',
    shortDescription: 'Learn practical Spanish for travel and business. From basic conversations to professional interactions.',
    duration: 'Flexible',
    weeks: '12–24 weeks',
    format: 'Hybrid — Online with in-person coaching sessions and exams only',
    classCapacity: '6–13 students',
    price: '$799',
    overview: 'Our Spanish program is designed for professionals and travelers who want practical, immediately-applicable language skills. Whether you\'re planning international travel, managing Spanish-speaking clients, or exploring new business markets, this comprehensive course builds your confidence in real-world situations. Focus on conversational fluency, cultural understanding, and professional applications.',
    whatYouWillLearn: [
      'Conversational Spanish for everyday situations',
      'Business Spanish and professional terminology',
      'Travel essentials: hotels, restaurants, transportation',
      'Cultural customs and etiquette in Spanish-speaking countries',
      'Negotiation and meeting language',
      'Email and written communication in Spanish',
      'Regional variations and dialects',
      'Practical grammar for effective communication'
    ],
    targetAudience: [
      'Business professionals working with Spanish-speaking markets',
      'Travelers planning extended stays in Spanish-speaking countries',
      'Healthcare workers serving Spanish-speaking communities',
      'Entrepreneurs expanding to Latin American markets',
      'Anyone wanting to learn Spanish for personal or professional growth'
    ],
    curriculum: [
      {
        title: 'Level 1: Foundations & Travel Basics',
        topics: [
          'Greetings, introductions, and basic conversation',
          'Numbers, dates, time, and money',
          'Ordering food and making reservations',
          'Asking for directions and transportation',
          'Hotel check-in and travel logistics',
          'Shopping and basic negotiations',
          'Emergency phrases and situations'
        ]
      },
      {
        title: 'Level 2: Everyday Conversations',
        topics: [
          'Talking about yourself, family, and interests',
          'Past, present, and future tenses',
          'Making plans and social arrangements',
          'Describing people, places, and things',
          'Expressing opinions and preferences',
          'Understanding native speakers',
          'Cultural customs and social norms'
        ]
      },
      {
        title: 'Level 3: Professional Spanish',
        topics: [
          'Business meetings and presentations',
          'Professional email and correspondence',
          'Industry-specific vocabulary',
          'Negotiating and closing deals',
          'Telephone and video conferencing',
          'Understanding contracts and documents',
          'Business culture in Spanish-speaking countries'
        ]
      },
      {
        title: 'Level 4: Advanced Communication',
        topics: [
          'Complex discussions and debates',
          'Idiomatic expressions and colloquialisms',
          'Regional variations in Spanish',
          'Advanced grammar and nuances',
          'Professional presentations in Spanish',
          'Reading newspapers and business documents',
          'Cultural immersion and authentic materials'
        ]
      }
    ],
    instructor: {
      name: 'Hanane Benalia, MBA',
      title: 'Founder & Lead Instructor',
      bio: 'Hanane Benalia, MBA brings over 15 years of experience in language education and interpreter training. With extensive background in cross-cultural communication, she has trained hundreds of professional interpreters who now serve communities across the country.'
    },
    testimonial: {
      text: 'I started from zero and within 6 months I was conducting business meetings in Spanish. The practical focus on real situations made all the difference. I\'ve opened up a whole new market for my company.',
      author: 'Michael Brennan',
      role: 'Business Development Director'
    }
  },
  {
    id: 'french-travel-business',
    title: 'French for Travel & Business',
    subtitle: 'Practical Language Skills',
    category: 'foreign-languages',
    icon: Award,
    color: 'from-blue-500 to-emerald-500',
    image: 'https://images.pexels.com/photos/8424552/pexels-photo-8424552.jpeg',
    shortDescription: 'Master French for professional and travel contexts. Build confidence in French-speaking environments.',
    duration: 'Flexible',
    weeks: '12–24 weeks',
    format: 'Hybrid — Online with in-person coaching sessions and exams only',
    classCapacity: '6–13 students',
    price: '$799',
    overview: 'French is the language of international diplomacy, fashion, cuisine, and business across multiple continents. Our French program prepares you for success in French-speaking environments, whether you\'re traveling to France, working with Francophone clients, or exploring business opportunities in French-speaking countries. Develop practical skills with a focus on conversation, cultural understanding, and professional applications.',
    whatYouWillLearn: [
      'Conversational French for travel and daily life',
      'Business French and corporate terminology',
      'French etiquette and cultural customs',
      'Professional meetings and presentations',
      'Written communication: emails and letters',
      'Understanding Francophone cultures (France, Canada, Africa)',
      'Pronunciation and accent development',
      'Grammar foundations for effective communication'
    ],
    targetAudience: [
      'Business professionals working with French-speaking markets',
      'Travelers planning trips to France or Francophone countries',
      'Diplomats and international relations professionals',
      'Students preparing for study abroad',
      'Anyone interested in French language and culture'
    ],
    curriculum: [
      {
        title: 'Level 1: Foundations & Travel Essentials',
        topics: [
          'French alphabet and pronunciation basics',
          'Greetings and polite expressions',
          'Navigating restaurants and cafes',
          'Hotels, transportation, and directions',
          'Shopping and market interactions',
          'Numbers, time, and dates',
          'Essential phrases for travelers'
        ]
      },
      {
        title: 'Level 2: Building Fluency',
        topics: [
          'Describing yourself and others',
          'Present, past, and future tenses',
          'Making appointments and arrangements',
          'Expressing likes, dislikes, and opinions',
          'Understanding French media and culture',
          'Social customs and French etiquette',
          'Regional variations in French'
        ]
      },
      {
        title: 'Level 3: Professional French',
        topics: [
          'Business vocabulary and terminology',
          'Professional correspondence in French',
          'Conducting meetings and presentations',
          'Negotiation and persuasion',
          'Understanding French business culture',
          'Industry-specific language',
          'Telephone and video conference skills'
        ]
      },
      {
        title: 'Level 4: Advanced & Cultural Immersion',
        topics: [
          'Complex conversations and debates',
          'Advanced grammar and style',
          'French literature and media',
          'Cultural nuances across Francophone world',
          'Professional writing and reports',
          'Interpreting and translation basics',
          'Achieving near-native fluency'
        ]
      }
    ],
    instructor: {
      name: 'Hanane Benalia, MBA',
      title: 'Founder & Lead Instructor',
      bio: 'Hanane Benalia, MBA brings over 15 years of experience in language education and interpreter training. With extensive background in cross-cultural communication, she has trained hundreds of professional interpreters who now serve communities across the country.'
    },
    testimonial: {
      text: 'Learning French opened doors I never expected. I can now communicate confidently with our Paris office and even led a presentation in French last month. The cultural insights were invaluable.',
      author: 'Elizabeth Martin',
      role: 'Marketing Director'
    }
  },
  {
    id: 'arabic-travel-business',
    title: 'Arabic for Travel & Business',
    subtitle: 'Practical Language Skills',
    category: 'foreign-languages',
    icon: Award,
    color: 'from-blue-500 to-emerald-500',
    image: 'https://images.pexels.com/photos/8154344/pexels-photo-8154344.jpeg',
    shortDescription: 'Navigate Arabic-speaking regions with confidence. Essential for business and cultural exchange in the Middle East.',
    duration: 'Flexible',
    weeks: '12–24 weeks',
    format: 'Hybrid — Online with in-person coaching sessions and exams only',
    classCapacity: '6–13 students',
    price: '$799',
    overview: 'Arabic is spoken by over 400 million people across the Middle East and North Africa, making it essential for international business and cultural exchange. Our Arabic program focuses on Modern Standard Arabic with practical dialect exposure, preparing you for business interactions, travel, and meaningful cultural connections in Arabic-speaking regions. Build your skills with emphasis on real-world application.',
    whatYouWillLearn: [
      'Modern Standard Arabic fundamentals',
      'Business Arabic for professional contexts',
      'Travel essentials for Arabic-speaking countries',
      'Understanding Arab culture and customs',
      'Business etiquette in the Middle East',
      'Reading and writing Arabic script',
      'Common dialect variations',
      'Professional communication in Arabic'
    ],
    targetAudience: [
      'Business professionals working in Middle East markets',
      'Government and diplomatic personnel',
      'Travelers exploring Arabic-speaking countries',
      'Healthcare workers serving Arabic-speaking communities',
      'Anyone interested in Arab culture and language'
    ],
    curriculum: [
      {
        title: 'Level 1: Arabic Script & Foundations',
        topics: [
          'Arabic alphabet and writing system',
          'Pronunciation and phonetics',
          'Basic greetings and introductions',
          'Numbers and essential phrases',
          'Travel vocabulary: hotels, restaurants',
          'Cultural introduction to Arab world',
          'Simple conversations'
        ]
      },
      {
        title: 'Level 2: Conversational Arabic',
        topics: [
          'Building sentences and basic grammar',
          'Asking and answering questions',
          'Describing people, places, and things',
          'Shopping and negotiating',
          'Time expressions and daily routines',
          'Understanding spoken Arabic',
          'Cultural customs and etiquette'
        ]
      },
      {
        title: 'Level 3: Business Arabic',
        topics: [
          'Professional vocabulary and terminology',
          'Business meetings in Arabic',
          'Professional correspondence and emails',
          'Negotiation language and strategies',
          'Understanding Middle Eastern business culture',
          'Formal vs. informal register',
          'Industry-specific Arabic'
        ]
      },
      {
        title: 'Level 4: Advanced Communication',
        topics: [
          'Complex discussions and presentations',
          'Reading Arabic news and business documents',
          'Regional dialect awareness',
          'Advanced grammar structures',
          'Professional presentations in Arabic',
          'Cultural deep dive by region',
          'Achieving professional fluency'
        ]
      }
    ],
    instructor: {
      name: 'Hanane Benalia, MBA',
      title: 'Founder & Lead Instructor',
      bio: 'Hanane Benalia, MBA brings over 15 years of experience in language education and interpreter training. With extensive background in cross-cultural communication, she has trained hundreds of professional interpreters who now serve communities across the country.'
    },
    testimonial: {
      text: 'Learning Arabic has been transformative for my work in the Middle East. The program\'s focus on business culture and practical language has helped me build trust and close deals with our partners in Dubai and Riyadh.',
      author: 'James Patterson',
      role: 'International Sales Manager'
    }
  },
  {
    id: 'mandarin-travel-business',
    title: 'Mandarin Chinese for Travel & Business',
    subtitle: 'Practical Language Skills',
    category: 'foreign-languages',
    icon: Award,
    color: 'from-blue-500 to-emerald-500',
    image: 'https://images.pexels.com/photos/7964413/pexels-photo-7964413.jpeg',
    shortDescription: 'Learn Mandarin for the world\'s largest market. Essential for doing business in China and Chinese-speaking regions.',
    duration: 'Flexible',
    weeks: '12–24 weeks',
    format: 'Hybrid — Online with in-person coaching sessions and exams only',
    classCapacity: '6–13 students',
    price: '$799',
    overview: 'Mandarin Chinese is the most widely spoken language in the world and essential for anyone doing business in China or Chinese-speaking regions. Our practical Mandarin program focuses on conversational skills, business applications, and cultural understanding. Learn simplified characters, pinyin, and the communication strategies you need to succeed in Chinese-speaking environments.',
    whatYouWillLearn: [
      'Mandarin pronunciation and tones',
      'Simplified Chinese characters and pinyin',
      'Business Mandarin for professional contexts',
      'Travel essentials for China and Taiwan',
      'Chinese business culture and etiquette',
      'Professional meetings and negotiations',
      'Reading and writing practical Chinese',
      'Building relationships (Guanxi) in Chinese culture'
    ],
    targetAudience: [
      'Business professionals working with Chinese markets',
      'Entrepreneurs exploring opportunities in China',
      'Travelers planning extended stays in Chinese-speaking regions',
      'Students preparing for study or work in China',
      'Anyone interested in Chinese language and culture'
    ],
    curriculum: [
      {
        title: 'Level 1: Foundations & Pinyin',
        topics: [
          'Mandarin tones and pronunciation',
          'Pinyin romanization system',
          'Basic greetings and introductions',
          'Numbers, dates, and time',
          'Essential travel phrases',
          'Introduction to Chinese characters',
          'Cultural basics and etiquette'
        ]
      },
      {
        title: 'Level 2: Daily Communication',
        topics: [
          'Building conversational skills',
          'Shopping, dining, and travel situations',
          'Describing people and places',
          'Making arrangements and plans',
          'Understanding spoken Mandarin',
          'Reading simple texts and signs',
          'Chinese customs and social norms'
        ]
      },
      {
        title: 'Level 3: Business Mandarin',
        topics: [
          'Business vocabulary and terminology',
          'Professional meetings in Mandarin',
          'Email and written business communication',
          'Negotiation language and strategies',
          'Understanding Chinese business culture',
          'Building and maintaining Guanxi (relationships)',
          'Industry-specific Mandarin'
        ]
      },
      {
        title: 'Level 4: Advanced Professional Skills',
        topics: [
          'Complex business discussions',
          'Presentations and public speaking in Mandarin',
          'Reading business documents and contracts',
          'Advanced grammar and expressions',
          'Regional variations (Mainland, Taiwan, Singapore)',
          'Cultural intelligence for China market',
          'Achieving professional fluency'
        ]
      }
    ],
    instructor: {
      name: 'Hanane Benalia, MBA',
      title: 'Founder & Lead Instructor',
      bio: 'Hanane Benalia, MBA brings over 15 years of experience in language education and interpreter training. With extensive background in cross-cultural communication, she has trained hundreds of professional interpreters who now serve communities across the country.'
    },
    testimonial: {
      text: 'This Mandarin program gave me the confidence to negotiate directly with our suppliers in Shenzhen. Understanding the language and culture has saved us time and money while strengthening our relationships.',
      author: 'Sarah Johnson',
      role: 'Supply Chain Director'
    }
  }
];

export const categories = [
  { id: 'all', label: 'All Programs' },
  { id: 'interpreting', label: 'Medical and Healthcare Communication Training' },
  { id: 'esl', label: 'Professional English and Workplace Integration' },
  { id: 'professional-development', label: 'Global Professional Communication' },
  { id: 'foreign-languages', label: 'Foreign Languages' }
];
