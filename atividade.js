console.log('-------------- Cálculo Númerico ---------------');
console.log('--------- Implementação do Algoritmo -----------');
console.log('------------ f(x) = e^x - 5x -------------');
console.log('');

// bissecao(1, 2, 0.001);
// posicaofalsa(1, 2, 0.001);

bissecao(2.4, 2.6, 0.0001);
posicaofalsa(2.4, 2.6, 0.0001);

// bissecao(0, 2, 0.0001);
// posicaofalsa(0, 2, 0.0001);

function f(x) {
    // return ((x**3) + (4*(x**2)) - 10);
    return ((2.71828182846**x) - 5*x);
    // return (3*(x**3) - 4);
}

function bissecao(a, b, tol) {
    console.log('------------------------ // ------------------------');
    console.log('------------ Método da Bisseção ------------');
    console.log('------------------------ // ------------------------');

    var c,fa,fb,fc;
    var i = 0;
    fa = f(a);
    fb = f(b);

    while(Math.abs(b-a) > tol) {
        c = (a+b)/2;
        fc = f(c);

        if (fa*fc<0) {
            b = c;
            fb = fc;
        } else {
            a = c;
            fa = fc;
        }
        console.log('[I]: ', i++,'|| Valor da Raiz: ', c, 'f(x): ', fc);
    }
    c=(a+b)/2;
    return console.log('Raiz Aproximada: ', c);

}

function posicaofalsa(a, b, tol) {
    console.log('------------------------ // ------------------------');
    console.log('------------ Método da Posição Falsa ------------');
    console.log('------------------------ // ------------------------');
    var fa, fb, c, fc;
    var i = 0;
    fa = f(a);
    fb = f(b);
    c = (b*f(a)-f(b)*a)/(f(a)-f(b));
    fc = f(c);
    while (Math.abs(f(c)) > tol) {
        c = (b*f(a)-f(b)*a)/(f(a)-f(b));
        
        fc=f(c);

        if (fa*fc<0) {
            b=c;
            fb=fc;
        } else {
            a=c;
            fa=fc;
        }
        console.log('[I]: ', i++,'|| Valor da Raiz: ', c, 'f(x): ', fc);
    }

    return console.log('Raiz Aproximada: ', c);
}

// function bissecao(a, b, tol) {
//     console.log('------------------------ // ------------------------');
//     console.log('------------ Método da Bisseção ------------');
//     console.log('------------------------ // ------------------------');

//     if (f(a)*f(b) < 0) {
//         var i = 0;
//         while (Math.abs(b-a)/2 > tol) {
//             xi = (a+b)/2;
//             if (f(xi) == 0 ) {
//                 console.log(' A raiz é: ', xi);
//                 break;
//             } else if (f(a)*f(xi) < 0) {
//                 b = xi;
//             } else {
//                 a = xi;
//             }
//             console.log('[I]: ', i++,'|| Valor da Raiz: ', xi, 'f(x): ', f(xi));
//         }
//         return console.log('Raiz Aproximada: ', xi);
//     } else {
//         console.log('Não há raiz neste intervalo!');
//     }
// }