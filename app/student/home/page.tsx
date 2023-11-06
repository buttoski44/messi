const Student = () => {
  return (
    <div className="h-full flex flex-col justify-center gap-2">
      <div className="w-full p-4 border-2 border-bla rounded-3xl bg-wh relative shadow-lg z-10 flex flex-col sm:flex-row gap-2">
        <div className="w-full sm:w-1/2 flex gap-6 items-center p-2">
          <div className="w-24 h-24 rounded-full bg-gra"></div>
          <div className="flex flex-col py-2">
            <p className="text-bla text-xl font-semibold">Vishal sangole</p>
            <p className="text-bla text-sm">2024/VSCI/SCOE</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 h-full py-4 text-bla">
          <p>5822</p>
          <p>SCOE - IT</p>
          <p>Nandini</p>
        </div>
      </div>
      <div className="w-full p-10 border-2 border-bla rounded-3xl bg-wh relative shadow-lg z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-0">
        <div className="w-1/2 h-full flex flex-col gap-2 items-center sm:items-start">
          <p>chapati</p>
          <p>chapati</p>
          <p>chapati</p>
          <p>chapati</p>
          <p>chapati</p>
          <p>chapati</p>
          <p>chapati</p>
          <p>chapati</p>
          <p>chapati</p>
        </div>
        <div className="w-1/2 h-full">
          <button className="bg-ora p-4 rounded-lg w-full">Menus</button>
        </div>
      </div>
    </div>
  );
};

export default Student;
