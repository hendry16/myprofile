const colors = ["bg-red-50", "bg-pink-50", "bg-purple-50", "bg-lime-50", "bg-indigo-50", "bg-blue-50", "bg-cyan-50", "bg-teal-50", "bg-amber-50", "bg-green-50"];

const Box4 = ({ course, category, title, source, color }) => {
  return (
    <div className={`p-5 rounded-lg ${color}`}>
      <div className="overflow-hidden rounded-lg">
        <img className="w-full rounded-md hover:scale-110 transition duration-300 ease-in-out object-cover aspect-square" src={source} alt="" />
      </div>
      <p className="mt-4 text-sm text-gray-600 font-medium">{course} &bull; {category}</p>
      <div className="mt-2">
        <a href="##" className="text-md font-medium hover:text-red-600">{title}</a>
      </div>
    </div>
  )
}

export default Box4;