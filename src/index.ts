import express from 'express'
import { Prisma, PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.get("/posts", async (req, res) => {
    const posts = await prisma.chatMessage.findMany()
    return res.json(posts)

})

const PORT = 4231

const server = app.listen(PORT, () => {
    console.log(`server start at PORT: ${PORT}`)
})