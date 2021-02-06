const crypto = require('crypto');

const algorithm = 'aes-256-ctr';

const iv = crypto.randomBytes(16);

const encrypt = (text,key) => {
    const secretKey = key;
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash,key) => {
    const secretKey = key;
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};

exports.decrypt = decrypt;
exports.encrypt = encrypt;