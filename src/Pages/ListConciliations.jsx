import { useState, useEffect, useMemo } from "react";
import { getBooks } from "../api/book";
import { Link } from "react-router-dom";
import Table from "../Components/Table";
import Pagination from "../Components/Pagination";

let pageSize = 7;
function ListConciliations() {
  const [dataBook, setDataBook] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await getBooks().then((res) => {
        setDataBook(res.data);
      });
    };

    getData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return dataBook.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, dataBook]);

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-md mt-20">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className=" col-span-2 flex items-center justify-center gap-16 h-auto rounded bg-gray_light ">
              <div className="">
                <form>
                  <label
                    htmlFor="search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative my-3">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="search"
                      className="block w-[300px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green_primary focus:border-green_primary "
                      placeholder="Numero de documento"
                      required
                      disabled
                    />
                    <button
                    disabled
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-green_primary hover:bg-green_dark focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-300"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex items-center  justify-center h-auto rounded bg-gray_light">
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
          </div>
          <div className="grid grid-cols gap-4 mb-4">
            <div className="flex items-center justify-center h-16 rounded bg-gray_light dark:bg-gray-800">
              <Pagination
                totalCount={dataBook.length}
                siblingCount={1}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListConciliations;
