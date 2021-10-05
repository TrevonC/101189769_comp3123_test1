//Name: Trevon Costa
//Student #: 101189769
const resolvedPromise = new Promise((res, rej) => {
    setTimeout(() => {
        let fin = {'message': 'delayed success!'}
        res(fin);
    }, 500)
});

const rejectedPromise = new Promise((res, rej) => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed excepetion!');
        } catch (e) {
            rej(e);
        }
    }, 500)
})

resolvedPromise.then((indicateSuccess) => {
    console.log(indicateSuccess)});

rejectedPromise.catch(err => {
    console.error(err)});