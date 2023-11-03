"use client";

import * as Form from "@radix-ui/react-form";
import Link from "next/link";
type parameter = "student" | "admin";

const Login = async ({ params }: { params: { user: parameter } }) => {
  setTimeout(() => {}, 2000);
  return (
    <Form.Root className="max-h-fit min-w-fit border-2 border-bla p-8 rounded-3xl flex flex-col justify-center items-center gap-10 bg-ora outline outline-4 outline-ora outline-offset-2 shadow-lg">
      <h1 className="text-6xl text-wh text-center font-extralight">
        {params.user.toLocaleString().toLocaleUpperCase()}
      </h1>
      <div className="flex flex-col gap-2">
        <Form.Field className="" name="username">
          <div className="py-2">
            <Form.Label className="">Username</Form.Label>
          </div>
          <Form.Control asChild>
            <input
              className="p-2 border-2 border-bla rounded-xl focus:outline-gra focus:outline-2 focus:outline-offset-2 bg-wh"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="password">
          <div className="py-2">
            <Form.Label className="FormLabel">Password</Form.Label>
          </div>
          <Form.Control asChild>
            <input
              className="p-2 border-2 border-bla rounded-xl focus:outline-gra focus:outline-2 focus:outline-offset-2 bg-wh"
              type="password"
              required
            />
          </Form.Control>
        </Form.Field>
      </div>
      <div className="flex flex-col gap-1">
        <Form.Submit asChild>
          <button className="p-3 w-32 text-wh text-center bg-bla rounded-lg shadow-lg focus:outline focus:outline-offset-2 focus:outline-gra focus:outline-2 transition hover:bg-[#414040] hover:-translate-y-1">
            Login!
          </button>
        </Form.Submit>
        <Link
          href="/reset"
          className="text-sm hover:underline hover:underline-offset-4 p-1 transition-underline decoration-1 decoration-bla/80"
        >
          forgot password&#x3f;
        </Link>
      </div>
    </Form.Root>
  );
};

export default Login;
