import { useState, useEffect, useMemo } from "react";
import { getHistory } from "../api/history";
import Pagination from "../Components/Pagination";
import Table from "../Components/Table";
import { Link } from "react-router-dom";

let pageSizes = [5, 7, 15, 20, 25, 30, 35, 40, 45, 50];

function ListHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getData = async () => {
      {
        await getHistory().then((res) => {
          setHistory(res.data);
        });
      }
    };

    getData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSizes[1];
    const lastPageIndex = firstPageIndex + pageSizes[1];
    return history.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, history]);

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-md mt-20">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className=" col-span-2 flex items-center justify-center gap-16 h-auto rounded bg-gray_light ">
              <div className="" >
                <form className="max-w-sm mx-auto">
                  <label htmlFor="mes" className="sr-only">
                    Mes
                  </label>
                  <select
                    disabled
                    id="mes"
                    className="block px-0 text-sm text-blue_dark bg-transparent border-0 border-b-2 border-blue_dark appearance-nonefocus:outline-none focus:ring-0 focus:border-green_primary  peer"
                  >
                    <option selected>Selecciona el mes</option>
                    <option value={"ENERO"}>Enero</option>
                    <option value={"FEBRERO"}>Febrero</option>
                    <option value={"MARZO"}>Marzo</option>
                    <option value={"ABRIL"}>Abril</option>
                    <option value={"MAYO"}>Mayo</option>
                    <option value={"JUNIO"}>Junio</option>
                    <option value={"JULIO"}>Julio</option>
                    <option value={"AGOSTO"}>Agosto</option>
                    <option value={"SEPTIEMBRE"}>Septiembre</option>
                    <option value={"OCTUBRE"}>Octubre</option>
                    <option value={"NOVIEMBRE"}>Noviembre</option>
                    <option value={"DICIEMBRE"}>Diciembre</option>
                  </select>
                </form>
              </div>
              <div>
                <button
                  disabled
                  className="px-4 py-2 bg-green_primary text-blue_dark rounded-md disabled:opacity-50  "
                >
                  Descargar
                </button>
              </div>
            </div>
            <div className="flex items-center  justify-center h-14 rounded bg-gray_light">
              <Link
                to="/home/new-conciliation"
                className="px-4 py-2 bg-blue_dark text-gray_light rounded-md"
              >
                Crear Historial
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center py-5 mb-4 rounded bg-gray_light dark:bg-gray-800">
            <Table data={currentTableData} />
            <div>
              {/* 
              pagination component
               */}
            </div>
          </div>
          <div className="grid grid-cols gap-4 mb-4">
            <div className="flex items-center justify-center h-16 rounded bg-gray_light dark:bg-gray-800">
              <Pagination
                totalCount={history.length}
                siblingCount={1}
                currentPage={currentPage}
                pageSize={pageSizes[1]}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListHistory;
