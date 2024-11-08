import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { saltAndHashPassword } from "./lib/utils";

const users = [
  {
    email: "text@gmail.com",
    password: "$2a$10$ZP.8xOcSeYygnto0OMCkVOCbaJk9YZIru//kl2a/mWPA6OP//bMk6",
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

        debugger;

        user = users.find((entity) => {
          entity.email === credentials.email && entity.password === pwHash;
        });

        if (!user) {
          throw new Error("Invalid credentials.");
        }

        return user;
      },
    }),
  ],
});
