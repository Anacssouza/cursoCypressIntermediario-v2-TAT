const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
  },
  fixturesFolder: false, // pra não criar a pasta fixtures quando rodar pq não vai ser utilizada no curso
  video: false,          // pra não criar videos quando realizar os testes
})
