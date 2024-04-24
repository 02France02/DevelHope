function contaValor(num1, num2, num3) {
        if(num1 < num2 && num1 < num3) {
            return num1 % 2 == 0;
        }
        else if(num2 < num1 && num2 < num3) {
            return num1 % 2 == 0;
        }
        else if (num3 < num1 && num1 < num2 ) {
            return num1 % 2 == 0;
        }


}

console.log(contaValor(1, 10, 33))
console.log(contaValor(19, 1580, 43))
console.log(contaValor(-13, 18, 3))


//ALTRA SOLUZIONE

function contaValor(n1, n2, n3) {        
    let minNum = n1;                 //dihiariamo come se il n1 fosse il minimo, con una variabile.
    if(n2 < minNum) {               //se n2 è minore di minNum(il numero 1), allora gli affidiamo un altro valore, quello di minNum
        minNum = n2; 
    }
    if(n3 < minNum)                 //se n3 è minore di minNum, allora n3 prenderà valore di minNum.
        minNum = n3;
    return minNum % 2 == 0;         //in fine, si ritorna la funzione , sta a significare che se da resto, allora è diverso da 0, quindi FALSE
}                                   //perchè il risultato sarà dispari e viceversa

console.log(contaValor(1, 3, 66))