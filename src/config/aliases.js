const aliases = (prefix = `src`) => ({
    '@components': `${prefix}/components/ui`,
    '@pages': `${prefix}/components/pages`,
    '@config': `${prefix}/config`,
    '@hooks': `${prefix}/hooks`,
    '@assets': `${prefix}/assets`,
    '@utils': `${prefix}/utils`,
    '@services': `${prefix}/services`,
    '@types': `${prefix}/types`,
    '@store': `${prefix}/store`,
    '@languages': `${prefix}/languages`,
    'bem-cn-custom': `${prefix}/utils/bemCnCustom`
});

module.exports = aliases;
