export async function getAuthenticate(req, res) {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        const decode = await req.jwtVerify(token)


    } catch (err) {
        res.code(401).send({...err, message: "Vous ne passerez pas !"})
    }
}