const express = require("express")
const path = require("path")
const port = 3333

/* criar um caminho inicial: usando o diretório e concatenar com a pasta public*/
let initialPath = path.join(__dirname, "public")

/* app irá ter uma função express rodando */
let app = express()

/*express.static(servidor estatico) para pasta public que está na varivel initialPath*/
app.use(express.static(initialPath)) 

/* quando o app for chamado e não tiver nada após a barra, manda uma resposta que é a junção do initialPath e do index.html */
app.get("/", (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"))
})

/* informar a porta de entrada*/
app.listen(port, () => {
    console.log(`Server start up on port ${port}!`)
})