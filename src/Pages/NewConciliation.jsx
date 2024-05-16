import InputTableBank from "../Components/InputTableBank";
import InputTableBook from "../Components/InputTableBook";
import InputsHeaderConciliation from "../Components/InputsHeaderConciliation";

function NewConciliation() {
  return (
    <>
      <div className="p-4 sm:ml-64 h-full">
        <div className="p-4 border-2 h-full border-green_primary  border-dashed rounded-md mt-20">
          <InputsHeaderConciliation />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center bg-gray-50 ">
              <InputTableBook />
            </div>
            <div className="flex items-center justify-center bg-gray-50 ">
              <InputTableBank />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewConciliation;
