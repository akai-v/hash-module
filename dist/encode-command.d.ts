import { CommandInfo, BotCommandEvent } from "@akaiv/core";
export declare abstract class EncodingCommand implements CommandInfo {
    private name;
    private command;
    constructor(name: string, command: string);
    readonly CommandList: string[];
    readonly Usage: string;
    readonly Description: string;
    abstract convert(input: string): string;
    onCommand(e: BotCommandEvent): void;
}
export declare abstract class DecodingCommand implements CommandInfo {
    private name;
    private command;
    constructor(name: string, command: string);
    readonly CommandList: string[];
    readonly Usage: string;
    readonly Description: string;
    abstract convert(input: string): string;
    onCommand(e: BotCommandEvent): void;
}
export declare class Base64EncodeCommand extends EncodingCommand {
    constructor();
    convert(input: string): string;
}
export declare class Base64DecodeCommand extends DecodingCommand {
    constructor();
    convert(input: string): string;
}
export declare class URLEncodeCommand extends EncodingCommand {
    constructor();
    convert(input: string): string;
}
export declare class URLDecodeCommand extends DecodingCommand {
    constructor();
    convert(input: string): string;
}
export declare class URLStrictEncodeCommand extends EncodingCommand {
    constructor();
    convert(input: string): string;
}
export declare class URLStrictDecodeCommand extends DecodingCommand {
    constructor();
    convert(input: string): string;
}
export declare class HTMLEncodeCommand extends EncodingCommand {
    constructor();
    convert(input: string): string;
}
export declare class HTMLDecodeCommand extends DecodingCommand {
    constructor();
    convert(input: string): string;
}
export declare class XMLEncodeCommand extends EncodingCommand {
    constructor();
    convert(input: string): string;
}
export declare class XMLDecodeCommand extends DecodingCommand {
    constructor();
    convert(input: string): string;
}
export declare class UnicodeEncodeCommand extends EncodingCommand {
    constructor();
    convert(input: string): string;
}
export declare class UnicodeDecodeCommand extends DecodingCommand {
    constructor();
    convert(input: string): string;
}
export declare class AsciiEncodeCommand extends EncodingCommand {
    constructor();
    convert(input: string): string;
}
export declare class AsciiDecodeCommand extends DecodingCommand {
    constructor();
    convert(input: string): string;
}
