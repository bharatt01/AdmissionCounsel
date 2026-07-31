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
  ArrowRight,
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
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

/**
 * Admission Counsel — Home page
 * Plain React + Tailwind CSS.
 * Design system: sky-600 primary, amber-600 eyebrow accent, slate neutrals.
 * All original content preserved; layout rebuilt for consistency,
 * symmetry and mobile responsiveness.
 */
const heroImage =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop";

const WHATSAPP_URL = "https://wa.me/919266885450";
const whatsappLink =
  "https://wa.me/919266885450?text=Hi,%20I%20would%20like%20to%20book%20a%20free%20consultation.";
/* ---------------------------------------------------------------------- */
/*  Content                                                                */
/* ---------------------------------------------------------------------- */

const stats = [
  { value: 5000, suffix: "+", label: "Students Guided" },
  { value: 250, suffix: "+", label: "Universities Connected" },
  { value: 3200, suffix: "+", label: "Admissions Completed" },
  { value: 12, suffix: "+", label: "Years of Experience" },
];

const services = [
  { icon: GraduationCap, title: "Admission Guidance", desc: "MBBS, B.Tech, Degree, MBA, M.Tech, Masters, PhD and abroad universities — matched to your goals." },
  { icon: Compass, title: "Career Counseling", desc: "Guidance from professors, career experts and psychologists for course selection and long-term planning." },
  { icon: Plane, title: "Study Abroad", desc: "University selection, admission, documentation, transcript prep and evaluation for global programs." },
  { icon: FileText, title: "Educational Certificates", desc: "Original, provisional, migration certificates and other academic documentation, handled end-to-end." },
  { icon: FileCheck2, title: "Transcript Services", desc: "WES, IQAS, CES and NCESS transcript preparation for Canada, USA, Australia and other countries." },
  { icon: Microscope, title: "Research Guidance", desc: "PhD support, research methodology, thesis structuring and publication assistance." },
  { icon: Briefcase, title: "Project Works", desc: "UG and PG project assistance, live industry mentoring and internship certificates." },
  { icon: BellRing, title: "Job Notifications", desc: "Timely updates on government, private and pharma job openings tailored to your qualifications." },
];

const audiences = [
  { key: "students", label: "Students", body: "SSC, Intermediate, Diploma, UG, PG and PhD aspirants looking for the right course, college or country." },
  { key: "parents", label: "Parents", body: "Families seeking honest admission guidance, transparent counseling and safe study-abroad decisions." },
  { key: "professionals", label: "Professionals", body: "Working professionals needing WES / IQAS / CES evaluations, migration certificates and degree verification." },
  { key: "researchers", label: "Researchers", body: "PhD scholars needing structured research guidance, thesis mentoring and publication support." },
];

const advantages = [
  { icon: Sparkles, title: "End-to-End Service", desc: "From your first counseling call to boarding your flight — one team handles every step." },
  { icon: Globe2, title: "Study Abroad Expertise", desc: "Deep experience with WES, IQAS, CES and country-specific documentation workflows." },
  { icon: MapPin, title: "Multi-City Presence", desc: "Trusted offices across Andhra Pradesh, close to the students and families we serve." },
  { icon: ShieldCheck, title: "Experienced Leadership", desc: "A leadership team with over a decade of hands-on admissions and documentation experience." },
];



const testimonials = [
  { name: "Aman Sharma", course: "Meerut, Uttar Pradesh | MBBS Admission", quote: "The counsellors at Admission Counsel guided me throughout the entire admission process. From choosing the right college to completing documentation, everything was handled professionally. Their support made my admission journey completely stress-free.", rating: 5 },
  { name: "Priya Singh", course: "Lucknow, Uttar Pradesh | BDS Admission", quote: "I was confused about college selection and counselling rounds. The Admission Counsel team explained every option clearly and helped me secure admission to a reputed institution. I highly recommend their services.", rating: 5 },
  { name: "Mohd. Arman", course: "Bareilly, Uttar Pradesh | MBBS Abroad", quote: "The team provided excellent guidance for studying MBBS abroad. They assisted with university selection, documentation, visa support, and pre-departure formalities. Everything was transparent and well organized.", rating: 5 },
  { name: "Neha Verma", course: "Ghaziabad, Uttar Pradesh | B.Sc. Nursing", quote: "From career counselling to final admission, the team was always available to answer my questions. Their personalized guidance helped me choose the right course and college.", rating: 5 },
  { name: "Rohit Kumar", course: "Delhi | B.Tech Admission", quote: "Admission Counsel made the entire admission process simple and hassle-free. Their experienced counsellors helped me select the right engineering college based on my career goals.", rating: 5 },
  { name: "Simran Kaur", course: "Chandigarh | MBA Admission", quote: "Their counselling was honest and student-focused. I received complete guidance regarding universities, scholarships, and documentation. I truly appreciate their professional approach.", rating: 5 },
  { name: "Abhishek Mishra", course: "Kanpur, Uttar Pradesh | Pharmacy Admission", quote: "I had multiple admission options, but the counsellors helped me compare colleges based on academics, placements, and affordability. It was the best decision for my future.", rating: 5 },
  { name: "Harpreet Singh", course: "Ludhiana, Punjab | Study Abroad", quote: "The visa guidance and admission support were exceptional. The team remained connected with me even after I reached my university, which shows their commitment to student success.", rating: 5 },
];

const faqs = [
  { q: "Is career counselling free?", a: "Yes. We offer an initial career counselling session to help you understand your academic options, eligibility, and the best course and university based on your goals." },
  { q: "Which courses do you provide admission guidance for?", a: "We provide expert counselling for Medical, Engineering, Management, Pharmacy, Nursing, Paramedical, Law, Computer Applications, Arts, Commerce, Science, Agriculture, Online & Distance Education, and Study Abroad programmes." },
  { q: "Do you assist with admissions in India and abroad?", a: "Yes. We offer complete admission support for leading colleges and universities across India, as well as universities in popular international study destinations." },
  { q: "Can you help me choose the right college or university?", a: "Absolutely. Our experienced counsellors evaluate your academic profile, career aspirations, budget, and preferences to recommend the most suitable institutions." },
  { q: "Do you provide MBBS admission guidance?", a: "Yes. We specialize in MBBS admissions in India and abroad, along with guidance for BDS, BAMS, BHMS, Nursing, Pharmacy, and Allied Health programmes." },
  { q: "Do you help with scholarships and education loans?", a: "Yes. We guide eligible students on available scholarship opportunities and provide assistance with education loan documentation and financing options." },
  { q: "What documents are required for admission?", a: "Document requirements vary by institution and programme. Generally, academic mark sheets, identity proof, photographs, entrance exam scores (if applicable), and other supporting documents are required. Our team provides a detailed checklist for every applicant." },
  { q: "Do you assist with study abroad applications and student visas?", a: "Yes. We provide end-to-end support, including university selection, application processing, documentation, visa guidance, accommodation advice, and pre-departure assistance." },
  { q: "Can working professionals apply for Online or Distance Education programmes?", a: "Certainly. We help working professionals choose UGC-approved Online and Distance Learning programmes that fit their career goals and schedules." },
  { q: "Why should I choose Admission Counsel?", a: "With experienced counsellors, personalized guidance, transparent processes, and complete admission support, Admission Counsel ensures a smooth, informed, and stress-free journey—from your first enquiry to your successful admission." },
  { q: "How can I get started?", a: "Simply fill out the enquiry form, call us, or connect with us on WhatsApp. Our counsellors will contact you promptly to understand your requirements and guide you through the next steps." },
  { q: "Do you charge any counselling or consultancy fees?", a: "Our counselling process depends on the type of service and programme. During your first consultation, our team will clearly explain any applicable charges, if any, ensuring complete transparency." },
];

const trustBadges = ["University Partner", "WES Authorized Prep", "IQAS Documentation", "CES Transcripts", "AP Registered", "ISO Aligned"];

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
  { icon: Users, title: "Career Counselling & Guidance" },
  { icon: Building2, title: "College & University Admissions" },
  { icon: FileText, title: "Study Abroad Services" },
  { icon: BookOpen, title: "Documentation Support" },
  { icon: CreditCard, title: "Course & University Selection" },
  { icon: PhoneCall, title: "Application & Documentation Support" },
  { icon: CheckCircle2, title: "Scholarship & Education Loan Assistance" },
  { icon: Star, title: "Entrance Exam Guidance" },
];

const partnerUniversities = [
  "Amity University Online", "Manipal University Jaipur (Online)", "Jain (Deemed-to-be University) Online",
  "Lovely Professional University (LPU Online)", "Chandigarh University Online", "DY Patil University Online",
  "Uttaranchal University Online", "Shoolini University Online", "Sikkim Manipal University (Online)",
  "IGNOU", "Symbiosis Centre for Distance Learning (SCDL)", "NMIMS Centre for Distance & Online Education",
  "Mangalayatan University", "Subharti University", "Sikkim Professional University", "Sharda University",
  "SGVU – Suresh Gyan Vihar University", "Uttar Pradesh Rajarshi Tandon Open University (UPRTOU)",
  "Dr. B.R. Ambedkar Open University", "Netaji Subhas Open University",
  "Yashwantrao Chavan Maharashtra Open University (YCMOU)", "Karnataka State Open University (KSOU)",
  "Tamil Nadu Open University (TNOU)", "Vardhman Mahaveer Open University (VMOU)",
  "Madhya Pradesh Bhoj Open University", "Kurukshetra University – Distance Education",
  "Annamalai University – Directorate of Distance Education",
  "Aligarh Muslim University – Centre for Distance & Online Education",
  "Jamia Hamdard (Online Programmes)", "Jamia Millia Islamia – Centre for Distance & Online Education",
];

const partnerStats = [
  { value: "100+", label: "UGC-Approved Universities" },
  { value: "500+", label: "Online Programmes" },
  { value: "10K+", label: "Students Guided" },
];

const leadershipTeam = [
  { name: "Gufran Khan", title: "Founder & Director | Education & Career Counselling Expert", qualification: "PG, MBA", experience: "15+ Years", bio: "Gufran Khan has over 15 years of experience in educational counselling, student admissions, and institutional partnerships. He has successfully guided thousands of students in selecting the right courses and universities across India and abroad, with a strong focus on ethical counselling and student success." },
  { name: "Rafat Khan", title: "Director | Senior Education Consultant", qualification: "PG, MBA", experience: "25+ Years", bio: "With more than 25 years of experience in higher education counselling and academic advisory, Rafat Khan specializes in career planning, university admissions, and strategic educational guidance. His extensive knowledge has helped students make confident and well-informed academic decisions." },
  { name: "Dr. Anurag Pandey", title: "Medical Education Consultant", qualification: "MBBS (Georgia)", experience: "7+ Years", bio: "Dr. Anurag Pandey is a dedicated medical education consultant with extensive expertise in MBBS admissions in India and abroad. He provides accurate guidance on medical universities, eligibility, licensing pathways, and career opportunities, helping aspiring doctors achieve their goals." },
  { name: "Mrs. Sushmita Gupta", title: "Senior Career & Admission Counsellor", qualification: "PG, MBA", experience: "20+ Years", bio: "Mrs. Sushmita Gupta brings over two decades of experience in student counselling, admissions, and career development. She is known for her personalized approach, helping students identify the best academic pathways based on their strengths and aspirations." },
  { name: "Ms. Saima Khan", title: "Psychological Counsellor", qualification: "Professional Psychological Counsellor", experience: "Experienced", bio: "Ms. Saima Khan supports students in making confident educational and career decisions. Through personalized counselling and psychometric insights, she helps students understand their strengths, manage academic stress, and choose career paths aligned with their interests and potential." },
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

const supportAreas = [
  "Career Counseling",
  "College & University Admissions",
  "Study Abroad",
  "Scholarship Assistance",
  "Documentation & Application Support",
  "Research & Academic Guidance",
];

const expertCounselling = [
  { icon: "🩺", category: "Medical", courses: "MBBS, BDS, BAMS, BHMS, BUMS" },
  { icon: "💉", category: "Nursing & Allied Health", courses: "B.Sc. Nursing, GNM, ANM, Physiotherapy, Paramedical" },
  { icon: "💊", category: "Pharmacy", courses: "D.Pharm, B.Pharm, M.Pharm, Pharm.D" },
  { icon: "⚙️", category: "Engineering & Technology", courses: "B.Tech, M.Tech, Diploma, AI, Data Science" },
  { icon: "💻", category: "Computer & IT", courses: "BCA, MCA, Computer Science, Cyber Security, Full Stack" },
  { icon: "📈", category: "Management & Business", courses: "BBA, MBA, PGDM, Finance, HR, Marketing" },
  { icon: "⚖️", category: "Law", courses: "LLB, BA LLB, BBA LLB, LLM" },
  { icon: "🧪", category: "Science", courses: "B.Sc., M.Sc., Biotechnology, Microbiology" },
  { icon: "🌾", category: "Agriculture & Veterinary", courses: "Agriculture, Horticulture, Forestry, Veterinary" },
  { icon: "🏨", category: "Hotel Management & Aviation", courses: "Hospitality, Tourism, Cabin Crew, Aviation" },
  { icon: "🎨", category: "Design & Media", courses: "Fashion, Interior, Graphic Design, Animation, Journalism" },
  { icon: "🏛️", category: "Arts, Commerce & Humanities", courses: "BA, B.Com, MA, M.Com, Economics, Psychology" },
  { icon: "🌍", category: "Study Abroad", courses: "MBBS Abroad, UG, PG, Scholarships, Visa Assistance" },
  { icon: "🎓", category: "Online & Distance Education", courses: "UGC-Approved Online & Distance Degree Programmes" },
  { icon: "📚", category: "Research & Higher Education", courses: "Master's, PhD, Research Guidance, Publications" },
  { icon: "🧭", category: "Career Counselling", courses: "Career Planning, College Selection, Admissions, Scholarships, Education Loan Guidance" },
];

/* ---------------------------------------------------------------------- */
/*  Shared UI primitives                                                  */
/* ---------------------------------------------------------------------- */

function Button({ as: Comp = "button", variant = "solid", size = "md", className = "", children, ...props }) {
  const base =
    "inline-flex items-center justify-center gap-1.5 rounded-lg font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const sizes = { md: "h-11 px-5 text-sm", lg: "h-12 px-7 text-base" };
  const variants = {
    solid: "bg-sky-600 text-white hover:bg-sky-700 shadow-sm shadow-sky-600/20",
    outline: "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50",
    white: "bg-white text-sky-700 hover:bg-sky-50 shadow-sm",
  };
  return (
    <Comp className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Comp>
  );
}

function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white transition-shadow ${className}`}>
      {children}
    </div>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
    />
  );
}

function SelectField({ label, placeholder, options, value, onChange }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
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
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-slate-900"
        aria-expanded={open}
      >
        {q}
        <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500 transition-transform ${open ? "rotate-45 bg-sky-50 text-sky-600" : ""}`}>
          <X className="h-3.5 w-3.5 rotate-45" />
        </span>
      </button>
      <div className={`grid overflow-hidden text-sm leading-6 text-slate-600 transition-all duration-300 ${open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">{a}</div>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description, tone = "light" }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={`text-xs font-semibold uppercase tracking-widest ${tone === "dark" ? "text-sky-400" : "text-sky-600"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${tone === "dark" ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg ${tone === "dark" ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      )}
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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
      <div className="text-3xl font-bold text-sky-600 sm:text-4xl">
        {v.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-500">{label}</div>
    </div>
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
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setStatsVisible(true), { threshold: 0.3 });
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

  const currentAudience = audiences.find((a) => a.key === activeAudience);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      {/* TOAST */}
      {toastMsg && (
        <div className="fixed left-1/2 top-4 z-[60] w-[92%] max-w-sm -translate-x-1/2 rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white shadow-lg">
          {toastMsg}
        </div>
      )}

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sky-600 text-white">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="truncate text-base font-bold tracking-tight text-slate-900 sm:text-lg">
              Admission Counsel
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600">
                {n.label}
              </a>
            ))}
          </nav>

       <div className="flex items-center gap-2">
  <Button
    as="a"
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="hidden sm:inline-flex"
  >
    Book Free Consultation
  </Button>

  <button
    className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
    onClick={() => setMenuOpen((v) => !v)}
    aria-label="Toggle menu"
  >
    {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
  </button>
</div>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100"
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
      <section id="home" className="border-b border-slate-100 bg-gradient-to-b from-sky-50/70 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-sky-700">
                <Sparkles className="h-3.5 w-3.5" />
                Trusted since 2020
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
                Your trusted partner in every step of your{" "}
                <span className="text-sky-600">academic journey</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Admission Counsel is an end-to-end admission and career guidance platform that
                empowers students to achieve their academic goals with confidence.
              </p>

              <p className="mt-7 text-sm font-semibold text-slate-900">
                Our experienced counsellors provide personalized support for:
              </p>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {supportAreas.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-600" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-7 border-l-2 border-sky-200 pl-4 text-sm leading-6 text-slate-600">
                From your first enquiry to your first day on campus, we stand beside you with
                expert advice, transparent guidance, and complete admission support.
                <span className="mt-1 block font-semibold text-slate-900">
                  Your Dream. Our Guidance. Your Success.
                </span>
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button as="a" href="#enquire" size="lg">
                  Book Free Counseling
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <Button as="a" href="#services" size="lg" variant="outline">
                  Explore Services
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-sky-100" aria-hidden />
              <img
                src={heroImage}
                alt="Admission Counsel counselor guiding students"
                width={1400}
                height={1000}
                className="relative aspect-[4/3] w-full rounded-[1.75rem] border border-white object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERT COUNSELLING FOR */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeader
          eyebrow="Areas of Expertise"
          title="Expert counselling for every field"
          description="Whatever path you're considering, our counsellors bring specific, current knowledge of eligibility, admissions and career outcomes."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {expertCounselling.map((row) => (
            <div
              key={row.category}
              className="flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-50 text-xl">
                {row.icon}
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-slate-900">{row.category}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">{row.courses}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-slate-100 bg-slate-50" ref={statsRef}>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} run={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">About Admission Counsel</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Guiding dreams. Building futures.
        </h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-7 text-slate-600 sm:text-lg">
          <p>
            Admission Counsel is a trusted education consultancy dedicated to helping students make
            informed academic and career decisions with confidence. We serve as the bridge between
            aspiring students and leading colleges and universities across India and around the world.
          </p>
          <p>
            Whether you&apos;re pursuing undergraduate, postgraduate, medical, engineering, management,
            or international education, our experienced counsellors provide personalized guidance
            tailored to your goals.
          </p>
          <p>
            From career counselling and course selection to admissions, documentation, scholarships,
            education loans, study abroad assistance, and post-admission support, we manage every step
            of your journey with transparency, expertise, and care.
          </p>
          <p>
            At Admission Counsel, we believe that every student deserves the right guidance, the right
            institution, and the right opportunity to succeed. That&apos;s why we stand beside you — from
            your first enquiry to your first day on campus and beyond.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Comprehensive educational solutions under one roof"
            description="End-to-end education and career guidance for students in India and abroad — from choosing the right course to successfully beginning your academic journey."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services2.map(({ icon: Icon, title }) => (
              <Card key={title} className="flex flex-col gap-4 p-6 hover:shadow-md">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-sky-50 text-sky-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                <a href="#enquire" className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:underline">
                  Enquire Now <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section id="study-abroad" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeader
          eyebrow="Who We Help"
          title="Trusted guidance for students, families & professionals"
          description="Admission Counsel partners with students, parents, educators, and professionals to simplify educational decisions through expert counselling and comprehensive admission support."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whoWeHelp.map(({ icon: Icon, label }) => (
            <Card key={label} className="flex flex-col items-center gap-3 p-6 text-center hover:shadow-md">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-sky-50 text-sky-600">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-slate-800">{label}</p>
            </Card>
          ))}
        </div>

        {/* Audience detail tabs */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-2">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {audiences.map((a) => (
              <button
                key={a.key}
                onClick={() => setActiveAudience(a.key)}
                className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                  activeAudience === a.key ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:bg-white"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
          {currentAudience && (
            <p className="px-4 py-5 text-center text-sm leading-6 text-slate-600 sm:text-base">
              {currentAudience.body}
            </p>
          )}
        </div>

        <div className="mt-10 text-center">
          <Button as="a" href="#enquire" size="lg">
            Talk to an Expert
          </Button>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="border-y border-slate-100 bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex rounded-full bg-sky-100 px-3.5 py-1.5 text-xs font-semibold text-sky-700">
                Why Admission Counsel
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                More than admission.
                <br />
                <span className="text-sky-600">A trusted education partner.</span>
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                We don&apos;t just help you secure admission — we guide you throughout your academic
                journey with personalized counselling, transparent advice, and complete support from
                application to enrollment.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "70+", label: "Years combined experience" },
                  { value: "100+", label: "Partner universities" },
                  { value: "500+", label: "Academic programmes" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <p className="text-2xl font-bold text-sky-600">{s.value}</p>
                    <p className="mt-1 text-xs leading-4 text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-xl font-bold text-slate-900">What sets us apart</h3>
              <div className="mt-6 space-y-5">
                {advantages.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sky-50 text-sky-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
                      <p className="mt-0.5 text-sm leading-5 text-slate-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-xl bg-sky-600 px-5 py-4 text-center text-sm font-semibold text-white">
                One Team. One Point of Contact. One Successful Admission Journey.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeader
          eyebrow="Leadership"
          title="Meet the experts behind your success"
          description="Our leadership team brings together decades of experience in educational counselling, career guidance, student admissions, and international education."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipTeam.map((member) => (
            <Card key={member.name} className="flex flex-col gap-5 p-7 hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-sky-50 text-lg font-bold text-sky-700">
                  {member.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm font-medium text-sky-600">{member.title}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  🎓 {member.qualification}
                </span>
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                  ⭐ {member.experience}
                </span>
              </div>
              <p className="text-sm leading-6 text-slate-600">{member.bio}</p>
            </Card>
          ))}

         
        </div>

        <div className="mt-12 rounded-2xl bg-sky-600 px-8 py-12 text-center text-white sm:px-12">
          <h3 className="text-2xl font-bold sm:text-3xl">70+ years of combined educational excellence</h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-sky-100 sm:text-base">
            Collectively, our leadership team represents more than 70 years of combined experience in
            educational counselling, admissions, and student success — empowering thousands of students
            to achieve their academic and professional goals across India and around the world.
          </p>
        </div>
      </section>

      {/* ONLINE & DISTANCE EDUCATION */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Online & Distance Education"
            title="Learn anytime. Study anywhere."
            description="Advance your education with 100+ UGC-approved online and distance learning universities across India. Whether you're a student, working professional, or career changer, we help you choose the right programme and university."
          />

          <div className="mt-14">
            <h3 className="text-center text-xl font-bold text-slate-900">Programmes we support</h3>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {programmes.map(({ icon: Icon, title }) => (
                <div key={title} className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center transition-shadow hover:shadow-md">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-50">
                    <Icon className="h-6 w-6 text-sky-600" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800">{title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-slate-900 p-8 text-white sm:p-10">
              <h3 className="text-xl font-bold">Why choose online education?</h3>
              <div className="mt-6 space-y-3.5">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-sky-400" />
                    <span className="text-sm leading-5 text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
              <h3 className="text-xl font-bold text-slate-900">Our services</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {services.map(({ icon: Icon, title }) => (
                  <div key={title} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sky-100">
                      <Icon className="h-5 w-5 text-sky-600" />
                    </div>
                    <p className="text-sm font-semibold text-slate-800">{title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-2xl bg-sky-600 px-8 py-12 text-center text-white sm:px-12">
            <h3 className="text-2xl font-bold sm:text-3xl">
              100+ universities • 500+ programmes • one trusted admission partner
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-sky-100 sm:text-base">
              Discover the right online or distance learning programme with expert counselling,
              personalized university recommendations, and complete admission assistance.
            </p>
            <Button as="a" href="#enquire" variant="white" size="lg" className="mt-7">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* PARTNER UNIVERSITIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeader
          eyebrow="Partner Universities"
          title="Learn from India's leading universities"
          description="We partner with India's top UGC-approved online and distance learning universities, giving you access to recognized degrees, flexible learning, and career-focused programmes."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {partnerStats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-sky-100 bg-sky-50 p-7 text-center">
              <h3 className="text-3xl font-bold text-sky-600 sm:text-4xl">{item.value}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-center text-xl font-bold text-slate-900">Our partner universities</h3>
          <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {partnerUniversities.map((college) => (
              <div
                key={college}
                className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-white p-4 transition-shadow hover:shadow-md"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sky-50 text-base">🎓</span>
                <p className="text-sm font-medium leading-5 text-slate-700">{college}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-slate-900 px-8 py-12 text-center text-white sm:px-12">
          <h3 className="text-2xl font-bold sm:text-3xl">And 100+ UGC-approved universities across India</h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Not sure which university is right for you? Our counsellors will compare universities
            based on your career goals, budget, eligibility, and preferred learning mode.
          </p>
          <Button as="a" href="#enquire" size="lg" className="mt-7">
            Talk to an Expert
          </Button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Testimonials"
            title="Students and families we've walked with"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((t) => (
              <Card key={t.name} className="flex flex-col gap-4 p-6">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-6 text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sky-50 text-sm font-semibold text-sky-600">
                    {t.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-900">{t.name}</div>
                    <div className="truncate text-xs text-slate-500">{t.course}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
     

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title="Answers to common questions" />
        <div className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
          ))}
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="enquire" className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Get Started"
            title="Book your free career counselling session"
            description="Take the first step toward your academic success. Share your details, and one of our experienced education counsellors will connect with you within one business day."
          />

          <div className="mx-auto mt-8 grid max-w-xl gap-3 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-2">
            {[
              "Personalized Career Guidance",
              "Course & University Recommendations",
              "Admission & Scholarship Assistance",
              "India & Study Abroad Admissions",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <Card className="mt-10 p-6 shadow-sm sm:p-8">
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Full Name</label>
                <Input required placeholder="Your full name" name="name" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Phone Number</label>
                <Input required type="tel" placeholder="+91 " name="phone" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
                <Input required type="email" placeholder="you@example.com" name="email" />
              </div>
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
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Message</label>
                <Textarea rows={4} placeholder="Tell us about your goals..." name="message" />
              </div>
              <div className="flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">Your details stay private. No spam — ever.</p>
                <Button type="submit" size="lg">Submit Enquiry</Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Visit us or call — we&apos;re close by
            </h2>

            <div className="mt-8 space-y-5">
              {[
                { city: "Head Office", addr: "Radiance Building, Okhla, Jamia Nagar, Delhi 110025" },
                { city: "Branch Office", addr: "Meerut, Uttar Pradesh & Faridabad, Haryana" },
              ].map((o) => (
                <div key={o.city} className="flex gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sky-50">
                    <MapPin className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{o.city}</div>
                    <div className="text-sm text-slate-500">{o.addr}</div>
                  </div>
                </div>
              ))}

              <a href="tel:+919266885450" className="flex gap-3.5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sky-50">
                  <Phone className="h-5 w-5 text-sky-600" />
                </div>
                <span className="self-center text-sm font-medium text-slate-800 hover:text-sky-600">
                  +91 9266885450 | 7678414989
                </span>
              </a>

              <a href="mailto:admissioncounsel45@gmail.com" className="flex gap-3.5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sky-50">
                  <Mail className="h-5 w-5 text-sky-600" />
                </div>
                <span className="self-center text-sm font-medium text-slate-800 hover:text-sky-600">
                  admissioncounsel45@gmail.com
                </span>
              </a>

              <div className="flex gap-3 pt-2">
                {[FaFacebook, FaInstagram, FaLinkedin, FaTwitter].map((I, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="social"
                    className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-sky-600 hover:text-white"
                  >
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <div className="grid h-full place-items-center text-sm text-slate-400">Map placeholder</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-sky-600 text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="font-bold text-slate-900">Admission Counsel</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Your trusted partner for admissions, study abroad and career guidance.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
              {nav.slice(0, 5).map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-sky-600">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
              <li>+91 9266885450</li>
              <li>admissioncounsel45@gmail.com</li>
              <li>Radiance Building, Okhla, Jamia Nagar, Delhi 110025</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 py-5">
          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Admission Counsel. All rights reserved.
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