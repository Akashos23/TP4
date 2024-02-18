import fp from 'fastify-plugin'
import {readFileSync} from 'fs'
import path from "path";
import {fileURLToPath} from "url";
import fastifyJwt from "@fastify/jwt";

export default fp(async function (app, opts) {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    app.register(fastifyJwt, {
        sign: {
            algorithm: 'ES256',
            issuer: 'info.iutparis.fr'
        },
        secret: {
            allowHTTP1 : true,
            private : readFileSync(path.join(__dirname,'..','.ssl', 'private_key.pem')),
            public: readFileSync(path.join(__dirname,'..', '.ssl', 'public_key.pem')),
        },
    })

})