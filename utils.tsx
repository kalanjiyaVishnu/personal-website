import { z } from "zod"
export const getTimeLines = () => [
  {
    title: "Actual Job",
    description:
      "yeah no kidding!, started working on a startup as a full stack developer, new environment,experiencing new challenges and maturing everyday.",
    date: "MID - 2021",
    tags: ["CASA Retail Ai"],
  },
  {
    title: "coding and the web",
    description:
      "now i found out that i can do more than gaming started exploring domains and found out that i can make cool websites and stuffs, stated learning about os,programming,software development.Switched to linux no more lights and windows. mcu,star wars...college,projects,linux and more linux. lot's going on.",
    date: "COVID - 2020",
  },
  {
    title: "Games and stuffs",
    description:
      "A hardcore pc gamer with a continuous loosing strike, but i loved  playing games, So this is where i started having fun with computers. spent Hours Fixing weird errors with games ...(yes i know - most productive days of my life)",
    date: "MID - 2019",
  },
]
export const getTools = () => ({
  ["1Programming-Languages"]: ["Python", "Js", "Golang", "Java", "C", "SQL"],
  ["2Backend"]: ["Nodejs", "express", "graphql"],
  ["3Frontend"]: ["React", "Angular", "Tailwindcss"],
  ["4Databases & Technologies"]: [
    "mongo db",
    "postgres",
    "Firebase",
    "Git",
    "Docker",
  ],
})

const Project = z.object({
  title: z.string(),
  description: z.string(),
  category: z.array(z.string()),
  tags: z.array(z.string()),
  link: z.array(
    z.object({
      src: z.enum(["github", "live"]),
      ref: z.string(),
    })
  ),
  useCase: z.string().optional().nullable(),
})
export type Project = z.infer<typeof Project>

export const getProjects: () => Project[] = () => [
  {
    title: "side-effects",
    description: `A website where users can able to find information related to the anime they are looking for and can able to track
    episodes they are currently in. It is also a place where users can interact with content like in a blog(able to send and
    receive messages).`,
    useCase: `Tried To build a community for anime - combined blog,chat,and search`,
    category: ["Full Stack", "Featured"],
    tags: ["React", "Nodejs", "Express", "MongoDB", "Firebase"],
    link: [
      { src: "github", ref: "https://casaretailai.com" },
      { src: "live", ref: "https://casaretailai.com" },
    ],
  },
  {
    title: "Casa Retail Ai",
    description: "A retail ai platform for retailers to manage their stores",
    category: ["Full Stack", "Other"],
    tags: ["React", "Nodejs", "Express", "MongoDB", "Firebase"],
    link: [
      { src: "github", ref: "https://casaretailai.com" },
      { src: "live", ref: "https://casaretailai.com" },
    ],
  },
]

export const getProjectImages = (project: string): string[] => {
  const projectImageMap: {
    [key: string]: string[]
  } = {
    "side-effects": new Array(5)
      .fill(0)
      .map((_, i) => `/images/anime-finder-${i + 1}.png`),
  }
  return projectImageMap[project]
}