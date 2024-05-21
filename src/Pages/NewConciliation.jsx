import { useState } from "react";
/* import ConciliationsResult from "../Components/ConciliationsResult"; */
import InputTableBank from "../Components/InputTableBank";
import InputTableBook from "../Components/InputTableBook";
import InputsHeaderConciliation from "../Components/InputsHeaderConciliation";

function NewConciliation() {
  const [isDataBookSaved, setIsDataBookSaved] = useState(false);
  const [isDataBankSaved, setIsDataBankSaved] = useState(false);

  const [dataBook, setDataBook] = useState([]);
  const [dataBank, setDataBank] = useState([]);

  const [dataBookSaved, setDataBookSaved] = useState([]);
  const [dataBankSaved, setDataBankSaved] = useState([]);

  return (
    <>
      <div className="p-4 sm:ml-56 ">
        <div className="p-4 border-2 h-auto border-green_primary  border-dashed rounded-md mb-12 mt-20">
          <InputsHeaderConciliation
            isdataSaved={[isDataBankSaved, isDataBookSaved]}
            dataBank={dataBankSaved}
            dataBook={dataBookSaved}
            setDataBank={setDataBank}
            setDataBook={setDataBook}
          />
          <div className="grid grid-cols-2 items-center gap-3 mb-4">
            <div className="flex items-center justify-center bg-gray-50 overflow-x-auto overflow-y-auto  ">
              <InputTableBook
                dataBook={dataBook}
                setDataBook={setDataBook}
                setIsDataBookSaved={setIsDataBookSaved}
                setDataBookSaved={setDataBookSaved}
              />
            </div>
            <div className="flex items-center justify-center bg-gray-50 overflow-x-auto overflow-y-auto ">
              <InputTableBank
                dataBank={dataBank}
                setDataBank={setDataBank}
                setIsDataBankSaved={setIsDataBankSaved}
                setDataBankSaved={setDataBankSaved}
              />
            </div>
          </div>
          {/* <ConciliationsResult /> */}
        </div>
      </div>
    </>
  );
}

export default NewConciliation;
