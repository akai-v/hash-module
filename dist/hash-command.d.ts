import { CommandInfo, BotCommandEvent } from "@akaiv/core";
export declare abstract class HashCommand implements CommandInfo {
    private name;
    private command;
    constructor(name: string, command: string);
    readonly CommandList: string[];
    readonly Usage: string;
    readonly Description: string;
    abstract calcHash(str: string): string;
    onCommand(e: BotCommandEvent): void;
}
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
export declare class MD5Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class MD4Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class MDC2Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class SHACommand extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class SHA1Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class SHA224Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class SHA256Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class SHA384Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class SHA512Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class SHA3224Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class SHA3256Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class SHA3384Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class SHA3512Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class Keccak224Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class Keccak256Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class Keccak384Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class Keccak512Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class Shake128Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class Shake256Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class CRC1Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class CRC16Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class CRC24Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class CRC32Command extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class CRC16ccittCommand extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class CRC16kermitCommand extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class CRC16modbusCommand extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class CRC16xmodemCommand extends HashCommand {
    constructor();
    calcHash(input: string): string;
}
export declare class CRC81wireCommand extends HashCommand {
    constructor();
    calcHash(input: string): string;
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
