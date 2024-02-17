export async function getAuthenticate(req, res) {
    try {
        // A compléter

    } catch (err) {
        res.code(401).send({...err, message: "Vous ne passerez pas !"})
    }
}