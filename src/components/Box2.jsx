const Box2 = (props) => {
  return (
    <div className="ml-4 p-2 flex mt-2 mb-2">
      <a href="" className="my-auto w-10 h-10 bg-white p-3 shadow-lg rounded-md hover:bg-gradient-to-r from-orange-600 to-pink-600 hover:text-white transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d={props.svg} />
        </svg>
      </a>

      <div className="text-left ml-3">
        <p className="text-xs text-gray-600">{props.type}</p>
        <p className="text-base">{props.data}</p>
      </div>
    </div>
  )
}

export default Box2;