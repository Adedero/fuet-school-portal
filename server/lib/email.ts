import { createTransport } from "nodemailer";
import type { SendMailOptions } from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import env from "./env";
import normalizeException from "~~/shared/utils/normalize-exception";

type SendMailFunction = (options: SendMailOptions) => Promise<{
  error: Error | null;
  data: SMTPTransport.SentMessageInfo | null;
}>;

export class EmailService {
  private transport: ReturnType<typeof createTransport>;
  private transportConfig: SMTPTransport.Options;
  constructor(config: SMTPTransport.Options) {
    this.transport = createTransport(config);
    this.transportConfig = config;
  }

  sendMail: SendMailFunction = async (options) => {
    if (!this.transport) {
      return {
        data: null,
        error: new Error("Missing transport")
      };
    }
    try {
      const result = await this.transport.sendMail(options);
      return {
        data: result,
        error: null
      };
    } catch (error) {
      return {
        data: null,
        error: normalizeException(error)
      };
    }
  };

  getTransport = () => {
    return {
      transport: this.transport,
      config: this.transportConfig
    };
  };
}

export const { sendMail, getTransport } = new EmailService({
  host: env.get("EMAIL_HOST"),
  port: Number(env.get("EMAIL_PORT")),
  service: env.get("EMAIL_SERVICE"),
  secure: Number(env.get("EMAIL_PORT")) === 465,
  auth: {
    user: env.get("EMAIL_USER"),
    pass: env.get("EMAIL_PASSWORD")
  }
});
