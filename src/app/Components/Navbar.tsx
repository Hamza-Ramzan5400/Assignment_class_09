
import Link  from "next/link"
const Navbar = () => {
  return (
    <div>


    <ul className="flex justify-center items-center mt-5 gap-5 bg-red-300 h-16 w-full">
        <li className="md:text-lg  lg:text-xl text-pink-700 font-bold"> <Link href="##">Home</Link></li>
        <li className="md:text-lg  lg:text-xl text-pink-700 font-bold"> <Link href="##">About</Link></li>
        <li className="md:text-lg  lg:text-xl text-pink-700 font-bold"> <Link href="##">Products</Link></li>
        <li className="md:text-lg  lg:text-xl text-pink-700 font-bold"> <Link href="##">Contact Us</Link></li>
    </ul>

    </div>
  )
}

export default Navbar