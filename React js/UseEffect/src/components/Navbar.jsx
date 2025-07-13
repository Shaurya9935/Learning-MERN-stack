import React, {useEffect} from 'react'


      

const Navbar = ({color}) => {

useEffect(() => {
      alert("Hey i will run on every render")
})

  useEffect(() => {
      alert("This is first render")
}, [])

useEffect(() => {
  alert("Any time the color changes")
}, [color])


  return (
    <div>
      This is a navbar of {color} color.
    </div>
  )
}

export default Navbar
