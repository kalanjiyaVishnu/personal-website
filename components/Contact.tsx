import NextLink from 'next/link'
import { getSrcIcon, Link } from '../utils'

const contactVia: Link[] = [
  {
    ref: 'https://github.com/kalanjiyaVishnu',
    type: 'github',
  },
  {
    ref: 'https://www.linkedin.com/in/kalanjiya-vishnu-j-26529021a/',
    type: 'linkedin',
  },
  {
    ref: 'https://www.linkedin.com/in/kalanjiya-vishnu-j-26529021a/',
    type: 'discord',
  },
]
export const Contact = () => {
  const renderBlock = ({ ref, type }: Link) => (
    <div
      key={type}
      className="bg-neutral-800 text-white rounded-md border border-neutral-700 border-opacity-10 p-1 flex text-center items-center overflow-hidden hover:-translate-y-1 transition-all transform duration-150 ease-in-out drop-shadow-sm "
    >
      <div className="w-10 fill-white hover:fill-slate-200 hover:opacity-90 opacity-70 transition-all transform duration-150 -translate-x-2 translate-y-2">
        {getSrcIcon(type)}
      </div>
      <NextLink
        href={ref}
        target="_blank"
        className="font-medium font-sans underline hover:no-underline flex-1 text-1xl"
      >
        <span className="font-medium">{type}</span>
      </NextLink>
    </div>
  )

  return (
    <div className="p-16">
      <h2 className="text-3xl font-bold tracking-tight b sm:text-4xl sm:items-end sm:text-end ">
        So, Reach Out!
      </h2>
      <hr className="my-4" />
      <div className="mt-6 font-sans ">{`May Be you have a suggestion/idea that somehow need someone, well i'm up for it. I would love to collaborate even a little in my busy schedule of completing my side projects. Here is a list of platform that i am available - I am awaiting!`}</div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-6 gap-x-4 w-full">
        {contactVia.map(renderBlock)}
      </div>
    </div>
  )
}
