import React from "react"

export const Stepper: React.FC<{
  timeLines: Array<{
    title: string
    description: string
    date: string
  }>
}> = ({ timeLines }) => (
  <div className="">
    {timeLines.map(({ date, description, title }, idx) => (
      <div className="timeline" key={idx}>
        <div className="relative">
          <div className="dot" />
          <div className="pl-10">
            <span className="timeline-date">{date}</span>
            <h3 className="timeline-head">{title}</h3>
            <p className="timeline-body">{description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
)
