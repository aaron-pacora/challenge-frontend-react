const { NormalModuleReplacementPlugin } = require('webpack');
const withFonts = require('nextjs-fonts');

module.exports = withFonts({
   webpack: (config) => {
      config.plugins.push(new NormalModuleReplacementPlugin(
         /^(\.\.\/){3,}other\//,
         resource => resource.request = resource.request.slice(6)
      ));
      return config;
   }
})
