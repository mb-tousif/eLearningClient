import { useState } from "react";
import { MdOutlineLibraryBooks, MdOutlineMenuBook } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import { GiProgression } from "react-icons/gi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import Diagram from "./Diagram";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Student Learning Status Bar Chart",
    },
  },
};


export default function StudentProgress() {
  const [data] = useState({
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Next.js Learning Time in Minutes",
        data: [25, 35, 30, 25, 30, 45, 40],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(25, 90, 13, 0.5)",
      },
      {
        label: "Node.js Learning Time in Minutes",
        data: [30, 35, 25, 40, 20, 30, 35],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });

  return (
    <div className="mx-auto">
      <h1 className="sm:text-3xl text-2xl mt-4 font-medium mb-4 text-[#1b167b]">
        Student Progress Summary
      </h1>
      <div className="w-56 md:w-96 mx-auto">
        <Bar style={{ height: "100%" }} data={data} options={options} />
      </div>
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="text-xl font-bold">Student Status</h1>
      </div>
      <Diagram />
      <section className="text-[#1b167b]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <MdOutlineMenuBook className="text-[#868d05] w-12 h-12 mb-3 inline-block" />
                <h2 className="title-font font-medium text-3xl">62%</h2>
                <p className="leading-relaxed">Class</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <SiSpeedtest className="text-[#868d05] w-12 h-12 mb-3 inline-block" />
                <h2 className="title-font font-medium text-3xl">3</h2>
                <p className="leading-relaxed">Exam</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <MdOutlineLibraryBooks className="text-[#868d05] w-12 h-12 mb-3 inline-block" />
                <h2 className="title-font font-medium text-3xl">4</h2>
                <p className="leading-relaxed">Report</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <GiProgression className="text-[#868d05] w-12 h-12 mb-3 inline-block" />
                <h2 className="title-font font-medium text-3xl">46</h2>
                <p className="leading-relaxed">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
