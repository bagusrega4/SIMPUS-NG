import type { FusionConfig } from "$/ai-utils";
import type { LaunchArgs } from "../launch";
import type { DevToolsSys } from "types";
export declare function getFusionConfig(sys: DevToolsSys, args: LaunchArgs): Promise<FusionConfig>;
