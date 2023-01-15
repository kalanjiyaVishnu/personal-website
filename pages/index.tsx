import Image from "next/image"
import { Skills } from "../components/Skills"
import { Stepper } from "../components/Stepper"
import { Title } from "../components/Title"
import {
  getProjectImages,
  getProjects,
  getSrcIcon,
  getTimeLines,
  type Project,
} from "../utils"
import _ from "lodash"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  return (
    <div className="h-screen">
      <Rocket />
      <main className="w-4/5 m-auto pt-20 h-full flex items-center justify-center z-50">
        <div className="flex  flex-col p-2 justify-center w-fit -mt-20">
          <p className="text-2xl md:text-6xl font-medium">
            `Developer,Youtuber`
          </p>
          <p className="text-sm text-end font-normal">-Yes i&apos;m</p>
          <a
            href="#me"
            className="btn-flip"
            data-back="ME"
            data-front="About"
          ></a>
        </div>
      </main>
      <Me />
      <Skills />
      <Projects />
    </div>
  )
}

const Me = () => {
  return (
    <div
      className="bg-neutral-900 border-t-2 border-white borde text-white h-auto p-16 relative"
      id="me"
    >
      {/* <div className="w-full bg-white h-[2px] absolute top-0 left-0"></div> */}
      <Title title="Kalanjiya Vishnu .J" float="right">
        <p className="text-xs md:text-sm  font-normal flex-nowrap">
          A full stack developer, building things for web.
        </p>
      </Title>
      <TimeLine />
    </div>
  )
}
const TimeLine = () => (
  <>
    <div className="text-sm rounded-sm md:ml-2 mt-3 py-2 px-10  text-center sm:text-left border-l-2 border-r-2 sm:border-r-0  border-gray-200">
      Things i did in the past . . .
    </div>
    <Stepper timeLines={getTimeLines()} />
  </>
)

const Rocket = () => (
  <div className="absolute top-40 -left-64  xl:block xl:top-40 xl:-left-40 opacity-85">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#222"
      height="24rem"
      viewBox="0 0 24 24"
    >
      <path d="M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-8.698 6.825l-1.439-.507 5.701-5.215 1.436.396-5.698 5.326zm3.262 4.287l-1.323-.565 4.439-4.503 1.32.455-4.436 4.613zm-4.083.387l-1.481-.507 8-7.89 1.437.397-7.956 8z" />
    </svg>
  </div>
)

const Projects = () => (
  <div className="bg-neutral-900 border-t h-max text-white ">
    <div className="p-16">
      <Title title="Things I've built" float="left" />
      <ProjectsContainer />
    </div>
  </div>
)

const ProjectsContainer = () => {
  const renderProject: (p: Project) => JSX.Element = (p) => {
    const projectImages = getProjectImages(p.title)
    return (
      <div
        className="grid p-4 md:grid-flow-col md:grid-cols-2 gap-4 h-auto overflow-hidden rounded-md bg-white bg-opacity-5"
        key={p.title}
      >
        <div className="p-2 flex flex-col justify-between">
          <div>
            <p className="text-xs">{p.category.join(" ")}</p>
            <h1 className="text-4xl font-medium relative">
              {p.title}{" "}
              {/* <div className="absolute top-1/2 -translate-y-1/2 left-[43%] w-full h-1 bg-white"></div> */}
            </h1>
            <p className="text-sm mt-4 px-4 border-teal-300 border-l-4">
              {p.description}
            </p>
            <div className="flex justify-end px-8 fill-slate-100">
              {p.links.map((link, idx) => (
                <a
                  href={link.ref}
                  rel="noreferrer"
                  target="_blank"
                  key={`${p.title}-${idx}`}
                >
                  <div className="w-8 p-2 hover:opacity-90 opacity-70 transition-opacity transform duration-150">
                    {getSrcIcon(link.type)}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="sm:mt-6 text-xs opacity-30">{p.tags.join("  ")}</div>
        </div>
        {p.category.includes("Featured") && (
          <Slider id={1} images={projectImages || []} />
        )}
      </div>
    )
  }
  return (
    <>
      <div className="flex flex-col gap-4 mt-10 h-screen">
        {getProjects().map(renderProject)}
      </div>
    </>
  )
}

const Slider = ({ images }: { id: number; images: string[] }) => {
  const [id, setId] = useState(0)
  const [isIncrement, setIsIncrement] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(moveToNextSlid, 2000)
    return () => clearInterval(interval)
  })

  const getWithd = () =>
    sliderRef.current ? sliderRef.current.clientWidth : 100

  const moveToNextSlid = () => {
    if (id === images.length - 2) {
      setIsIncrement(false)
    } else if (id === 0) {
      setIsIncrement(true)
    }
    setId(isIncrement ? id + 1 : id - 1)
  }
  return (
    <div
      className={`rounded-md shadow-md overflow-hidden border-white border-2 border-opacity-10 opacity-70 hover:opacity-90  transition-opacity transform duration-300 ease-in-out w-[${getWithd()}px] h-auto`}
      ref={sliderRef}
    >
      <div
        style={{
          transform: `translateX(-${id * getWithd()}px)`,
        }}
        className={`flex  transform-gpu transition-all duration-1000`}
      >
        {images.map((src, idx) => (
          <Image
            className="rounded-md w-full h-full object-cover border border-black"
            src={src}
            alt={src}
            width={1920}
            height={1080}
            key={idx}
          />
        ))}
      </div>
    </div>
  )
}
