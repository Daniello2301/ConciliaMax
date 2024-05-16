function ConciliationsResult() {
  return (
    <>
      <div className="grid grid-cols-1 mb-2 bg-gray_light overflow-hidden ">
        <div className="flex items-center justify-between mx-10 rounde h-14">
          <p className="text-gray-400 dark:text-gray-500">
            Acciones totales : 0
          </p>
          <p className="text-gray-400 dark:text-gray-500">
            Acciones completadas : 0
          </p>
          <p className="text-gray-400 dark:text-gray-500">
            Acciones fallidas : 0
          </p>
        </div>
      </div>
    </>
  );
}

export default ConciliationsResult;
