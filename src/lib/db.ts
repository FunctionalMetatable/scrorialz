import monk from "monk"

const db = monk(process.env.VITE_DB_URL || "localhost/scrorialz")

const sessions = db.get("sessions")
const users = db.get("users")
const reactions = db.get("reactions")
const tutorials = db.get("tutorials")
const comments = db.get("comments")
const verify = db.get("verify")


export {
    sessions,
    reactions,
    users,
    tutorials,
    comments,
    verify
}