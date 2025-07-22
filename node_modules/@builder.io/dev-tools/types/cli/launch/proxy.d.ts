import { type RequestHandler } from "http-proxy-middleware";
import type { DevToolsSys } from "types";
export declare const createProxy: (serverUrl: string, sys: DevToolsSys) => RequestHandler;
