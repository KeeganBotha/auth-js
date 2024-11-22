import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { comparePasswords, saltAndHashPassword } from "./lib/utils";
import { signInSchema } from "./lib/zod";

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
        const { email, password } = await signInSchema.parseAsync(credentials);

        user = users.find((entity) => {
          const isMatch = comparePasswords(password, entity.password);
          return entity.email === email && isMatch;
        });

        if (!user) {
          throw new Error("Invalid credentials.");
        }

        return user;
      },
    }),
  ],
});
