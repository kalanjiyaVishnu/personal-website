import React, { FC } from "react"

export const Title: FC<{
  title: string
  children?: React.ReactNode
  float: "left" | "right"
}> = ({ children, title, float }) => (
  <div className={getTitleClass(float)}>
    <p
      className="text-4xl  md:text-6xl font-extrabold"
      style={{
        textShadow:
          "1px 1px 3px rgb(0 0 0 / 29%), 2px 4px 7px rgb(73 64 125 / 10%)",
        fontFamily: "Inter",
        overflowWrap: "normal",
      }}
    >
      {title}
    </p>
    {children}
  </div>
)

const getClassBasedOnFloat = (float: "left" | "right") =>
  float === "right" ? "sm:items-end sm:text-end" : "sm:items-start"
const getTitleClass = (float: "left" | "right") =>
  `flex flex-col mb-2 ${getClassBasedOnFloat(
    float
  )} flex-nowrap gap-2  md:mr-auto  w-full`
