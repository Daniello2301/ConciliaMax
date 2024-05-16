import Chart from "react-apexcharts";

const options = {
  colors: ["#1F273C", "#3DAA64"],
  series: [
    {
      name: "Organic",
      color: "#1F273C",
      data: [
        { x: "Mon", y: 231 },
        { x: "Tue", y: 122 },
        { x: "Wed", y: 63 },
        { x: "Thu", y: 421 },
        { x: "Fri", y: 122 },
        { x: "Sat", y: 323 },
        { x: "Sun", y: 111 },
      ],
    },
    {
      name: "Social media",
      color: "#3DAA64",
      data: [
        { x: "Mon", y: 232 },
        { x: "Tue", y: 113 },
        { x: "Wed", y: 341 },
        { x: "Thu", y: 224 },
        { x: "Fri", y: 522 },
        { x: "Sat", y: 411 },
        { x: "Sun", y: 243 },
      ],
    },
  ],
  chart: {
    type: "bar",
    height: "320px",
    fontFamily: "Inter, sans-serif",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      borderRadiusApplication: "end",
      borderRadius: 8,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -14,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
};

function ColumnChart() {
  return (
    <>
      <div className="max-w-xs w-full h-auto bg-white rounded-md shadow p-4 md:p-6">
        <div className="grid grid-cols-2">
          <dl className="flex items-center mx-2">
            <dt className="text-blue_dark  text-sm font-normal me-1">
              Money spent:
            </dt>
            <dd className="text-blue_dark text-xs font-semibold">
              $3,232
            </dd>
          </dl>
          <dl className="flex items-center justify-end mx-2">
            <dt className="text-blue_dark text-sm font-normal me-1">
              Conversion rate:
            </dt>
            <dd className="text-blue_dark text-s font-semibold">
              1.2%
            </dd>
          </dl>
        </div>

        <div id="column-chart">
          <Chart
            options={options}
            series={options.series}
            type="bar"
            height={200}
          />
        </div>
      </div>
    </>
  );
}

export default ColumnChart;
