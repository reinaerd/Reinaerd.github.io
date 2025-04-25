import Link from "next/link"
import { ArrowLeft, Download, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Power Portfolio</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground">
                Home
              </Link>
              <Link href="/projects" className="flex items-center text-sm font-medium text-muted-foreground">
                Projects
              </Link>
              <Link href="/about" className="flex items-center text-sm font-medium text-foreground">
                About
              </Link>
              <Link href="/contact" className="flex items-center text-sm font-medium text-muted-foreground">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
              <p className="text-muted-foreground">Learn more about my background and expertise</p>
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-square overflow-hidden rounded-full">
                    <img
                      alt="Profile picture"
                      className="object-cover"
                      height="300"
                      src="/placeholder.svg?height=300&width=300"
                      width="300"
                    />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">Your Name</h2>
                  <p className="text-sm text-muted-foreground">Power Platform Developer</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/cv.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download CV
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-6">
                    <h3 className="mb-2 text-sm font-medium">Connect with me</h3>
                    <div className="flex gap-2">
                      <Button asChild variant="outline" size="icon">
                        <Link href="https://github.com" target="_blank" rel="noreferrer">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="icon">
                        <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="icon">
                        <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="icon">
                        <Link href="mailto:your-email@example.com">
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">About Me</h2>
                  <div className="mt-4 space-y-4">
                    <p>
                      I am a passionate Power Platform developer with expertise in creating innovative business
                      solutions using Microsoft's Power Platform suite. With a strong background in business process
                      automation and application development, I help organizations transform their operations through
                      custom Power Apps, automated workflows with Power Automate, and insightful dashboards using Power
                      BI.
                    </p>
                    <p>
                      My approach combines technical expertise with a deep understanding of business needs, allowing me
                      to deliver solutions that drive real value and efficiency. I'm particularly interested in creating
                      user-friendly applications that solve complex business problems while being accessible to all
                      users.
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Skills</h2>
                  <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <div className="rounded-md border p-3">
                      <p className="font-medium">Power Apps</p>
                      <p className="text-sm text-muted-foreground">Canvas & Model-driven</p>
                    </div>
                    <div className="rounded-md border p-3">
                      <p className="font-medium">Power Automate</p>
                      <p className="text-sm text-muted-foreground">Cloud & Desktop flows</p>
                    </div>
                    <div className="rounded-md border p-3">
                      <p className="font-medium">Power BI</p>
                      <p className="text-sm text-muted-foreground">Reports & Dashboards</p>
                    </div>
                    <div className="rounded-md border p-3">
                      <p className="font-medium">Power Pages</p>
                      <p className="text-sm text-muted-foreground">Portal development</p>
                    </div>
                    <div className="rounded-md border p-3">
                      <p className="font-medium">SharePoint</p>
                      <p className="text-sm text-muted-foreground">Integration & Customization</p>
                    </div>
                    <div className="rounded-md border p-3">
                      <p className="font-medium">Microsoft 365</p>
                      <p className="text-sm text-muted-foreground">Suite integration</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Experience</h2>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-md border p-4">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row">
                        <div>
                          <h3 className="font-semibold">Senior Power Platform Developer</h3>
                          <p className="text-sm text-muted-foreground">Company Name</p>
                        </div>
                        <p className="text-sm text-muted-foreground">2021 - Present</p>
                      </div>
                      <p className="mt-2 text-sm">
                        Lead development of enterprise Power Platform solutions, mentoring junior developers, and
                        establishing best practices for the organization.
                      </p>
                    </div>
                    <div className="rounded-md border p-4">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row">
                        <div>
                          <h3 className="font-semibold">Power Apps Developer</h3>
                          <p className="text-sm text-muted-foreground">Previous Company</p>
                        </div>
                        <p className="text-sm text-muted-foreground">2018 - 2021</p>
                      </div>
                      <p className="mt-2 text-sm">
                        Designed and developed custom Power Apps solutions for various business units, integrated with
                        SharePoint and other Microsoft services.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Certifications</h2>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-md border p-3">
                      <p className="font-medium">Microsoft Certified: Power Platform Developer Associate</p>
                      <p className="text-sm text-muted-foreground">Issued: 2022</p>
                    </div>
                    <div className="rounded-md border p-3">
                      <p className="font-medium">Microsoft Certified: Power Platform App Maker Associate</p>
                      <p className="text-sm text-muted-foreground">Issued: 2021</p>
                    </div>
                    <div className="rounded-md border p-3">
                      <p className="font-medium">Microsoft Certified: Power BI Data Analyst Associate</p>
                      <p className="text-sm text-muted-foreground">Issued: 2020</p>
                    </div>
                    <div className="rounded-md border p-3">
                      <p className="font-medium">Microsoft 365 Certified: Teams Application Developer Associate</p>
                      <p className="text-sm text-muted-foreground">Issued: 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Power Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
