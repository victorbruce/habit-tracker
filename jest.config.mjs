export default {
  testEnvironment: "jsdom",
  transform: {},
  setupFiles: ["<rootDir>/test-setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
	moduleDirectories: ["node_modules", "src"],
};
