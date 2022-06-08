export type User = {
  name: {
    first: string;
    last: string;
    middle: string;

    prefix?: string;
    suffix?: string;
  };
};

export type AuthRequestData = {
  email: string;
  password: string;
};
