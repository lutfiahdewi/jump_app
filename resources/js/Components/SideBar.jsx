import { Link, Head } from "@inertiajs/react";
import {
    ArrowPathIcon,
    Bars3Icon,
    XMarkIcon,
    ArrowLeftOnRectangleIcon,
    ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function SideBar() {
    const [open, setOpen] = useState(false);
    const menus = [ArrowLeftOnRectangleIcon, ComputerDesktopIcon];
    const listMenu = [
        { title: "Dashboard",link:"", gap: true },
        { title: "Form Entri Kegiatan",link:"" },
        { title: "Form Kinerja Harian",link:"" },
        { title: "Entri Kegiatan Mitra",link:"", gap: true },
        { title: "Detail Pegawai",link:"" },
        { title: "Detail Mitra",link:"" },
    ];
    return (
        <>
            <Head title="COba" />
            <div className="flex">
                <div
                    className={
                        (open ? "w-64" : "w-12") +
                        " h-screen bg-dark-blue-base relative duration-300 text-slate-200"
                    }
                >
                    <Bars3Icon
                        className={
                            (!open ? "visible duration-200" : "hidden") +
                            " h-8 w-8 absolute top-3 right-3 cursor-pointer"
                        }
                        onClick={() => setOpen(!open)}
                    />
                    <XMarkIcon
                        className={
                            (!open ? "hidden" : "visible duration-200") +
                            " h-8 w-8 absolute top-3 right-3 cursor-pointer"
                        }
                        onClick={() => setOpen(!open)}
                    />
                    <ul className="pt-20">
                        {listMenu.map((menu, index) => (
                            <li
                                key={index}
                                className={
                                   "flex rounded-md m-2 p-2 cursor-pointer hover:bg-dark-blue-hover pl-3 origin-left duration-200" 
                                   +  (menu.gap && " mb-6")
                                   + (!open && " hidden")
                                }
                            >
                                {menu.title}
                            </li>
                        ))}
                    </ul>
                    <div className="flex absolute bottom-6 left-2 ">
                        <ArrowLeftOnRectangleIcon className="h-6 w-8" /> 
                        <span className={"ml-2" + (open ? " visible duration-300" : " hidden")}>Logout</span>
                        
                    </div>
                </div>
                <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                    <h1>Home Page</h1>
                </div>
            </div>
        </>
    );
}