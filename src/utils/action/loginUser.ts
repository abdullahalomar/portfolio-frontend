"use server";

import { formValues } from "@/app/login/page";

export const loginUser = async (data: formValues) => {
  const res = fetch(`${process.env.BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = (await res).json();
  return userInfo;
};
