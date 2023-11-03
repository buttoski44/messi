"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";
import { Countdown } from "./countdown";
export const ResetGetEmailForm = () => {
  const [sucess, setSucess] = React.useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => setSucess(true), 2000);
  };
  return (
    <Form.Root
      className="h-full rounded-3xl flex flex-col justify-start items-top gap-4"
      onSubmit={handleFormSubmit}
    >
      <Form.Field className="flex flex-col" name="username">
        <Form.Label className="py-2">Username</Form.Label>
        <Form.Control
          className="p-2 border-2 border-bla rounded-xl focus:outline-gra focus:outline-2 focus:outline-offset-4 bg-wh"
          asChild
        >
          <input type="text" required />
        </Form.Control>
      </Form.Field>
      {sucess && (
        <Form.Field className="flex flex-col" name="code">
          <Form.Label className="py-2">Code</Form.Label>
          <Form.Control
            className="p-2 border-2 border-bla rounded-xl focus:outline-gra focus:outline-2 focus:outline-offset-4 bg-wh"
            asChild
          >
            <input type="text" required />
          </Form.Control>
        </Form.Field>
      )}
      <Form.Field name="submition" className="flex gap-4 items-center">
        <Form.Submit asChild>
          <button className="p-3 w-32 text-wh text-center bg-bla rounded-lg shadow-lg focus:outline focus:outline-offset-2 focus:outline-gra focus:outline-2 transition hover:bg-[#414040] hover:-translate-y-1">
            {sucess ? "Request code again" : "Request code"}
          </button>
        </Form.Submit>
        {sucess && <Countdown />}
      </Form.Field>
    </Form.Root>
  );
};
