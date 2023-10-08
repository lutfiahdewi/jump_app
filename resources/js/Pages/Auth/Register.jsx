import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        NIP: "",
        email: "",
        password: "",
        password_confirmation: "",
        tanggal_lahir: "",
        jenis_kelamin: "",
        no_hp: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="nama" value="Nama" />

                    <TextInput
                        id="nama"
                        name="nama"
                        value={data.nama}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("nama", e.target.value)}
                        required
                    />

                    <InputError message={errors.nama} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="NIP" value="NIP" />

                    <TextInput
                        id="NIP"
                        name="NIP"
                        value={data.NIP}
                        className="mt-1 block w-full"
                       // autoComplete="ID"
                        onChange={(e) => setData("NIP", e.target.value)}
                        required
                    />

                    <InputError message={errors.NIP} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="tanggal_lahir" value="Tanggal lahir" />

                    <TextInput
                        id="tanggal_lahir"
                        type="date"
                        name="date"
                        value={data.tanggal_lahir}
                        className="mt-1 block w-full"
                        //autoComplete="username"
                        onChange={(e) =>
                            setData("tanggal_lahir", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.tanggal_lahir}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="jenis_kelamin" value="Jenis kelamin" />

                    <SelectInput
                        id="jenis_kelamin"
                        name="jenis_kelamin"
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("jenis_kelamin", e.target.value)
                        }
                        required
                        options={["Laki-Laki", "Perempuan"]}
                    ></SelectInput>

                    <InputError
                        message={errors.jenis_kelamin}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="no_hp" value="Nomor Handphone (Opsional)" />

                    <TextInput
                        id="no_hp"
                        name="no_hp"
                        type="tel"
                        value={data.no_hp}
                        className="mt-1 block w-full"
                        autoComplete="phone number"
                        onChange={(e) =>
                            setData("no_hp", e.target.value)
                        }
                    />

                    <InputError
                        message={errors.no_hp}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-emerald-600 hover:text-emerald-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
