import builtInPrettier from "prettier";
export declare function loadPrettier(absoluteFilePath: string | undefined): typeof builtInPrettier;
export declare function prettierFormat(workingDirectory: string, code: string, parser: string | undefined, filePath: string | undefined): Promise<string>;
