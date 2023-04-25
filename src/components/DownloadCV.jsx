const DownloadCV = () => {
  return (
    <>
      <div className="my-8 mx-auto">
        <div className="text-lg w-3/5 justify-center items-center mx-auto flex text-pink-600 text-white px-8  bg-indigo-50 p-3 rounded-3xl bg-gradient-to-r from-orange-600 to-pink-600 hover:bg-gradient-to-l from-orange-600 to-pink-600 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <p className="ml-2">Download CV</p>
        </div>
      </div>
    </>
  )
}

export default DownloadCV;