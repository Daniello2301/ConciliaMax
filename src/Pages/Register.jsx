import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

function Register() {
  return (
    <>
      <main className="w-screen h-screen grid place-items-center">
        <section className="w-[900px] h-[500px] flex rounded-md overflow-hidden">
          <div className="w-3/6 h-full bg-blue_dark flex justify-center place-items-center flex-col">
            <img src={logo} alt="Logo ConciliaMax" />
            <h1 className="text-green_primary text-4xl font-rounde">
              ConciliaMax
            </h1>
          </div>
          <div className="w-3/6 h-full bg-gray_light flex justify-center place-items-center flex-col items-center">
            <h2 className="font-rounde text-3xl font-bold tracking-widest text-green_primary">
              Registrarse
            </h2>
            <p className="font-rounde text-green_primary w-[400px] text-center text-balance mt-2">
              Resgistrate para acceder a la plataforma
            </p>
            <form className="flex flex-col my-8 place-content-center items-center">
              <div className="relative my-2 w-[290px]">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-6 h-6 text-blue_dark dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="user-icon"
                  className="bg-gray-50 border border-gray-300 text-text-blue_dark text-sm rounded-md focus:ring-green_primary focus:border-green_primary 
                    block w-full ps-10 p-2.5 "
                  placeholder="Nombre de Usuario/NIT"
                />
              </div>
              <div className="relative my-2 w-[290px]">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                      stroke="#1F273C"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="#1F273C"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="email-icon"
                  className="bg-gray-50 border border-gray-300 text-text-blue_dark text-sm rounded-md focus:ring-green_primary focus:border-green_primary 
                    block w-full ps-10 p-2.5 "
                  placeholder="Correo"
                />
              </div>

              <div className="relative my-2 w-[290px]">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-6 h-6 text-blue_dark "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  id="password-icon"
                  className="bg-gray-50 border border-gray-300 text-text-blue_dark text-sm rounded-md focus:ring-green_primary focus:border-green_primary
                    block w-full ps-10 p-2.5 "
                  placeholder="Contraseña "
                />
              </div>

              <button
                type="submit"
                className="w-[100px] h-[44px] rounded-md   bg-blue_dark text-gray_light mt-3"
              >
                Enviar
              </button>
              <p className="text-blue_dark my-4">
                ¿Ya tienes cuenta?
                <span className="font-se">
                  <Link
                    className="ml-2 underline hover:font-semibold"
                    to="/login"
                  >
                    Inisiar Sesion
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Register;
