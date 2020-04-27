"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@akaiv/core");
const hash_command_1 = require("./hash-command");
const encode_command_1 = require("./encode-command");
class HashModule extends core_1.BotModule {
    constructor({}) {
        super();
        let cm = this.CommandManager;
        cm.addCommand(new hash_command_1.MD4Command());
        cm.addCommand(new hash_command_1.MD5Command());
        cm.addCommand(new hash_command_1.SHA1Command());
        cm.addCommand(new hash_command_1.SHA224Command());
        cm.addCommand(new hash_command_1.SHA256Command());
        cm.addCommand(new hash_command_1.SHA384Command());
        cm.addCommand(new hash_command_1.SHA512Command());
        cm.addCommand(new hash_command_1.SHA3224Command());
        cm.addCommand(new hash_command_1.SHA3256Command());
        cm.addCommand(new hash_command_1.SHA3384Command());
        cm.addCommand(new hash_command_1.SHA3512Command());
        cm.addCommand(new hash_command_1.CRC1Command());
        cm.addCommand(new hash_command_1.CRC16Command());
        cm.addCommand(new hash_command_1.CRC16ccittCommand());
        cm.addCommand(new hash_command_1.CRC16kermitCommand());
        cm.addCommand(new hash_command_1.CRC16xmodemCommand());
        cm.addCommand(new hash_command_1.CRC24Command());
        cm.addCommand(new hash_command_1.CRC32Command());
        cm.addCommand(new hash_command_1.CRC81wireCommand());
        cm.addCommand(new hash_command_1.Keccak224Command());
        cm.addCommand(new hash_command_1.Keccak256Command());
        cm.addCommand(new hash_command_1.Keccak384Command());
        cm.addCommand(new hash_command_1.Keccak512Command());
        cm.addCommand(new hash_command_1.Shake128Command());
        cm.addCommand(new hash_command_1.Shake256Command());
        cm.addCommand(new encode_command_1.Base64EncodeCommand());
        cm.addCommand(new encode_command_1.Base64DecodeCommand());
        cm.addCommand(new encode_command_1.URLEncodeCommand());
        cm.addCommand(new encode_command_1.URLDecodeCommand());
        cm.addCommand(new encode_command_1.URLStrictEncodeCommand());
        cm.addCommand(new encode_command_1.URLStrictDecodeCommand());
        cm.addCommand(new encode_command_1.HTMLEncodeCommand());
        cm.addCommand(new encode_command_1.HTMLDecodeCommand());
        cm.addCommand(new encode_command_1.XMLEncodeCommand());
        cm.addCommand(new encode_command_1.XMLDecodeCommand());
        cm.addCommand(new encode_command_1.AsciiEncodeCommand());
        cm.addCommand(new encode_command_1.AsciiDecodeCommand());
        cm.addCommand(new encode_command_1.UnicodeEncodeCommand());
        cm.addCommand(new encode_command_1.UnicodeDecodeCommand());
    }
    get Name() {
        return 'Hash';
    }
    get Description() {
        return '해시 및 인코딩 관련 툴을 제공합니다';
    }
    get Namespace() {
        return 'hash';
    }
}
exports.HashModule = HashModule;
//# sourceMappingURL=hash-module.js.map