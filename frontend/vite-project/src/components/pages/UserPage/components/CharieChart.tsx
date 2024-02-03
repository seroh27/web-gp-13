import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
    type: "bar",
    height: 240,
    className: "font",
    series: [
        {
            name: "کالری مصرف",
            data: [300, 320, 500, 350, 200, 230, 500],
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "آمار ۷ روز اخیر",
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#047857"],
        plotOptions: {
            bar: {
                columnWidth: "30%",
                borderRadius: 15,
            },
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#064E3B",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
            categories: [
                "۷ روز پیش",
                "۶ روز پیش",
                "۵ روز پیش",
                "۴ روز پیش",
                "۳ روز پیش",
                "پریروز",
                "دیروز",
            ],
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
        },
        grid: {
            show: true,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 5,
                right: 20,
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            theme: "dark",
        },
    },
};

export default function Example() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div dir='rtl' className="mx-auto max-w-3xl">
                <h1 style={{ fontSize: "24px", color: "#064E3B" }} className="boldfold pt-8 text-center">آمار ۷ روز اخیر</h1>
                <Card>
                    <CardBody className="px-2 pb-8">
                        <Chart {...chartConfig} />
                    </CardBody>
                </Card></div>
        </div>
    );
}