function checkYuGiOh(){
    let checkYuGiOh = (param) => {
        let data = +param
        console.log(typeof data)
        if(typeof data == 'NaN'){
            return `Invalid parameter ${param}`;
        }

        let arr = [];

        for(let i = 1; i <= param; i++){
            if(i % 2 == 0){
                if(i%3==0) arr.push('yu-gi')
                else if(i%5==0) arr.push('yu-oh')
                else arr.push('yu')
            }
            else if(i % 3 == 0) {
                if(i % 5 == 0) arr.push('gi-oh')
                arr.push('gi');
            }
            else if(i % 5 == 0) {
                arr.push('oh')
            }
            else arr.push(i);
        }
        return arr;
    }
}
