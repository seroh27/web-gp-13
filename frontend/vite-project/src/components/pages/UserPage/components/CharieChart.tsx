import { Card, CardBody } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Example() {
  const [chartData, setChartData] = useState({
    type: 'bar',
    height: 240,
    className: 'font',
    series: [{ name: "کالری مصرف", data: [] }] as any[],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: 'آمار ۷ روز اخیر',
      },
      xaxis: {
        categories: ['۱', '۲', '۳', '۴', '۵', '۶', '۷'],
      },
      // ... (rest of your options)
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user/weekcalreport/', {
          headers: {
            "Content-Type": 'application/json',
            "Authorization": localStorage.getItem('token')
          }
        });

        const dataFromServer = response.data;

        // Transform the response data into series format
        const seriesData = Object.values(dataFromServer);
        
        setChartData((prevData) => ({
          ...prevData,
          series: [{ ...prevData.series[0], data: seriesData }],
        }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div dir='rtl' className="mx-auto max-w-3xl">
        <h1 style={{ fontSize: '24px', color: '#064E3B' }} className="boldfold pt-8 text-center">
          آمار ۷ روز اخیر
        </h1>
        <Card>
          <CardBody className="px-2 pb-8">
            <Chart {...chartData} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
