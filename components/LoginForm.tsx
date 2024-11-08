"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function LoginForm() {
  const [userName, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  function handleSubmit() {
    console.log(userName);
    console.log(password);
  }

  return (
    <Card className="w-[25rem]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Fill in your credentials below to log in
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Input
            value={userName}
            onChange={(event) => setUserName(event.currentTarget.value)}
          />
          <Input
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSubmit}>Submit</Button>
      </CardFooter>
    </Card>
  );
}
