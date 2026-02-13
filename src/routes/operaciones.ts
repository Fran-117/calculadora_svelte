function sumar(a: number, b: number, c: number, d: number) {
    const fract1= a/b
    const fract2= c/d

    const result= fract1 + fract2
    return result;
}

function restar(a: number, b: number, c: number, d: number) {
    const fract1= a/b
    const fract2= c/d

    const result= fract1 - fract2
    return result;
}

function multiplicar(a: number, b: number, c: number, d: number) {
    const fract1= a/b
    const fract2= c/d

    const result= fract1 * fract2
    return result;
}

function dividir(a: number, b: number, c: number, d: number) {
    const fract1= a/b
    const fract2= c/d

    const result= fract1 / fract2
    return result;
}

export {sumar, restar, multiplicar, dividir}