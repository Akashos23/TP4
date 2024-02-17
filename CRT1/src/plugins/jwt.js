import fp from 'fastify-plugin'
import fastifyJwt from "@fastify/jwt";
import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from 'url';
export default fp(async function (app, opts) {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    app.register(fastifyJwt, {
        sign: {
            algorithm: 'ES256',
            issuer: 'info.iutparis.fr'
        },
        secret: {
            allowHTTP1 : true,
            private : fs.readFileSync(path.join(__dirname, '..','..','.ssl', 'private_key.pem')),
            public: fs.readFileSync(path.join(__dirname,  '..','..', '.ssl', 'public_key.pem')),
        },
    })

})