export interface EventContextUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null | undefined;
  role: string;
}

export interface ServerFile {
  name: string;
  type: string;
  size: number;
  ext: string | null;
  data: string;
}
