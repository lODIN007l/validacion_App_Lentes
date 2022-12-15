// {
//   "setupFiles": [
//       "raf/polyfill",
//       "<rootDir>/test/setup.js"
//   ],
//   "snapshotSerializers": [
//       "enzyme-to-json/serializer"
//   ]
  
// }
module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFiles: ['<rootDir>/test/setup.js', 'raf/polyfill'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};