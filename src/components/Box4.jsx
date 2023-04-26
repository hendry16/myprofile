const Box4 = ({ course, category, title, color, source }) => {
  return (
    <div className={`p-5 rounded-lg bg-${color}-50`}>
      <div className="overflow-hidden rounded-lg">
        <img className="w-full rounded-md hover:scale-110 transition duration-300 ease-in-out object-cover aspect-square" src={source} alt="" />
      </div>
      <p className="mt-4 text-sm text-gray-600 font-medium">{course} &bull; {category}</p>
      <div className="mt-2">
        <a href="" className="text-md font-medium hover:text-red-600">{title}</a>
      </div>
    </div>
  )
}

export default Box4;