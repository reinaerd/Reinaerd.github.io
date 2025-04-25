"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Download, Moon, Sun, Github, Linkedin, Mail, ChevronRight, Play } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-500">RV</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors"
            >
              Contact
            </Link>
            <Button
              asChild
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white"
            >
              <Link href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md"
            >
              {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md"
            >
              {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="inline-block px-3 py-1 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium mb-2">
                  Power Platform Developer
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Hello, I'm{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-500">
                    Reinaerd Vandewalle
                  </span>
                </h1>
                <p className="text-lg text-foreground/70 max-w-md">
                  I create innovative business solutions with Microsoft Power Platform, transforming processes through
                  custom applications and automation.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white"
                  >
                    <Link href="#projects">View My Work</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  >
                    <Link href="#contact">Get In Touch</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-purple-600 to-fuchsia-500 p-1">
                  <div className="absolute inset-0 bg-white dark:bg-gray-900 m-0.5 rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Reinaerd Vandewalle"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-purple-50 dark:bg-purple-900/10">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center">
                <div className="h-px w-8 bg-purple-300 dark:bg-purple-700"></div>
                <span className="mx-3 text-sm font-medium text-purple-600 dark:text-purple-400">ABOUT ME</span>
                <div className="h-px w-8 bg-purple-300 dark:bg-purple-700"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Power Platform Expert</h2>
              <p className="text-lg text-foreground/70">
                I'm a passionate Power Platform developer with expertise in creating innovative business solutions. With
                a strong background in business process automation and application development, I help organizations
                transform their operations through custom Power Apps, automated workflows with Power Automate, and
                insightful dashboards using Power BI.
              </p>
              <p className="text-lg text-foreground/70">
                My approach combines technical expertise with a deep understanding of business needs, allowing me to
                deliver solutions that drive real value and efficiency. I'm particularly interested in creating
                user-friendly applications that solve complex business problems while being accessible to all users.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4 mb-12"
            >
              <div className="inline-flex items-center justify-center">
                <div className="h-px w-8 bg-purple-300 dark:bg-purple-700"></div>
                <span className="mx-3 text-sm font-medium text-purple-600 dark:text-purple-400">MY SKILLS</span>
                <div className="h-px w-8 bg-purple-300 dark:bg-purple-700"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Power Platform Expertise</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                I specialize in Microsoft Power Platform technologies, creating custom business solutions that drive
                efficiency and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100 dark:border-purple-900/50 relative overflow-hidden group cursor-pointer"
                onClick={() => window.open("https://powerapps.microsoft.com/", "_blank")}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-100 to-transparent dark:from-purple-900/20 dark:to-transparent rounded-bl-3xl"></div>
                <div className="h-12 w-12 rounded-md bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5H19V19H5V5Z" fill="#742774" />
                    <path d="M19 5H12V12H19V5Z" fill="#742774" />
                    <path d="M12 12H5V19H12V12Z" fill="#742774" />
                    <path d="M12 5H5V12H12V5Z" fill="#B266B2" />
                    <path d="M19 12H12V19H19V12Z" fill="#B266B2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Power Apps
                </h3>
                <p className="text-foreground/70">
                  Creating custom business applications with both canvas and model-driven apps, focusing on user
                  experience and business value.
                </p>
                <div className="mt-4 pt-4 border-t border-purple-100 dark:border-purple-900/30">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 rounded">
                      Canvas Apps
                    </span>
                    <span className="text-xs px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 rounded">
                      Model-driven Apps
                    </span>
                    <span className="text-xs px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 rounded">
                      Portals
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-1 bg-gradient-to-r from-purple-600 to-fuchsia-500 transition-all duration-300"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100 dark:border-purple-900/50 relative overflow-hidden group cursor-pointer"
                onClick={() => window.open("https://flow.microsoft.com/", "_blank")}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100 to-transparent dark:from-blue-900/20 dark:to-transparent rounded-bl-3xl"></div>
                <div className="h-12 w-12 rounded-md bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5H5V19H19V5Z" fill="#0066FF" />
                    <path d="M10 9H7V15H10V9Z" fill="white" />
                    <path d="M17 9H14V15H17V9Z" fill="white" />
                    <path d="M13.5 11.5H10.5V12.5H13.5V11.5Z" fill="white" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Power Automate
                </h3>
                <p className="text-foreground/70">
                  Building automated workflows that connect apps and services, reducing manual tasks and improving
                  business processes.
                </p>
                <div className="mt-4 pt-4 border-t border-blue-100 dark:border-blue-900/30">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded">
                      Cloud Flows
                    </span>
                    <span className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded">
                      Business Process Flows
                    </span>
                    <span className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded">
                      UI Flows
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-1 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100 dark:border-purple-900/50 relative overflow-hidden group cursor-pointer"
                onClick={() => window.open("https://powerbi.microsoft.com/", "_blank")}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-100 to-transparent dark:from-yellow-900/20 dark:to-transparent rounded-bl-3xl"></div>
                <div className="h-12 w-12 rounded-md bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-4 relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5H19V19H5V5Z" fill="#F2C811" />
                    <path d="M13 8H16V16H13V8Z" fill="white" />
                    <path d="M8 11H11V16H8V11Z" fill="white" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                  Power BI
                </h3>
                <p className="text-foreground/70">
                  Creating interactive data visualizations and business intelligence dashboards that provide actionable
                  insights.
                </p>
                <div className="mt-4 pt-4 border-t border-yellow-100 dark:border-yellow-900/30">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-300 rounded">
                      Reports
                    </span>
                    <span className="text-xs px-2 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-300 rounded">
                      Dashboards
                    </span>
                    <span className="text-xs px-2 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-300 rounded">
                      Data Modeling
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 transition-all duration-300"></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 md:py-24 bg-purple-50 dark:bg-purple-900/10">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4 mb-12"
            >
              <div className="inline-flex items-center justify-center">
                <div className="h-px w-8 bg-purple-300 dark:bg-purple-700"></div>
                <span className="mx-3 text-sm font-medium text-purple-600 dark:text-purple-400">MY WORK</span>
                <div className="h-px w-8 bg-purple-300 dark:bg-purple-700"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Explore some of my recent Power Platform projects that have helped businesses transform their
                operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all border border-purple-100 dark:border-purple-900/50"
              >
                <Link href="/projects/inventory-management" className="block">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=225&width=400"
                      alt="Inventory Management App"
                      width={400}
                      height={225}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex gap-2 justify-end">
                          <Button variant="default" size="sm" className="bg-white text-purple-600 hover:bg-purple-50">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                        <Play className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                      Power Apps
                    </span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
                      Power Automate
                    </span>
                  </div>
                  <Link
                    href="/projects/inventory-management"
                    className="block group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                  >
                    <h3 className="text-xl font-semibold mb-2">Inventory Management App</h3>
                  </Link>
                  <p className="text-foreground/70 mb-4">
                    A comprehensive inventory management solution built with Power Apps and integrated with SharePoint.
                  </p>
                  <Link
                    href="/projects/inventory-management"
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors inline-flex items-center"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all border border-purple-100 dark:border-purple-900/50"
              >
                <Link href="/projects/hr-onboarding" className="block">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=225&width=400"
                      alt="HR Onboarding Portal"
                      width={400}
                      height={225}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex gap-2 justify-end">
                          <Button variant="default" size="sm" className="bg-white text-purple-600 hover:bg-purple-50">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                        <Play className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                      Power Apps
                    </span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
                      Power Automate
                    </span>
                  </div>
                  <Link
                    href="/projects/hr-onboarding"
                    className="block group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                  >
                    <h3 className="text-xl font-semibold mb-2">HR Onboarding Portal</h3>
                  </Link>
                  <p className="text-foreground/70 mb-4">
                    Streamlined employee onboarding process with automated workflows and document management.
                  </p>
                  <Link
                    href="/projects/hr-onboarding"
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors inline-flex items-center"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all border border-purple-100 dark:border-purple-900/50"
              >
                <Link href="/projects/support-dashboard" className="block">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=225&width=400"
                      alt="Customer Support Dashboard"
                      width={400}
                      height={225}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex gap-2 justify-end">
                          <Button variant="default" size="sm" className="bg-white text-purple-600 hover:bg-purple-50">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                        <Play className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-300">
                      Power BI
                    </span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
                      Power Automate
                    </span>
                  </div>
                  <Link
                    href="/projects/support-dashboard"
                    className="block group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                  >
                    <h3 className="text-xl font-semibold mb-2">Customer Support Dashboard</h3>
                  </Link>
                  <p className="text-foreground/70 mb-4">
                    Real-time customer support analytics dashboard with automated reporting and alerts.
                  </p>
                  <Link
                    href="/projects/support-dashboard"
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors inline-flex items-center"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center mt-12">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              >
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4 mb-12"
            >
              <div className="inline-flex items-center justify-center">
                <div className="h-px w-8 bg-purple-300 dark:bg-purple-700"></div>
                <span className="mx-3 text-sm font-medium text-purple-600 dark:text-purple-400">GET IN TOUCH</span>
                <div className="h-px w-8 bg-purple-300 dark:bg-purple-700"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Interested in working together? Feel free to reach out to discuss your Power Platform project.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-foreground/70">reinaerd.vandewalle@example.com</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Connect with me</h3>
                  <div className="flex gap-3">
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-md h-12 w-12 border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    >
                      <Link href="https://github.com" target="_blank" rel="noreferrer">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-md h-12 w-12 border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    >
                      <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-md h-12 w-12 border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    >
                      <Link href="mailto:reinaerd.vandewalle@example.com">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-medium mb-4">Power App Demo</h3>
                  <div className="aspect-video rounded-lg border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 shadow-lg overflow-hidden relative group cursor-pointer">
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                        <Play className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                    <Image
                      src="/placeholder.svg?height=225&width=400"
                      alt="Power App Demo Video"
                      width={400}
                      height={225}
                      className="object-cover w-full h-full"
                    />
                    <p className="absolute bottom-0 left-0 right-0 text-xs text-white p-2 bg-black/50">
                      Click to watch Power App demo video
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-purple-100 dark:border-purple-900/50"
              >
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="w-full px-3 py-2 rounded-md border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="w-full px-3 py-2 rounded-md border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 rounded-md border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full px-3 py-2 rounded-md border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="Enter the subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-3 py-2 rounded-md border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/50 min-h-[150px] resize-none"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-purple-100 dark:border-purple-900/50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Reinaerd Vandewalle. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#about"
                className="text-sm text-foreground/60 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-sm text-foreground/60 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-sm text-foreground/60 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-sm text-foreground/60 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
