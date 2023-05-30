import Express from "express";
const app = Express()
const port = 8800

app.listen(port, () => {
    console.log(`Server Running at Port : ${port}`)
})