import { Stepper } from "../components/Stepper"

export default function Home() {
  return (
    <div className="h-screen">
      <Rocket />
      <main className="w-4/5 m-auto pt-20 h-full flex items-center justify-center">
        <div className="flex  flex-col p-2 justify-center w-fit -mt-20">
          <p className="text-6xl font-medium">`Developer,Youtuber`</p>
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
    </div>
  )
}

const Me = () => {
  return (
    <div
      className="bg-neutral-900 border-t-2 border-white borde text-white h-screen p-16 relative"
      id="me"
    >
      {/* <div className="w-full bg-white h-[2px] absolute top-0 left-0"></div> */}
      <div className="flex flex-col gap-2 w-fit ml-auto">
        <p
          className="text-6xl font-extrabold"
          style={{
            textShadow:
              "1px 1px 3px rgb(0 0 0 / 29%), 2px 4px 7px rgb(73 64 125 / 10%)",
            fontFamily: "Inter",
          }}
        >
          Kalanjiya Vishnu .J
        </p>
        <p className="text-sm font-normal text-end">
          A full stack developer, building things for web.
        </p>
      </div>
      <div>things i did in the past . . .</div>
      <div className="">
        <Stepper
          timeLines={[
            {
              title: "Something",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
              date: "SEP - 2020",
            },
          ]}
        />
      </div>
    </div>
  )
}

const Rocket = () => (
  <div className="absolute sm:top-40 sm:-left-40 opacity-85">
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
