import LockSvg from "./locksvg";

export const ResetEmailInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 sm:w-40">
      <span className="flex justify-center items-center w-20 xs:w-full ">
        <LockSvg className="fill-bla" />
      </span>
      <p className="text-center font-medium align-middle p-2 text-sm underline decoration-red-500 underline-offset-4 cursor-default">
        please Enter your username or email and submit. after that you will get
        email for password rest
      </p>
    </div>
  );
};
