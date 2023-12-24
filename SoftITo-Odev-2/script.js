/*1.Soru */
function numberList(X, N) {
    let output = '';
    for (let i = X; i <= N; i++) {
        output += `<div class="number">${i}</div>`; 
    }
    return output;
}

document.getElementById('generateButton').addEventListener('click', function() {
    let X = parseInt(prompt("Başlangıç değerini girin (X):"), 10);
    let N = parseInt(prompt("Bitiş değerini girin (N):"), 10);

    if (!isNaN(X) && !isNaN(N)) {
        document.getElementById('numberList').innerHTML = numberList(X, N);
    } else {
        alert("Geçerli sayılar girin.");
    }
});

/*2.Soru */

function fibonacciSeries(N) {
    if (N <= 0) return [];
    if (N === 1) return [1];

    let fibonacci = [1, 1];
    for (let i = 2; i < N; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}

document.getElementById('generateFibonacciButton').addEventListener('click', function() {
    let N = parseInt(prompt("Fibonacci dizisi için bir sayı girin:"), 10);

    if (!isNaN(N)) {
        let fibonacciNumbers = fibonacciSeries(N);
        let fibonacciHtml = fibonacciNumbers.map(number => `<div class="number">${number}</div>`).join('');
        document.getElementById('fibonacciList').innerHTML = fibonacciHtml;
    } else {
        alert("Geçerli bir sayı girilmedi.");
    }
});


/* 3.Soru */

function findDivisors(number) {
    let divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

document.getElementById('generateDivisorsButton').addEventListener('click', function() {
    let number = parseInt(prompt("Tam bölenlerini bulmak için bir sayı girin:"), 10);

    if (!isNaN(number)) {
        let divisors = findDivisors(number);
        let divisorsHtml = divisors.map(divisor => `<div class="number">${divisor}</div>`).join('');
        document.getElementById('divisorsList').innerHTML = divisorsHtml;
    } else {
        alert("Geçerli bir sayı girilmedi.");
    }
});


/*4.Soru */

function findMiddleNumber(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    numbers.sort((a, b) => a - b);
    return numbers[1]; 
}

document.getElementById('findMiddleNumber').addEventListener('click', function() {
    let num1 = parseInt(document.getElementById('number1').value, 10);
    let num2 = parseInt(document.getElementById('number2').value, 10);
    let num3 = parseInt(document.getElementById('number3').value, 10);

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        let middleNumber = findMiddleNumber(num1, num2, num3);
        document.getElementById('result').innerText = "Ortadaki Sayı: " + middleNumber;
    } else {
        document.getElementById('result').innerText = "Lütfen geçerli sayılar giriniz.";
    }
});

/*5.soru */

function kalanliBolme(A, B) {
    if (B === 0) {
        return 'Bölüm sıfır olamaz';
    }

    let bolum = 0;
    let kalan = A;

    while (kalan >= B) {
        kalan -= B;
        bolum++;
    }

    return `Bölüm: ${bolum}, Kalan: ${kalan}`;
}

document.getElementById('calculateDivision').addEventListener('click', function() {
    let A = parseInt(document.getElementById('numberA').value, 10);
    let B = parseInt(document.getElementById('numberB').value, 10);

    if (!isNaN(A) && !isNaN(B)) {
        document.getElementById('sonuc').innerText = kalanliBolme(A, B);
    } else {
        document.getElementById('sonuc').innerText = "Lütfen geçerli sayılar giriniz.";
    }
});

/*6.Soru */

function carpmaIslemi(a, b) {
    let sonuc = 0;
    const pozitifB = Math.abs(b);

    for (let i = 0; i < pozitifB; i++) {
        sonuc += a;
    }

    if (b < 0) {
        sonuc = -sonuc;
    }

    return sonuc;
}

document.getElementById('performMultiplication').addEventListener('click', function() {
    let a = parseInt(document.getElementById('multiplicand').value, 10);
    let b = parseInt(document.getElementById('multiplier').value, 10);

    if (!isNaN(a) && !isNaN(b)) {
        document.getElementById('multiplicationResult').innerText = "Çarpım Sonucu: " + carpmaIslemi(a, b);
    } else {
        document.getElementById('multiplicationResult').innerText = "Lütfen geçerli sayılar giriniz.";
    }
});


/*7.Soru */

document.getElementById('calculateAverage').addEventListener('click', function() {
    let total = 0;
    let count = 0;

    while (true) {
        let input = prompt("Sayı girin (Çıkmak için 0 girin):");

        if (input === null) {
            break;
        }

        let number = parseInt(input, 10);
        
        if (number === 0) {
            break;
        }

        if (!isNaN(number)) {
            total += number;
            count++;
        } else {
            alert("Lütfen geçerli bir sayı girin.");
        }
    }

    let average = count > 0 ? (total / count) : "Hesaplanamadı";
    document.getElementById('averageResult').innerText = "Girilen Sayıların Ortalaması: " + average;
});


/*8.Soru */

document.getElementById('sumNumbers').addEventListener('click', function() {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < 20; i++) {
        let number = parseInt(prompt((i + 1) + ". Sayıyı girin:"), 10);

        if (!isNaN(number)) {
            if (number % 2 === 0) {
                sumEven += number;
            } else {
                sumOdd += number;
            }
        } else {
            alert("Geçerli bir sayı girin.");
            i--; // Geçersiz girişte sayacı azalt
        }
    }

    document.getElementById('sumEven').innerText = "Çift Sayıların Toplamı: " + sumEven;
    document.getElementById('sumOdd').innerText = "Tek Sayıların Toplamı: " + sumOdd;
});
    
/*9.Soru */

function obebBul(a, b) {
    let min = Math.min(a, b);
    let obeb = 1;

    for (let i = 2; i <= min; i++) {
        if (a % i === 0 && b % i === 0) {
            obeb = i;
        }
    }

    return obeb;
}

document.getElementById('calculateGCD').addEventListener('click', function() {
    let number1 = parseInt(document.getElementById('number1').value, 10);
    let number2 = parseInt(document.getElementById('number2').value, 10);

    if (!isNaN(number1) && !isNaN(number2) && number1 > 0 && number2 > 0) {
        let gcd = obebBul(number1, number2);
        document.getElementById('gcdResult').innerText = "OBEB: " + gcd;
    } else {
        document.getElementById('gcdResult').innerText = "Lütfen geçerli ve pozitif sayılar giriniz.";
    }
});


/*10.Soru */

document.getElementById('checkNumber').addEventListener('click', function() {
    let number = parseInt(document.getElementById('inputNumber').value, 10);

    if (!isNaN(number)) {
        let sonuc = (number % 2 === 0) ? "Çift" : "Tek";
        document.getElementById('numberResult').innerText = number + " sayısı " + sonuc;
    } else {
        document.getElementById('numberResult').innerText = "Lütfen geçerli bir sayı giriniz.";
    }
});
