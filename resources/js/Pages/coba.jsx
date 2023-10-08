import NonAuthLayout from "@/Layouts/NonAuthLayout";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head } from "@inertiajs/react";
import DatePickers from "@/Components/DatePicker";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import Table from "rc-table";

export default function coba({ auth, dataPegawai}) {
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

    const kolomDataPegawai = [
        {
            title: "NIP",
            dataIndex: "NIP",
            key: "NIP",
            width: 100,
        },{
            title: "Nama",
            dataIndex: "nama",
            key: "Nama",
            width: 200,
        },
        {
            title: "Tanggal Lahir",
            dataIndex: "tanggal_lahir",
            key: "Tanggal Lahir",
            width: 150,
        },
        {
            title: "Jenis Kelamin",
            dataIndex: "jenis_kelamin",
            key: "Jenis Kelamin",
            width: 150,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "Email",
            width: 200,
        },
        {
            title: "Nomor HP",
            dataIndex: "no_hp",
            key: "Nomor HP",
            //render: () => <a href="#">Delete</a>,
        },
    ];

    const dataPegawai2 = dataPegawai.slice(0,25);

    const Layout = auth.user ? AuthLayout : NonAuthLayout;

    return (
        <Layout>
            <Head title="Coba" />
            <section className="flex justify-between my-5" id="tanggal">
                <h2 className="self-center">Atur tanggal:</h2>
                <DatePickers type="responsive" className="mx-3" />
            </section>
            <section className="my-10" id="capaian">
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
            <section className="my-10" id="kegiatanBPS">
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
                            <Pie data={data} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-10" id="KegiatanBulan">
                <h3 className="font-bold mb-3">Kegiatan bulan ini</h3>
                <Table columns={kolomDataPegawai} data={dataPegawai2} 
                scroll={{ y: 300 }} className="border-collapse border" rowClassName={`border`}/>
            </section>
            <section className="my-10 " id="kinerja">
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
            <section className="my-24">

            </section>
        </Layout>
    );
}
