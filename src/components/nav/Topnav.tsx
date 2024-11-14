import Image from "next/image";
import Link from "next/link";
import GoLogo from '@assets/GO Logo.png';
import Divider from '@assets/Line 213.svg';
import ProfileImg from '@assets/profile.png'
import { Input } from "../ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { mainNav, otherNav } from "./nav.constants";
import { Button } from "../ui/button";
import { PiCaretDown } from "react-icons/pi";

export default function TopNav() {
  return (
    <header className="bg-white p-4 font-[family-name:var(--font-poppins)]">
      <nav className="h-16 flex justify-between items-center">
        <div className="flex gap-x-7 items-center">
          <div className="p-2 rounded-md bg-[#0a6de4]">
            <Image src={GoLogo} alt="Logo" />
          </div>
          <div className="relative">
            <Input type="search" className="bg-muted h-[3.25rem] pl-12" placeholder="Search"/>
            <IoSearchOutline fill="#667185" className="absolute left-4 top-1/2 transform -translate-y-1/2" size={24} />
          </div>
        </div>

        <div className="flex gap-x-6">
          <div className="flex gap-x-6">
            {mainNav.map(navItem => (
              <Link key={navItem.label} href={navItem.href} className="flex flex-col items-center">
                <navItem.icon size={32} />
                <span className="text-center">{navItem.label}</span>
              </Link>
            ))}
          </div>
          <Image src={Divider} alt='divider' />
          <div className="flex gap-x-6 items-center">
            <Button className="text-white">
              Subscribe
            </Button>
            {otherNav.map(navItem => (
              <Link key={navItem.label} href={navItem.href} className="flex flex-col items-center">
                <navItem.icon size={32} />
                <span className="text-center">{navItem.label}</span>
              </Link>
            ))}
            <div className="flex gap-x-4 items-center cursor-pointer">
              <Image src={ProfileImg} alt="Profile" />
              <PiCaretDown size={24} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}