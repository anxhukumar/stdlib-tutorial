function Heading({content}: {content: string}) {
  return (
    <div className="bg-[#f3b22743] w-full h-12 p-0.5 px-1.5 rounded-md mb-2 flex items-center shadow-2xl">
      <h1 className="text-[#009CD7] font-montserrat text-xl font-bold">
        {content}
      </h1>
    </div>
  )
}

export default Heading