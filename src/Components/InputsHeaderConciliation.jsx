import { useForm } from "react-hook-form";

function InputsHeaderConciliation({ isdataSaved, dataBank, dataBook }) {
  const { register, handleSubmit } = useForm();

  /*  const onSubmit = () => {

  } */

  const createConciliation = handleSubmit((data) => {

    for(let ele of dataBank){
      for(let ele2 of dataBook){
        if(ele.documentNumber === ele2.documentNumber){
          let newConciliation = {
            date: data.date,
            bank: data.bank,
            accountNumber: data.accountNumber,
            BookId: ele2.id,
            BankId: ele.id,
            amount: ele.amount,
          };

          console.log(newConciliation)
          
        }
      }
    }

    /* let newConciliation = {
      date: data.date,
      bank: data.bank,
      accountNumber: data.accountNumber,
    };

    console.log(newConciliation); */
  });

  return (
    <>
      <header className="grid grid-cols-4 gap-4 mb-4 justify-center h-20 bg-gray_light rounded-sm">
        <section className=" flex flex-col items-center justify-center h-full ">
          <div className="relative z-0 ml-5 mb-1 group">
            <input
              type="text"
              name="nro_conciliacion"
              id="nro_conciliacion"
              className="block py-2.5 px-0 w-full text-sm text-blue_dark bg-transparent border-0 border-b-2 border-blue_dark appearance-none focus:outline-none focus:ring-0 focus:border-blue_dark peer"
              placeholder=" "
              required
              {...register("bank", { required: true })}
            />
            <label
              htmlFor="nro_conciliacion"
              className="peer-focus:font-medium absolute text-sm text-blue_dark duration-300 transform -translate-y-5 scale-50 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue_dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Banco
            </label>
          </div>
        </section>
        <section className=" flex flex-col items-center justify-center h-full ">
          <div className="relative z-0 ml-5 mb-1 group">
            <input
              type="text"
              name="nro_conciliacion"
              id="nro_conciliacion"
              className="block py-2.5 px-0 w-full text-sm text-blue_dark bg-transparent border-0 border-b-2 border-blue_dark appearance-none focus:outline-none focus:ring-0 focus:border-blue_dark peer"
              placeholder=" "
              required
              {...register("accountNumber", { required: true })}
            />
            <label
              htmlFor="nro_conciliacion"
              className="peer-focus:font-medium absolute text-sm text-blue_dark duration-300 transform -translate-y-5 scale-50 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue_dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              N° Cuenta
            </label>
          </div>
        </section>
        <section className=" flex flex-col items-center justify-center h-full">
          <div className="relative z-0 ml-5 mb-1 group">
            <input
              type="text"
              name="nro_conciliacion"
              id="nro_conciliacion"
              className="block py-2.5 px-0 w-full text-sm text-blue_dark bg-transparent border-0 border-b-2 border-blue_dark appearance-none focus:outline-none focus:ring-0 focus:border-blue_dark peer"
              placeholder=" "
              required
              {...register("date", { required: true })}
            />
            <label
              htmlFor="nro_conciliacion"
              className="peer-focus:font-medium absolute text-sm text-blue_dark duration-300 transform -translate-y-5 scale-50 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue_dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mes
            </label>
          </div>
        </section>
        <section className="flex items-center justify-center h-full">
          <button
            type="button"
            className=" text-gray_light bg-blue_dark hover:scale-105 font-medium rounded-md text-sm px-6 py-2.5 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:scale-100"
            disabled={isdataSaved[0] && isdataSaved[1] ? false : true}
            onClick={createConciliation}
          >
            Conciliar
          </button>
        </section>
      </header>
    </>
  );
}

export default InputsHeaderConciliation;
