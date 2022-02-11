const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()

const port = 10000

// Public Static Path
const staticPath = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

// template engine = hbs, for our express app.
app.set('view engine', 'hbs')

// Now, changing our path from views to templates.
app.set('views', template_path)

// Now, we have acquire partials in our express app, so we have to specify it's path also.
hbs.registerPartials(partials_path)

// This will make our all static files present in public floder in use with our express app.
app.use(express.static(staticPath))

// Routing of multiple pages.
app.get("/", (req,res) => {
    res.render("index");
})

app.get("/about", (req,res) => {
    res.render("about");
})

app.get("/weather", (req,res) => {
    res.render("weather");
})

// * is used as universal operator which is used if none of the above page not found then srver will hit this response.
app.get("*", (req,res) => {
    res.render("404error", {
        errorMessage : 'Page Not Found'
    });
})

app.listen(port, () => {
    console.log(`Welcome to the port ${port}`);
})