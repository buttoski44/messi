import { useEffect, useState } from "react";
import useCountdown from "../_hooks/usecountdown";

export const Countdown = () => {
  const rt = useCountdown(50);
  return <span className="text-gra/70 tracking-wide font-medium">{rt} s</span>;
};
