import * as Papa from "papaparse";
import { useState } from "react";
import Table from "./Table";

import { addElementBook } from "../api/book";

const allowedExtensions = ["csv"];

function InputTableBook({ setIsDataBookSaved, dataBook, setDataBook, setDataBookSaved }) {
  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState("");

  // It will store the file uploaded by the user
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

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

    let parsedData;
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target?.result, {
        header: true,
      });
      parsedData = csv?.data;

      setDataBook(parsedData);
    };
    reader.readAsText(file);
  };

  const handleSave = async () => {
    let dataSaved = [];
    setLoading(true);
    if (dataBook) {
      if (dataBook) {
        for (const element of dataBook) {
          if (element.valor === undefined || element.documento === undefined) continue;
    
          let data = {
            date: element.fecha,
            documentNumber: element.documento,
            description: element.concepto,
            amount: element.valor,
            type: element.tipo,
          };
    
          try {
            const res = await addElementBook(data);
    
            if (res.status !== 201) {
              setError("Error al guardar los datos");
            } else {
              dataSaved.push(res.data);
            }
          } catch (error) {
            setError("Error al guardar los datos");
          }
        }

        setLoading(false);
      }
    }
    setDataBookSaved(dataSaved);
    setIsDataBookSaved(true);
  };

  return (
    <>
      <div className="relative max-h-[400px] max-w-[700px] px-1 overflow-x-scroll shadow-md flex flex-col bg-gray_light">
        <h1 className="w-full text-center text-2xl my-3 text-green_primary font-semibold">
          Libro Contable
        </h1>
        {error && <div className="text-red-500 text-center">{error}</div>}

        {loading && (
          <div className="fixed z-40 top-0 left-0 w-screen h-screen bg-blue_dark bg-opacity-50 flex justify-center items-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin fill-green_primary"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        <Table data={dataBook} />
        <section className="my-2 flex items-center justify-center gap-4 w-auto">
          {!dataBook.length ? (
            <>
              <form>
                <div className="flex flex-col items-center justify-center">
                  <input
                    className="block w-full text-xs text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 "
                    onChange={handleFileChange}
                    id="book_data"
                    type="file"
                  />
                  <div className="mt-1 text-xs text-gray-500 " id="book_data">
                    Verifica que tu archico sea .csv
                  </div>
                </div>
              </form>
              <button
                type="button"
                onClick={handleParse}
                className=" text-gray_light py-2 px-5 bg-blue_dark hover:scale-105 font-medium rounded-md text-xs "
              >
                Cargar
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={handleSave}
              className="text-gray_light py-2 px-5 bg-blue_dark hover:scale-105 font-medium rounded-md text-xs "
            >
              Guardar
            </button>
          )}
        </section>
      </div>
    </>
  );
}

export default InputTableBook;
