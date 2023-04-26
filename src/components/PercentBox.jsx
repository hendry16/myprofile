const PercentBox = ({ skill, percent, color, percentW }) => {
  
  return (
    <div className="mb-3">
      <div className="flex justify-between">
        <p className="text-gray-600 text-md font-medium">{skill}</p>
        <p className="text-gray-600 text-md font-medium">{percent}</p>
      </div>
      <div>
        <div className="h-1 w-full rounded-full bg-gray-300">
          <div className={`h-1 rounded-full ${color} ${percentW}`}></div>
        </div>
      </div>
    </div>
  )
}

export default PercentBox;