let app;

const init = (_app,publicDir) => {
    app = _app;

    app.set('view engine','hbs');
    app.use(publicDir);
}

const createFrontPage = (title)=>{
    if(app) {
        if(title.length > 0) {
            app.get('', (req, res) => {
                res.render('index', {
                    title
                });
            })
        }else{
            return console.log("Prima pagina are nevoie de un titlu.");
        }
    }
    else{
        return console.log("Eroare de initializare.");
    }
}

module.exports = {
    init,
    createFrontPage
}


