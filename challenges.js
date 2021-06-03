const challenges = {
    sum(num1, num2){
        return num1 + num2;
    },
    countDownByEight(n){
        let str = "";
        for(var i=n;i>=0;i-=8){
            str += `${i} `;
        }
        return str;
    }
}
module.exports = challenges;