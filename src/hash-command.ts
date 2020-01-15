import { CommandInfo, BotCommandEvent } from "@akaiv/core";
import * as crypto from "crypto";
import * as crc from "crc";
import * as entites from "entities";
import * as jsSha from "js-sha3";

/*
 * Created on Wed Jan 15 2020
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

export abstract class HashCommand implements CommandInfo {

    constructor(private name: string, private command: string) {

    }

    get CommandList() {
        return [ this.command ];
    }

    get Usage() {
        return `hash/${this.command} <문자열>`;
    }

    get Description() {
        return `주어진 문자열의 해시를 ${this.name} 알고리즘으로 생성합니다`;
    }

    abstract calcHash(str: string): string;

    onCommand(e: BotCommandEvent) {
        if (e.RawArgument.length < 1) {
            e.Channel.sendText(`사용법: ${this.Usage}`);
            return;
        }

        try {
            e.Channel.sendText(`${this.name}\n\n${e.RawArgument}\n\n결과\n${this.calcHash(e.RawArgument)}`);
        } catch (ex) {
            e.Channel.sendText(`해당 문자열의 해시를 생성 할 수 없습니다.`);
        }
    }

}

export abstract class EncodingCommand implements CommandInfo {

    constructor(private name: string, private command: string) {

    }

    get CommandList() {
        return [ this.command ];
    }

    get Usage() {
        return `hash/${this.command} <문자열>`;
    }

    get Description() {
        return `주어진 문자열을 ${this.name} (으)로 인코딩합니다`;
    }

    abstract convert(input: string): string;

    onCommand(e: BotCommandEvent) {
        if (e.RawArgument.length < 1) {
            e.Channel.sendText(`사용법: ${this.Usage}`);
            return;
        }

        try {
            e.Channel.sendText(`${this.name}\n\n${e.RawArgument}\n\n결과\n${this.convert(e.RawArgument)}`);
        } catch (ex) {
            e.Channel.sendText(`해당 문자열을 인코딩 할 수 없습니다.`);
        }
    }

}

export abstract class DecodingCommand implements CommandInfo {

    constructor(private name: string, private command: string) {

    }

    get CommandList() {
        return [ this.command ];
    }

    get Usage() {
        return `hash/${this.command} <문자열>`;
    }

    get Description() {
        return `주어진 문자열을 ${this.name} (으)로 디코딩합니다`;
    }

    abstract convert(input: string): string;

    onCommand(e: BotCommandEvent) {
        if (e.RawArgument.length < 1) {
            e.Channel.sendText(`사용법: ${this.Usage}`);
            return;
        }

        try {
            e.Channel.sendText(`${this.name}\n\n${e.RawArgument}\n\n결과\n${this.convert(e.RawArgument)}`);
        } catch (e) {
            e.Channel.sendText(`해당 문자열을 디코딩 할 수 없습니다.`);
        }
    }

}

// MD

export class MD5Command extends HashCommand {

    constructor() {
        super('MD5', 'md5');
    }

    calcHash(input: string) {
        let hash = crypto.createHash('md5');
        hash.update(input);

        return hash.digest('hex');
    }

}

export class MD4Command extends HashCommand {

    constructor() {
        super('MD4', 'md4');
    }

    calcHash(input: string) {
        let hash = crypto.createHash('md4');
        hash.update(input);

        return hash.digest('hex');
    }

}

export class MDC2Command extends HashCommand {

    constructor() {
        super('MDC2', 'mdc2');
    }

    calcHash(input: string) {
        let hash = crypto.createHash('mdc2');
        hash.update(input);

        return hash.digest('hex');
    }

}

// SHA

export class SHACommand extends HashCommand {

    constructor() {
        super('SHA', 'sha');
    }

    calcHash(input: string) {
        let hash = crypto.createHash('sha');
        hash.update(input);

        return hash.digest('hex');
    }

}

export class SHA1Command extends HashCommand {

    constructor() {
        super('SHA1', 'sha1');
    }

    calcHash(input: string) {
        let hash = crypto.createHash('sha1');
        hash.update(input);

        return hash.digest('hex');
    }

}

export class SHA224Command extends HashCommand {

    constructor() {
        super('SHA224', 'sha224');
    }

    calcHash(input: string) {
        let hash = crypto.createHash('sha224');
        hash.update(input);

        return hash.digest('hex');
    }

}

export class SHA256Command extends HashCommand {

    constructor() {
        super('SHA256', 'sha256');
    }

    calcHash(input: string) {
        let hash = crypto.createHash('sha256');
        hash.update(input);

        return hash.digest('hex');
    }

}

export class SHA384Command extends HashCommand {

    constructor() {
        super('SHA384', 'sha384');
    }

    calcHash(input: string) {
        let hash = crypto.createHash('sha384');
        hash.update(input);

        return hash.digest('hex');
    }

}

export class SHA512Command extends HashCommand {

    constructor() {
        super('SHA512', 'sha512');
    }

    calcHash(input: string) {
        let hash = crypto.createHash('sha512');
        hash.update(input);

        return hash.digest('hex');
    }

}

// SHA3

export class SHA3224Command extends HashCommand {

    constructor() {
        super('SHA3-224', 'sha3-224');
    }

    calcHash(input: string) {
        return jsSha.sha3_224(input);
    }

}

export class SHA3256Command extends HashCommand {

    constructor() {
        super('SHA3-256', 'sha3-256');
    }

    calcHash(input: string) {
        return jsSha.sha3_256(input);
    }

}


export class SHA3384Command extends HashCommand {

    constructor() {
        super('SHA3-384', 'sha3-384');
    }

    calcHash(input: string) {
        return jsSha.sha3_384(input);
    }

}

export class SHA3512Command extends HashCommand {

    constructor() {
        super('SHA3-512', 'sha3-512');
    }

    calcHash(input: string) {
        return jsSha.sha3_512(input);
    }

}

// Keccak

export class Keccak224Command extends HashCommand {

    constructor() {
        super('keccak-224', 'keccak-224');
    }

    calcHash(input: string) {
        return jsSha.keccak224(input);
    }

}

export class Keccak256Command extends HashCommand {

    constructor() {
        super('keccak-256', 'keccak-256');
    }

    calcHash(input: string) {
        return jsSha.keccak256(input);
    }

}

export class Keccak384Command extends HashCommand {

    constructor() {
        super('keccak-384', 'keccak-384');
    }

    calcHash(input: string) {
        return jsSha.keccak384(input);
    }

}

export class Keccak512Command extends HashCommand {

    constructor() {
        super('keccak-512', 'keccak-512');
    }

    calcHash(input: string) {
        return jsSha.keccak512(input);
    }

}

// Shake

export class Shake128Command extends HashCommand {

    constructor() {
        super('Shake128', 'shake-128');
    }

    calcHash(input: string) {
        return jsSha.shake128(input, 128);
    }

}

export class Shake256Command extends HashCommand {

    constructor() {
        super('Shake256', 'shake-256');
    }

    calcHash(input: string) {
        return jsSha.shake256(input, 256);
    }

}

// CRC

export class CRC1Command extends HashCommand {

    constructor() {
        super('CRC1', 'crc1');
    }

    calcHash(input: string) {
        return crc.crc1(input).toString(16);
    }

}

export class CRC16Command extends HashCommand {

    constructor() {
        super('CRC16', 'crc16');
    }

    calcHash(input: string) {
        return crc.crc16(input).toString(16);
    }

}

export class CRC24Command extends HashCommand {

    constructor() {
        super('CRC24', 'crc24');
    }

    calcHash(input: string) {
        return crc.crc24(input).toString(16);
    }

}

export class CRC32Command extends HashCommand {

    constructor() {
        super('CRC32', 'crc32');
    }

    calcHash(input: string) {
        return crc.crc32(input).toString(16);
    }

}

export class CRC16ccittCommand extends HashCommand {

    constructor() {
        super('CRC16ccitt', 'crc16ccitt');
    }

    calcHash(input: string) {
        return crc.crc16ccitt(input).toString(16);
    }

}

export class CRC16kermitCommand extends HashCommand {

    constructor() {
        super('CRC16kermit', 'crc16kermit');
    }

    calcHash(input: string) {
        return crc.crc16kermit(input).toString(16);
    }

}

export class CRC16modbusCommand extends HashCommand {

    constructor() {
        super('CRC16modbus', 'crc16modbus');
    }

    calcHash(input: string) {
        return crc.crc16modbus(input).toString(16);
    }

}

export class CRC16xmodemCommand extends HashCommand {

    constructor() {
        super('CRC16xmodem', 'crc16xmodem');
    }

    calcHash(input: string) {
        return crc.crc16xmodem(input).toString(16);
    }

}

export class CRC81wireCommand extends HashCommand {

    constructor() {
        super('CRC81wire', 'crc81wire');
    }

    calcHash(input: string) {
        return crc.crc81wire(input).toString(16);
    }

}

// BASE64

export class Base64EncodeCommand extends EncodingCommand {

    constructor() {
        super('Base64', 'btoa');
    }

    convert(input: string) {
        return Buffer.from(input).toString('base64');
    }

}

export class Base64DecodeCommand extends DecodingCommand {

    constructor() {
        super('Base64', 'atob');
    }

    convert(input: string) {
        return Buffer.from(input, 'base64').toString('binary');
    }

}

// URL

export class URLEncodeCommand extends EncodingCommand {

    constructor() {
        super('URL', 'urlen');
    }

    convert(input: string) {
        return encodeURI(input);
    }

}

export class URLDecodeCommand extends DecodingCommand {

    constructor() {
        super('URL', 'urlde');
    }

    convert(input: string) {
        return decodeURI(input);
    }

}

export class URLStrictEncodeCommand extends EncodingCommand {

    constructor() {
        super('URL (strict)', 'urlstricten');
    }

    convert(input: string) {
        return encodeURIComponent(input);
    }

}

export class URLStrictDecodeCommand extends DecodingCommand {

    constructor() {
        super('URL (strict)', 'urlstrictde');
    }

    convert(input: string) {
        return decodeURIComponent(input);
    }

}

// HTML

export class HTMLEncodeCommand extends EncodingCommand {

    constructor() {
        super('HTML', 'htmlen');
    }

    convert(input: string) {
        return entites.encodeHTML(input);
    }

}

export class HTMLDecodeCommand extends DecodingCommand {

    constructor() {
        super('HTML', 'htmlde');
    }

    convert(input: string) {
        return entites.decodeHTML(input);
    }

}

// XML

export class XMLEncodeCommand extends EncodingCommand {

    constructor() {
        super('XML', 'xmlen');
    }

    convert(input: string) {
        return entites.encodeXML(input);
    }

}

export class XMLDecodeCommand extends DecodingCommand {

    constructor() {
        super('XML', 'xmlde');
    }

    convert(input: string) {
        return entites.decodeXML(input);
    }

}