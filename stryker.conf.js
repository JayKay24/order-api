module.exports = function(config) {
  config.set({
    mutator: "typescript",
    packageManager: "yarn",
    reporters: ["html", "progress", "dashboard"],
    testRunner: "jest",
    transpilers: ["typescript"],
    coverageAnalysis: "off",
    jest: {
      config: require('./jest.config')
    },
    tsconfigFile: "tsconfig.json",
    mutate: ["src/**/*.ts"]
  });
};
