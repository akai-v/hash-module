"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const crc = require("crc");
const entites = require("entities");
const jsSha = require("js-sha3");
class HashCommand {
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
        return `주어진 문자열의 해시를 ${this.name} 알고리즘으로 생성합니다`;
    }
    onCommand(e) {
        if (e.RawArgument.length < 1) {
            e.Channel.sendText(`사용법: ${this.Usage}`);
            return;
        }
        try {
            e.Channel.sendText(`${this.name}\n\n${e.RawArgument}\n\n결과\n${this.calcHash(e.RawArgument)}`);
        }
        catch (ex) {
            e.Channel.sendText(`해당 문자열의 해시를 생성 할 수 없습니다.`);
        }
    }
}
exports.HashCommand = HashCommand;
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
            e.Channel.sendText(`해당 문자열을 인코딩 할 수 없습니다.`);
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
        catch (e) {
            e.Channel.sendText(`해당 문자열을 디코딩 할 수 없습니다.`);
        }
    }
}
exports.DecodingCommand = DecodingCommand;
class MD5Command extends HashCommand {
    constructor() {
        super('MD5', 'md5');
    }
    calcHash(input) {
        let hash = crypto.createHash('md5');
        hash.update(input);
        return hash.digest('hex');
    }
}
exports.MD5Command = MD5Command;
class MD4Command extends HashCommand {
    constructor() {
        super('MD4', 'md4');
    }
    calcHash(input) {
        let hash = crypto.createHash('md4');
        hash.update(input);
        return hash.digest('hex');
    }
}
exports.MD4Command = MD4Command;
class MDC2Command extends HashCommand {
    constructor() {
        super('MDC2', 'mdc2');
    }
    calcHash(input) {
        let hash = crypto.createHash('mdc2');
        hash.update(input);
        return hash.digest('hex');
    }
}
exports.MDC2Command = MDC2Command;
class SHACommand extends HashCommand {
    constructor() {
        super('SHA', 'sha');
    }
    calcHash(input) {
        let hash = crypto.createHash('sha');
        hash.update(input);
        return hash.digest('hex');
    }
}
exports.SHACommand = SHACommand;
class SHA1Command extends HashCommand {
    constructor() {
        super('SHA1', 'sha1');
    }
    calcHash(input) {
        let hash = crypto.createHash('sha1');
        hash.update(input);
        return hash.digest('hex');
    }
}
exports.SHA1Command = SHA1Command;
class SHA224Command extends HashCommand {
    constructor() {
        super('SHA224', 'sha224');
    }
    calcHash(input) {
        let hash = crypto.createHash('sha224');
        hash.update(input);
        return hash.digest('hex');
    }
}
exports.SHA224Command = SHA224Command;
class SHA256Command extends HashCommand {
    constructor() {
        super('SHA256', 'sha256');
    }
    calcHash(input) {
        let hash = crypto.createHash('sha256');
        hash.update(input);
        return hash.digest('hex');
    }
}
exports.SHA256Command = SHA256Command;
class SHA384Command extends HashCommand {
    constructor() {
        super('SHA384', 'sha384');
    }
    calcHash(input) {
        let hash = crypto.createHash('sha384');
        hash.update(input);
        return hash.digest('hex');
    }
}
exports.SHA384Command = SHA384Command;
class SHA512Command extends HashCommand {
    constructor() {
        super('SHA512', 'sha512');
    }
    calcHash(input) {
        let hash = crypto.createHash('sha512');
        hash.update(input);
        return hash.digest('hex');
    }
}
exports.SHA512Command = SHA512Command;
class SHA3224Command extends HashCommand {
    constructor() {
        super('SHA3-224', 'sha3-224');
    }
    calcHash(input) {
        return jsSha.sha3_224(input);
    }
}
exports.SHA3224Command = SHA3224Command;
class SHA3256Command extends HashCommand {
    constructor() {
        super('SHA3-256', 'sha3-256');
    }
    calcHash(input) {
        return jsSha.sha3_256(input);
    }
}
exports.SHA3256Command = SHA3256Command;
class SHA3384Command extends HashCommand {
    constructor() {
        super('SHA3-384', 'sha3-384');
    }
    calcHash(input) {
        return jsSha.sha3_384(input);
    }
}
exports.SHA3384Command = SHA3384Command;
class SHA3512Command extends HashCommand {
    constructor() {
        super('SHA3-512', 'sha3-512');
    }
    calcHash(input) {
        return jsSha.sha3_512(input);
    }
}
exports.SHA3512Command = SHA3512Command;
class Keccak224Command extends HashCommand {
    constructor() {
        super('keccak-224', 'keccak-224');
    }
    calcHash(input) {
        return jsSha.keccak224(input);
    }
}
exports.Keccak224Command = Keccak224Command;
class Keccak256Command extends HashCommand {
    constructor() {
        super('keccak-256', 'keccak-256');
    }
    calcHash(input) {
        return jsSha.keccak256(input);
    }
}
exports.Keccak256Command = Keccak256Command;
class Keccak384Command extends HashCommand {
    constructor() {
        super('keccak-384', 'keccak-384');
    }
    calcHash(input) {
        return jsSha.keccak384(input);
    }
}
exports.Keccak384Command = Keccak384Command;
class Keccak512Command extends HashCommand {
    constructor() {
        super('keccak-512', 'keccak-512');
    }
    calcHash(input) {
        return jsSha.keccak512(input);
    }
}
exports.Keccak512Command = Keccak512Command;
class Shake128Command extends HashCommand {
    constructor() {
        super('Shake128', 'shake-128');
    }
    calcHash(input) {
        return jsSha.shake128(input, 128);
    }
}
exports.Shake128Command = Shake128Command;
class Shake256Command extends HashCommand {
    constructor() {
        super('Shake256', 'shake-256');
    }
    calcHash(input) {
        return jsSha.shake256(input, 256);
    }
}
exports.Shake256Command = Shake256Command;
class CRC1Command extends HashCommand {
    constructor() {
        super('CRC1', 'crc1');
    }
    calcHash(input) {
        return crc.crc1(input).toString(16);
    }
}
exports.CRC1Command = CRC1Command;
class CRC16Command extends HashCommand {
    constructor() {
        super('CRC16', 'crc16');
    }
    calcHash(input) {
        return crc.crc16(input).toString(16);
    }
}
exports.CRC16Command = CRC16Command;
class CRC24Command extends HashCommand {
    constructor() {
        super('CRC24', 'crc24');
    }
    calcHash(input) {
        return crc.crc24(input).toString(16);
    }
}
exports.CRC24Command = CRC24Command;
class CRC32Command extends HashCommand {
    constructor() {
        super('CRC32', 'crc32');
    }
    calcHash(input) {
        return crc.crc32(input).toString(16);
    }
}
exports.CRC32Command = CRC32Command;
class CRC16ccittCommand extends HashCommand {
    constructor() {
        super('CRC16ccitt', 'crc16ccitt');
    }
    calcHash(input) {
        return crc.crc16ccitt(input).toString(16);
    }
}
exports.CRC16ccittCommand = CRC16ccittCommand;
class CRC16kermitCommand extends HashCommand {
    constructor() {
        super('CRC16kermit', 'crc16kermit');
    }
    calcHash(input) {
        return crc.crc16kermit(input).toString(16);
    }
}
exports.CRC16kermitCommand = CRC16kermitCommand;
class CRC16modbusCommand extends HashCommand {
    constructor() {
        super('CRC16modbus', 'crc16modbus');
    }
    calcHash(input) {
        return crc.crc16modbus(input).toString(16);
    }
}
exports.CRC16modbusCommand = CRC16modbusCommand;
class CRC16xmodemCommand extends HashCommand {
    constructor() {
        super('CRC16xmodem', 'crc16xmodem');
    }
    calcHash(input) {
        return crc.crc16xmodem(input).toString(16);
    }
}
exports.CRC16xmodemCommand = CRC16xmodemCommand;
class CRC81wireCommand extends HashCommand {
    constructor() {
        super('CRC81wire', 'crc81wire');
    }
    calcHash(input) {
        return crc.crc81wire(input).toString(16);
    }
}
exports.CRC81wireCommand = CRC81wireCommand;
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
//# sourceMappingURL=hash-command.js.map