'use client'

import Link from 'next/link'
import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import ContentSection from './ContentSection'
import ContentParagraph from './ContentParagraph'
import SectionBorder from './SectionBorder'
import ExperienceContent from './ExperienceContent'
import Reachout from './Reachout'
import CallToAction from './CallToAction'
import ContributionsDisplay from './ContributionsDisplay'
import OpenSourceContributionsCard from './ContributionCard'
import TechStackMarquee from './TechStackMarquee'
import { projects } from '@/data/projects'
import { Reveal } from './Reveal'


import NeumorphButton from './NeumorphButton'

export default function NewHeroSection() {
  return (
    <div className="min-h-screen transition-colors duration-300 relative" style={{ fontFamily: 'var(--font-hk-grotesk)' }}>
      <div className="relative mx-auto max-w-4xl">
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />
        
        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
          {/* Banner Section */}
          <Reveal delay={0.1}>
            <BannerSection 
              bannerImage="/banner.jpg"
              quote="You make your own luck if you stay at it long enough."
            />
          </Reveal>
          
          {/* Profile Header */}
          <Reveal delay={0.2}>
            <ProfileHeader 
              name="Prateek Bisht"
              age=""
              title="software engineer"
              profileImage="/pfp.jpg"
              socialLinks={{
                github: "https://github.com/prateekbisht23",
                linkedin: "https://www.linkedin.com/in/prateek-bisht-7a062a258",
                mail: "mailto:prateekbisht.dev@gmail.com",
                resume: "/Prateek_Bisht_Resume.pdf",
              }}
            />
          </Reveal>
          
          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role Section */}
              <Reveal delay={0.1}>
                <ContentSection
                  subtitle="AI Engineer | Full-stack Developer"
                  title=''
                  className="mt-6"
                >
                  <div></div>
                </ContentSection>
              </Reveal>
              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>
              
              {/* About Section */}
              <Reveal delay={0.1}>
                <ContentSection className="pb-6 sm:pb-8 pt-4 sm:pt-6 px-2 sm:px-0">
                  <ContentParagraph className="mb-2 text-base sm:text-lg">
                    <span className="font-medium dark:text-white text-black">Building backend systems that scale.</span> Currently at <strong className="font-medium dark:text-white text-black">Fyscal Technologies</strong>, working on Go microservices, REST & gRPC APIs, PostgreSQL, and AWS infrastructure. I care more about systems that work than debates about which ones should!!
                  </ContentParagraph>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

               {/* Experience Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 py-2">
                  <h2 className="text-base sm:text-xl mb-3 opacity-20 mt-4 sm:mt-6 px-4 font-[family-name:var(--font-instrument-serif)]">Professional Experience</h2>
                  <div className="px-4">
                    <ExperienceContent />
                  </div>
                </div>
              </Reveal>

                <Reveal delay={0.05}>
                  <SectionBorder className="mt-4" />
                </Reveal>
              
                 {/* Proof of Work */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 py-2">
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">
                    <h2 className="text-base sm:text-xl opacity-20 font-[family-name:var(--font-instrument-serif)]">Proof of Work</h2>
                  </div>
                  <div className="px-4">
                    <div className="flex flex-col space-y-8 sm:space-y-12">
                      {projects.slice(0, 6).map((project) => (
                        <div key={project.id} className="flex flex-col sm:flex-row gap-2 sm:gap-8 justify-between items-start group">
                          <div className="w-full sm:w-1/3">
                            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-500 transition-colors">
                              <a href={project.githubLink || project.liveLink} target="_blank" rel="noopener noreferrer">
                                {project.title}
                              </a>
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {project.tags.slice(0, 3).map((tag, i) => (
                                <span key={i} className="text-xs text-neutral-500 dark:text-neutral-400">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="w-full sm:w-2/3 mt-2 sm:mt-0">
                            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                              {project.longDescription || project.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-4 flex justify-center mt-6 sm:mt-8 mb-4 sm:mb-6">
                    <a href="https://github.com/prateekbisht23" target="_blank" rel="noopener noreferrer">
                      <NeumorphButton className="inline-flex items-center gap-1 px-4 py-2 text-xs sm:text-sm text-neutral-800 dark:text-white/80 hover:text-neutral-900 dark:hover:text-white">
                        <span>View on GitHub</span>
                        <span>→</span>
                      </NeumorphButton>
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>


              
              {/* GitHub Contributions */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 px-0 mt-4">
                  <h2 className="text-base font-[family-name:var(--font-instrument-serif)] sm:text-xl opacity-20 leading-relaxed -tracking-[0.01em] mb-4 px-4">
                    GitHub Contributions <span className="opacity-20">●</span> @prateekbisht23
                  </h2>
                  <div className="mb-4 sm:mb-6">
                    <ContributionsDisplay
                      username="prateekbisht23"
                      variant="compact"
                      className="w-full"
                    />
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Tech Stack Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 mt-4 sm:mt-6 mb-4 sm:mb-6">
                  <div className="px-4">
                    <TechStackMarquee className="w-full" />
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Open Source Contributions Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 mt-4">
                  <h2 className="text-base font-[family-name:var(--font-instrument-serif)] sm:text-xl opacity-20 mt-4 sm:mt-8 sm:ml-5 leading-relaxed -tracking-[0.01em] mb-4 px-4">
                    Open Source Contributions <span className="opacity-20">●</span> {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </h2>
                  <div className="px-4">
                    <OpenSourceContributionsCard />
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-4 pt-0" />
              </Reveal>

              {/* call to action*/}
              <Reveal delay={0.1}>
                <div className="px-4 sm:px-12">
                  <CallToAction/>
                </div>
              </Reveal>
              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Reachout Section */}
              <Reveal delay={0.1}>
                <div className="mt-4 sm:mt-6">
                  <Reachout 
                    title="Let's connect"
                    subtitle="Find me on these platforms"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
