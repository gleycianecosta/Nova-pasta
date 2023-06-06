function numberPrime(number: number): boolean {  
    if (number < 2){
        return false;
    }

    for (let i = 2; i<= Math.sqrt(number); i++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
}

function main(){
    const numbers = Array.from({length: 1000}, (_, i) => i+1)
    const primeNumbers = numbers.filter(numberPrime);
    const sumPrimes = primeNumbers.reduce((accumulator, current) => accumulator + current, 0 );
    
    console.log("Prime numbers: ", primeNumbers);
    console.log("Sum of primes: ", sumPrimes)
    
    return sumPrimes;
}
main();