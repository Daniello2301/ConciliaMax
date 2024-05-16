import AreaChart from "../Components/AreaChart";
import ColumnChart from "../Components/ColumnChart";
import RadialChart from "../Components/RadialChart";

function Dashboard() {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-green-300 border-dashed rounded-md mt-20">
          <div className="grid grid-cols-3 gap-4 mb-4 h-[500px]">
            <div className="flex items-center justify-center h-auto rounded bg-gray-50 dark:bg-gray-800">
              <AreaChart />
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <ColumnChart />
            </div>
            <div className="flex items-center justify-center  rounded bg-gray-50 dark:bg-gray-800">
              <RadialChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
