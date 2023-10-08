import { Link } from "@inertiajs/react";
import {
    Bars3Icon,
    XMarkIcon,
    ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { LuMonitorCheck } from "react-icons/lu";
import { MdOutlinePostAdd } from "react-icons/md";
import {
    FaBuildingUser,
    FaUsers,
    FaListCheck,
    FaUsersGear,
} from "react-icons/fa6";
import { useState } from "react";

export default function SideBar({ className = "" }) {
    const [open, setOpen] = useState(false);
    //const menus = [ArrowLeftOnRectangleIcon, ComputerDesktopIcon];
    const listMenu = [
        { title: "Dashboard", link: "Dashboard", icon: LuMonitorCheck, gap: true },
        { title: "Form Entri Kegiatan", link: "FormulirKegiatan", icon: MdOutlinePostAdd },
        { title: "Form Kinerja Harian", link: "FormulirKinerja", icon: FaListCheck },
        {
            title: "Entri Kegiatan Mitra",
            link: "EntriMitra",
            icon: FaUsersGear,
            gap: true,
        },
        { title: "Detail Pegawai", link: "DetailPegawai", icon: FaBuildingUser },
        { title: "Detail Mitra", link: "DetailMitra", icon: FaUsers },
    ];
    return (
        <>
            <div
                className={
                    (open ? "w-auto p-3" : "w-16") +
                    " h-screen sticky top-0 bg-dark-blue-base duration-300 text-slate-200"
                }
            >
                <Bars3Icon
                    className={`h-8 w-8 m-3 cursor-pointer self-center`}
                    onClick={() => setOpen(!open)}
                />
                {/* <XMarkIcon
                    className={" h-8 w-8 absolute top-3 right-3 cursor-pointer " + (!open && "hidden ")}
                    onClick={() => setOpen(!open)}
                /> */}
                <ul className="p-3 pt-6">
                    {listMenu.map((menu, index) => (
                        <Link href={"/" + (menu.link)}>
                            <li
                                key={index}
                                className={
                                    "flex rounded-md p-2 cursor-pointer hover:bg-dark-blue-hover gap-x-4 " +
                                    (menu.gap && " mb-9 ") +
                                    (index === 0 && "bg-dark-blue-hover")
                                }
                            >
                                <menu.icon className="h-8 w-8 self-center" />
                                <span
                                    className={
                                        (!open && "hidden ") +
                                        "origin-left duration-200"
                                    }
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>

                {/* <div
                    className={
                        "flex rounded-md m-2 p-2 cursor-pointer hover:bg-dark-blue-hover duration-500 box-contain" +
                        (!open && " hidden")
                    }
                >
                    <ArrowLeftOnRectangleIcon className="h-6 w-8" />
                    <span className={"ml-2"}>Logout</span>
                </div> */}
            </div>
        </>
    );
}
