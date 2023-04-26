import Text from "../components/Text"

const ContactContent = () => {
  return (
    <>
      <div className="px-10 py-6 rounded-3xl m-6 bg-white">
        <div className="flex items-center justify-start">
          <Text text="Contact" />
          <div className="h-0.5 w-1/4 ml-6 bg-black bg-gradient-to-r  from-orange-600 to-pink-600"></div>
        </div>
        <div className="bg-emerald-50 px-20 py-12 my-6 rounded-xl">
          <p>
            <span className="text-2xl text-gray-600">I'm always open to discussing product</span><br></br>
            <span className="text-2xl font-bold">design work or partnerships.</span>
          </p>
          <p className="text-lg mt-6">Please Fill Required Fields</p>
          <form action="" className="mt-8">
            <div className="relative z-0 w-full mb-8 group">
              <input type="text" id="name" className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none focus:outline-none focus:ring-0 focus:border-[#FF6464] peer" placeholder=" " required="" />
              <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"> Name * </label>
            </div>
            <div className="relative z-0 w-full mb-8 group">
              <input type="text" id="email" className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none focus:outline-none focus:ring-0 focus:border-[#5185D4] peer" placeholder=" " required="" />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"> Email * </label>
            </div>
            <div className="relative z-0 w-full mb-8 group">
              <input type="text" id="message" className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer" placeholder=" " required="" />
              <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"> Message * </label>
            </div>
            <input type="submit" class="px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-orange-600 to-pink-600 hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent dark:text-white" value="Submit"></input>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactContent;