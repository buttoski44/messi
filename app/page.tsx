import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full flex items-center justify-center pattern1">
      <div className="flex flex-col justify-around items-center w-full h-1/2 max-w-md shadow-lg sm:rounded-lg bg-bla border-2 border-wh outline outline-4 outline-bla outline-offset-2">
        <h1 className="text-6xl text-wh text-center p-4 font-extralight">
          MESSI
        </h1>
        <div className=" flex items-center gap-4">
          <Link
            href="/login/student"
            className="p-3 w-32 bg-ora text-wh text-center rounded-lg font-extralight shadow-lg focus:outline focus:outline-offset-2 focus:outline-wh focus:outline-2 hover:bg-[#f76405] transition hover:-translate-y-1"
          >
            Student
          </Link>
          <Link
            href="/login/admin"
            className="p-3 w-32 bg-ora text-wh text-center rounded-lg font-extralight shadow-lg focus:outline focus:outline-offset-2 focus:outline-wh focus:outline-2 hover:bg-[#f76405] transition hover:-translate-y-1"
          >
            Admin
          </Link>
        </div>
      </div>
    </main>
  );
}
