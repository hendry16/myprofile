const EducationBox = ({year, major, schoolName}) => {
  return (
    <div className="bg-emerald-50 p-4 rounded-xl">
        <p className="mb-2 text-md font-normal text-gray-600">{year}</p>
        <p className="mb-2 text-lg font-medium">{major}</p>
        <p className="text-md font-normal">{schoolName}</p>
    </div>
  )
}

export default EducationBox;