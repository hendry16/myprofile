import Header from "../layouts/Header";
import Profile from "../components/Profile";
import ResumeContent from "../contents/ResumeContent";


const Resume = () => {
  return (
    <>
      <Header />
      <div className="lg:flex">
        <Profile />
        <div className="w-full">
          <ResumeContent />
        </div>
      </div>
    </>
  )
}

export default Resume;