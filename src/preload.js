// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge } = require('electron');

const api = {
    debug: {
        versions: () => {
            return ['chrome', 'node', 'electron']
                .map(t => ({ [t]: process.versions[t] }))
                .reduce((l, r) => Object.assign(l, r), {});
        },
    },
};

contextBridge.exposeInMainWorld('api', api);
