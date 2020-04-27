"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entites = require("entities");
class EncodingCommand {
    constructor(name, command) {
        this.name = name;
        this.command = command;
    }
    get CommandList() {
        return [this.command];
    }
    get Usage() {
        return `hash/${this.command} <문자열>`;
    }
    get Description() {
        return `주어진 문자열을 ${this.name} (으)로 인코딩합니다`;
    }
    onCommand(e) {
        if (e.RawArgument.length < 1) {
            e.Channel.sendText(`사용법: ${this.Usage}`);
            return;
        }
        try {
            e.Channel.sendText(`${this.name}\n\n${e.RawArgument}\n\n결과\n${this.convert(e.RawArgument)}`);
        }
        catch (ex) {
            e.Channel.sendText(`해당 문자열을 인코딩 할 수 없습니다. ${ex}`);
        }
    }
}
exports.EncodingCommand = EncodingCommand;
class DecodingCommand {
    constructor(name, command) {
        this.name = name;
        this.command = command;
    }
    get CommandList() {
        return [this.command];
    }
    get Usage() {
        return `hash/${this.command} <문자열>`;
    }
    get Description() {
        return `주어진 문자열을 ${this.name} (으)로 디코딩합니다`;
    }
    onCommand(e) {
        if (e.RawArgument.length < 1) {
            e.Channel.sendText(`사용법: ${this.Usage}`);
            return;
        }
        try {
            e.Channel.sendText(`${this.name}\n\n${e.RawArgument}\n\n결과\n${this.convert(e.RawArgument)}`);
        }
        catch (ex) {
            e.Channel.sendText(`해당 문자열을 디코딩 할 수 없습니다. ${ex}`);
        }
    }
}
exports.DecodingCommand = DecodingCommand;
class Base64EncodeCommand extends EncodingCommand {
    constructor() {
        super('Base64', 'btoa');
    }
    convert(input) {
        return Buffer.from(input).toString('base64');
    }
}
exports.Base64EncodeCommand = Base64EncodeCommand;
class Base64DecodeCommand extends DecodingCommand {
    constructor() {
        super('Base64', 'atob');
    }
    convert(input) {
        return Buffer.from(input, 'base64').toString('binary');
    }
}
exports.Base64DecodeCommand = Base64DecodeCommand;
class URLEncodeCommand extends EncodingCommand {
    constructor() {
        super('URL', 'urlen');
    }
    convert(input) {
        return encodeURI(input);
    }
}
exports.URLEncodeCommand = URLEncodeCommand;
class URLDecodeCommand extends DecodingCommand {
    constructor() {
        super('URL', 'urlde');
    }
    convert(input) {
        return decodeURI(input);
    }
}
exports.URLDecodeCommand = URLDecodeCommand;
class URLStrictEncodeCommand extends EncodingCommand {
    constructor() {
        super('URL (strict)', 'urlstricten');
    }
    convert(input) {
        return encodeURIComponent(input);
    }
}
exports.URLStrictEncodeCommand = URLStrictEncodeCommand;
class URLStrictDecodeCommand extends DecodingCommand {
    constructor() {
        super('URL (strict)', 'urlstrictde');
    }
    convert(input) {
        return decodeURIComponent(input);
    }
}
exports.URLStrictDecodeCommand = URLStrictDecodeCommand;
class HTMLEncodeCommand extends EncodingCommand {
    constructor() {
        super('HTML', 'htmlen');
    }
    convert(input) {
        return entites.encodeHTML(input);
    }
}
exports.HTMLEncodeCommand = HTMLEncodeCommand;
class HTMLDecodeCommand extends DecodingCommand {
    constructor() {
        super('HTML', 'htmlde');
    }
    convert(input) {
        return entites.decodeHTML(input);
    }
}
exports.HTMLDecodeCommand = HTMLDecodeCommand;
class XMLEncodeCommand extends EncodingCommand {
    constructor() {
        super('XML', 'xmlen');
    }
    convert(input) {
        return entites.encodeXML(input);
    }
}
exports.XMLEncodeCommand = XMLEncodeCommand;
class XMLDecodeCommand extends DecodingCommand {
    constructor() {
        super('XML', 'xmlde');
    }
    convert(input) {
        return entites.decodeXML(input);
    }
}
exports.XMLDecodeCommand = XMLDecodeCommand;
class UnicodeEncodeCommand extends EncodingCommand {
    constructor() {
        super('Unicode(2 bytes)', 'unicodeen');
    }
    convert(input) {
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
exports.UnicodeEncodeCommand = UnicodeEncodeCommand;
class UnicodeDecodeCommand extends DecodingCommand {
    constructor() {
        super('Unicode(2 bytes)', 'unicodede');
    }
    convert(input) {
        return entites.decodeXML(input);
    }
}
exports.UnicodeDecodeCommand = UnicodeDecodeCommand;
class AsciiEncodeCommand extends EncodingCommand {
    constructor() {
        super('Ascii(1 byte)', 'asciien');
    }
    convert(input) {
        let len = input.length;
        let count = len / 6;
        if (Math.floor(count) !== count)
            throw new Error('Invalid unicode byte string');
        let list = [];
        for (let i = 0; i < count; i++) {
            let offset = i * 6;
            if (input[offset] !== '\\' && input[offset + 1] !== 'u')
                throw new Error(`Invalid escape character. Decoding error at: ${offset}`);
            let num = Number.parseInt(input[offset + 2] + input[offset + 3] + input[offset + 4] + input[offset + 5]);
            if (Number.isNaN(num))
                throw new Error(`Invalid number. Decoding error at: ${offset}`);
            list.push(num);
        }
        return String.fromCharCode.apply(null, list);
    }
}
exports.AsciiEncodeCommand = AsciiEncodeCommand;
class AsciiDecodeCommand extends DecodingCommand {
    constructor() {
        super('Ascii(1 byte)', 'asciide');
    }
    convert(input) {
        let len = input.length;
        let count = len / 4;
        if (Math.floor(count) !== count)
            throw new Error('Invalid byte string');
        let list = [];
        for (let i = 0; i < count; i++) {
            let offset = i * 4;
            if (input[offset] !== '\\' && input[offset + 1] !== 'x')
                throw new Error(`Invalid escape character. Decoding error at: ${offset}`);
            let num = Number.parseInt(input[offset + 2] + input[offset + 3]);
            if (Number.isNaN(num))
                throw new Error(`Invalid number. Decoding error at: ${offset}`);
            list.push(num);
        }
        return String.fromCharCode.apply(null, list);
    }
}
exports.AsciiDecodeCommand = AsciiDecodeCommand;
//# sourceMappingURL=encode-command.js.map