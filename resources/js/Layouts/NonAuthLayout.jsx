import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import SideBar from "@/Components/SideBar";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function NonAuthLayout({ children, className=''}) {
    return (
        <div className="flex">
            <SideBar className=""/>
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
                            <Dropdown.Link href={route("register")}>
                                Register
                            </Dropdown.Link>
                            <Dropdown.Link href={route("login")}>
                                Log In
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
                <main className={"p-3 lg:mx-12" + className}>{children}</main>
                <footer className="flex justify-center mt-5 p-3 bg-slate-300 text-sm">
                    Copyright &copy; BPS Kabupaten Jombang
                </footer>
            </div>
        </div>
    );
}
