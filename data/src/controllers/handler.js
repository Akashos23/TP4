export const getAuthHandler = function (req, rep) {

    // Il faut mettre des trucs ici...

    return rep.send("Il faut mettre des trucs avant")
}

export const getHomeHandler = (req, res) => {
    return res.send({'hello': 'world'})
}