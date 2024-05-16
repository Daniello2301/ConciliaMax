import * as Papa from "papaparse";
import { useState } from "react";
import Table from "./Table";

const allowedExtensions = ["csv"];

function InputTableBook() {
  const [dataBook, setDataBook] = useState([]);

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

      setDataBook(parsedData);
      /* console.log(dataBook); */
    };
    reader.readAsText(file);
  };

  return (
    <>
      <div className="relative max-h-[400px] max-w-[600px] px-1 overflow-x-scroll shadow-md flex flex-col bg-gray_light">
        <h1 className="w-full text-center text-2xl my-3 text-green_primary font-semibold">
          Libro Contable
        </h1>
        {
          error && (
            <div className="text-red-500 text-center">
              {error}
            </div>
          )
        }
        <Table data={dataBook} />
        <section className="my-2 flex items-center justify-center gap-4 w-auto">
            <form>
              <div className="flex flex-col items-center justify-center">
                <input
                  className="block w-full text-xs text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 "
                  onChange={handleFileChange}
                  id="book_data"
                  type="file"
                />
                <div
                  className="mt-1 text-xs text-gray-500 "
                  id="book_data"
                >
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
        </section>
      </div>
    </>
  );
}

export default InputTableBook;
