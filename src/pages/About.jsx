import Header from "../layouts/Header";
import Profile from "../components/Profile";
import AboutContent from "../contents/AboutContent";

const About = () => {
  return (
    <>
      <Header />
      <div className="lg:flex">
        <Profile />
        <div className="w-full">
          <AboutContent />
        </div>
      </div>
    </>
  )
}

export default About;