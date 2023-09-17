export const Content = ({ head, body }: { head: string; body: string }) => {
  return (
    <div className="p-16 bg-red-300 w-screen">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {head}
      </h2>
      <div className="mt-6 font-sans">{body}</div>
    </div>
  )
}
