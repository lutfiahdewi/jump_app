import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import {
    UserCircleIcon,
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

export default function AuthLayout({ children }) {
    const [open, setOpen] = useState(false);
    const listMenu = [
        { title: "Dashboard", link: "", icon: LuMonitorCheck, gap: true },
        { title: "Form Entri Kegiatan", link: "", icon: MdOutlinePostAdd },
        { title: "Form Kinerja Harian", link: "", icon: FaListCheck },
        {
            title: "Entri Kegiatan Mitra",
            link: "",
            icon: FaUsersGear,
            gap: true,
        },
        { title: "Detail Pegawai", link: "", icon: FaBuildingUser },
        { title: "Detail Mitra", link: "", icon: FaUsers },
    ];

    return (
        <div className="flex">
            <div
                className={
                    (open ? "w-auto p-3" : "w-16") +
                    " h-screen sticky top-0 bg-dark-blue-base relative duration-300 text-slate-200"
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
            <div className="flex flex-col w-screen">
                <div className="h-auto flex justify-between bg-slate-100 shadow py-1 px-3 sticky top-0 z-50">
                    <Link href="/home">
                        <img
                            className="h-12 lg:h-16 w-auto"
                            src={`./images/banner.png`}
                            alt="banner"
                        />
                    </Link>

                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >
                                    <UserCircleIcon className="h-8 lg:h-10 w-auto pr-5 self-center" />
                                </button>
                            </span>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <Dropdown.Link href={route("profile.edit")}>
                                Profile
                            </Dropdown.Link>
                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
                <main className="p-3 lg:mx-3">{children}</main>
                <footer className="flex justify-center mt-5 p-3 bg-slate-50 text-sm">
                    Copyright &copy; BPS Kabupaten Jombang
                </footer>
            </div>
        </div>
    );
}
