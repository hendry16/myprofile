import Box4 from "../components/Box4";
import Text from "../components/Text"

const portfolio = [
  {
    course: "Dicoding",
    category: "Web",
    title: "Belajar Membuat Website",
  },
  {
    course: "Dicoding",
    category: "Back-End",
    title: "Belajar Membuat REST API",
  },
  {
    course: "Dicoding",
    category: "Back-End",
    title: "Membuat Book-self REST API",
  },
  {
    course: "Sololearn",
    category: "Back-End",
    title: "Create Flight REST API",
  },
  {
    course: "Sololearn",
    category: "Web",
    title: "Create Dashboard Website for Flight",
  },
  {
    course: "Google Cloud Skill Boost",
    category: "Cloud Computing",
    title: "Deploy Web App Using App Engine",
  },
  {
    course: "Dribble",
    category: "UI/UX Design",
    title: "Design UI/UX for Website",
  },
  {
    course: "Google Cloud Skill Boost",
    category: "Cloud Computing",
    title: "Create IAM Policy",
  },
  {
    course: "Digitalent",
    category: "Web",
    title: "Create Web Application with React JS",
  },
  {
    course: "Dicoding",
    category: "Web",
    title: "Membuat Aplikasi Profile dengan App Engine",
  },
];

const cloudStorageImg = [
  "https://storage.googleapis.com/mybucket-hendry1516/image/2170.jpg",
  "https://storage.googleapis.com/mybucket-hendry1516/image/2299.jpg",
  "https://storage.googleapis.com/mybucket-hendry1516/image/3500_7_10.jpg",
  "https://storage.googleapis.com/mybucket-hendry1516/image/3600_1_05.jpg",
  "https://storage.googleapis.com/mybucket-hendry1516/image/3700_6_10.jpg",
  "https://storage.googleapis.com/mybucket-hendry1516/image/4300_1_04.jpg",
  "https://storage.googleapis.com/mybucket-hendry1516/image/5000_4_06.jpg",
  "https://storage.googleapis.com/mybucket-hendry1516/image/5100_5_01.jpg",
  "https://storage.googleapis.com/mybucket-hendry1516/image/6200_8_06.jpg",
  "https://storage.googleapis.com/mybucket-hendry1516/image/9-01.jpg",
];

const colors = ["bg-red-50", "bg-pink-50", "bg-purple-50", "bg-lime-50", "bg-indigo-50", "bg-blue-50", "bg-cyan-50", "bg-teal-50", "bg-amber-50", "bg-green-50"];

const HomeContent = () => {

  return (
    <>
      <div className=" px-10 py-6 rounded-3xl m-6 bg-white">
        <div className="flex items-center justify-start">
          <Text text="Portfolio" />
          <div className="h-0.5 w-1/4 ml-6 bg-black bg-gradient-to-r  from-orange-600 to-pink-600"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6 my-8">
          {
            portfolio.map((v, key, index) => {
              return <Box4 key={index} course={v.course} category={v.category} title={v.title} source={cloudStorageImg[Math.floor(Math.random() * 10)]} color={colors[Math.floor(Math.random() * 10)]} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default HomeContent;