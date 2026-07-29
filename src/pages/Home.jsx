import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Compass,
  Plane,
  FileText,
  FileCheck2,
  Microscope,
  Briefcase,
  BellRing,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Star,
  Menu,
  X,
  ShieldCheck,
  Globe2,
  Users,
  Sparkles,

} from "lucide-react";
import { ArrowRight } from "lucide-react";
import {FaLinkedin, FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa";
import {
  Laptop,
  BarChart3,
  Cog,
  Scale,
  BookOpen,
  FlaskConical,
  Palette,
  Building2,    
  CreditCard,
  PhoneCall,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";
/**
 * StarEducational Consultancy — Home page
 * Plain React + Tailwind CSS (no router / shadcn dependency).
 * Drop this component into any React + Tailwind project.
 * Replace `heroImage` below with your own asset import, e.g.:
 *   import heroImage from "./assets/hero.jpg";
 */
const heroImage =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop";

const WHATSAPP_URL = "https://wa.me/919000000000";

const stats = [
  { value: 5000, suffix: "+", label: "Students Guided" },
  { value: 250, suffix: "+", label: "Universities Connected" },
  { value: 3200, suffix: "+", label: "Admissions Completed" },
  { value: 12, suffix: "+", label: "Years of Experience" },
];

const services = [
  {
    icon: GraduationCap,
    title: "Admission Guidance",
    desc: "MBBS, B.Tech, Degree, MBA, M.Tech, Masters, PhD and abroad universities — matched to your goals.",
  },
  {
    icon: Compass,
    title: "Career Counseling",
    desc: "Guidance from professors, career experts and psychologists for course selection and long-term planning.",
  },
  {
    icon: Plane,
    title: "Study Abroad",
    desc: "University selection, admission, documentation, transcript prep and evaluation for global programs.",
  },
  {
    icon: FileText,
    title: "Educational Certificates",
    desc: "Original, provisional, migration certificates and other academic documentation, handled end-to-end.",
  },
  {
    icon: FileCheck2,
    title: "Transcript Services",
    desc: "WES, IQAS, CES and NCESS transcript preparation for Canada, USA, Australia and other countries.",
  },
  {
    icon: Microscope,
    title: "Research Guidance",
    desc: "PhD support, research methodology, thesis structuring and publication assistance.",
  },
  {
    icon: Briefcase,
    title: "Project Works",
    desc: "UG and PG project assistance, live industry mentoring and internship certificates.",
  },
  {
    icon: BellRing,
    title: "Job Notifications",
    desc: "Timely updates on government, private and pharma job openings tailored to your qualifications.",
  },
];

const audiences = [
  {
    key: "students",
    label: "Students",
    body: "SSC, Intermediate, Diploma, UG, PG and PhD aspirants looking for the right course, college or country.",
  },
  {
    key: "parents",
    label: "Parents",
    body: "Families seeking honest admission guidance, transparent counseling and safe study-abroad decisions.",
  },
  {
    key: "professionals",
    label: "Professionals",
    body: "Working professionals needing WES / IQAS / CES evaluations, migration certificates and degree verification.",
  },
  {
    key: "researchers",
    label: "Researchers",
    body: "PhD scholars needing structured research guidance, thesis mentoring and publication support.",
  },
];

const advantages = [
  {
    icon: Sparkles,
    title: "End-to-End Service",
    desc: "From your first counseling call to boarding your flight — one team handles every step.",
  },
  {
    icon: Globe2,
    title: "Study Abroad Expertise",
    desc: "Deep experience with WES, IQAS, CES and country-specific documentation workflows.",
  },
  {
    icon: MapPin,
    title: "Multi-City Presence",
    desc: "Trusted offices across Andhra Pradesh, close to the students and families we serve.",
  },
  {
    icon: ShieldCheck,
    title: "Experienced Leadership",
    desc: "A leadership team with over a decade of hands-on admissions and documentation experience.",
  },
];

const team = [
  {
    name: "D. Venkata Rao",
    title: "Manager",
    bio: "Leads student counseling and university partnerships with over a decade in admissions.",
  },
  {
    name: "Mrs. K. Radhika",
    title: "Proprietor",
    bio: "Founded StarEducational Consultancy with a mission to make quality guidance accessible to every Indian family.",
  },
];

// Add or edit testimonials here. Video testimonials can be added later by
// extending each object with a `videoUrl` and rendering a <video> when present.
const testimonials = [
  {
    name: "Aman Sharma (Sample)",
    course: "Meerut, Uttar Pradesh | MBBS Admission",
    quote:
      "The counsellors at Admission Counsel guided me throughout the entire admission process. From choosing the right college to completing documentation, everything was handled professionally. Their support made my admission journey completely stress-free.",
    rating: 5,
  },
  {
    name: "Priya Singh (Sample)",
    course: "Lucknow, Uttar Pradesh | BDS Admission",
    quote:
      "I was confused about college selection and counselling rounds. The Admission Counsel team explained every option clearly and helped me secure admission to a reputed institution. I highly recommend their services.",
    rating: 5,
  },
  {
    name: "Mohd. Arman (Sample)",
    course: "Bareilly, Uttar Pradesh | MBBS Abroad",
    quote:
      "The team provided excellent guidance for studying MBBS abroad. They assisted with university selection, documentation, visa support, and pre-departure formalities. Everything was transparent and well organized.",
    rating: 5,
  },
  {
    name: "Neha Verma (Sample)",
    course: "Ghaziabad, Uttar Pradesh | B.Sc. Nursing",
    quote:
      "From career counselling to final admission, the team was always available to answer my questions. Their personalized guidance helped me choose the right course and college.",
    rating: 5,
  },
  {
    name: "Rohit Kumar (Sample)",
    course: "Delhi | B.Tech Admission",
    quote:
      "Admission Counsel made the entire admission process simple and hassle-free. Their experienced counsellors helped me select the right engineering college based on my career goals.",
    rating: 5,
  },
  {
    name: "Simran Kaur (Sample)",
    course: "Chandigarh | MBA Admission",
    quote:
      "Their counselling was honest and student-focused. I received complete guidance regarding universities, scholarships, and documentation. I truly appreciate their professional approach.",
    rating: 5,
  },
  {
    name: "Abhishek Mishra (Sample)",
    course: "Kanpur, Uttar Pradesh | Pharmacy Admission",
    quote:
      "I had multiple admission options, but the counsellors helped me compare colleges based on academics, placements, and affordability. It was the best decision for my future.",
    rating: 5,
  },
  {
    name: "Harpreet Singh (Sample)",
    course: "Ludhiana, Punjab | Study Abroad",
    quote:
      "The visa guidance and admission support were exceptional. The team remained connected with me even after I reached my university, which shows their commitment to student success.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Is career counselling free?",
    a: "Yes. We offer an initial career counselling session to help you understand your academic options, eligibility, and the best course and university based on your goals.",
  },
  {
    q: "Which courses do you provide admission guidance for?",
    a: "We provide expert counselling for Medical, Engineering, Management, Pharmacy, Nursing, Paramedical, Law, Computer Applications, Arts, Commerce, Science, Agriculture, Online & Distance Education, and Study Abroad programmes.",
  },
  {
    q: "Do you assist with admissions in India and abroad?",
    a: "Yes. We offer complete admission support for leading colleges and universities across India, as well as universities in popular international study destinations.",
  },
  {
    q: "Can you help me choose the right college or university?",
    a: "Absolutely. Our experienced counsellors evaluate your academic profile, career aspirations, budget, and preferences to recommend the most suitable institutions.",
  },
  {
    q: "Do you provide MBBS admission guidance?",
    a: "Yes. We specialize in MBBS admissions in India and abroad, along with guidance for BDS, BAMS, BHMS, Nursing, Pharmacy, and Allied Health programmes.",
  },
  {
    q: "Do you help with scholarships and education loans?",
    a: "Yes. We guide eligible students on available scholarship opportunities and provide assistance with education loan documentation and financing options.",
  },
  {
    q: "What documents are required for admission?",
    a: "Document requirements vary by institution and programme. Generally, academic mark sheets, identity proof, photographs, entrance exam scores (if applicable), and other supporting documents are required. Our team provides a detailed checklist for every applicant.",
  },
  {
    q: "Do you assist with study abroad applications and student visas?",
    a: "Yes. We provide end-to-end support, including university selection, application processing, documentation, visa guidance, accommodation advice, and pre-departure assistance.",
  },
  {
    q: "Can working professionals apply for Online or Distance Education programmes?",
    a: "Certainly. We help working professionals choose UGC-approved Online and Distance Learning programmes that fit their career goals and schedules.",
  },
  {
    q: "Why should I choose Admission Counsel?",
    a: "With experienced counsellors, personalized guidance, transparent processes, and complete admission support, Admission Counsel ensures a smooth, informed, and stress-free journey—from your first enquiry to your successful admission.",
  },
  {
    q: "How can I get started?",
    a: "Simply fill out the enquiry form, call us, or connect with us on WhatsApp. Our counsellors will contact you promptly to understand your requirements and guide you through the next steps.",
  },
  {
    q: "Do you charge any counselling or consultancy fees?",
    a: "Our counselling process depends on the type of service and programme. During your first consultation, our team will clearly explain any applicable charges, if any, ensuring complete transparency.",
  },
];
const trustBadges = [
  "University Partner",
  "WES Authorized Prep",
  "IQAS Documentation",
  "CES Transcripts",
  "AP Registered",
  "ISO Aligned",
];

const galleryPrompts = [
  "warm office reception with counselor and student",
  "counselor guiding a family across a desk",
  "student holding admission letter, smiling",
  "team meeting discussing university options",
  "student pointing at a world map",
  "group of graduates in caps celebrating",
];

const nav = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#study-abroad", label: "Study Abroad" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];
const programmes = [
  { icon: GraduationCap, title: "Undergraduate Degrees" },
  { icon: GraduationCap, title: "Postgraduate Degrees" },
  { icon: Briefcase, title: "MBA & PGDM" },
  { icon: Laptop, title: "Computer Applications (BCA/MCA)" },
  { icon: BarChart3, title: "Commerce & Management" },
  { icon: Cog, title: "Engineering (Where Applicable)" },
  { icon: Scale, title: "Law & Legal Studies" },
  { icon: BookOpen, title: "Education Programmes" },
  { icon: FlaskConical, title: "Science & Technology" },
  { icon: Palette, title: "Arts, Humanities & Social Sciences" },
];

const benefits = [
  "100+ UGC-Approved Universities",
  "Learn from Anywhere in India",
  "Flexible Learning Schedule",
  "Ideal for Working Professionals",
  "Live & Recorded Classes",
  "Digital Learning Resources",
  "Online Examinations (As Applicable)",
  "Career-Oriented Programmes",
  "Expert Academic Support",
  "Industry-Recognized Degrees",
];

const services2 = [
  {
    icon: Users,
    title: "Career Counselling & Guidance",
  },
  {
    icon: Building2,
    title: "College & University Admissions",
  },
  {
    icon: FileText,
    title: "Study Abroad Services",
  },
  {
    icon: BookOpen,
    title: "Documentation Support",
  },
  {
    icon: CreditCard,
    title: "Course & University Selection",
  },
  {
    icon: PhoneCall,
    title: "Application & Documentation Support",
  },
    {
        icon: CheckCircle2,
        title: "Scholarship & Education Loan Assistance"
    },
    { 
        icon: Star,
        title:"Entrance Exam Guidance"
    
    },

];

const partnerUniversities = [
  "Amity University Online",
  "Manipal University Jaipur (Online)",
  "Jain (Deemed-to-be University) Online",
  "Lovely Professional University (LPU Online)",
  "Chandigarh University Online",
  "DY Patil University Online",
  "Uttaranchal University Online",
  "Shoolini University Online",
  "Sikkim Manipal University (Online)",
  "IGNOU",
  "Symbiosis Centre for Distance Learning (SCDL)",
  "NMIMS Centre for Distance & Online Education",
  "Mangalayatan University",
  "Subharti University",
  "Sikkim Professional University",
  "Sharda University",
  "SGVU – Suresh Gyan Vihar University",
  "Uttar Pradesh Rajarshi Tandon Open University (UPRTOU)",
  "Dr. B.R. Ambedkar Open University",
  "Netaji Subhas Open University",
  "Yashwantrao Chavan Maharashtra Open University (YCMOU)",
  "Karnataka State Open University (KSOU)",
  "Tamil Nadu Open University (TNOU)",
  "Vardhman Mahaveer Open University (VMOU)",
  "Madhya Pradesh Bhoj Open University",
  "Kurukshetra University – Distance Education",
  "Annamalai University – Directorate of Distance Education",
  "Aligarh Muslim University – Centre for Distance & Online Education",
  "Jamia Hamdard (Online Programmes)",
  "Jamia Millia Islamia – Centre for Distance & Online Education",
];


const partnerStats = [
  { value: "100+", label: "UGC-Approved Universities" },
  { value: "500+", label: "Online Programmes" },
  { value: "10K+", label: "Students Guided" },
];

const leadershipTeam = [
  {
    name: "Gufran Khan",
    title: "Founder & Director | Education & Career Counselling Expert",
    qualification: "PG, MBA",
    experience: "15+ Years",
    bio: "Gufran Khan has over 15 years of experience in educational counselling, student admissions, and institutional partnerships. He has successfully guided thousands of students in selecting the right courses and universities across India and abroad, with a strong focus on ethical counselling and student success.",
  },
  {
    name: "Rafat Khan",
    title: "Director | Senior Education Consultant",
    qualification: "PG, MBA",
    experience: "25+ Years",
    bio: "With more than 25 years of experience in higher education counselling and academic advisory, Rafat Khan specializes in career planning, university admissions, and strategic educational guidance. His extensive knowledge has helped students make confident and well-informed academic decisions.",
  },
  {
    name: "Dr. Anurag Pandey",
    title: "Medical Education Consultant",
    qualification: "MBBS (Georgia)",
    experience: "7+ Years",
    bio: "Dr. Anurag Pandey is a dedicated medical education consultant with extensive expertise in MBBS admissions in India and abroad. He provides accurate guidance on medical universities, eligibility, licensing pathways, and career opportunities, helping aspiring doctors achieve their goals.",
  },
  {
    name: "Mrs. Sushmita Gupta",
    title: "Senior Career & Admission Counsellor",
    qualification: "PG, MBA",
    experience: "20+ Years",
    bio: "Mrs. Sushmita Gupta brings over two decades of experience in student counselling, admissions, and career development. She is known for her personalized approach, helping students identify the best academic pathways based on their strengths and aspirations.",
  },
  {
    name: "Ms. Saima Khan",
    title: "Psychological Counsellor",
    qualification: "Professional Psychological Counsellor",
    experience: "Experienced",
    bio: "Ms. Saima Khan supports students in making confident educational and career decisions. Through personalized counselling and psychometric insights, she helps students understand their strengths, manage academic stress, and choose career paths aligned with their interests and potential.",
  },
];

const whoWeHelp = [
  { icon: GraduationCap, label: "Undergraduate & Postgraduate Aspirants" },
  { icon: Stethoscope, label: "Medical & Healthcare Students" },
  { icon: Cog, label: "Engineering & Technology Aspirants" },
  { icon: Briefcase, label: "Management & Business Professionals" },
  { icon: Plane, label: "Study Abroad Applicants" },
  { icon: Laptop, label: "Online & Distance Education Learners" },
  { icon: Users, label: "Parents & Guardians" },
  { icon: Microscope, label: "Researchers & Doctoral Scholars" },
];
/* ---------------------------------------------------------------------- */
/*  Small local UI primitives (replace shadcn/ui — plain Tailwind only)   */
/* ---------------------------------------------------------------------- */

function Button({
  as: Comp = "button",
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-1.5 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const sizes = {
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  };
  const variants = {
    solid: "bg-sky-500 text-white hover:bg-sky-600",
    outline: "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50",
  };
  return (
    <Comp
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white ${className}`}>
      {children}
    </div>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
    />
  );
}

function SelectField({ label, placeholder, options, value, onChange }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-800">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function AccordionItem({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-slate-900"
      >
        {q}
        <span
          className={`shrink-0 text-slate-400 transition-transform ${open ? "rotate-45" : ""}`}
        >
          <ArrowRight className="h-4 w-4 rotate-90" />
        </span>
      </button>
      <div
        className={`grid overflow-hidden text-sm text-slate-500 transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{a}</div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Stats count-up                                                        */
/* ---------------------------------------------------------------------- */

function useCountUp(target, run, duration = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.floor(target * (0.5 - Math.cos(Math.PI * p) / 2)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return val;
}

function StatCard({ value, suffix, label, run }) {
  const v = useCountUp(value, run);
  return (
    <Card className="p-6 text-center shadow-md">
      <div className="text-4xl font-bold text-sky-500 sm:text-5xl">
        {v.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-500">{label}</div>
    </Card>
  );
}

/* ---------------------------------------------------------------------- */
/*  Main component                                                        */
/* ---------------------------------------------------------------------- */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeAudience, setActiveAudience] = useState("students");
  const [toastMsg, setToastMsg] = useState("");
  const [service, setService] = useState("");
  const [country, setCountry] = useState("");
  const statsRef = useRef(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStatsVisible(true),
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!toastMsg) return;
    const t = setTimeout(() => setToastMsg(""), 3500);
    return () => clearTimeout(t);
  }, [toastMsg]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToastMsg("Thank you! A counselor will reach out within one working day.");
    e.target.reset();
    setService("");
    setCountry("");
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* TOAST */}
      {toastMsg && (
        <div className="fixed left-1/2 top-4 z-[60] -translate-x-1/2 rounded-lg bg-slate-900 px-4 py-3 text-sm text-white shadow-lg">
          {toastMsg}
        </div>
      )}

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#home" className="flex min-w-0 items-center gap-2">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky-500 text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="truncate text-base font-bold tracking-tight sm:text-lg">
              StarEducational Consultancy
            </span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-slate-500 transition-colors hover:text-sky-500"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button as="a" href="#enquire" className="hidden sm:inline-flex">
              Book Free Consultation
            </Button>
            <button
              className="rounded-md p-2 lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
                >
                  {n.label}
                </a>
              ))}
              <Button as="a" href="#enquire" className="mt-2" onClick={() => setMenuOpen(false)}>
                Book Free Consultation
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-sky-50"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-sky-500">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted since 2013 · Multi-city presence in Andhra Pradesh
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your Trusted Partner for Every Step of Your{" "}
              <span className="text-sky-500">Education Journey</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-500 sm:text-lg">
              StarEducational Consultancy is an end-to-end educational service provider — admissions, career counseling,
              study abroad, documentation, research guidance and more. One team, one point of
              contact, from your first question to your first day on campus.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href="#enquire" size="lg">
                Book Free Counseling
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Button as="a" href="#services" size="lg" variant="outline">
                Explore Services
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-amber-300/20 blur-2xl" aria-hidden />
            <img
              src={heroImage}
              alt="StarEducational Consultancy counselor guiding students"
              width={1400}
              height={1000}
              className="relative rounded-3xl border border-slate-200 shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6" ref={statsRef}>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} run={statsVisible} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            About StarEducational Consultancy
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            A bridge between students and the right institutions
          </h2>
          <p className="mt-5 text-base text-slate-500 sm:text-lg">
            StarEducational Consultancy exists to help students and families make confident,
            informed choices about their education. We aren't a college — we're the honest,
            experienced partner that sits beside you through admissions, documentation, transcripts,
            research support and career planning. With offices across Andhra Pradesh, our team
            combines local trust with global reach.
          </p>
        </div>
      </section>
  

      {/* SERVICES */}
      <section id="services" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
             Comprehensive Educational Solutions Under One Roof
            </h2>
            <p className="mt-4 text-slate-500">
At Admission Counsel, we provide end-to-end education and career guidance services, ensuring a
seamless admission journey for students in India and abroad. Our experienced team supports you at every
stage—from choosing the right course to successfully beginning your academic journey
  </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services2.map(({ icon: Icon, title, desc }) => (
              <Card
                key={title}
                className="group flex flex-col gap-3 p-6 transition-shadow hover:shadow-xl"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-sky-500/10 text-sky-500">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
                <a
                  href="#enquire"
                  className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-sky-500 hover:underline"
                >
                  Enquire Now <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
       <section id="study-abroad" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Who We Help
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted Guidance for Students, Families & Professionals
          </h2>
          <p className="mt-4 text-slate-500">
            Admission Counsel partners with students, parents, educators, and professionals to
            simplify educational decisions through expert counselling and comprehensive admission
            support. Our expertise serves:
          </p>
        </div>
 
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whoWeHelp.map(({ icon: Icon, label }) => (
            <Card
              key={label}
              className="flex flex-col items-center gap-3 p-6 text-center transition-shadow hover:shadow-xl"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-sky-500/10 text-sky-500">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-slate-800">{label}</p>
            </Card>
          ))}
        </div>
 
        <div className="mt-10 text-center">
          <p className="mx-auto max-w-2xl text-slate-500">
            Whatever your ambition, our experienced counsellors provide the guidance, expertise,
            and support needed to achieve it.
          </p>
          <Button as="a" href="#enquire" size="lg" className="mt-6">
            Talk to an Expert
          </Button>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 bg-white">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Left Content */}
      <div>
        <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
          Why Admission Counsel
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          More Than Admission.
          <br />
          <span className="text-sky-600">
            A Trusted Education Partner.
          </span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          We don't just help you secure admission—we guide you throughout your
          academic journey with personalized counselling, transparent advice,
          and complete support from application to enrollment.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <div className="rounded-xl border border-slate-200 px-6 py-4">
            <p className="text-3xl font-bold text-sky-600">70+</p>
            <p className="text-sm text-slate-500">
              Years Combined Experience
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 px-6 py-4">
            <p className="text-3xl font-bold text-sky-600">100+</p>
            <p className="text-sm text-slate-500">
              Partner Universities
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 px-6 py-4">
            <p className="text-3xl font-bold text-sky-600">500+</p>
            <p className="text-sm text-slate-500">
              Academic Programmes
            </p>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10">
        <h3 className="text-2xl font-bold text-slate-900">
          What Sets Us Apart
        </h3>

        <div className="mt-8 space-y-5">

          <div className="flex gap-4">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600"></div>
            <div>
              <h4 className="font-semibold text-slate-900">
                Personalized Career Guidance
              </h4>
              <p className="text-slate-600">
                Recommendations based on your profile, interests and goals.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600"></div>
            <div>
              <h4 className="font-semibold text-slate-900">
                End-to-End Admission Support
              </h4>
              <p className="text-slate-600">
                Course selection, applications, documentation and enrollment.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600"></div>
            <div>
              <h4 className="font-semibold text-slate-900">
                India & Study Abroad
              </h4>
              <p className="text-slate-600">
                Complete guidance for admissions in India and overseas.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600"></div>
            <div>
              <h4 className="font-semibold text-slate-900">
                Transparent & Student-First
              </h4>
              <p className="text-slate-600">
                Honest advice with institutions matched to your goals.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600"></div>
            <div>
              <h4 className="font-semibold text-slate-900">
                Dedicated Relationship Manager
              </h4>
              <p className="text-slate-600">
                One point of contact from enquiry to admission and beyond.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-10 rounded-2xl bg-sky-600 px-6 py-5 text-white">
          <p className="text-lg font-semibold">
            One Team. One Point of Contact. One Successful Admission Journey.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* TEAM */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-4xl text-center">
      <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
        Leadership
      </span>

      <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
        Meet the Experts Behind Your Success
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        At <span className="font-semibold">Admission Counsel</span>, our
        leadership team brings together decades of experience in educational
        counselling, career guidance, student admissions, and international
        education. With a student-first approach and deep industry expertise,
        they are committed to helping every learner make informed decisions and
        achieve their academic aspirations.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-2">
      {leadershipTeam.map((member) => (
        <Card
          key={member.name}
          className="rounded-3xl border border-sky-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
        >
          <div className="flex gap-6">

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-2xl font-bold text-sky-700">
              {member.name
                .split(" ")
                .map((word) => word[0])
                .slice(0, 2)
                .join("")}
            </div>

            <div className="flex-1">

              <h3 className="text-2xl font-bold text-slate-900">
                {member.name}
              </h3>

              <p className="mt-1 font-semibold text-sky-600">
                {member.title}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
                  🎓 {member.qualification}
                </span>

                <span className="rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
                  ⭐ {member.experience}
                </span>
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                {member.bio}
              </p>

            </div>
          </div>
        </Card>
      ))}
    </div>

    <div className="mt-20 rounded-3xl bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 px-10 py-14 text-center text-white shadow-xl">
      <h3 className="text-3xl font-bold">
        70+ Years of Combined Educational Excellence
      </h3>

      <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-sky-100">
        Collectively, our leadership team represents more than
        <span className="font-semibold text-white">
          {" "}70 years of combined experience{" "}
        </span>
        in educational counselling, admissions, and student success—
        empowering thousands of students to achieve their academic and
        professional goals across India and around the world.
      </p>
    </div>

  </div>
</section>
    
<section className="bg-gradient-to-b from-white via-sky-50 to-blue-100 py-24">
  <div className="mx-auto max-w-7xl px-6">

    {/* Heading */}

    <div className="mx-auto max-w-3xl text-center">
      <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
        Online & Distance Education
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Learn Anytime.
        <span className="text-sky-600"> Study Anywhere.</span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Advance your education with{" "}
        <span className="font-semibold text-slate-900">
          100+ UGC-Approved Online & Distance Learning Universities
        </span>{" "}
        across India.
        Whether you're a student, working professional, or career changer,
        we help you choose the right programme and university to achieve
        your academic and professional goals.
      </p>
    </div>

    {/* Programmes */}

    <div className="mt-20">
      <h3 className="text-3xl font-bold text-slate-900 text-center">
        Programmes We Support
      </h3>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {programmes.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100">
                <Icon className="h-7 w-7 text-sky-600" />
              </div>

              <p className="mt-5 font-semibold text-slate-800">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>

    {/* Benefits + Services */}

    <div className="mt-24 grid gap-10 lg:grid-cols-2">

      <div className="rounded-3xl bg-slate-900 p-10 text-white">
        <h3 className="text-3xl font-bold">
          Why Choose Online Education?
        </h3>

        <div className="mt-8 space-y-4">
          {benefits.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 text-amber-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">
        <h3 className="text-3xl font-bold text-slate-900">
          Our Services
        </h3>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5"
              >
                <div className="rounded-xl bg-sky-100 p-3">
                  <Icon className="h-6 w-6 text-sky-600" />
                </div>

                <p className="font-semibold text-slate-800">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </div>

    {/* Bottom CTA */}

    <div className="mt-20 rounded-3xl bg-gradient-to-r from-sky-600 to-blue-500 px-8 py-12 text-center text-white shadow-2xl">
      <h3 className="text-3xl font-bold">
        100+ Universities • 500+ Programmes • One Trusted Admission Partner
      </h3>

      <p className="mx-auto mt-4 max-w-3xl text-lg text-sky-100">
        Discover the right Online or Distance Learning programme with
        expert counselling, personalized university recommendations, and
        complete admission assistance.
      </p>

      <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-sky-700 transition hover:scale-105">
        Apply Now
      </button>
    </div>

  </div>
</section>

<section className="py-24 bg-white">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
        Partner Universities
      </span>

      <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
        Learn From India's
        <span className="text-sky-600"> Leading Universities</span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        We partner with India's top UGC-approved Online and Distance
        Learning universities, giving you access to recognized degrees,
        flexible learning, and career-focused programmes.
      </p>
    </div>

    {/* Stats */}

    <div className="mt-14 grid gap-6 md:grid-cols-3">
      {partnerStats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-sky-100 bg-sky-50 p-8 text-center"
        >
          <h3 className="text-4xl font-bold text-sky-600">
            {item.value}
          </h3>

          <p className="mt-2 text-slate-600">
            {item.label}
          </p>
        </div>
      ))}
    </div>

    {/* Universities */}

    <div className="mt-20">
      <h3 className="text-center text-3xl font-bold text-slate-900">
        Our Partner Universities
      </h3>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {partnerUniversities.map((college) => (
          <div
            key={college}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
              <span className="text-xl">🎓</span>
            </div>

            <p className="font-medium text-slate-700">
              {college}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}

    <div className="mt-20 rounded-3xl bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 px-10 py-14 text-center text-white">
      <h3 className="text-3xl font-bold">
        And 100+ UGC-Approved Universities Across India
      </h3>

      <p className="mx-auto mt-4 max-w-3xl text-lg text-sky-100">
        Not sure which university is right for you? Our counsellors will
        compare universities based on your career goals, budget, eligibility,
        and preferred learning mode.
      </p>

      <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-sky-700 transition-all duration-300 hover:scale-105 hover:bg-sky-50">
        Talk to an Expert
      </button>
    </div>

  </div>
</section>
      {/* GALLERY */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Gallery
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Moments from our offices
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPrompts.map((label, i) => (
              <div
                key={i}
                title={label}
                className="aspect-[4/3] rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-amber-100"
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Students and families we've walked with
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="flex flex-col gap-4 p-6">
              <div className="flex gap-0.5 text-sky-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate-800">"{t.quote}"</p>
              <div className="mt-auto flex items-center gap-3 border-t border-slate-200 pt-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sky-500/10 text-sm font-semibold text-sky-500">
                  {t.name[0]}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">{t.name}</div>
                  <div className="truncate text-xs text-slate-500">{t.course}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-slate-200 bg-white/50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
            Recognitions & Partners
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {trustBadges.map((b) => (
              <div
                key={b}
                className="grid h-14 place-items-center rounded-lg border border-dashed border-slate-300 bg-white text-xs font-semibold text-slate-500"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Answers to common questions
          </h2>
        </div>
        <div className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              q={f.q}
              a={f.a}
              open={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
            />
          ))}
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="enquire" className="bg-slate-50 py-20">
  <div className="mx-auto max-w-3xl px-4 sm:px-6">
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
        Get Started
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Book Your Free Career Counselling Session
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        Take the first step toward your academic success. Share your details,
        and one of our experienced education counsellors will connect with you
        within one business day to understand your goals and guide you toward
        the best course and institution.
      </p>

      <div className="mt-8 inline-flex flex-col items-start gap-3 rounded-2xl bg-white p-6 text-left shadow-sm border border-slate-200">
        <div className="flex items-center gap-3">
          <span className="text-lg text-emerald-600">✔</span>
          <span className="font-medium text-slate-700">
            Personalized Career Guidance
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-lg text-emerald-600">✔</span>
          <span className="font-medium text-slate-700">
            Course & University Recommendations
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-lg text-emerald-600">✔</span>
          <span className="font-medium text-slate-700">
            Admission & Scholarship Assistance
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-lg text-emerald-600">✔</span>
          <span className="font-medium text-slate-700">
            India & Study Abroad Admissions
          </span>
        </div>
      </div>

      <h3 className="mt-8 text-2xl font-bold text-slate-900">
        Start Your Journey Today.
      </h3>

      <p className="mt-3 text-slate-600">
        Fill out the enquiry form and let our experts help you make the right
        educational choice with confidence.
      </p>
    </div>

    {/* Keep your existing Card and Form below exactly as it is */}
    <Card className="mt-10 p-6 shadow-xl sm:p-8">
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium">Full Name</label>
                <Input required placeholder="Your full name" name="name" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium">Phone Number</label>
                <Input required type="tel" placeholder="+91 " name="phone" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium">Email</label>
                <Input required type="email" placeholder="you@example.com" name="email" />
              </div>
              <div className="sm:col-span-1">
                <SelectField
                  label="Service Interested In"
                  placeholder="Choose a service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  options={[
                    { value: "admission", label: "Admission Guidance" },
                    { value: "abroad", label: "Study Abroad" },
                    { value: "transcripts", label: "Transcript Services (WES/IQAS/CES)" },
                    { value: "career", label: "Career Counseling" },
                    { value: "research", label: "Research / PhD Guidance" },
                    { value: "certificates", label: "Educational Certificates" },
                    { value: "projects", label: "Project Works" },
                  ]}
                />
              </div>
              <div className="sm:col-span-1">
                <SelectField
                  label="Preferred Country"
                  placeholder="Optional"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  options={[
                    { value: "india", label: "India" },
                    { value: "canada", label: "Canada" },
                    { value: "usa", label: "USA" },
                    { value: "uk", label: "UK" },
                    { value: "australia", label: "Australia" },
                    { value: "germany", label: "Germany" },
                    { value: "other", label: "Other" },
                  ]}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium">Message</label>
                <Textarea rows={4} placeholder="Tell us about your goals..." name="message" />
              </div>
              <div className="sm:col-span-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">Your details stay private. No spam — ever.</p>
                <Button type="submit" size="lg">
                  Submit Enquiry
                </Button>
              </div>
            </form>
    </Card>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Visit us or call — we're close by
            </h2>
            <div className="mt-8 space-y-5">
              {[
                { city: "Visakhapatnam (HQ)", addr: "3rd Floor, MG Road, Visakhapatnam, AP 530003" },
                { city: "Vijayawada", addr: "Benz Circle, Vijayawada, Andhra Pradesh 520010" },
                { city: "Guntur", addr: "Brodipet Main Road, Guntur, Andhra Pradesh 522002" },
              ].map((o) => (
                <div key={o.city} className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-sky-500" />
                  <div>
                    <div className="text-sm font-semibold">{o.city}</div>
                    <div className="text-sm text-slate-500">{o.addr}</div>
                  </div>
                </div>
              ))}
              <div className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-sky-500" />
                <a href="tel:+919000000000" className="text-sm text-slate-800 hover:text-sky-500">
                  +91 90000 00000
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-sky-500" />
                <a
                  href="mailto:hello@stareducation.in"
                  className="text-sm text-slate-800 hover:text-sky-500"
                >
                  hello@stareducation.in
                </a>
              </div>
              <div className="flex gap-3 pt-2">
                {[FaFacebook, FaInstagram, FaLinkedin, FaTwitter].map((I, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="social"
                    className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-sky-500 hover:text-white"
                  >
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <div className="grid h-full place-items-center text-sm text-slate-500">
              Map placeholder
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white/50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-sky-500 text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-bold">StarEducational Consultancy</span>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Your trusted partner for admissions, study abroad and career guidance.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              {nav.slice(0, 5).map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-sky-500">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li>+91 90000 00000</li>
              <li>hello@stareducation.in</li>
              <li>Visakhapatnam · Vijayawada · Guntur</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 py-5">
          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} StarEducational Consultancy. All rights reserved.
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-xl transition-transform hover:scale-105"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}