const { MongoClient, ObjectID } = require('mongodb');


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'mongodb-learn';
let app = null;

const init = (_app) => {
    app = _app;
}

const getAll = (name,type) => {
    if(app) {
        app.get("/" + name, (req, res) => {
            MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {

                if (error) {
                    res.json({code: 500, result: "Conexiunea la baza de date a esuat."});
                }
                const db = client.db(databaseName);


                db.collection('users').find({
                    type
                }).toArray().then((result) => {
                    res.json({code: 200, result});
                }).catch((error) => {
                    res.json({code: 404, result: "Nu am gasit nici un student."});
                });


                client.close();
            });
        });
    }else{
        return console.log('Eroare de initializare.')
    }
}


module.exports = {
    getAll,
    init,
}