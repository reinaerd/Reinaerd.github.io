"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Play } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageSlider } from "@/components/image-slider"

// This is a placeholder. In a real application, you would fetch project data based on the slug
const projectsData = {
  "inventory-management": {
    title: "Inventory Management App",
    description: "A comprehensive inventory management solution built with Power Apps and integrated with SharePoint.",
    category: "Power Apps & Power Automate",
    date: "January 2023",
    client: "Retail Company",
    technologies: ["Power Apps", "Power Automate", "SharePoint", "Microsoft 365"],
    overview:
      "This inventory management application was developed to help a retail company track their inventory across multiple locations. The solution includes barcode scanning, automated reordering, and real-time inventory visibility.",
    challenges:
      "The client needed a solution that would work offline for warehouse staff with limited connectivity, while still providing real-time updates when connected. Additionally, the system needed to integrate with their existing SharePoint infrastructure and ERP system.",
    solution:
      "I developed a custom Power App with offline capabilities that synchronizes data when connectivity is restored. The app includes barcode scanning functionality using the device camera and automated workflows using Power Automate to handle reordering and notifications.",
    results:
      "The solution reduced inventory discrepancies by 45% and decreased the time spent on inventory management by 30%. The automated reordering system has prevented stockouts and improved customer satisfaction.",
    relatedProjects: ["hr-onboarding", "field-service"],
    colors: {
      primary: "purple",
      secondary: "blue",
    },
  },
  "hr-onboarding": {
    title: "HR Onboarding Portal",
    description: "Streamlined employee onboarding process with automated workflows and document management.",
    category: "Power Apps & Power Automate",
    date: "March 2023",
    client: "Corporate Services",
    technologies: ["Power Apps", "Power Automate", "SharePoint", "Microsoft 365"],
    overview:
      "This HR onboarding portal streamlines the employee onboarding process, automating document collection, approvals, and training assignments.",
    challenges:
      "The client had a manual onboarding process that was time-consuming and prone to errors. New employees often had inconsistent experiences, and HR staff spent excessive time on paperwork.",
    solution:
      "I created a Power Apps portal that guides new employees through the onboarding process, with automated workflows to handle document approvals and notifications. The solution integrates with the company's existing HR systems.",
    results:
      "The onboarding time was reduced by 60%, and HR staff now spend 75% less time on administrative tasks. Employee satisfaction with the onboarding process increased significantly.",
    relatedProjects: ["inventory-management", "expense-workflow"],
    colors: {
      primary: "purple",
      secondary: "blue",
    },
  },
  "support-dashboard": {
    title: "Customer Support Dashboard",
    description: "Real-time customer support analytics dashboard with automated reporting and alerts.",
    category: "Power BI & Power Automate",
    date: "May 2023",
    client: "Technology Services",
    technologies: ["Power BI", "Power Automate", "SQL Server", "Azure"],
    overview:
      "This customer support dashboard provides real-time analytics on support ticket metrics, customer satisfaction, and agent performance.",
    challenges:
      "The client lacked visibility into their support operations, making it difficult to identify bottlenecks and improve service quality. Managers needed real-time insights to make informed decisions.",
    solution:
      "I developed a Power BI dashboard that connects to their support ticket system, providing real-time analytics on key metrics. Power Automate workflows generate alerts for critical situations and send scheduled reports.",
    results:
      "Average ticket resolution time decreased by 35%, and customer satisfaction scores improved by 25%. Managers now have the insights needed to optimize staffing and identify training opportunities.",
    relatedProjects: ["sales-dashboard", "expense-workflow"],
    colors: {
      primary: "yellow",
      secondary: "blue",
    },
  },
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData] || projectsData["inventory-management"]
  const primaryColor = project.colors?.primary || "purple"
  const secondaryColor = project.colors?.secondary || "blue"

  // Get related projects data
  const relatedProjects =
    project.relatedProjects?.map((slug) => {
      const relatedProject = projectsData[slug as keyof typeof projectsData]
      return {
        id: slug,
        title: relatedProject?.title || "",
        category: relatedProject?.category || "",
      }
    }) || []

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
              <div
                className={`inline-block px-3 py-1 rounded-md bg-${primaryColor}-100 dark:bg-${primaryColor}-900/30 text-${primaryColor}-600 dark:text-${primaryColor}-300 text-sm font-medium mb-2`}
              >
                {project.category}
              </div>
              <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
              <p className="text-foreground/70">{project.description}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Button asChild variant="ghost" size="sm" className="hover:bg-purple-50 dark:hover:bg-purple-900/20">
                <Link href="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2"
            >
              <div className="aspect-video overflow-hidden rounded-lg border border-purple-100 dark:border-purple-900/50 shadow-lg">
                <Image
                  src="/placeholder.svg?height=450&width=800"
                  alt={project.title}
                  width={800}
                  height={450}
                  className="object-cover"
                />
              </div>

              <Tabs defaultValue="overview" className="mt-8">
                <TabsList className="mb-4 bg-white dark:bg-gray-800 p-1 border border-purple-100 dark:border-purple-900/50 rounded-md">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-600 dark:data-[state=active]:bg-purple-900/30 dark:data-[state=active]:text-purple-300"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="challenges"
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-600 dark:data-[state=active]:bg-purple-900/30 dark:data-[state=active]:text-purple-300"
                  >
                    Challenges
                  </TabsTrigger>
                  <TabsTrigger
                    value="solution"
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-600 dark:data-[state=active]:bg-purple-900/30 dark:data-[state=active]:text-purple-300"
                  >
                    Solution
                  </TabsTrigger>
                  <TabsTrigger
                    value="results"
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-600 dark:data-[state=active]:bg-purple-900/30 dark:data-[state=active]:text-purple-300"
                  >
                    Results
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="overview"
                  className="space-y-4 text-foreground/80 leading-relaxed bg-white dark:bg-gray-800 p-6 rounded-lg border border-purple-100 dark:border-purple-900/50 shadow-md"
                >
                  <p>{project.overview}</p>
                </TabsContent>
                <TabsContent
                  value="challenges"
                  className="space-y-4 text-foreground/80 leading-relaxed bg-white dark:bg-gray-800 p-6 rounded-lg border border-purple-100 dark:border-purple-900/50 shadow-md"
                >
                  <p>{project.challenges}</p>
                </TabsContent>
                <TabsContent
                  value="solution"
                  className="space-y-4 text-foreground/80 leading-relaxed bg-white dark:bg-gray-800 p-6 rounded-lg border border-purple-100 dark:border-purple-900/50 shadow-md"
                >
                  <p>{project.solution}</p>
                </TabsContent>
                <TabsContent
                  value="results"
                  className="space-y-4 text-foreground/80 leading-relaxed bg-white dark:bg-gray-800 p-6 rounded-lg border border-purple-100 dark:border-purple-900/50 shadow-md"
                >
                  <p>{project.results}</p>
                </TabsContent>
              </Tabs>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                <ImageSlider
                  images={[
                    { src: "/placeholder.svg?height=450&width=800", alt: "Project screenshot 1" },
                    { src: "/placeholder.svg?height=450&width=800", alt: "Project screenshot 2" },
                    { src: "/placeholder.svg?height=450&width=800", alt: "Project screenshot 3" },
                    { src: "/placeholder.svg?height=450&width=800", alt: "Project screenshot 4" },
                  ]}
                />
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Power App Demo Video</h2>
                <div className="aspect-video rounded-lg border border-purple-100 dark:border-purple-900/50 bg-black shadow-lg overflow-hidden relative group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=450&width=800"
                    alt="Power App Demo Video"
                    width={800}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-4 text-sm text-foreground/70">
                  This video demonstrates the functionality and user interface of the Power App solution. The actual
                  implementation for your organization would be customized to match your specific business requirements
                  and branding.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="sticky top-24 space-y-8 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 pb-4 scrollbar-thin scrollbar-thumb-purple-200 dark:scrollbar-thumb-purple-800 scrollbar-track-transparent">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-purple-100 dark:border-purple-900/50">
                  <h2 className="text-xl font-bold mb-4">Project Details</h2>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-foreground/60">Client</dt>
                      <dd className="text-sm mt-1">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-foreground/60">Date</dt>
                      <dd className="text-sm mt-1">{project.date}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-foreground/60">Technologies</dt>
                      <dd className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`inline-flex items-center rounded bg-${primaryColor}-100 dark:bg-${primaryColor}-900/30 px-2.5 py-0.5 text-xs font-medium text-${primaryColor}-600 dark:text-${primaryColor}-300`}
                          >
                            {tech}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-8">
                    <h3 className="text-sm font-medium mb-2">Interested in a similar solution?</h3>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white"
                    >
                      <Link href="/#contact">Contact Me</Link>
                    </Button>
                  </div>
                </div>

                {relatedProjects.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-purple-100 dark:border-purple-900/50">
                    <h2 className="text-xl font-bold mb-4">Related Projects</h2>
                    <div className="space-y-4">
                      {relatedProjects.map((related) => (
                        <div
                          key={related.id}
                          className="bg-purple-50/50 dark:bg-purple-900/10 rounded-lg p-4 border border-purple-100 dark:border-purple-900/30"
                        >
                          <h3 className="font-medium">{related.title}</h3>
                          <p className="text-xs text-foreground/60 mb-2">{related.category}</p>
                          <Button
                            asChild
                            variant="link"
                            size="sm"
                            className="h-auto p-0 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                          >
                            <Link href={`/projects/${related.id}`}>View Project</Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
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
