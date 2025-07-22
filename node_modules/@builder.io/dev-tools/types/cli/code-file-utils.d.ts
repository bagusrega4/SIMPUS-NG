import type { DevToolsSys } from "../types";
import type { Credentials } from "./credentials";
import type { CodebaseSearchOptions, CodebaseSearchResponse } from "$/ai-utils";
export declare function shouldIncludeFile(inputFile: string, ctx: {
    foundFiles: string[];
    allFiles: string[];
    selectedFilePaths: Map<string, number>;
    cwd: string;
    appRootDir: string;
    fallbackImportance: number | 0;
}): number | 0;
export declare function searchCodeBase(sys: DevToolsSys, credentials: Credentials, signal: AbortSignal | undefined, body: CodebaseSearchOptions): Promise<CodebaseSearchResponse | null>;
