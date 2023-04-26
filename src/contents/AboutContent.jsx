import Paragraph from "../components/Paragraph";
import Text from "../components/Text";
import Text2 from "../components/Text2";
import Box3 from "../components/Box3";

const skills = [
  {
    color: "#d566ff",
    svgD: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5", 
    skill: "Web Development",
    text: "Expertise in web technologies such as HTML, CSS, JavaScript, and frameworks like React and Angular and server-side language like Node.js."
  },
  {
    color: "#8774ff",
    svgD: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
    skill: "UI/UX Designer",
    text: "Design intuitive, user-friendly interfaces with focus on usability, accessibility, and visual appeal to enhance user experience on the web."
  },
  {
    color: "#269fff",
    svgD: "M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z",
    skill: "Web Server",
    text: "Deploy, configure, and maintain web servers using tools such as Apache, Nginx, and IIS for optimal performance and security."
  },
  {
    color: "#ff6080",
    svgD: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z",
    skill: "Cloud Engineer",
    text: "Leverage Google Cloud Platform to design, deploy, and manage scalable and cost-effective cloud solutions for businesses and organizations."
  },
]

const AboutContent = () => {
  

  return (
    <>
      <div className="px-10 py-6 rounded-3xl m-6 bg-white">
      <div className="flex items-center justify-start">
          <Text text="About" />
          <div className="h-0.5 w-1/4 ml-6 bg-black bg-gradient-to-r  from-orange-600 to-pink-600"></div>
        </div>
        <Paragraph text="Hello, my name is Hendri. I am a Junior Web Developer and I want to be able to develop my skills in the field of web developer and also become a cloud engineer. And I also like to learn about the back-end." />
        <Text2 text="What I do!" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
          {
            skills.map((value) => {
              return <Box3 skill={value.skill} text={value.text} svgD={value.svgD} color={value.color}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default AboutContent;