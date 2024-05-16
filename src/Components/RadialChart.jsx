import Chart from "react-apexcharts";

function RadialChart() {
  const options = () => {
    return {
      series: [100, 85, 70],
      colors: ["#1F273C", "#3DAA64", "#E21F1F"],
      chart: {
        height: "auto",
        width: "100%",
        type: "radialBar",
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          track: {
            background: "#E5E7EB",
          },
          dataLabels: {
            show: false,
          },
          hollow: {
            margin: 0,
            size: "30%",
          },
        },
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -23,
          bottom: -20,
        },
      },
      labels: ["Totales", "Completadas", "Fallidas"],
      legend: {
        show: true,
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        labels: {
          formatter: function (value) {
            return value + "%";
          },
        },
      },
    };
  };

  return (
    <>
      <div className="max-w-xs w-full h-auto flex flex-col items-center bg-white rounded-md shadow p-4 md:p-6">

        <div className="" >
            Historial
        </div>

        {/*  <!-- Radial Chart --> */}
        <div className="" id="radial-chart">
          <Chart
            options={options()}
            series={options().series}
            type="radialBar"
            height={380}
          />
        </div>
      </div>
    </>
  );
}

export default RadialChart;
