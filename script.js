const http = require('http')
const { soma } = require('./teste')

const PORT = 8000

//criar o bendito do servidor
const server = http.createServer((req, res) => {
    let valores = (req.url.replace('/', '').replace('?', '')).split('&')
    "/?a=10&b=20"
    'a=10&b=20'
    ['a=10', 'b=20']
    for (item in valores){
        let chaveValor = valores[item].split('=')
        parametros[chaveValor[0]] = Number (chaveValor [1])
        
    }

    let resultado = 0
    res.end(`o valor final é ${resultado}`)
  

})

//fazer ele ouvir a bendita da porta 8000
server.listen(PORT, () => {
    console.log(`o servidor foi inicializado na porta ${PORT}`)
})