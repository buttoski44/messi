import { ResetEmailInfo } from "./resetemailinfo";
import { ResetGetEmailForm } from "./resetgetemailform";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col xs:flex-row bg-wh p-5 sm:p-10 max-h-fit max-w-fit justify-center items-center xs:items-start gap-3 xs:gap-14 xs:rounded-lg shadow-lg border-2 border-gra outline outline-4 outline-offset-2">
      <ResetEmailInfo />
      <ResetGetEmailForm />
    </div>
  );
};

export default ForgotPassword;
