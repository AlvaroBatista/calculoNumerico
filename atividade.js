console.log('-------------- Cálculo Númerico ---------------');
console.log('--------- Implementação do Algoritmo -----------');
console.log('------------ f(x) = e^x - 5x -------------');
console.log('');

// bissecao(1, 2, 0.001);
// posicaofalsa(1, 2, 0.001);

// bissecao(2.4, 2.6, 0.0001);
// posicaofalsa(2.4, 2.6, 0.0001);

bissecao(0, 2, 0.0001);
posicaofalsa(0, 2, 0.0001);
secante(f, 0, 2, 0.0001, 50);

// secante(f, 0, 1, 0.0005, 50);

function f(x) {
    // return ((x**3) + (4*(x**2)) - 10);
    return ((2.71828182846**x) - 5*x);
    // return (3*(x**3) - 4);
    // return x**3 - 9*x + 3;
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
            return console.log('Raiz encontrada: ',x2);
        } 

        x0 = x1;
        x1 = x2;
    }

    console.log('Número máximo de iterações atingido.');
    console.log('Raiz encontrada:', x2);

}