import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Database,
  ExternalLink,
  Filter,
  FolderOpen,
  Gamepad2,
  Image,
  Library,
  MonitorPlay,
  Sparkles,
} from "lucide-react";

type Os = "Windows" | "Mac" | "Linux";

type ToolLink = {
  name: string;
  url: string;
  os?: Os[];
  description?: string;
};

type Step = {
  id: string;
  short: string;
  title: string;
  explanation: string;
  note?: string;
  icon: React.ReactNode;
  tools?: ToolLink[];
};

const steps: Step[] = [
  {
    id: "step-1",
    short: "Game Files",
    title: "Game Files",
    explanation:
      "These are the raw game files you already have or dump from original cartridges and discs.",
    note: "Preservation tools typically do not provide these files.",
    icon: <FolderOpen className="h-5 w-5" />,
    tools: [
      {
        name: "Personal cartridge dump",
        url: "https://dumping.guide/",
        description:
          "Community-maintained hardware guides for dumping your own cartridges across multiple systems.",
      },
      {
        name: "/r/roms",
        url: "https://www.reddit.com/r/Roms/",
        description:
          "Large beginner community with FAQs, troubleshooting help, and links to the ROMs megathread.",
      },
    ],
  },
  {
    id: "step-2",
    short: "DAT Databases",
    title: "DAT Files",
    explanation:
      "DAT files are trusted catalogs of known games. They help tools verify what belongs in a clean collection.",
    icon: <Database className="h-5 w-5" />,
    tools: [
      {
        name: "No-Intro",
        url: "https://datomatic.no-intro.org/",
        description: "Best known for highly curated cartridge-based console and handheld DAT sets.",
      },
      {
        name: "Redump",
        url: "http://redump.org/",
        description: "Focused on optical-disc systems like PlayStation, Saturn, and other CD/DVD media.",
      },
      {
        name: "TOSEC",
        url: "https://www.tosecdev.org/",
        description: "Broad archive coverage across computers, consoles, and older software formats.",
      },
    ],
  },
  {
    id: "step-3",
    short: "Verification",
    title: "Verify and Organize the Library",
    explanation:
      "These management tools compare your files against DAT references, flag issues, and help keep names and structure consistent.",
    icon: <CheckCircle2 className="h-5 w-5" />,
    tools: [
      {
        name: "ClrMAMEPro",
        url: "https://mamedev.emulab.it/clrmamepro/",
        os: ["Windows"],
        description: "Classic Windows app to scan ROMs against DATs and fix names and sets.",
      },
      {
        name: "RomVault",
        url: "https://www.romvault.com/",
        os: ["Windows", "Linux"],
        description: "Windows tool focused on organizing and syncing large ROM vaults to DAT rules.",
      },
      {
        name: "RomCenter",
        url: "https://www.romcenter.com/",
        os: ["Windows"],
        description: "Windows database-style manager to browse, verify, and fix ROM collections.",
      },
      {
        name: "igir",
        url: "https://github.com/emmercm/igir",
        os: ["Windows", "Mac", "Linux"],
        description: "Cross-platform command-line tool to sort, rename, and verify ROMs against DATs.",
      },
    ],
  },
  {
    id: "step-4",
    short: "Filtering",
    title: "Filtering the Library (Optional)",
    explanation:
      "Filtering tools help keep only the versions you care about, like preferred regions or one best entry per game.",
    note: "Common concept: 1G1R (One Game One ROM).",
    icon: <Filter className="h-5 w-5" />,
    tools: [
      {
        name: "Retool",
        url: "https://github.com/unexpectedpanda/retool",
        os: ["Windows", "Mac", "Linux"],
        description: "Builds smaller ROM lists from your collection using rules like one game per title.",
      },
    ],
  },
  {
    id: "step-5",
    short: "Metadata",
    title: "Metadata and Artwork",
    explanation:
      "Metadata services add titles, descriptions, screenshots, and box art so your library is easy to browse.",
    icon: <Image className="h-5 w-5" />,
    tools: [
      {
        name: "Skraper",
        url: "https://www.skraper.net/",
        os: ["Windows", "Linux"],
        description: "Desktop app that downloads box art and media for your games in bulk.",
      },
      {
        name: "ScreenScraper",
        url: "https://www.screenscraper.fr/",
        os: ["Windows", "Mac", "Linux"],
        description: "Online database many tools use to match games and fetch artwork and info.",
      },
    ],
  },
  {
    id: "step-6",
    short: "Emulator",
    title: "Emulators",
    explanation:
      "Emulators imitate original hardware so your game files can run on a modern PC or device.",
    icon: <Gamepad2 className="h-5 w-5" />,
    tools: [
      {
        name: "RetroArch",
        url: "https://www.retroarch.com/",
        os: ["Windows", "Mac", "Linux"],
        description: "One app that bundles many emulators (“cores”) behind a single interface.",
      },
      {
        name: "Standalone emulators",
        url: "#",
        os: ["Windows", "Mac", "Linux"],
        description: "Separate apps per system (e.g. one program per console) if you prefer that route.",
      },
    ],
  },
  {
    id: "step-7",
    short: "Frontend",
    title: "Game Library Frontends",
    explanation:
      "Frontends turn folders of games into a browsable library and usually launch your chosen emulator when you play.",
    icon: <Library className="h-5 w-5" />,
    tools: [
      {
        name: "LaunchBox",
        url: "https://www.launchbox-app.com/",
        os: ["Windows"],
        description: "Windows launcher with a polished game library UI and metadata support.",
      },
      {
        name: "EmulationStation",
        url: "https://emulationstation.org/",
        os: ["Windows", "Mac", "Linux"],
        description: "Full-screen library view; often used on PCs and small retro devices.",
      },
      {
        name: "Pegasus",
        url: "https://pegasus-frontend.org/",
        os: ["Windows", "Mac", "Linux"],
        description: "Lightweight, themeable frontend you can customize for your setup.",
      },
    ],
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] },
  },
};

function Glass({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function OsBadge({ os }: { os: Os }) {
  const styles: Record<Os, string> = {
    Windows: "border-sky-300/30 bg-sky-400/10 text-sky-200",
    Mac: "border-violet-300/30 bg-violet-400/10 text-violet-200",
    Linux: "border-emerald-300/30 bg-emerald-400/10 text-emerald-200",
  };
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium ${styles[os]}`}
    >
      {os}
    </span>
  );
}

function Background() {
  const reduce = useReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -top-24 left-[-8rem] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute right-[-10rem] top-44 h-[30rem] w-[30rem] rounded-full bg-cyan-400/15 blur-3xl" />
      <motion.div
        className="absolute left-1/3 top-1/2 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"
        animate={reduce ? {} : { x: [0, 22, -14, 0], y: [0, -15, 16, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.45),rgba(2,6,23,0.9))]" />
    </div>
  );
}

function HeroPreview() {
  const reduce = useReducedMotion();
  return (
    <Glass className="relative mt-12 p-6 sm:p-8 md:p-10">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-cyan-400/5 to-fuchsia-500/10" />
      <div className="relative grid gap-5 md:grid-cols-7 md:gap-x-6 md:gap-y-6">
        {steps.map((step, i) => (
          <React.Fragment key={step.id}>
            <motion.div
              className="rounded-xl border border-white/10 bg-slate-900/60 p-4"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ y: -3 }}
            >
              <div className="inline-flex rounded-lg border border-indigo-300/20 bg-indigo-300/10 p-2.5 text-indigo-200">
                {step.icon}
              </div>
              <p className="mt-3 text-xs font-medium leading-snug text-white">{step.short}</p>
            </motion.div>
            {i < steps.length - 1 && (
              <div className="hidden items-center justify-center px-2 md:flex md:px-3">
                <motion.div
                  animate={reduce ? {} : { x: [0, 5, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-5 w-5 text-indigo-200/70" />
                </motion.div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </Glass>
  );
}

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <motion.article
      id={step.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.03 }}
      className="relative"
    >
      <Glass className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <motion.div
              className="inline-flex rounded-lg border border-indigo-300/20 bg-indigo-300/10 p-2 text-indigo-200"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            >
              {step.icon}
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Step {index + 1}: {step.title}
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">
                {step.explanation}
              </p>
              {step.note && <p className="mt-2 text-sm text-indigo-200">{step.note}</p>}
            </div>
          </div>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs text-slate-300">
            {index + 1}
          </span>
        </div>

        {!!step.tools?.length && (
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {step.tools.map((tool) => (
              <a
                key={`${step.id}-${tool.name}`}
                href={tool.url}
                target={tool.url === "#" ? "_self" : "_blank"}
                rel={tool.url === "#" ? undefined : "noreferrer"}
                className="group rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-indigo-300/35 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-slate-100">{tool.name}</p>
                  {tool.url !== "#" && (
                    <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-indigo-200" />
                  )}
                </div>
                {tool.description && (
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                    {tool.description}
                  </p>
                )}
                {!!tool.os?.length && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {tool.os.map((os) => (
                      <OsBadge key={`${tool.name}-${os}`} os={os} />
                    ))}
                  </div>
                )}
              </a>
            ))}
          </div>
        )}
      </Glass>

      {index < steps.length - 1 && (
        <div className="my-3 flex justify-center">
          <motion.div
            animate={{ y: [0, 3, 0], opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border border-white/10 bg-white/5 p-2"
          >
            <ArrowDown className="h-4 w-4 text-indigo-200/80" />
          </motion.div>
        </div>
      )}
    </motion.article>
  );
}

export default function RomLibraryLandingPage() {
  return (
    <main className="scroll-smooth bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <Background />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-28">
          <motion.div initial="hidden" animate="show" variants={reveal} className="text-center">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-indigo-200" />
              ROM Workflow Guide
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Understanding the ROM Preservation Workflow
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              A simple guide to the tools and steps used to build clean retro game libraries.
            </p>
            <div className="mt-8">
              <a
                href="#workflow"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(99,102,241,0.4)] transition hover:-translate-y-0.5 hover:bg-indigo-400"
              >
                See the workflow
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
          <HeroPreview />
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cyan-200">
            <BookOpenCheck className="h-3.5 w-3.5" />
            The 7-Step Workflow
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A visual guide through the ecosystem
          </h2>
          <p className="mt-4 text-slate-300">
            Each step has a simple purpose. Learn the flow first, then choose tools with confidence.
          </p>
        </motion.div>

        <div className="mt-10">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <Glass className="relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 via-cyan-400/10 to-fuchsia-500/15" />
            <div className="relative">
              <h3 className="text-3xl font-semibold text-white">The Big Picture</h3>
              <p className="mt-3 max-w-3xl text-slate-300">
                Game preservation involves multiple specialized tools. Understanding the workflow
                makes the ecosystem much easier to navigate.
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5">
                <div className="flex flex-col items-center gap-3 text-center text-sm sm:flex-row sm:flex-wrap sm:justify-center sm:text-left">
                  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">Game Files</span>
                  <ArrowRight className="hidden h-4 w-4 text-indigo-200/80 sm:block" />
                  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">DAT Databases</span>
                  <ArrowRight className="hidden h-4 w-4 text-indigo-200/80 sm:block" />
                  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">Verification / Cleanup</span>
                  <ArrowRight className="hidden h-4 w-4 text-indigo-200/80 sm:block" />
                  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">Filtering (optional)</span>
                  <ArrowRight className="hidden h-4 w-4 text-indigo-200/80 sm:block" />
                  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">Metadata</span>
                  <ArrowRight className="hidden h-4 w-4 text-indigo-200/80 sm:block" />
                  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">Emulator</span>
                  <ArrowRight className="hidden h-4 w-4 text-indigo-200/80 sm:block" />
                  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">Frontend</span>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-300">
                <MonitorPlay className="h-4 w-4 text-indigo-200" />
                Learn the flow once, then every tool choice becomes simpler.
              </div>
            </div>
          </Glass>
        </motion.div>
      </section>
    </main>
  );
}
