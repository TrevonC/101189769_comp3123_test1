//Name: Trevon Costa
//Student #: 101189769
const lowerCaseWords = async (arrayMix) => {
    try{
        const arrayFilter = arrayMix.filter(a => typeof a === 'string');
        return arrayFilter;
    }catch(e){
        return console.log(e);
    }
}
const arrayMix = ['PIZZA', 10, true, 25, false, 'Wings'];
console.log(lowerCaseWords(arrayMix));