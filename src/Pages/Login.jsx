import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../api/auth";
import Swal from "sweetalert2";

import logo from "../assets/logo.svg";

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();


  const onSubmit = handleSubmit(async (data) => {

    const res = await login(data);
    
    console.log(res)



    if (res.status === 200) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: "Has iniciado sesion correctamente",
      })
      navigate("/dashboard");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: res.data.message,
      });
    }

  })


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
              Iniciar Sesion
            </h2>
            <p className="font-rounde text-green_primary w-[400px] text-center text-balance mt-2">
              Ingresa tus credenciales para acceder a la plataforma
            </p>
            <form onSubmit={onSubmit} className="flex flex-col my-8 place-content-center items-center">
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
              {errors.username && <span className="text-red-600 absolute text-sm">This field is required</span>}
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
              {errors.password && <span className="text-red-600 absolute text-sm">This field is required</span>}
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
