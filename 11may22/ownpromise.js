
const fakeRequest = (url) => {
    return new Promise ((resolve, reject) =>{
        const rand =  math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('your fake data here');  
            }
            reject('Request error');
        },1000)   
    })
}

fakeRequest('dogs/1')
.then(() => {
    console.log("done with request");
    console.log('data is ;', data);
}
)
.catch((err) => {
console.log('oH!!! no error');
})