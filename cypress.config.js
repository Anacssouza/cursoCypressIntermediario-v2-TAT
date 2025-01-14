const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true, // o token de acesso (o qual é um dados sensível) está protegido ao rodar o teste
      requestMode: true,
    },
    experimentalRunAllSpecs: true, //pra poder rodar todos os testes de uma vez só no modo interativo
  },
  fixturesFolder: false, // pra não criar a pasta fixtures quando rodar pq não vai ser utilizada no curso
  video: false,          // pra não criar videos quando realizar os testes
})
