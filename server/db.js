import { PrismaClient } from './prisma/@generated'

const social = new PrismaClient()

module.exports = { social }