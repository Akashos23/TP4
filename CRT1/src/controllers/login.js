import {createHash} from "node:crypto"
import fastify from "fastify";
const users = []    // Simule BDD pour le stockage des utilisateurs
const role = ['admin', 'utilisateur']

export const addUser = async (req, res) => {
    const {email, password} = req.body

    const hashedPassword = createHash("sha256").update(password).digest().toString("hex")

    let user = users.find((u) => u.email === email && u.password === hashedPassword)
    if (user) {
        res.status(401).send({
            message: "Utilisateur déjà enregistré",
            user
        })
    }
    else{
      let obj = {
          email : email,
          password : hashedPassword,
          type : Math.floor(Math.random() * 2)  === 0 ? "admin" : "utilisateur",
      }
      users.push(obj);
      res.status(200).send("Utilisateur bien enregistré")
    }

    // A compléter
}

export const loginUser = async function (req, res) {
    const {email, password} = req.body
    const hashedPassword = createHash("sha256").update(password).digest().toString("hex")

    let user = users.find((u) => u.email === email && u.password === hashedPassword)
    if(user){
        const jeton = await res.jwtSign({
            email : email,
            role : user.type
        })

        res.status(200).send({jeton})
    }
    else{
        res.status(401).send("Utilisateur non-identifié")
    }
}