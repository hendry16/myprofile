import Text from "../components/Text";
import EducationBox from "../components/EducationBox";
import PercentBox from "../components/PercentBox";

const education = [
  {
    year: "2015-2018",
    major: "Matematika Sains",
    school: "SMA Negeri 1 Kabanjahe"
  },
  {
    year: "2021-now",
    major: "Informatics Management",
    school: "Raharja University"
  },
  {
    year: "2023",
    major: "Cloud Computing Student",
    school: "Bangkit Academy"
  },
]

const skills = [
  {
    skill: "Web",
    percent: "70%",
    percentW : "w-[70%]"
  },
  {
    skill: "Java",
    percent: "80%",
    percentW : "w-[80%]"
  },
  {
    skill: "CSS",
    percent: "75%",
    percentW : "w-[75%]"
  },
  {
    skill: "Excel",
    percent: "75%",
    percentW : "w-[75%]"
  },
  {
    skill: "Node.js",
    percent: "85%",
    percentW : "w-[85%]"
  },

];

const bgColor = ["bg-red-500", "bg-blue-500", "bg-purple-500", "bg-orange-500", "bg-green-500"];

const ResumeContent = () => {
  return (
    <>
      <div className=" px-10 py-6 rounded-3xl m-6 bg-white">
        <div className="flex items-center justify-start">
          <Text text="Resume" />
          <div className="h-0.5 w-1/4 ml-6 bg-black bg-gradient-to-r  from-orange-600 to-pink-600"></div>
        </div>
        <div className="flex items-center my-4 w-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f95054" className="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
          <p className="text-2xl ml-2 font-medium">Education</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
          {
            education.map((d, key) => {
              return <EducationBox key={Math.ceil(Math.random() * 10000)} year={d.year} major={d.major} schoolName={d.school} />
            })
          }
        </div>
        <div className="mt-14 flex bg-blue-50 rounded-xl">
          <div className="w-1/2 my-4 pl-4 pr-8">
            <p className="text-2xl mb-4 font-medium">Skills</p>
            {
              skills.map((v, index) => {
                return <PercentBox skill={v.skill} percent={v.percent} color={bgColor[index]} percentW={v.percentW} />
              })
            }
          </div>
          <div className="w-1/2 my-4">
            <p className="text-2xl font-medium">Knowledges</p>
            <div className="text-gray-500 mt-4 pr-4 flex gap-y-5 gap-x-2.5 flex-wrap">
                <p className="px-4 py-1 rounded-md bg-blue-100">Data Structures</p>
                <p className="px-4 py-1 rounded-md bg-blue-100">Object Oriented Programming</p>
                <p className="px-4 py-1 rounded-md bg-blue-100">Database</p>
                <p className="px-4 py-1 rounded-md bg-blue-100">Web Server</p>
                <p className="px-4 py-1 rounded-md bg-blue-100">Networking</p>
                <p className="px-4 py-1 rounded-md bg-blue-100">Back End</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResumeContent;