import Image from "next/image"
import Logo from '../assests/Brand Logo.svg'


export default function Form() {
  return (
    <div className="grid md:grid-cols-2">
        {/* Form */}
        <div>
            <Image
            src={Logo}
            alt="Logo"
            />
            <h1 className=" md:text-[32px] font-outfit font-semibold lg:leading-[41px]">
            Welcome to ItecExperts👋
            </h1>
        </div>
        {/* Image */}
        <div></div>
    </div>
  )
}
