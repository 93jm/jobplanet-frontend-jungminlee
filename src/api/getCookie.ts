"use server";

import { cookies } from "next/headers";

export default async function getCookie() {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString().slice(-2);
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const day = ("0" + currentDate.getDate()).slice(-2);

  const expiresTime = 5 * 24 * 60 * 60 * 1000;

  const cookieValue = `JP_${year}${month}${day}`;

  cookies().set({
    name: "JP_OPEN",
    value: cookieValue,
    httpOnly: true,
    //만료 시간 현재 기준 5일
    expires: new Date(Date.now() + expiresTime),
  });
}
