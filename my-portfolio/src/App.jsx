import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const DATA = {
  name: "Nguyễn Quang Huy",
  role: "Fresher Frontend Developer",
  tagline:
    "ReactJS • UI/UX responsive • REST API integration • Performance minded",
  location: "Đà Nẵng, Việt Nam",
  email: "your.email@example.com",
  github: "https://github.com/your-github",
  linkedin: "https://www.linkedin.com/in/your-linkedin/",
  website: "https://aiscanner.tech",
  cv: "#"
};

const SKILLS = [
  { name: "React", level: 82 },
  { name: "JavaScript (ES6+)", level: 82 },
  { name: "HTML5/CSS3", level: 88 },
  { name: "TypeScript", level: 65 },
  { name: "REST API", level: 78 },
  { name: "Git/GitHub", level: 75 },
  { name: "Docker", level: 55 }
];

const PROJECTS = [
  {
    title: "AIscanner.tech",
    desc:
      "Nền tảng quét tài liệu & tạo nội dung; UI React, tích hợp API GPT, code-splitting & lazy load.",
    stack: ["React", "Vite", "REST API", "GPT API"],
    live: "https://aiscanner.tech",
    code: "https://github.com/your-github/aiscanner"
  },
  {
    title: "Salon Booking",
    desc:
      "Website đặt lịch salon tóc: form validation, auth cơ bản, responsive trên mọi thiết bị.",
    stack: ["React", "React Router", "Tailwind→CSS", "Axios"],
    live: "https://your-salon-demo.example.com",
    code: "https://github.com/your-github/salon-booking"
  },
  {
    title: "Chrome Chat Extension",
    desc:
      "Tiện ích mở rộng truy cập chatbot trong trình duyệt; giao tiếp message passing + UI thu gọn.",
    stack: ["React", "Chrome APIs"],
    live: "#",
    code: "https://github.com/your-github/chrome-chat-extension"
  }
];

const EXPERIENCE = [
  {
    company: "Công ty cổ phần XINKGROUP",
    role: "Frontend Developer (Fresher/Intern)",
    period: "02/2024 – 08/2024",
    bullets: [
      "Xây giao diện với React (hooks), tổ chức routing, tối ưu tải lần đầu.",
      "Tích hợp REST API (Axios), xử lý auth, form validation & trạng thái lỗi/đang tải.",
      "Phối hợp Git/GitHub, review & viết README triển khai; hỗ trợ QA sửa lỗi UI."
    ]
  }
];

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  

  useEffect(() => {
    const handleScroll = () => {
      console.log("handleScroll called");
      
      setScrolled(window.scrollY > 50);
      
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
      const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();       
        console.log(rect);

          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
        console.log(current);

    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <main>
     

      <Navigation DATA={DATA} activeSection = {activeSection} scrolled={scrolled}/>

      <HeroSection DATA={DATA}/>

      <About DATA = {DATA}/>

      <Skills SKILLS = {SKILLS}/>

      <Projects PROJECTS={PROJECTS} />

      <Experience EXPERIENCE={EXPERIENCE} />

      <Contact />

      <Footer DATA={DATA} />
    </main>
  );
}