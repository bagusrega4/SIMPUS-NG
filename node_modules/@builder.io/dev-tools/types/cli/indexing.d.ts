import type { DevToolsSys } from "../types";
import type { CLIArgs } from "./index";
import { type Credentials } from "./credentials";
export declare const runCodeIndexing: (_sys: DevToolsSys, _args: CLIArgs) => Promise<void>;
export declare const codeIndexing: (sys: DevToolsSys, credentials: Credentials) => Promise<void>;
