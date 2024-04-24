"use client";

import getCookie from "@/api/getCookie";
import { useEffect } from "react";

function InitialCookieHelper() {
  useEffect(() => {
    getCookie();
  }, []);
  return null;
}

export default InitialCookieHelper;
