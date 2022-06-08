export type User = {
  name: {
    first: string;
    last: string;
    middle: string;

    prefix?: string;
    suffix?: string;
  };
};

export type UserSignUpData = {
  email: string;
  password: string;
};
