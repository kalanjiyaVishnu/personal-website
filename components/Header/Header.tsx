import React, { useState, useEffect, useRef } from "react"
import _ from "lodash"

import {
  FaBeer,
  FaCoffee,
  FaCogs,
  FaPaperPlane,
  FaHome,
  FaBolt,
  FaCaretRight,
  FaCaretDown,
} from "react-icons/fa"
import Link from "next/link"
import styles from "./Header.module.css"

const mobileTitles = [
  { title: "home", icon: <FaHome /> },
  { title: "projects", icon: <FaBolt /> },
  { title: "contacts", icon: <FaPaperPlane /> },
]
export function Header() {
  const [width, setwidth] = useState<number>(0)
  const navBar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener("resize", setWidthFromUi)
    setWidthFromUi()
    return () => window.removeEventListener("resize", setWidthFromUi)
  }, [])

  const setWidthFromUi = () =>
    setwidth(
      document.body.querySelector(`.${styles.navbar}`)?.clientWidth || 500
    )

  return (
    <Navbar>
      {width > 600 && <NavItems />}
      <NavItem icon={<FaCaretRight />} iconto={<FaCaretDown />} path_name={"/"}>
        <Dropdown mobTitles={mobileTitles} wid={width} />
      </NavItem>
      {/* last - dropdown */}
    </Navbar>
  )
}

const Navbar: React.FC<{
  children: React.ReactNode
}> = (props) => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.brand}>
        r1558
      </Link>
      <ul className={styles.navbar_nav}>{props.children}</ul>
    </nav>
  )
}

const NavItem: React.FC<{
  icon: React.ReactNode
  iconto?: React.ReactNode
  path_name: string
  children?: React.ReactNode
  text?: string
}> = (props) => {
  const [open, setopen] = useState(false)

  return (
    <li className={styles["nav-item"]}>
      <Link
        href={props.path_name}
        className={styles.icon}
        onClick={() => {
          setopen(!open)
        }}
      >
        {props.iconto && open ? props.iconto : props.icon}
      </Link>

      {open && props.children}
    </li>
  )
}
function NavItems() {
  return (
    <>
      <NavItem icon={<FaHome />} path_name="/home" text="home" />
      <NavItem icon={<FaBeer />} path_name="/contact-me" text="youtube" />
      <NavItem icon={<FaBolt />} path_name="/projects" text="projects" />
      <NavItem icon="😎" path_name="/me" text="contact" />
    </>
  )
}
const Dropdown: React.FC<{
  mobTitles: { title: string; icon: React.ReactNode }[]
  wid: number
  children?: React.ReactNode
}> = ({ mobTitles: mob_title, wid }) => {
  const DropdownItem = (props: {
    text: string
    left: React.ReactNode
    right?: React.ReactNode
  }) => {
    return (
      <Link href={"/" + props.text} className={styles.menuitems}>
        <span className={styles.iconleft}>{props.left}</span>
        {props.text}
        <span className={styles.iconright}>{props.right} </span>
      </Link>
    )
  }

  const DropdownItemMobile = ({
    mobileTitles,
  }: {
    mobileTitles: { title: string; icon: React.ReactNode }[]
  }) => {
    return (
      <>
        {_.map(mobileTitles, (x, idx) => (
          <DropdownItem key={idx} text={x.title} left={x.icon} />
        ))}
      </>
    )
  }
  return (
    <div className={styles.dropdown}>
      {wid <= 600 && <DropdownItemMobile mobileTitles={mobileTitles} />}
      <DropdownItem text="buy me a coffee" left={<FaCoffee />} />
      <DropdownItem text="setting" left={<FaCogs />} />
    </div>
  )
}
