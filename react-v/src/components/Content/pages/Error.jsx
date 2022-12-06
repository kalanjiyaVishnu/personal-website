import React, { useState, useEffect } from "react"

const Error = () => {
  const [msg, setmsg] = useState([
    "¯_(ツ)_/¯",
    ":-(",
    "(•_•)",
    "(⊙_⊙)",
    "ಥ_ಥ",
    "(ˉ﹃ˉ)",
    "💔",
    "💤",
    "💦",
    "(^///^)",
    "🕳",
    "X_X",
    ":/",
    "^3^",
    "~_~",
    ";[",
    "+_+",
    "¬_¬",
    "^_+",
    ">.<",
    "-_-",
    "^_-",
    "Y.Y",
    "=(",
  ])
  const [index, setindex] = useState("")

  useEffect(() => {
    setindex(Math.floor(Math.random() * (msg.length + 1)))
  }, [msg])

  const setTtimer = () => {}
  return (
    <div className="msg">
      <p>{msg[index] ? msg[index] : String(":(")}</p>
      <span className="err_msg">page not found yet...</span>
    </div>
  )
}

export default Error
