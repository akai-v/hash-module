import * as entites from "entities";
import { CommandInfo, BotCommandEvent } from "@akaiv/core";

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
            e.Channel.sendText(`해당 문자열을 인코딩 할 수 없습니다. ${ex}`);
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
        } catch (ex) {
            e.Channel.sendText(`해당 문자열을 디코딩 할 수 없습니다. ${ex}`);
        }
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

// unicode

export class UnicodeEncodeCommand extends EncodingCommand {

    constructor() {
        super('Unicode(2 bytes)', 'unicodeen');
    }

    convert(input: string) {
        let len = input.length;

        let code = 0;

        let str = '';
        for (let i = 0; i < len; i++) {
            code = input.charCodeAt(i);

            if (code > 0xffff) {
                throw new Error(`Encoding Error at ${i}. ${code} > 0xffff`);
            }

            str += `\\u${code.toString(16).padStart(4, '0')}`;
        }

        return str;
    }

}

export class UnicodeDecodeCommand extends DecodingCommand {

    constructor() {
        super('Unicode(2 bytes)', 'unicodede');
    }

    convert(input: string) {
        return entites.decodeXML(input);
    }

}

// Ascii

export class AsciiEncodeCommand extends EncodingCommand {

    constructor() {
        super('Ascii(1 byte)', 'asciien');
    }

    convert(input: string) {
        let len = input.length;

        let count = len / 6;

        if (Math.floor(count) !== count) throw new Error('Invalid unicode byte string');
        
        let list = [];

        for (let i = 0; i < count; i++) {
            let offset = i * 6;

            if (input[offset] !== '\\' && input[offset + 1] !== 'u') throw new Error(`Invalid escape character. Decoding error at: ${offset}`);

            let num = Number.parseInt(input[offset + 2] + input[offset + 3] + input[offset + 4] + input[offset + 5]);

            if (Number.isNaN(num)) throw new Error(`Invalid number. Decoding error at: ${offset}`);

            list.push(num);
        }

        return String.fromCharCode.apply(null, list);
    }

}

export class AsciiDecodeCommand extends DecodingCommand {

    constructor() {
        super('Ascii(1 byte)', 'asciide');
    }

    convert(input: string) {
        let len = input.length;

        let count = len / 4;

        if (Math.floor(count) !== count) throw new Error('Invalid byte string');
        
        let list = [];

        for (let i = 0; i < count; i++) {
            let offset = i * 4;

            if (input[offset] !== '\\' && input[offset + 1] !== 'x') throw new Error(`Invalid escape character. Decoding error at: ${offset}`);

            let num = Number.parseInt(input[offset + 2] + input[offset + 3]);

            if (Number.isNaN(num)) throw new Error(`Invalid number. Decoding error at: ${offset}`);

            list.push(num);
        }

        return String.fromCharCode.apply(null, list);
    }

}