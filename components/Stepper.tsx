import React from "react"

export const Stepper: React.FC<{
  timeLines: Array<{
    title: string
    description: string
    date: string
    tags?: string[]
  }>
}> = ({ timeLines }) => {
  console.log("timeLines", timeLines)
  return (
    <div className="timeline-container">
      {timeLines.map(({ date, description, title, tags }, idx) => (
        <div
          className={`timeline ${idx == 0 && "active bg-white bg-opacity-5"}`}
          key={idx}
        >
          <div className="relative">
            <div className="dot" />
            <div className="pl-10">
              <span className="timeline-date">{date}</span>
              <div className="make-flex gap-4 items-center">
                <h3 className="timeline-head">{title}</h3>
                <div className="make-flex-c hidden md:block">
                  {tags?.map((tag) => (
                    <div className="tag">{tag}</div>
                  ))}
                </div>
              </div>
              <p className="timeline-body">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
