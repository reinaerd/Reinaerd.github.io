"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: "inventory-management",
      title: "Inventory Management App",
      description:
        "A comprehensive inventory management solution built with Power Apps and integrated with SharePoint.",
      image: "/placeholder.svg?height=225&width=400",
      categories: ["power-apps", "power-automate"],
      tags: ["Power Apps", "Power Automate"],
      colors: [
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300",
        "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300",
      ],
    },
    {
      id: "hr-onboarding",
      title: "HR Onboarding Portal",
      description: "Streamlined employee onboarding process with automated workflows and document management.",
      image: "/placeholder.svg?height=225&width=400",
      categories: ["power-apps", "power-automate"],
      tags: ["Power Apps", "Power Automate"],
      colors: [
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300",
        "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300",
      ],
    },
    {
      id: "support-dashboard",
      title: "Customer Support Dashboard",
      description: "Real-time customer support analytics dashboard with automated reporting and alerts.",
      image: "/placeholder.svg?height=225&width=400",
      categories: ["power-bi", "power-automate"],
      tags: ["Power BI", "Power Automate"],
      colors: [
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-300",
        "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300",
      ],
    },
    {
      id: "field-service",
      title: "Field Service Mobile App",
      description: "Mobile application for field service technicians with offline capabilities and real-time updates.",
      image: "/placeholder.svg?height=225&width=400",
      categories: ["power-apps", "power-automate"],
      tags: ["Power Apps", "Power Automate"],
      colors: [
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300",
        "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300",
      ],
    },
    {
      id: "sales-dashboard",
      title: "Sales Performance Dashboard",
      description: "Interactive sales performance dashboard with drill-down capabilities and forecasting.",
      image: "/placeholder.svg?height=225&width=400",
      categories: ["power-bi"],
      tags: ["Power BI"],
      colors: ["bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-300"],
    },
    {
      id: "expense-workflow",
      title: "Expense Approval Workflow",
      description: "Automated expense approval workflow with multi-level approvals and notifications.",
      image: "/placeholder.svg?height=225&width=400",
      categories: ["power-automate"],
      tags: ["Power Automate"],
      colors: ["bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300"],
    },
  ]

  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.categories.includes(filter))

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-500">RV</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#about"
              className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors"
            >
              Skills
            </Link>
            <Link href="/projects" className="text-sm font-medium text-purple-600 transition-colors">
              Projects
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-1"
            >
              <div className="inline-block px-3 py-1 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium mb-2">
                MY WORK
              </div>
              <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
              <p className="text-foreground/70">Explore my Power Platform projects and solutions</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Button asChild variant="ghost" size="sm" className="hover:bg-purple-50 dark:hover:bg-purple-900/20">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              className={
                filter === "all"
                  ? "bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white"
                  : "border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              }
              onClick={() => setFilter("all")}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "power-apps" ? "default" : "outline"}
              size="sm"
              className={
                filter === "power-apps"
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              }
              onClick={() => setFilter("power-apps")}
            >
              Power Apps
            </Button>
            <Button
              variant={filter === "power-automate" ? "default" : "outline"}
              size="sm"
              className={
                filter === "power-automate"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              }
              onClick={() => setFilter("power-automate")}
            >
              Power Automate
            </Button>
            <Button
              variant={filter === "power-bi" ? "default" : "outline"}
              size="sm"
              className={
                filter === "power-bi"
                  ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                  : "border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              }
              onClick={() => setFilter("power-bi")}
            >
              Power BI
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all border border-purple-100 dark:border-purple-900/50"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex gap-2 justify-end">
                        <Button
                          asChild
                          variant="default"
                          size="sm"
                          className="bg-white text-purple-600 hover:bg-purple-50"
                        >
                          <Link href={`/projects/${project.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {project.tags.map((tag, i) => (
                      <span key={tag} className={`text-xs font-medium px-2.5 py-0.5 rounded ${project.colors[i]}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-purple-100 dark:border-purple-900/50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Reinaerd Vandewalle. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/#about"
                className="text-sm text-foreground/60 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/#skills"
                className="text-sm text-foreground/60 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="text-sm text-foreground/60 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/#contact"
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
