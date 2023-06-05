import { Menu, Upload } from "react-feather";
import Link from "next/link";
import { GoBack } from "./GoBack";

export default function Navbar() {
    return (
        <nav className={`navbar shadow-md`}>
            <div className="w-full h-full flex items-center justify-between px-12 navbar-parent-div">
                <GoBack />
                <div className="flex gap-4">
                    <Link
                        href={"/subject"}
                        className="side-panel-toggle hover:bg-slate-100 transition-colors duration-300 rounded-full p-1 cursor-pointer"
                    >
                        <Menu width={32} height={32} />
                    </Link>
                    <Link href={"/upload"} className="hover:bg-slate-100 transition-colors duration-300 rounded-full p-1 cursor-pointer">
                        <Upload width={32} height={32} />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
