const http = require('http')
const PORT = 8000
const {soma} = require('./teste')
const server = http.createServer((req, res) => {
    const urlCapturada = url.parse(req.url, true)
    console.log(req.url
        .replace('/', '')
    .replace('?', '')
    .split('&'))
    let parametros = {}
    let valores = req.url
    for(item in valores){
        let chaveValor = valores[item].split('=')
        parametros[chaveValor[0]] = Number(chaveValor[1])
    }
    console.log(parametros)
    let resultado = 0
    resultado = soma(parametros.a, parametros.b)
    res.end(`O valor final é ${resultado}`)
})

server.listen(PORT, () => {
    console.log(`ta rodando pai, na porta ${PORT}`)
})