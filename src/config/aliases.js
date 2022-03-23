const aliases = (prefix = `src`) => ({
    '@components': `${prefix}/components/ui`,
    '@pages': `${prefix}/components/pages`,
    '@config': `${prefix}/config`,
    '@hooks': `${prefix}/hooks`,
    '@assets': `${prefix}/assets`,
    '@utils': `${prefix}/utils`,
    '@types': `${prefix}/types`
});

module.exports = aliases;
