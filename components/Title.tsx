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

const getTitleClass = (float: "left" | "right") => {
  console.log(
    `flex flex-col bg-red-400 mb-2 ${
      float === "left" ? "" : "items-end"
    } flex-nowrap  ${
      float === "left" ? "" : "text-end"
    }  gap-2  md:w-fit mr-auto`
  )
  return `flex flex-col mb-2 ${
    float === "left" ? "items-start" : "items-end"
  } flex-nowrap  md:${
    float === "left" ? "text-start" : "text-end"
  }  gap-2  md:w-fit `
}
