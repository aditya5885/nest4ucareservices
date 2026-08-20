/**
 * Central Services Data for Nest4U Care Services
 * Contains structured information for all 13 official service items.
 */

export const SERVICE_CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "daily-living", label: "Daily Living & Home" },
  { id: "community-social", label: "Community & Social" },
  { id: "clinical-specialised", label: "Clinical & High-Intensity" },
  { id: "capacity-employment", label: "Employment & Capacity Building" }
];

export const SERVICES = [
  {
    code: "0102",
    slug: "employment-higher-education-assistance",
    title: "Assistance to Access and Maintain Employment or Higher Education",
    shortTitle: "Employment & Education Support",
    category: "capacity-employment",
    categoryLabel: "Employment & Education",
    iconName: "GraduationCap",
    heroImage: "/images/employment-support.jpg",
    summary: "Dedicated support tailored to help you explore career pathways, pursue tertiary or vocational education, and thrive in the workplace with confidence.",
    tagline: "Empowering your career ambitions and lifelong learning goals.",
    overview: "Gaining meaningful employment or continuing your education builds independence, financial confidence, and personal fulfillment. Nest4U Care Services provides dedicated, one-on-one assistance to support you through every step of your study or vocational journey.",
    whatInvolves: [
      "Assistance with resume writing, job applications, and interview preparation",
      "On-campus orientation and transport support for universities, TAFE, and training colleges",
      "Workplace settling-in support, task breakdown, and routine establishment",
      "Study skills assistance, time management strategies, and assistive tech support",
      "Liaison with educational institutions and employers regarding workplace adjustments",
      "Building confidence, communication, and interpersonal workplace skills"
    ],
    howWeSupport: "Our team collaborates closely with you to understand your career aspirations and learning style. We co-design a personalized support routine that meets you where you are—whether navigating campus grounds, organizing study schedules, or learning workplace tasks.",
    benefits: [
      "Increased personal independence and financial empowerment",
      "Greater self-advocacy and workplace confidence",
      "Sustainable long-term employment and study success",
      "Support that adapts as your workplace or coursework changes"
    ],
    whoSuits: "Participants seeking to enter the workforce, maintain existing employment, transition to new roles, or enroll in tertiary education, TAFE, or apprenticeships.",
    disclaimer: "Support is delivered in accordance with your individual goals, support plan, and applicable safety frameworks."
  },
  {
    code: "0104",
    slug: "high-intensity-daily-personal-activities",
    title: "High-Intensity Daily Personal Activities",
    shortTitle: "High-Intensity Daily Activities",
    category: "clinical-specialised",
    isHighIntensity: true,
    iconName: "Activity",
    heroImage: "/images/clinical-care.jpg",
    summary: "Specialized, highly qualified support for participants with complex daily personal and clinical care requirements, delivered safely and with utmost dignity.",
    tagline: "Safe, dignified care for complex daily personal and clinical needs.",
    overview: "Participants with complex health needs require care delivered with meticulous attention to safety, clinical protocols, and personal dignity. Nest4U Care Services provides high-intensity personal activity support under rigorous clinical oversight and individualized support plans.",
    specialisedAreas: [
      {
        title: "Complex Bowel Care",
        desc: "Individualized management including monitoring, documentation, administration of prescribed interventions, and strict adherence to bowel management care plans."
      },
      {
        title: "Enteral Feeding & Management",
        desc: "Safe nasogastric (NG) and percutaneous endoscopic gastrostomy (PEG) formula preparation, administration, equipment hygiene, and tube site monitoring."
      },
      {
        title: "Tracheostomy Management",
        desc: "Airway maintenance, inner cannula hygiene, routine suctioning under protocol, dressing changes, and emergency readiness."
      },
      {
        title: "Urinary Catheter Management",
        desc: "Catheter hygiene, drainage bag management, fluid balance monitoring, and infection prevention protocols for indwelling and suprapubic catheters."
      },
      {
        title: "Ventilation Management",
        desc: "Monitoring of CPAP/BiPAP and invasive ventilation devices, circuit maintenance, and adherence to respiratory physician directives."
      },
      {
        title: "Subcutaneous Injections",
        desc: "Trained administration of prescribed subcutaneous medications with proper storage, site rotation, and documentation."
      },
      {
        title: "Pressure Care & Wound Management",
        desc: "Positioning schedules, pressure injury prevention, skin integrity checks, and basic wound dressing under nurse delegation."
      },
      {
        title: "Severe Dysphagia Management",
        desc: "Strict adherence to speech pathology mealtime management plans, textured diets, fluid thickening, and safe positioning techniques."
      }
    ],
    whatInvolves: [
      "Rigorous care plan execution guided by registered health professionals",
      "Continuous observation, clinical documentation, and emergency escalation procedures",
      "Specialized training matched to individual participant health protocols",
      "Collaborative liaison with GPs, allied health, and hospital transition teams",
      "Emphasis on participant comfort, dignity, and communication throughout care"
    ],
    howWeSupport: "Every high-intensity support package starts with a detailed clinical review. Support workers receive participant-specific training and assessment before delivering care, ensuring complete confidence, safety, and compassion.",
    benefits: [
      "Reliable care that prioritizes health stability and infection control",
      "Peace of mind for families knowing complex routines are managed professionally",
      "Enhanced quality of life through dignified, respectful personal care",
      "Seamless communication between care team, nurses, and medical specialists"
    ],
    whoSuits: "Participants who have complex daily health support requirements requiring trained, competent care workers working under clinical care plans.",
    disclaimer: "All high-intensity supports are delivered in accordance with verified participant care plans, qualified staff competencies, and applicable regulatory care frameworks."
  },
  {
    code: "0106",
    slug: "life-stages-transitions-supports",
    title: "Assistance in Coordinating or Managing Life Stages, Transitions and Supports",
    shortTitle: "Life Stages & Transitions",
    category: "capacity-employment",
    iconName: "Compass",
    heroImage: "/images/transition-support.jpg",
    summary: "Guiding you through major life milestones, school-to-work transitions, housing moves, and building capacity to coordinate your own supports.",
    tagline: "Navigating change and transitions with confidence and clarity.",
    overview: "Life is full of transitions—graduating from school, moving into your own home, navigating changing health needs, or exploring new community networks. Nest4U provides structured support coordination and life transition mentoring to ensure you feel supported at every crossroad.",
    whatInvolves: [
      "Transition planning from school to further education or employment",
      "Assistance with accommodation transitions and setting up a new home",
      "Developing individual budgeting, decision-making, and self-advocacy skills",
      "Coordinating multi-disciplinary services, allied health, and community networks",
      "Crisis resolution planning and building resilience for unexpected changes",
      "Mentoring to empower participants to independently manage their own supports"
    ],
    howWeSupport: "We walk beside you and your support circle to break down complex transitions into clear, achievable steps. We help you connect with community resources, negotiate services, and establish stable routines.",
    benefits: [
      "Reduced stress during critical periods of personal or household change",
      "Clear action plans with measurable milestones",
      "Greater independence and confidence in navigating services",
      "Stronger support networks across Moreton Bay and Queensland"
    ],
    whoSuits: "Participants and families facing significant life changes, school leavers, individuals moving into independent housing, or those wishing to build capacity to manage their own support systems.",
    disclaimer: "Supports are tailored to individual transition goals and coordinated in partnership with the participant and their chosen advocates."
  },
  {
    code: "0107",
    slug: "daily-personal-activities",
    title: "Daily Personal Activities",
    shortTitle: "Daily Personal Care",
    category: "daily-living",
    iconName: "HeartHandshake",
    heroImage: "/images/personal-care.jpg",
    summary: "Respectful, reliable assistance with everyday personal care routines, promoting your independence, dignity, and comfort in your own home.",
    tagline: "Gentle, respectful personal care tailored to your morning, day, and evening routines.",
    overview: "Personal care should always be delivered with warmth, dignity, and deep respect for your individual preferences. Nest4U Care Services assists with essential daily personal routines, supporting you to start each day feeling fresh, confident, and ready for life.",
    whatInvolves: [
      "Showering, bathing, oral hygiene, and grooming support",
      "Dressing assistance and personal styling choices",
      "Toileting and continence management with complete privacy",
      "Mobility, transfer, and hoist support using safe manual handling techniques",
      "Assistance with morning routines, evening wind-down, and bedtime settling",
      "Meal assistance and hydration encouragement"
    ],
    howWeSupport: "We carefully match you with support workers who respect your personal boundaries, cultural values, and preferred routines. Our team focuses on what you can do for yourself, assisting where needed without taking over.",
    benefits: [
      "Maintained dignity, privacy, and personal comfort every day",
      "Consistent support workers who understand your unique preferences",
      "Safe transfers and manual handling protecting your physical wellbeing",
      "Support that respects your home environment and family dynamics"
    ],
    whoSuits: "Participants needing flexible assistance with everyday personal hygiene, dressing, mobility, and morning or evening routines at home.",
    disclaimer: "Delivered strictly within your agreed support schedule with continuous respect for privacy and personal dignity."
  },
  {
    code: "0108",
    slug: "travel-transport-arrangements",
    title: "Assistance with Travel/Transport Arrangements",
    shortTitle: "Travel & Transport Support",
    category: "community-social",
    iconName: "Car",
    heroImage: "/images/transport.jpg",
    summary: "Safe, accessible transport and travel training to keep you connected with medical appointments, study, work, friends, and community events.",
    tagline: "Connecting you with your community, appointments, and places you love.",
    overview: "Getting around your community should be easy and stress-free. Whether attending medical appointments, commuting to work or study, visiting family, or enjoying social outings across Caboolture and the Moreton Bay region, Nest4U provides reliable travel assistance.",
    whatInvolves: [
      "Direct transport to medical, specialist, and therapy appointments",
      "Transport to work, education campuses, social groups, and shopping centres",
      "Public transport training (bus, train, Translink ticketing and route navigation)",
      "Assistance with road safety, journey planning, and timetable reading",
      "Support during community outings to ensure a safe, enjoyable experience",
      "Accessible vehicle coordination where specialized mobility transport is required"
    ],
    howWeSupport: "We provide both accompanied travel (helping you build the confidence to use public transport independently) and direct transport services in safe, roadworthy vehicles.",
    benefits: [
      "Never miss important health appointments or social commitments",
      "Build valuable independent travel and navigation skills",
      "Expanded access to recreation and community facilities across Queensland",
      "Reliable, punctual support you can count on"
    ],
    whoSuits: "Participants who face challenges using standard transport options or who wish to build independent public transit skills.",
    disclaimer: "Transport arrangements are subject to scheduling availability and agreed travel terms within your support plan."
  },
  {
    code: "0114",
    slug: "community-nursing-care",
    title: "Community Nursing Care",
    shortTitle: "Community Nursing",
    category: "clinical-specialised",
    isNursing: true,
    iconName: "Stethoscope",
    heroImage: "/images/nursing-care.jpg",
    summary: "Professional, compassionate nursing care provided in the comfort of your home by registered and enrolled nurses focused on safety, healing, and wellbeing.",
    tagline: "Professional clinical care and compassionate nursing in the comfort of home.",
    overview: "Clinical health needs are best managed in an environment where you feel most comfortable: your home. Nest4U provides comprehensive Community Nursing Care delivered by qualified nurses with an unwavering focus on safety, clinical accuracy, and personal dignity.",
    whatInvolves: [
      "Clinical assessments, health checks, and vital sign monitoring",
      "Medication management, administration, and Webster-pak oversight",
      "Complex wound care, surgical wound management, and pressure injury dressing",
      "Catheter care (insertion, replacement, site hygiene, and catheter changes)",
      "Enteral nutrition support (PEG/NG tube management and feeding protocol checks)",
      "Tracheostomy care and clinical respiratory support",
      "Diabetes management, blood glucose monitoring, and insulin administration",
      "Palliative and symptom management support in collaboration with specialists"
    ],
    howWeSupport: "Our nursing team works in close communication with your General Practitioner, treating medical specialists, and allied health team to ensure your health plan is seamlessly executed with absolute clinical integrity.",
    benefits: [
      "Receive high-level clinical care at home, reducing unnecessary hospital visits",
      "Continuity of care from qualified nursing professionals who know your medical history",
      "Early detection of health complications and prompt clinical intervention",
      "Comprehensive education for you and your family regarding your health condition"
    ],
    whoSuits: "Participants with ongoing clinical, medical, or post-acute nursing requirements who prefer receiving care in their familiar home environment.",
    disclaimer: "Delivered by qualified nursing staff in accordance with nursing practice standards, participant medical orders, and applicable clinical governance."
  },
  {
    code: "0115",
    slug: "supported-independent-living-sil",
    title: "Assistance with Daily Life Tasks in a Group or Shared Living Arrangement (SIL)",
    shortTitle: "Supported Independent Living (SIL)",
    category: "daily-living",
    isSIL: true,
    iconName: "Home",
    heroImage: "/images/caregiver-support.jpg",
    summary: "Support for living independently in shared or individual home environments with 24/7 assistance tailored to your personal goals and lifestyle.",
    tagline: "Your home, your choices, your community — supported around the clock.",
    overview: "Supported Independent Living (SIL) gives you the opportunity to live independently in a welcoming home with housemates or on your own, with dedicated support available 24 hours a day, 7 days a week. At Nest4U, we believe your home should feel like a true sanctuary.",
    whatInvolves: [
      "24/7 dedicated on-site support including sleepover or active night assistance",
      "Assistance with morning routines, meal preparation, cooking, and nutrition",
      "Support with household chores, laundry, grocery shopping, and budgeting",
      "Personal care, hygiene assistance, and medication prompting/administration",
      "Encouraging positive social connections among housemates while respecting private space",
      "Support to engage in community activities, hobbies, work, and family visits"
    ],
    howWeSupport: "We focus on housemate compatibility, personal choices, and building life skills. From choosing what to cook for dinner to deciding weekend plans, you have choice and control over every aspect of your daily life.",
    benefits: [
      "Live independently in a safe, modern, and supportive home environment",
      "Build lifelong domestic, social, and personal skills at your own pace",
      "Form genuine friendships and active connections with the local community",
      "Round-the-clock safety and peace of mind for you and your loved ones"
    ],
    whoSuits: "Participants who require regular, ongoing support with daily tasks throughout the day and night to live independently in shared or individual accommodation.",
    disclaimer: "SIL support arrangements are subject to participant funding, suitability assessments, and vacancy availability."
  },
  {
    code: "0116",
    slug: "innovative-community-participation",
    title: "Innovative Community Participation",
    shortTitle: "Innovative Community Participation",
    category: "community-social",
    iconName: "Sparkles",
    heroImage: "/images/community-social.jpg",
    summary: "Creative, outside-the-box community programs and workshops designed to expand your horizons, unlock creative talents, and build social networks.",
    tagline: "Exploring new interests, creative outlets, and vibrant community connections.",
    overview: "Community participation shouldn't be one-size-fits-all. Innovative Community Participation is all about discovering new passions, participating in mainstream cultural and arts programs, developing digital skills, and engaging with unique local experiences in Caboolture and beyond.",
    whatInvolves: [
      "Attending creative arts, pottery, music, photography, and drama workshops",
      "Digital media skills, podcasting, coding, and computer literacy mentoring",
      "Community gardening, eco-projects, and local environmental volunteering",
      "Accessing specialized sporting clubs, swimming, fitness, and wellness programs",
      "Participating in local markets, cultural festivals, and community celebrations",
      "Tailored capacity building projects aligned with your unique personal passions"
    ],
    howWeSupport: "Our mentors connect you with community leaders, workshops, and clubs tailored to your specific interests, guiding you until you feel completely confident to participate naturally.",
    benefits: [
      "Discover new hobbies, creative talents, and personal passions",
      "Expand your genuine social circles outside traditional disability services",
      "Boost emotional wellbeing, self-esteem, and community belonging",
      "Gain real-world skills that enrich daily life"
    ],
    whoSuits: "Participants looking for dynamic, personalized, and engaging ways to connect with their local community beyond standard group programs.",
    disclaimer: "Activities are chosen collaboratively based on participant preferences and safety considerations."
  },
  {
    code: "0117",
    slug: "development-daily-living-life-skills",
    title: "Development of Daily Living and Life Skills",
    shortTitle: "Life Skills Development",
    category: "capacity-employment",
    iconName: "BookOpen",
    heroImage: "/images/life-skills.jpg",
    summary: "Hands-on, step-by-step coaching to develop practical skills for independent living—cooking, budgeting, digital tools, and self-advocacy.",
    tagline: "Building practical skills today for greater independence tomorrow.",
    overview: "True independence comes from having the confidence and practical skills to manage your daily life. Our life skills development programs are delivered through supportive, patient coaching that breaks tasks down into manageable, rewarding achievements.",
    whatInvolves: [
      "Meal planning, healthy cooking, kitchen safety, and food storage skills",
      "Personal money management, basic budgeting, banking, and bill paying",
      "Using public transport, journey planning apps, and smart devices safely",
      "Personal hygiene, laundry, clothing care, and household organization",
      "Communication skills, assertiveness training, and self-advocacy coaching",
      "Health literacy, making doctor appointments, and managing prescriptions"
    ],
    howWeSupport: "We use a strengths-based, 'learn by doing' coaching model. Your support worker practices alongside you, gradually fading support as your autonomy and self-confidence grow.",
    benefits: [
      "Long-term self-reliance and reduced dependence on formal support",
      "Pride and sense of accomplishment in mastering everyday tasks",
      "Better decision-making and problem-solving in everyday situations",
      "Customized pacing tailored completely to your learning style"
    ],
    whoSuits: "Participants who want to learn or strengthen essential living skills to live more independently at home or in the community.",
    disclaimer: "Programs are individualized and structured around measurable participant goals."
  },
  {
    code: "0120",
    slug: "household-tasks",
    title: "Household Tasks",
    shortTitle: "Household Assistance",
    category: "daily-living",
    iconName: "Sparkle",
    heroImage: "/images/household-tasks.jpg",
    summary: "Friendly, efficient help with domestic chores, cleaning, laundry, and meal preparation to keep your home clean, comfortable, and safe.",
    tagline: "Keeping your living space clean, organized, fresh, and welcoming.",
    overview: "A clean, organized home creates a calm and healthy environment. When household tasks become overwhelming or difficult, Nest4U Care Services is here to lend a dependable hand with domestic chores, allowing you to focus your energy on living life.",
    whatInvolves: [
      "General house cleaning, vacuuming, mopping, and surface dusting",
      "Kitchen cleaning, dishwashing, and sanitizing food preparation areas",
      "Bathroom and toilet cleaning and sanitization",
      "Laundry washing, drying, folding, ironing, and changing bed linen",
      "Meal preparation, grocery unpacking, and pantry organization",
      "Basic yard tidying, rubbish disposal, and home decluttering assistance"
    ],
    howWeSupport: "Our reliable domestic support staff respect your home and follow your specific instructions for how you like your spaces maintained, with non-toxic, safe cleaning practices.",
    benefits: [
      "A healthy, hygienic, and organized home environment",
      "Reduced stress and fatigue from managing strenuous household chores",
      "More time and energy to dedicate to hobbies, family, work, and community",
      "Flexible scheduling to fit seamlessly into your week"
    ],
    whoSuits: "Participants who need practical assistance to maintain their home environment in a safe, sanitary, and comfortable condition.",
    disclaimer: "Domestic services follow agreed task checklists and home safety guidelines."
  },
  {
    code: "0125",
    slug: "participation-community-social-civic-activities",
    title: "Participation in Community, Social & Civic Activities",
    shortTitle: "Social & Civic Participation",
    category: "community-social",
    iconName: "Users",
    heroImage: "/images/group-activities.jpg",
    summary: "One-on-one companion support to participate in local clubs, cultural gatherings, sports events, volunteering, and civic activities.",
    tagline: "Staying connected, engaged, and actively participating in your local community.",
    overview: "Being part of a community is essential for human connection, mental wellness, and personal fulfillment. Nest4U provides caring companion support so you can attend social events, join clubs, explore hobbies, and be an active member of society.",
    whatInvolves: [
      "Attending local community events, farmers markets, concerts, and festivals",
      "Joining recreational sports, bowling clubs, swimming, or gym classes",
      "Visiting libraries, art galleries, museums, and local parks",
      "Participating in volunteering or community committee meetings",
      "Meeting friends for coffee, lunch, or attending social group gatherings",
      "Exercising civic duties such as voting, attending town halls, or library events"
    ],
    howWeSupport: "We pair you with a compatible support worker who shares common interests and provides just the right amount of encouragement and physical assistance during your outings.",
    benefits: [
      "Reduced social isolation and increased meaningful relationships",
      "Active engagement in the vibrant Caboolture and Moreton Bay community",
      "Enhanced communication skills and emotional wellbeing",
      "Freedom to explore diverse interests and activities on your terms"
    ],
    whoSuits: "Participants wishing to increase their social connections, attend events, or engage with civic and recreational activities with friendly companion support.",
    disclaimer: "Activities are tailored to participant preferences with full consideration of accessibility and safety requirements."
  },
  {
    code: "0133",
    slug: "specialised-supported-employment",
    title: "Specialised Supported Employment",
    shortTitle: "Specialised Employment Support",
    category: "capacity-employment",
    iconName: "Briefcase",
    heroImage: "/images/employment-support.jpg",
    summary: "Tailored on-the-job mentoring and specialized workplace adjustments to help you sustain meaningful employment in supported or open settings.",
    tagline: "Targeted on-the-job support to help you excel and grow in your workplace.",
    overview: "Everyone deserves the chance to experience the dignity of work. Specialised Supported Employment provides individualized, ongoing workplace support tailored to participants who require continuous assistance to perform their job tasks and thrive in a working environment.",
    whatInvolves: [
      "Individualized job coaching, task sequencing, and routine establishment",
      "Workplace environmental assessments and ergonomic adjustments",
      "Communication support between employee, supervisors, and colleagues",
      "Developing coping strategies for workplace stress or sensory challenges",
      "Monitoring performance, safety standards, and occupational health rules",
      "Career progression mentoring and learning advanced job skills"
    ],
    howWeSupport: "Our job coaches work discreetly alongside you in the workplace or provide scheduled check-ins, ensuring you receive the exact level of support needed to perform your duties comfortably.",
    benefits: [
      "Sustainable employment with job security and regular income",
      "Professional development and skill acquisition over time",
      "Positive workplace relationships and social inclusion",
      "Immediate assistance whenever workplace tasks or environments change"
    ],
    whoSuits: "Participants currently employed or entering employment who require ongoing, specialized on-the-job support and coaching.",
    disclaimer: "Provided in coordination with your employer, workplace agreements, and individualized support plan."
  },
  {
    code: "0136",
    slug: "group-centre-based-activities",
    title: "Group and Centre Based Activities",
    shortTitle: "Group & Centre Activities",
    category: "community-social",
    iconName: "Smile",
    heroImage: "/images/transition-support.jpg",
    summary: "Fun, engaging group sessions, cooking classes, games, art workshops, and wellness activities held in friendly community spaces.",
    tagline: "Connecting with peers through engaging group activities and shared experiences.",
    overview: "Group and centre-based activities offer a lively, welcoming space to make lasting friendships, learn new skills together, and share enjoyable social experiences. Nest4U facilitates structured group programs in inclusive community venues.",
    whatInvolves: [
      "Interactive group cooking, baking, and healthy eating workshops",
      "Arts and crafts, pottery, painting, and DIY creative projects",
      "Music appreciation, dance, gentle yoga, and light fitness sessions",
      "Board game days, trivia, movie afternoons, and social parties",
      "Group day trips, picnics, zoo visits, and regional excursions",
      "Life skills group workshops on technology, safety, and personal wellness"
    ],
    howWeSupport: "Our experienced group facilitators ensure every participant feels included, respected, and supported according to their individual comfort levels and abilities.",
    benefits: [
      "Make lifelong friends in a safe, warm, and supportive social setting",
      "Learn collaboratively in group workshops with peers",
      "Build social confidence, teamwork, and conversation skills",
      "Enjoy structured, entertaining, and enriching weekly programs"
    ],
    whoSuits: "Participants who enjoy socializing in small or medium groups and wish to participate in centre-based creative, educational, or recreational activities.",
    disclaimer: "Group programs follow established participant-to-staff ratios ensuring safety, support, and quality engagement."
  }
];
