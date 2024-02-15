// fetch 

fetch('luigi.json').then((Response) => {
    console.log('resolved', Response);
    return Response.json();
}).then(data => {
    console.log(data)
}).catch((err) => {
    console.log('rejected', err);
});