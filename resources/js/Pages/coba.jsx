import NonAuthLayout from "@/Layouts/NonAuthLayout";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head } from "@inertiajs/react";
import DatePickers from "@/Components/DatePicker";
import StatCard from "@/Components/StatCard";
import Chart from "chart.js/auto";
import {Pie, Line } from "react-chartjs-2";
import Table from "rc-table";

export default function coba({ auth, dataPegawai}) {
    //data capain FRA
    const dataFRA = [
        {title: "Realisasi Anggaran", progress:70},
        {title: "Publikasi Akurat", progress:96},
        {title: "Rekomendasi Stat", progress:40},
        {title: "Metadata Stat", progress:0},
        {title: "SAKIP", progress:100},
        {title: "Kepuasan Pengguna", progress:96}
    ];
    //Layout header, footer dan sidebar
    const Layout = auth.user ? AuthLayout : NonAuthLayout;
    
    //data pie chart
    const data = {
        labels: ["Terlambat", "Selesai", "Berjalan"],
        datasets: [
            {
                label: "Status Kegiatan",
                data: [25, 40, 35],
                backgroundColor: [
                    "#ef4444",
                    "#22c55e",
                    "#f97316",
                ],
                hoverOffset: 2,
            },
        ],
    };

    //data tabel
    const dataPegawai2 = dataPegawai.slice(0,25);
    //pengaturan tabel
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

    //data grafik line
    const MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];
      
      function months(config) {
        var cfg = config || {};
        var count = cfg.count || 12;
        var section = cfg.section;
        var values = [];
        var i, value;
      
        for (i = 0; i < count; ++i) {
          value = MONTHS[Math.ceil(i) % 12];
          values.push(value.substring(0, section));
        }
      
        return values;
      }
    const dataLine = {
        labels: months({count: 7}),
        datasets: [{
            label: 'Jumlah Kegiatan',
            data: [2, 4, 3, 7, 5, 1, 4],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    //pengaturan grafik line
    const optionsLine = {
        responsive: true,
        plugins: {
        legend: {
          position: 'bottom',
        },
          title: {
            display: true,
            text: 'Grafik kegiatan BPS Kabupaten Jombang',
          },
        },
      };

    return (
        <Layout>
            <Head title="Coba" />
            <section className="flex justify-between my-5" id="tanggal">
                <h2 className="self-center">Atur tanggal:</h2>
                <DatePickers type="responsive" className="mx-3" />
            </section>
            <section className="my-10" id="capaian">
                <h3 className="font-bold mb-3 ">Capaian FRA</h3>
                <div className="flex gap-x-6">
                    {dataFRA.map((statFRA, index) => (
                        <StatCard title={statFRA.title} progress={statFRA.progress.toString()}/>
                    ))}
                </div>
            </section>
            <section className="my-10" id="kegiatanBPS">
                <h3 className="font-bold mb-3 ">Kegiatan BPS Jombang</h3>
                <div className="grid grid-cols-5 gap-3">
                    
                    <StatCard title="Total Kegiatan Tahun Ini" className="grid" singleStat={1} />
                    <StatCard title="Total Kegiatan Bulan Ini" className="grid" singleStat={0} />
                    
                    <div className="col-span-3 row-span-3">
                        <Line options={optionsLine} data={dataLine} />
                    </div>
                    <div className="grid justify-items-center col-span-2 row-span-2 ">
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
                        <div className="h-48 bg-slate-100" ></div>
                    </div>
                    <div className="mb-2">
                        <h3>Monitoring Laporan Harian</h3>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
