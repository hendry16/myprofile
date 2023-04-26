import Header from "../layouts/Header";
import Profile from "../components/Profile";
import ContactContent from "../contents/ContactContent";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="lg:flex">
        <Profile />
        <div className="w-full">
          <ContactContent />
        </div>
      </div>
    </>
  )
}

export default Contact;