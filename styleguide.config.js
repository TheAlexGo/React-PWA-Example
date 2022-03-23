const path = require('path');

module.exports = {
  components: 'src/components/?(ui|main)/**/!(index).{tsx, ts}',
  styleguideComponents: {
    Wrapper: path.join(__dirname, './src/styleguidist/Wrapper'),
  },
};
