const aliases = (prefix = `src`) => ({
    '@components': `${prefix}/components/ui`,
    '@pages': `${prefix}/components/pages`,
    '@config': `${prefix}/config`,
    '@hooks': `${prefix}/hooks`,
    '@assets': `${prefix}/assets`,
    '@images': `${prefix}/assets/images`,
    '@fonts': `${prefix}/assets/fonts`,
    '@utils': `${prefix}/utils`,
    '@services': `${prefix}/services`,
    '@types': `${prefix}/types`,
    '@store': `${prefix}/store`,
    '@languages': `${prefix}/languages`,
    '@styles': `${prefix}/styles`,
    'bem-cn-custom': `${prefix}/utils/bemCnCustom`
});

module.exports = aliases;
