"use client";

import * as Form from "@radix-ui/react-form";
import Link from "next/link";

export const ResetGetEmailForm = () => {
  return (
    <Form.Root className="h-full rounded-3xl flex flex-col justify-start items-top gap-4">
      <Form.Field className="" name="username">
        <div className="py-2">
          <Form.Label className="">Username</Form.Label>
        </div>
        <Form.Control asChild>
          <input
            className="p-2 border-2 border-bla rounded-xl focus:outline-gra focus:outline-2 focus:outline-offset-4 bg-wh"
            type="text"
            required
          />
        </Form.Control>
      </Form.Field>
      <div className="flex flex-col gap-1">
        <span></span>
        <Form.Submit asChild>
          <button className="p-3 w-32 text-wh text-center bg-bla rounded-lg shadow-lg focus:outline focus:outline-offset-2 focus:outline-gra focus:outline-2 transition hover:bg-[#414040] hover:-translate-y-1">
            Request code
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};
