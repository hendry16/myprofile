import Text from "../components/Text"
import Paragraph from "../components/Paragraph"
import Box3 from "../components/Box3"
import Text2 from "../components/Text2"

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
          <div className="my-8">
            <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactContent;