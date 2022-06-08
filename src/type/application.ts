import { User } from "firebase/auth";

export type ApplicationBreakpoint = "small" | "medium" | "large";

export type ApplicationState = {
    user: User;
}