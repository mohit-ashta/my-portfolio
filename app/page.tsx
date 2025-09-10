"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  Download,
  Star,
  Headset,
  X,
  Menu,
} from "lucide-react"
import { useState, useEffect } from "react"
import { projects, skills } from "@/components/constant"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Portfolio() {
const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const downloadResume = () => {
    const resumeData = `
MOHIT
Phone: +919417385308 | Email: mohit.ashta@icloud.com
Address: V.P.O Gharachon, Tehsil: Bhawanigarh, Distt: Sangrur, Punjab, Pin-Code: 148026

MERN STACK DEVELOPER
Frontend specialist in Next.js and backend expert in NestJS

EXPERIENCE
Cuilsoft Pvt. Ltd., Mohali — Next Developer (Oct 2023 - Present)
• Developing and maintaining web applications using React.js and Next.js
• Collaborated with team to implement responsive designs and optimize performance

Appiesoft Web Solutions, Mohali — React Developer (July 2022 - Sept 2023)
• Built and deployed web applications using React.js with modular components
• Implemented state management using Redux and integrated APIs using Axios

EDUCATION
Bhai Gurdas Group of Institutions, Sangrur — B.Tech in Computer Science (2017-2021)

SKILLS
Languages: HTML5, CSS3, JavaScript
Frontend: React.js, Next.js, Tailwind CSS, Material UI, Bootstrap
Backend: NestJS, Node.js, RESTful APIs
State Management: Redux Toolkit, Zustand, TanStack Query
Tools: Git, VS Code, Postman, Swagger, ClickUp

PROJECTS
1. HRMS - React-based HR management system
2. TURNS - Online laundry platform (turnsapp.com)
3. Scholar Earth - Education consultancy platform
4. Kid-ex - Child development tracking system
5. RowthTech - Company portfolio website
6. Padder - Rental property platform
7. AleBNB - Property rental and claims platform
8. Wrinkler - Telemedicine platform
9. Aimbriliant - AI-powered business platform
    `.trim()

    const blob = new Blob([resumeData], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Mohit_Resume.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];
const handleProject = () => {
  router.push('https://mohit-dev-catalog.vercel.app/');
}

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
        <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto  sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-[79px]">
          <Link href="/" className="flex items-center space-x-3 group">
            {isScrolled ? (
              <Image
                alt="logo"
                src="/logo.png"
                width={50}
                height={50}
              />
            ) : (
              <Image alt="logo" src="/logo.png" width={50} height={50} />
            )}
          </Link>

          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-[15px] font-semibold",
                  pathname === item.href
                    ? "text-primary"
                    : isScrolled
                    ? "text-muted-foreground  hover:text-primary"
                    : "text-muted-foreground  hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <div
              className={`flex items-center gap-1 text-center font-semibold ${
                isScrolled ? "text-muted-foreground" : "text-primary"
              } `}
            >
              <Headset size={42} className="text-primary" />
              <div>
                <span className="text-xs">Any Question?</span>
                <h2 className="text-base">+9417385308</h2>
              </div>
            </div>
            <Link href={"#contact"} className="px-4 py-2 bg-primary  text-white  rounded-full transition-all duration-300 font-medium hover:shadow-[2px_2px_20px_0px_rgba(29,29,31,0.5)] cursor-pointer">
           contact
            </Link>
            <ThemeToggle/>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200",
                    pathname === item.href
                      ? "text-primary"
                      : "text-text-muted-foreground hover:text-primary"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
             <Link href={"#contact"} className="px-4 py-2 bg-[#5a9e7c]  text-white  rounded-full transition-all duration-300 font-medium hover:shadow-[2px_2px_20px_0px_rgba(29,29,31,0.5)] cursor-pointer">
           contact
            </Link>
            </div>
          </div>
        )}
      </div>
    </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative" id="home">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className={`mb-8 ${isLoaded ? "animate-fade-in-scale" : "opacity-0"}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
              Hi, I'm <span className="gradient-text typewriter">Mohit</span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-muted-foreground mb-6 text-balance ${isLoaded ? "animate-slide-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.5s" }}
            >
              MERN Stack Developer
            </p>
            <p
              className={`text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty ${isLoaded ? "animate-slide-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.7s" }}
            >
              Frontend specialist in Next.js and backend expert in NestJS. Building scalable web applications with
              modern technologies and best practices.
            </p>
          </div>

          <div className={`flex flex-wrap justify-center gap-4 mb-12 stagger-animation ${isLoaded ? "" : "opacity-0"}`}>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-lg hover-lift">
              <Code className="w-5 h-5 text-primary animate-pulse" />
              <span className="font-mono text-foreground">Frontend: Next.js</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-lg hover-lift">
              <Server className="w-5 h-5 text-primary animate-pulse" />
              <span className="font-mono text-foreground">Backend: NestJS</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-lg hover-lift">
              <Database className="w-5 h-5 text-primary animate-pulse" />
              <span className="font-mono text-foreground">Database: MongoDB</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-lg hover-lift">
              <Globe className="w-5 h-5 text-primary animate-pulse" />
              <span className="font-mono text-foreground">Full Stack</span>
            </div>
          </div>

          <div
            className={`flex justify-center gap-4 ${isLoaded ? "animate-slide-in-up" : "opacity-0"}`}
            style={{ animationDelay: "1s" }}
          >
            <Button size="lg" className="cursor-pointer bg-primary hover:bg-primary/90 hover-lift animate-glow group" onClick={handleProject}>
              <Star className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View Projects
            </Button>
            <Link href="mailto:mohit.ashta@icloud.com"  className="flex  border rounded items-center px-3 border-primary hover-lift group font-mono text-foreground">
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Mail Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-card/50 relative" id="about">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground text-pretty hover:text-foreground transition-colors duration-300">
                Highly motivated MERN Stack Developer with extensive experience in developing and maintaining web
                applications. Proficient in modern web technologies, specializing in React.js and Next.js for frontend
                development, and NestJS for backend services.
              </p>
              <p className="text-lg text-muted-foreground text-pretty hover:text-foreground transition-colors duration-300">
                Adept at working in fast-paced environments and committed to delivering efficient, maintainable, and
                secure code. Currently working at Cuilsoft Pvt. Ltd. as a Next Developer, building scalable applications
                and optimizing performance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 hover:text-primary transition-colors duration-300 cursor-pointer group">
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-mono">mohit.ashta@icloud.com</span>
                </div>
                <div className="flex items-center gap-3 hover:text-primary transition-colors duration-300 cursor-pointer group">
                  <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-mono">+91 9417385308</span>
                </div>
                <div className="flex items-center gap-3 hover:text-primary transition-colors duration-300 cursor-pointer group">
                  <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-mono">Sangrur, Punjab, India</span>
                </div>
              </div>
            </div>
            <div className="bg-card/90 backdrop-blur-sm border border-primary/20 p-8 rounded-lg hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-primary">Experience</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4 hover:border-accent transition-colors duration-300">
                  <h4 className="font-semibold text-primary font-mono">Next Developer</h4>
                  <p className="text-sm text-muted-foreground font-mono">Cuilsoft Pvt. Ltd. • Oct 2023 - Present</p>
                  <p className="text-sm mt-2 text-foreground">
                    Developing web applications using React.js and Next.js, implementing responsive designs and
                    optimizing performance.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4 hover:border-accent transition-colors duration-300">
                  <h4 className="font-semibold text-primary font-mono">React Developer</h4>
                  <p className="text-sm text-muted-foreground font-mono">
                    Appiesoft Web Solutions • July 2022 - Sept 2023
                  </p>
                  <p className="text-sm mt-2 text-foreground">
                    Built modular React applications with Redux state management and API integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6" id="skills">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover-lift bg-card/90 backdrop-blur-sm border border-primary/20 group">
              <CardHeader>
                <CardTitle className="text-primary group-hover:text-accent transition-colors">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:scale-105 font-mono"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card/90 backdrop-blur-sm border border-primary/20 group">
              <CardHeader>
                <CardTitle className="text-primary group-hover:text-accent transition-colors">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:scale-105 font-mono"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card/90 backdrop-blur-sm border border-primary/20 group">
              <CardHeader>
                <CardTitle className="text-primary group-hover:text-accent transition-colors">
                  State Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.state.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:scale-105 font-mono"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card/90 backdrop-blur-sm border border-primary/20 group">
              <CardHeader>
                <CardTitle className="text-primary group-hover:text-accent transition-colors">Tools & Others</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:scale-105 font-mono"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover-lift bg-card/90 backdrop-blur-sm border border-primary/20 overflow-hidden"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-primary group-hover:text-accent transition-colors font-mono">
                      {project.title}
                    </CardTitle>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-12"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <Badge
                    variant="outline"
                    className="w-fit font-mono group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-pretty group-hover:text-foreground transition-colors">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-mono hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-pointer"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 relative" id="contact">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
        href={"mailto:mohit.ashta@icloud.com"}
              className="bg-accent flex items-center px-2.5 py-3 rounded-3xl hover:bg-accent/90 text-accent-foreground hover-lift animate-glow group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Email Me
            </Link>
            {/* <Button size="lg" variant="outline" className="hover-lift group bg-transparent">
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              GitHub
            </Button> */}
            {/* <Button size="lg" variant="outline" className="hover-lift group bg-transparent">
              <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button> */}
            {/* <Button size="lg" variant="outline" className="hover-lift group bg-transparent" onClick={downloadResume}>
              <Download className="w-5 h-5 mr-2 group-hover:bounce transition-transform" />
              Resume
            </Button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-white">
        <div className="container mx-auto text-center">
          <p className="text-primary font-mono">© {new Date().getFullYear()} Mohit. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
