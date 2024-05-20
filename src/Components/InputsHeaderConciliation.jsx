import { useForm } from "react-hook-form";
import { Swal } from "sweetalert2";

import * as conciliation from "../api/conciliations";
import * as history from "../api/history";
import { useState } from "react";

function InputsHeaderConciliation({ isdataSaved, dataBank, dataBook }) {
  const { register, handleSubmit } = useForm();

  /*  const onSubmit = () => {

  } */

  const [isLoading, setIsLoading] = useState(false);

  const createConciliation = handleSubmit(async (data) => {
    setIsLoading(true);
    if (dataBank.length === 0 || dataBook.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, sube los archivos de los bancos y libros",
      });
      setIsLoading(false);
      return;
    }

    for (let ele of dataBank) {
      for (let ele2 of dataBook) {
        if (
          dataBank.length > dataBook.length ||
          dataBank.length < dataBook.length
        ) {
          continue;
        }

        /* if (ele === undefined || ele2 === undefined) {
          await history.createHistory({
            date: new Date().toISOString().slice(0, 10),
            status: "No Conciliado",
            description: "Conciliacion no hecha, no se encontraron datos",
            ConciliationId: 0,
          })
          .then((resHistory) => {
            console.log(resHistory);
          });
        } */

        if (ele.documentNumber === ele2.documentNumber) {
          if (ele.amount !== ele2.amount) {
            let amoutTotal =
              ele.amount > ele2.amount
                ? ele.amount - ele2.amount
                : ele2.amount - ele.amount;

            let newConciliation = {
              date: data.date,
              bank: data.bank,
              accountNumber: data.accountNumber,
              BookId: ele2.id,
              BankId: ele.id,
              amount: amoutTotal,
            };

            await conciliation
              .createConciliation(newConciliation)
              .then(async (res) => {
                console.log(res);

                if (res.data?.id && res.status == 201) {
                  await history
                    .createHistory({
                      date: new Date().toISOString().slice(0, 10),
                      status: "pendiende",
                      description: `Conciliacion pendiente por diferencia en el valor de ${amoutTotal}`,
                      ConciliationId: res.data?.id,
                    })
                    .then((resHistory) => {
                      console.log(resHistory);
                    });
                }
              });
          }

          let newConciliation = {
            date: data.date,
            bank: data.bank,
            accountNumber: data.accountNumber,
            BookId: ele2.id,
            BankId: ele.id,
            amount: ele.amount,
          };
          await conciliation
            .createConciliation(newConciliation)
            .then(async (res) => {
              console.log(res);

              if (res.data?.id) {
                if (res.status == 201) {
                  await history
                    .createHistory({
                      date: new Date().toISOString().slice(0, 10),
                      status: "Conciliado",
                      description:
                        "Conciliación de " +
                        data.bank +
                        " con el libro, por concepto de " +
                        ele2.description +
                        " por un monto de " +
                        ele.amount,
                      ConciliationId: res.data?.id || 0,
                    })
                    .then((resHistory) => {
                      console.log(resHistory);
                    });
                }

                if (res.status !== 201) {
                  await history
                    .createHistory({
                      date: new Date().toISOString().slice(0, 10),
                      status: "No Conciliado",
                      description:
                        "Conciliación de " +
                        data.bank +
                        " con el libro, por concepto de " +
                        ele2.description +
                        ", falló, por favor revisar los datos",
                      ConciliationId: res.data?.id || 0,
                    })
                    .then((resHistory) => {
                      console.log(resHistory);
                    });
                }
              }
            });
        }
      }
    }

    setIsLoading(false);
  });

  return (
    <>
      <header className="grid grid-cols-4 gap-4 mb-4 justify-center h-20 bg-gray_light rounded-sm">
        {isLoading && (
          <div className="fixed z-40 top-0 left-0 w-screen h-screen bg-blue_dark bg-opacity-50 flex justify-center items-center">
            <div role="status">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="spinner"
                className="animate-spin h-20 w-20 text-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 40c-97 0-176 79-176 176s79 176 176 176 176-79 176-176-79-176-176-176zm0 320c-88.2 0-160-71.8-160-160S167.8 40 256 40s160 71.8 160 160-71.8 160-160 160z"
                ></path>
              </svg>
            </div>
          </div>
        )}

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
