import Image from "next/image";
import Notification from '../assests/notification.svg'
import Avatar from '../assests/avatar.svg'
import Dropdown from '../assests/arrow-down-01-round.svg'

export default function Header() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:mb-4 font-outfit">
        <div>Welcome back,<b>Faizanullah</b> ☀️</div>
        <div className="lg:flex lg:justify-end lg:gap-6">
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
            <p>FaizyKhan
            <Image
                src={Dropdown}
                alt="Dropdown"
                width={15}
                height={15}
                className=" "
                />
            </p>
            
        </div>
    </div>
  )
}
