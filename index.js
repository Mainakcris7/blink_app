const express = require('express')
const path = require('path')
const { v4: createId } = require('uuid')
const methodOverride = require('method-override')

const app = express()
app.listen(8080, () => {
    console.log("Listening at port 8080")
})

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

let posts = [
    {
        id: createId(),
        username: "Mainak Mukherjee",
        caption: "Nice bird 🐥!",
        imgUrl: "https://img.freepik.com/premium-photo/colorful-bird-with-multicolored-head-blue-head-sits-branch_455711-4.jpg"
    },
    {
        id: createId(),
        username: "Sinchana Chatterjee",
        caption: "Good morning ☀️😎!",
        imgUrl: "https://i.pinimg.com/originals/6b/d7/bf/6bd7bf0ea6a729554477cc284214706d.png"
    },
]

app.get("/", (req, res) => {
    res.redirect("/posts")
})

app.get("/posts", (req, res) => {
    res.render("posts.ejs", { posts })
})
app.get("/posts/new", (req, res) => {
    res.render("new_post.ejs")
})
app.get("/posts/edit/:id", (req, res) => {
    const { id } = req.params;
    let post = posts.find((el) => el.id === id);
    res.render("edit_post.ejs", { post })
})
app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    posts = posts.filter((el) => el.id !== id);
    res.redirect("/posts")

})
app.post("/posts", (req, res) => {
    const { username, caption, imgUrl } = req.body;
    new_post = {
        id: createId(),
        username,
        caption,
        imgUrl
    }
    posts.push(new_post)
    res.redirect("/posts")
})
app.patch("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { username, caption, imgUrl } = req.body;
    let edited_post = posts.find(el => el.id == id);
    edited_post.username = username;
    edited_post.caption = caption;
    edited_post.imgUrl = imgUrl;
    res.redirect("/posts");
})