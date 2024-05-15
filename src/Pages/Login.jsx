import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../api/auth";
import Swal from "sweetalert2";
import { useState } from "react";

import logo from "../assets/logo.svg";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isloading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);

    const res = await login(data);

    if (res.status === 200) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: "Has iniciado sesion correctamente",
      });
      setIsLoading(false);
      navigate("/home");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: res.data.message,
      });
      setIsLoading(false);
    }
  });

  return (
    <>
      {isloading && (
        <div className=" z-40 fixed top-0 left-0 w-screen h-screen bg-blue_dark bg-opacity-50 flex justify-center items-center">
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
              Iniciar Sesion
            </h2>
            <p className="font-rounde text-green_primary w-[400px] text-center text-balance mt-2">
              Ingresa tus credenciales para acceder a la plataforma
            </p>
            <form
              onSubmit={onSubmit}
              className="flex flex-col my-8 place-content-center items-center"
            >
              <div className="relative my-2 w-[290px]">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
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
                  id="email-address-icon"
                  name="username"
                  className="bg-gray-50 border border-gray-300 text-text-blue_dark text-sm rounded-md focus:ring-green_primary focus:border-green_primary 
                    block w-full ps-10 p-2.5 "
                  placeholder="username"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="text-red-600 absolute text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="relative mt-5 w-[290px]">
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
                  placeholder="&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600 absolute text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-[100px] h-[44px] rounded-md   bg-blue_dark text-gray_light mt-7"
              >
                Enviar
              </button>
              <p className="text-blue_dark my-4">
                ¿No tienes cuenta?
                <span className="font-se">
                  <Link
                    className="underline hover:font-semibold ml-2"
                    to="/signup"
                  >
                    Registrate
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

export default Login;
