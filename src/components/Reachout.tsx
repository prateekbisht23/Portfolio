'use client'
import Image from "next/image";
import { FaGithub, FaLinkedin, FaPaperclip, FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import NeumorphButton from "./NeumorphButton";
import { Tooltip } from "./ui/tooltip-card";

interface ReachoutProps {
  title?: string
  subtitle?: string
  socialLinks?: {
    twitter?: string
    resume?: string
    github?: string
    linkedin?: string
    mail?: string
  }
}

export default function Reachout({
  title = "Let's connect",
  subtitle = "Find me on these platforms",
  socialLinks = {
    twitter: "",
    github: "https://github.com/prateekbisht23",
    linkedin: "https://www.linkedin.com/in/prateek-bisht-7a062a258",
    resume: "/Prateek_Bisht_Resume.pdf",
    mail: "mailto:prateekbisht.dev@gmail.com"
  }
}: ReachoutProps) {
  return (
    <div className="sm:px-12 px-4 pb-24 sm:pb-28">
      <div className="text-center sm:text-left w-full">
        <div className="mb-4 sm:mb-6">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-lg sm:text-xl mb-2 opacity-20 mt-4 sm:mt-6">
            {title}
          </h2>
          <p className="opacity-20 text-md sm:text-lg mb-3 sm:mb-4">
           {subtitle}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
          {socialLinks.github && (
            <Tooltip
              content={
                <div className="w-[300px] sm:w-[340px]">
                  <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/pfp.jpg"
                        alt="Prateek Bisht"
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                          Prateek Bisht
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          @prateekbisht23
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-neutral-700 dark:text-neutral-300">
                      Just a tiny bug in the system!! 🐛✨
                    </p>
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                      <span className="font-medium text-neutral-900 dark:text-neutral-50">
                        35
                      </span>{" "}
                      followers ·{" "}
                      <span className="font-medium text-neutral-900 dark:text-neutral-50">
                        50
                      </span>{" "}
                      following
                    </p>
                  </div>
                </div>
              }
            >
              <a
                className="touch-manipulation active:opacity-75"
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              >
                <NeumorphButton className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-3 sm:py-2">
                  <FaGithub className="text-[20px] sm:text-[18px] text-neutral-800 dark:text-white/80 shrink-0" />
                  <span className="hidden sm:inline text-sm font-medium text-neutral-800 dark:text-white/80">
                    GitHub
                  </span>
                </NeumorphButton>
              </a>
            </Tooltip>
          )}
          
          {socialLinks.twitter && (
            <Tooltip content="View my Twitter profile" padded>
              <a
                className="touch-manipulation active:opacity-75"
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              >
                <NeumorphButton className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-3 sm:py-2">
                  <FaXTwitter className="text-[20px] sm:text-[18px] text-neutral-800 dark:text-white/80 shrink-0" />
                  <span className="hidden sm:inline text-sm font-medium text-neutral-800 dark:text-white/80">
                    Twitter
                  </span>
                </NeumorphButton>
              </a>
            </Tooltip>
          )}
          
          {socialLinks.linkedin && (
            <Tooltip
              content={
                <div className="w-[300px] sm:w-[340px]">
                  <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/pfp.jpg"
                        alt="Prateek Bisht"
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                          Prateek Bisht
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          AI Engineer | Full-stack Developer
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-neutral-700 dark:text-neutral-300">
                      Building backend systems that scale at Fyscal Technologies. Go, PostgreSQL, AWS.
                    </p>
                    <p className="mt-2 text-xs text-[#0a66c2] dark:text-[#70b5f9] font-medium flex items-center gap-1.5">
                      <FaLinkedin className="w-3.5 h-3.5" />
                      View Profile on LinkedIn
                    </p>
                  </div>
                </div>
              }
            >
              <a
                className="touch-manipulation active:opacity-75"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              >
                <NeumorphButton className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-3 sm:py-2">
                  <FaLinkedin className="text-[20px] sm:text-[18px] text-neutral-800 dark:text-white/80 shrink-0" />
                  <span className="hidden sm:inline text-sm font-medium text-neutral-800 dark:text-white/80">
                    LinkedIn
                  </span>
                </NeumorphButton>
              </a>
            </Tooltip>
          )}

          {socialLinks.mail && (
            <Tooltip content="prateekbisht.dev@gmail.com" padded>
              <a
                className="touch-manipulation active:opacity-75"
                href="mailto:prateekbisht.dev@gmail.com"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              >
                <NeumorphButton className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-3 sm:py-2">
                  <IoMdMail className="text-[20px] sm:text-[18px] text-neutral-800 dark:text-white/80 shrink-0" />
                  <span className="hidden sm:inline text-sm font-medium text-neutral-800 dark:text-white/80">
                    Mail
                  </span>
                </NeumorphButton>
              </a>
            </Tooltip>
          )}
          
          {socialLinks.resume && (
            <Tooltip
              content={
                <div className="w-[280px] sm:w-[300px]">
                  <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-4 dark:border-neutral-800 dark:bg-neutral-900 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-3">
                      <FaPaperclip className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                      Prateek_Bisht_Resume.pdf
                    </p>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                      Click to view or download my resume
                    </p>
                  </div>
                </div>
              }
            >
              <a
                className="touch-manipulation active:opacity-75"
                href={socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              >
                <NeumorphButton className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-3 sm:py-2">
                  <FaPaperclip className="text-[20px] sm:text-[18px] text-neutral-800 dark:text-white/80 shrink-0" />
                  <span className="hidden sm:inline text-sm font-medium text-neutral-800 dark:text-white/80">
                    Resume
                  </span>
                </NeumorphButton>
              </a>
            </Tooltip>
          )}
        </div>
        
        {/* Footer Section */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center space-y-2 sm:flex-row sm:justify-between sm:items-center sm:space-y-0 text-center sm:text-left">
            <div className="text-sm sm:text-md dark:text-white/40 text-black/40">
              © {new Date().getFullYear()} Prateek Bisht.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
