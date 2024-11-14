import Link from "next/link";
import { sideNav } from "./nav.constants";
import { Button } from "../ui/button";

export default function Sidebar() {
  return (
    <aside className="bg-white p-4 rounded-md text-[#647995] h-fit font-[family-name:var(--font-poppins)]">
      <div className="flex flex-col gap-3">
        {sideNav.map(navItem => (
          <Link className="flex gap-2 px-3.5 pt-3 items-center" href={navItem.href} key={navItem.label}>
            <navItem.icon size={32} />
            {navItem.label}
          </Link>
        ))}
      </div>
      <div className="mt-14 bg-muted p-2">
        <div className="flex items-center gap-x-2">
          <Button size='sm' className="text-white">Go</Button>
          <select className="bg-transparent">
            <option>Personal Account</option>
          </select>
        </div>
      </div>
    </aside>
  )
}