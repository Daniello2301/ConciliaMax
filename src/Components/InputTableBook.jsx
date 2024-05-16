import * as Papa from "papaparse";
import { useState } from "react";

const allowedExtensions = ["csv"];

function InputTableBook() {
  const [data, setData] = useState([]);

  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState("");

  // It will store the file uploaded by the user
  const [file, setFile] = useState(null);

  // This function will be called when
  // the file input changes
  const handleFileChange = (e) => {
    setError("");

    // Check if user has entered the file
    if (e.target.files?.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }

      // If input type is correct set the state
      setFile(inputFile);
    }
  };
  const handleParse = () => {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return alert("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target?.result, {
        header: true,
      });
      const parsedData = csv?.data;

      setData(parsedData);
      console.log(data);
    };
    reader.readAsText(file);
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md w-full flex flex-col justify-center bg-gray_light">
        <h1 className="w-full text-center text-2xl my-2 text-green_primary font-semibold">
          Libro Contable
        </h1>
        <table className="text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray_light uppercase bg-blue_dark">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3">
                Documento
              </th>
              <th scope="col" className="px-6 py-3">
                Concepto
              </th>
              <th scope="col" className="px-6 py-3">
                Valor
              </th>
            </tr>
          </thead>
          <tbody>

            {
              data.map((e, i) =>{
                return(
                  <>
                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label htmlFor="checkbox-table-search-1" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th scope="row" className="px-6 py-4">
                        {e.fecha}
                      </th>
                      <td className="px-6 py-4">{e.tipo}</td>
                      <td className="px-6 py-4"> {e.documento} </td>
                      <td className="px-6 py-4"> {e.concepto} </td>
                      <td className="px-6 py-4"> {e.valor} </td>
                    </tr>
                  </>
                )
              })
            }

          </tbody>
        </table>
        <section className="grid grid-cols-2 my-4 gap-4 mx-5">
          <div className="flex items-center justify-center">
            <form>
              <div className="flex flex-col items-center justify-center">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="user_avatar"
                ></label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                  onChange={handleFileChange}
                  id="user_avatar"
                  type="file"
                />
                <div
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="user_avatar_help"
                >
                  Verifica que tu archico sea .csv
                </div>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={handleParse}
              className=" text-gray_light w-[70px] h-[40px] bg-blue_dark hover:scale-105 font-medium rounded-md text-sm "
            >
              Cargar
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default InputTableBook;
