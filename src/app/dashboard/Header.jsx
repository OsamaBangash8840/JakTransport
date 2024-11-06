import Image from "next/image";
import Notification from '../assests/notification.svg'
import Avatar from '../assests/avatar.svg'
import Dropdown from '../assests/arrow-down-01-round.svg'
import Link from "next/link";

export default function Header() {
  return (
    <div className="grid grid-cols-2 lg:mb-4 mx-[-30px] font-outfit mt-8 md:mt-0">
      <div className=" text-[13px] md:text-[16px]">Welcome back,<b>Faizanullah</b> ☀️</div>
      <div className="flex justify-end lg:gap-6">
        <Image
          src={Notification}
          alt="Notification"
          width={40}
          height={40}
        />
        <Image
          src={Avatar}
          alt="Avatar"
          width={40}
          height={40}
        />
        <Link href={'http://localhost:3000/profile'}>
          <p className="text-[13px] md:[13px]">FaizyKhan
            <Image
              src={Dropdown}
              alt="Dropdown"
              width={15}
              height={15}
              className=" "
            />
          </p>
        </Link>

      </div>
    </div>
  )
}
