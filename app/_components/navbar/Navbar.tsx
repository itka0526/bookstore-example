import { Menu, Upload } from "react-feather";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={`navbar shadow-md`}>
            <div className="w-full h-full flex items-center justify-end px-12 gap-4 navbar-parent-div">
                <Link href={"/subject"} className="side-panel-toggle">
                    <Menu width={32} height={32} />
                </Link>
                <Link href={"/upload"}>
                    <Upload width={32} height={32} />
                </Link>
            </div>
        </nav>
    );
}
