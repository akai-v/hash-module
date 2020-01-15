import { BotModule } from "@akaiv/core";
import { MD4Command, MD5Command, SHA1Command, SHA224Command, SHA256Command, SHA3384Command, SHA384Command, SHA512Command, SHA3224Command, SHA3256Command, SHA3512Command, Shake128Command, Shake256Command, Base64EncodeCommand, Base64DecodeCommand, XMLEncodeCommand, HTMLEncodeCommand, HTMLDecodeCommand, XMLDecodeCommand, CRC1Command, CRC16Command, CRC16ccittCommand, CRC16modbusCommand, CRC16kermitCommand, CRC16xmodemCommand, CRC24Command, CRC32Command, CRC81wireCommand, Keccak224Command, Keccak256Command, Keccak384Command, Keccak512Command, URLEncodeCommand, URLDecodeCommand } from "./hash-command";

/*
 * Created on Sat Oct 26 2019
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

export class HashModule extends BotModule {

    constructor({  }: {
        
    }) {
        super();

        let cm = this.CommandManager;

        cm.addCommand(new MD4Command());
        cm.addCommand(new MD5Command());

        cm.addCommand(new SHA1Command());
        cm.addCommand(new SHA224Command());
        cm.addCommand(new SHA256Command());
        cm.addCommand(new SHA384Command());
        cm.addCommand(new SHA512Command());

        cm.addCommand(new SHA3224Command());
        cm.addCommand(new SHA3256Command());
        cm.addCommand(new SHA3384Command());
        cm.addCommand(new SHA3512Command());

        cm.addCommand(new CRC1Command());
        cm.addCommand(new CRC16Command());
        cm.addCommand(new CRC16ccittCommand());
        cm.addCommand(new CRC16kermitCommand());
        cm.addCommand(new CRC16xmodemCommand());
        cm.addCommand(new CRC24Command());
        cm.addCommand(new CRC32Command());
        cm.addCommand(new CRC81wireCommand());

        cm.addCommand(new Keccak224Command());
        cm.addCommand(new Keccak256Command());
        cm.addCommand(new Keccak384Command());
        cm.addCommand(new Keccak512Command());
        
        cm.addCommand(new Shake128Command());
        cm.addCommand(new Shake256Command());
        
        cm.addCommand(new Base64EncodeCommand());
        cm.addCommand(new Base64DecodeCommand());

        cm.addCommand(new URLEncodeCommand());
        cm.addCommand(new URLDecodeCommand());

        cm.addCommand(new HTMLEncodeCommand());
        cm.addCommand(new HTMLDecodeCommand());

        cm.addCommand(new XMLEncodeCommand());
        cm.addCommand(new XMLDecodeCommand());
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