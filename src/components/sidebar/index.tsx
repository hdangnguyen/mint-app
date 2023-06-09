import Image from "next/image";
import logo from "@/public/assets/image/logo.png";
import SidebarItem from "../sidebarItem";

interface ISidebarProps {
  menuItems: {
    href: string;
    title: string;
    icon: string;
  }[];
}

export default function Sidebar({ menuItems }: ISidebarProps) {
  return (
    <aside>
      <nav className="fixed bottom-1/2 left-3 z-10 h-[97%] w-24 translate-y-1/2 rounded-xl border border-slate-200 bg-white px-2 drop-shadow-sd2">
        <div className="my-8">
          <Image
            className="mx-auto"
            src={logo}
            height={25}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
}
