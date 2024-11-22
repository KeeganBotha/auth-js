import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { comparePasswords, saltAndHashPassword } from "./lib/utils";

const users = [
  {
    email: "text@gmail.com",
    password: "$2a$10$v7EnW6AqIeJjCHBG/5HinewpYjrsDcmIL8gwub2SXrXPCUqvM0wj2",
  },
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        const pwHash = await saltAndHashPassword(
          credentials.password as string
        );

        user = users.find((entity) => {
          return entity.email === credentials.email;
          comparePasswords(entity.password, pwHash);
        });

        if (!user) {
          throw new Error("Invalid credentials.");
        }

        return user;
      },
    }),
  ],
});
