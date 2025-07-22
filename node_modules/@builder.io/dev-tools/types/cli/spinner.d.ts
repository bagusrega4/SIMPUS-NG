export declare const spinner: () => {
    start: (msg?: string) => void;
    stop: (msg?: string, code?: number) => void;
    message: (msg?: string) => void;
    extra: (msg?: string) => void;
};
export declare function block({ input, output, overwrite, hideCursor, }?: {
    input?: (NodeJS.ReadStream & {
        fd: 0;
    }) | undefined;
    output?: (NodeJS.WriteStream & {
        fd: 1;
    }) | undefined;
    overwrite?: boolean | undefined;
    hideCursor?: boolean | undefined;
}): () => void;
