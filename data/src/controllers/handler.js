import fastify from 'fastify'

export const getAuthHandler = async function (req, rep) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    const decode = await req.jwtVerify(token)

    if(decode.role === "admin"){
        rep.send("Full Access")
    }
    if(decode.role === "utilisateur"){
        rep.send("Accès limité")
    }
}

export const getHomeHandler = (req, res) => {
    return res.send({'hello': 'world'})
}