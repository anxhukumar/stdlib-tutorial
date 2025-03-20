function Heading({content}: {content: string}) {
  return (
    <div className="bg-[#f0ac3e32] w-full h-12 p-0.5 px-1.5 rounded-md mb-2 flex items-center">
      <h1 className="text-[#009CD7] font-montserrat text-2xl font-bold">
        {content}
      </h1>
    </div>
  )
}

export default Heading