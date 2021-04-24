console.log('-------------- Cálculo Númerico ---------------');
console.log('--------- Implementação do Algoritmo -----------');
// console.log('------------ f(x) = 3x³ - 4 -------------');
console.log('');

// bissecao(1, 2, 0.001);
// posicaofalsa(1, 2, 0.001);

// bissecao(2.4, 2.6, 0.0001);
// posicaofalsa(2.4, 2.6, 0.0001);

// secante(f, 0, 1, 0.0005, 50);

bissecao(0.4, 0.5, 0.0002);
posicaofalsa(0.4, 0.5, 0.0002);
// pontoFixo(0.5, 50);
NewtonRaphson(f, flin, 0.5, 0.0002, 50);
secante(f, 0.4, 0.5, 0.0002, 50);

/*
    TERCEIRA QUESTÃO DA FICHA

    bissecao(0, 1, 0.00001);
    pontoFixo(0.5, 10);
    posicaofalsa(0, 1, 0.00001);
    NewtonRaphson(f, flin, 0.5, 0.00001, 50);
    secante(f, 0, 1, 0.00001, 50);
*/

/*
    QUARTA QUESTÃO DA FICHA
    bissecao(1, 0, 0.001);
*/

/**
 *  SÉTIMA QUESTÃO DA FICHA
    NewtonRaphson(f, flin, 1, 0,0003, 50);
 */

/**
 * OITAVA QUESTÃO DA FICHA
 secante(f, 1, 2, 0,001, 30);
*/



function f(x) {
    // return ((x**3) + (4*(x**2)) - 10);
    // return ((2.71828182846**x) - 5*x);
    // return (3*(x**3) - 4);
    // return x**3 - 9*x + 3;

    /* 
    TERCEIRA QUESTÃO DA FICHA

    return (4*(Math.sin(x)) - (2.71828182846**x));
    */

    /**
     *  QUARTA QUESTÃO DA FICHA
     return x**3 - Math.sin(x);
     */

    /**
     * SÉTIMA QUESTÃO DA FICHA
     return 2*x - Math.log(x) - 4;
    */

    /**
     * OITAVA QUESTÃO DA FICHA
     return 1 - x*Math.log(x);
    */

    // return x**2 + Math.log(x);

    return 2*x - Math.cos(x);
}

function flin(x) {
    // return 9*x**2;
    // return 3*x**2 - 9;

    /* 
    TERCEIRA QUESTÃO DA FICHA

    return (4*(Math.cos(x)) - (2.71828182846**x));
    */

    /**
     * SÉTIMA QUESTÃO DA FICHA
     return 2 - 1/x;
     */

    // return 15.06 - 8.418*x**2;

    return Math.sin(x) + 2;

}

function g(x) {
    /* 
    TERCEIRA QUESTÃO DA FICHA

    return x - 2*Math.sin(x) + 0.5*2.71828182846**x;
    */
   return 2*x - Math.cos(x);
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
    // c=(a+b)/2;
    return console.log('Raiz Aproximada: ', c);

}

function pontoFixo(x0, iterMax) {
    console.log('------------------------ // ------------------------');
    console.log('------------ Método do Ponto Fixo ------------');
    console.log('------------------------ // ------------------------');
    iteracao = 0
    x1 = 0
    while (iteracao < iterMax){
        x1 = g(x0)
        x0 = x1
        iteracao += 1
        console.log('[I]: ', iteracao,'|| Valor da Raiz: ', x1, 'f(x): ', f(x1));
    }
    return console.log('Raiz Aproximada: ', x1);
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

function secante(f, x0, x1, tol, iterMax) {
    console.log('------------------------ // ------------------------');
    console.log('------------ Método da Secante ------------');
    console.log('------------------------ // ------------------------');
    if (Math.abs(f(x0)) <= tol) {
        return (false, x0);
    } else if (Math.abs(f(x1)) <= tol) {
        return (false, x1);
    }

    console.log('[x0]:', x0  ,'[f(x0)]:', f(x0));
    console.log('[x1]:', x1  ,'[f(x1)]:', f(x1));

    for (var i = 1; i <= iterMax; i++) {
        x2 = (x0 * f(x1) - x1 * f(x0)) / (f(x1) - f(x0));
        console.log('[I]:', i,'[x2]:', x2, '[f(x2)]:', f(x2));

        if (Math.abs(f(x2)) <= tol) {
            return console.log('Raiz Aproximada: ',x2);
        } 

        x0 = x1;
        x1 = x2;
    }

    console.log('Número máximo de iterações atingido.');
    console.log('Raiz Aproximada:', x2);
}

function NewtonRaphson(f, flin, x0, tol, iterMax=50) {
    console.log('------------------------ // ------------------------');
    console.log('------------ Método de Newton-Raphson ------------');
    console.log('------------------------ // ------------------------');

    if (Math.abs(f(x0)) <= tol) {
        return (false, x0);
    }

    console.log('[x0]:', x0  ,'[f(x0)]:', f(x0), '[flin(x)]:', flin(x0));

    for (var i = 1; i <= iterMax; i++) {
        x1 = x0 - f(x0) / flin(x0);
        console.log('[I]:', i,'[x1]:', x1,'[f(x1]:', f(x1), '[flin(x)]:', flin(x1));

        if (Math.abs(f(x1)) <= tol) {
            return console.log('Raiz Aproximada: ',x1);
        } 

        x0 = x1;
    }

    console.log('Número máximo de iterações atingido.');
    console.log('Raiz Aproximada:', x1);

}