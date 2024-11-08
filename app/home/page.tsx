"use client";

import { Button } from "@/components/ui/button";

export default function Page() {
  function handleLogout() {
    console.log("Trying to log out");
  }

  return (
    <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
      <span>You are logged in, well done</span>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
