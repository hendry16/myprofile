import Navbar from "../components/Navbar"

const Header = () => {

  return (
    <>
      <header className="flex sm:justify-between justify-center mt-6 mx-6 items-center sm:mt-6">
        <h1 className="hidden sm:block text-4xl logo font-extrabold ml-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-600">Hendri.</h1>
        <Navbar />
      </header>


    </>
  )
}

export default Header;