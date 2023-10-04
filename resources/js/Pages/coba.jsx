import AuthLayout from "@/Layouts/AuthLayout";
import { Head } from "@inertiajs/react";
import DatePickers from "@/Components/DatePicker";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import Table from "rc-table";

export default function coba({}) {
    const data = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
            {
                label: "My First Dataset",
                data: [300, 50, 100],
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                ],
                hoverOffset: 2,
            },
        ],
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: 100,
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
            width: 100,
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            width: 200,
        },
        {
            title: "Operations",
            dataIndex: "",
            key: "operations",
            render: () => <a href="#">Delete</a>,
        },
    ];

    const dataTable = [
        { name: "Jack", age: 28, address: "some where", key: "1" },
        { name: "Rose", age: 36, address: "some where", key: "2" },
    ];
    return (
        <AuthLayout>
            <Head title="Coba" />
            <section className="flex justify-between my-5" id="tanggal">
                <h2 className="self-center">Atur tanggal:</h2>
                <DatePickers type="responsive" className="mx-3" />
            </section>
            <section className="mb-5" id="capaian">
                <h3 className="font-bold mb-3 ">Capaian FRA</h3>
                <div className="flex gap-x-12">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                        <h5>Realisasi Anggaran (%)</h5>
                        <h1>70%</h1>
                        <div className="bg-slate-200 relative h-4 w-full rounded-2xl">
                            <div
                                className="bg-orange-600 absolute top-0 left-0 flex h-full items-center justify-center rounded-2xl text-xs font-semibold text-white"
                                style={{ width: "33.3%" }}
                            >
                                63,3%
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-5" id="kegiatanBPS">
                <h3 className="font-bold mb-3 ">Kegiatan BPS Jombang</h3>
                <div className="grid grid-cols-5 gap-3">
                    <div className="grid max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                        <h5>Total Kegiatan Tahun Ini</h5>
                        <h1 className="justify-self-center ">1</h1>
                    </div>
                    <div className="grid max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                        <h5>Total Kegiatan Tahun Ini</h5>
                        <h1 className="justify-self-center ">1</h1>
                    </div>
                    <div className="bg-slate-300 col-span-3 row-span-3">
                        Grafik
                    </div>
                    <div className="grid justify-items-center bg-blue-100 col-span-2 row-span-2 ">
                        <h4>Pie chart</h4>
                        <div className="block max-w-sm lg:w-64 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                            <Pie data={data}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-5" id="KegiatanBulan">
                <h3 className="mb-3">Kegiatan bulan ini</h3>
                <Table columns={columns} data={dataTable} />
            </section>
            <section className="my-5 " id="kinerja">
                <h3 className="font-bold mb-3">KINERJA PEGAWAI</h3>
                <div className="grid grid-cols-2">
                    <div className="mb-2">
                        <h3>Penyelesaian Kegiatan</h3>
                    </div>
                    <div className="mb-2">
                        <h3>Monitoring Laporan Harian</h3>
                    </div>
                </div>
            </section>
        </AuthLayout>
    );
}
