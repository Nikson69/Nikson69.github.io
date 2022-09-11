const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'public/styles')],
    },
    images: {
        unoptimized: true
    },
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
        }
    },
}