import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js"
import { handleGet, handlePost } from "./handlers/routeHandlers.js"

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    if (req.url === '/api') {
        if (req.method === 'GET') {
            return await handleGet(res)
        }
        else if (req.method === 'POST') {
            handlePost(req, res)
        }
    }
    else if (!req.url.startsWith('/api')) {
        return await serveStatic(req, res, __dirname)
    }
})

server.listen(8000, () => {
    console.log(`Server running on port 8000`)
})