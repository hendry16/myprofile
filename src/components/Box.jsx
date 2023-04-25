import Box2 from "./Box2";

const svgIcon = {
  school : "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
  location : "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  email : "M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
}

const Box = (props) => {
  return (
    <div className="bg-blue-50 w-auto h-auto m-0 mt-5 mx-4 mb-4 rounded-xl pt-2 pb-2">
        <Box2 color="text-pink-600" svg={svgIcon.email} type="Email" data="hendrisibarani15@gmail.com"></Box2>
        <Box2 color="text-blue-600" svg={svgIcon.location} type="Location" data="Tangerang"></Box2>
        <Box2 color="text-purple-600" svg={svgIcon.school} type="School" data="Raharja University"></Box2>
    </div>
  )
}

export default Box;