function Footer() {
  return (
    <>
      <footer className="fixed bottom-0 left-0 z-50 w-full p-4 bg-green_primary shadow flex items-center justify-between ">
        <span className="text-sm text-gray_light  ">
          © 2023
          <a href="#" className="hover:underline">
            ConciliaMax
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-0 text-sm font-medium text-blue_dark">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
                Terminos y Condiciones
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Politica de Privacidad
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
