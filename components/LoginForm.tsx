import React from "react";

import { signIn } from "@/auth";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function LoginForm() {
  return (
    <Card className="w-[25rem]">
      <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Fill in your credentials below to log in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Label>
              Email
              <Input className="mt-2" name="email" type="email" />
            </Label>
            <Label>
              Password
              <Input className="mt-2" name="password" type="password" />
            </Label>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit">Sign In</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
