function InputsHeaderConciliation() {
  return (
    <>
      <header className="grid grid-cols-5 gap-4 mb-4 justify-center h-20 bg-gray_light rounded-sm">
        <section className=" flex flex-col items-center justify-center h-full ">
          <div className="relative z-0 ml-5 mb-1 group">
            <input
              type="text"
              name="nro_conciliacion"
              id="nro_conciliacion"
              className="block py-2.5 px-0 w-full text-sm text-blue_dark bg-transparent border-0 border-b-2 border-blue_dark appearance-none focus:outline-none focus:ring-0 focus:border-blue_dark peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="nro_conciliacion"
              className="peer-focus:font-medium absolute text-sm text-blue_dark duration-300 transform -translate-y-5 scale-50 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue_dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              N° Conciliacion
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
            className="text-gray_light bg-blue_dark hover:scale-105 font-medium rounded-md text-sm px-6 py-2.5"
          >
            Conciliar
          </button>
        </section>
      </header>
    </>
  );
}

export default InputsHeaderConciliation;
