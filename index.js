const express = require('express')
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))
let movies = [{
    id :'1',
    title :'inception',
    director : 'Christopher Nolan',
    release_date : "2010-07-16"
},
{
    id :'2',
    title :'The offer',
    director : 'Michael Tolkin',
    release_date : "2010-07-16"
},
{
    id :'3',
    title :'Once Upon a Time...',
    director : 'Quentin Tarantino',
    release_date : "2019-07-16"
},
{
    id :'4',
    title :'Rogue One: A Star Wars Story',
    director : 'Gareth Edwards',
    release_date : "2016-07-16"
}
];

app.get('/movie',(req,res)=>{
    res.json(movies);
});
app.post('/movie',(req,res)=>{
    const movie = req.body;



    console.log(movie);
    movies.push(movie)
    ;res.send("Movie is added to the list")
})
app.get("/movie/:id",(req,res)=>{
    const id = req.params.id;
    for(let movie of movies){
        if(movie.id === id){
            res.json(movie);
            return
        }
    }
    res.sendStatus(404).send('Movie not found');
})

app.delete("/movie/:id",(req,res)=>{
    const id = req.params.id

    movies = movies.filter(movie =>{
        if(movie.id !== id){
            return true
        }
        return false
    })
    res.send("Movie is deleted")
})
app.listen(port,()=>{
    console.log('server listening to %s',port);
});