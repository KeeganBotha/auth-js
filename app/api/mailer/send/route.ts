import { Resend } from "resend";

import { EmailTemplate } from "@/components/Email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

resend.emails.send({
  from: "onboarding@resend.dev",
  to: "",
  subject: "Hello World",
  react: EmailTemplate({ firstName: "John" }),
});
