import { User, Session } from "next-auth";
export interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  perform: {
    score: Number;
    streak: Number;
    level: Number;
  };
}

export type FormState = {
  title: string;
  description: string;
  image: string;
  date: string;
  reference: string;
};

export interface PostInterface {
  title: string;
  description: string;
  image: string;
  date: string;
  reference: string;
  id: string;
  createdBy: {
    name: string;
    email: string;
    avatarUrl: string;
    id: string;
  };
}

export interface PostForm {
  title: string;
  description: string;
  image: string;
  date: string;
  reference: string;
}
