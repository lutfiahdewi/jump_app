import { Fragment } from "react";
import { Link } from "@inertiajs/react";

export default function StatCard({
    title = "",
    progress,
    singleStat,
    children,
    className = "",
    ...props
}) {
    let progressComp;
    let singleStatComp;
    if (progress) {
        let color;
        if (progress >= 0 && progress < 33.3) {
            color = "bg-red-600";
        } else if (progress >= 33.3 && progress < 66.6) {
            color = "bg-orange-500";
        } else if (progress >= 66.6 && progress <= 100) {
            color = "bg-green-600";
        }
        progressComp = (
            <>
                <h1>{`${progress}%`}</h1>
                <div className="bg-slate-200 relative h-4 w-full rounded-2xl">
                    <div
                        className={`${color} absolute top-0 left-0 flex h-full items-center justify-center rounded-2xl text-xs font-semibold text-white`}
                        style={{ width: `${Number.parseInt(progress.toString())}%` }}
                    >
                        {progress}%
                    </div>
                </div>
            </>
        );
    }
    if (singleStat) {
        singleStatComp = (<><h1 className="justify-self-center ">{singleStat}</h1></>);
    }
    return (
        <>
            <div
                {...props}
                className={
                    "max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 " +
                    className
                }
            >
                <h5>{title}</h5>
                {progress ? progressComp : ""}
                {singleStat ? singleStatComp : ""}
                {children}
            </div>
        </>
    );
}
