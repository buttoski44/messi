import { Loader2 } from "lucide-react";
type colors = "wh" | "bla" | "ora" | "gra";
export const Loader = ({ color }: { color: colors }) => {
  return (
    <Loader2 className={`text-${color} w-14 h-14 animate-spin opacity-70`} />
  );
};
