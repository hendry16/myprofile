const Box3 = ({ skill, color, text, svgD }) => {
  return (
    <div className="flex bg-fuchsia-100 p-4 rounded-xl">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={color} className="w-1/6 h-2/6">
        <path strokeLinecap="round" strokeLinejoin="round" d={svgD} />
      </svg>
      <div className="ml-4 w-full">
        <p className="text-2xl font-medium mb-2">{skill}</p>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  )
}

export default Box3;