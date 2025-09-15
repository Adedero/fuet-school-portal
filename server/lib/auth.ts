import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../database/connection";
import * as schema from "../database/schema";
import { sendMail } from "./email";
import env from "./env";

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "sqlite", schema }),

  user: {
    additionalFields: {
      role: {
        type: "string",
        input: true
      }
    }
  },

  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60
    }
  },

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    sendResetPassword: async ({ user, url /* token */ } /* request */) => {
      const { error } = await sendMail({
        from: {
          name: env.get("APP_NAME"),
          address: env.get("EMAIL_USER")
        },
        to: user.email,
        subject: "Reset your password",
        html: `Hi, ${user.name}!. <br> Click the link to reset your password: ${url}`
      });

      if (error) throw error;
    }
  },

  emailVerification: {
    sendVerificationEmail: async ({ user, url /* token */ } /* request */) => {
      const { error } = await sendMail({
        from: {
          name: env.get("APP_NAME"),
          address: env.get("EMAIL_USER")
        },
        to: user.email,
        subject: "Verify your email address",
        html: `Hi, ${user.name}!. <br> Click the link to verify your email: ${url}`
      });

      if (error) throw error;
    }
  }
});
