
// SOLUCIÓN 1
export function max(a: number, b: number, c: number){
 
    if (a > b){
        if (a > c){
        return a;
        }
    }
    if (b > a){
        if (b > c){
        return b;
        }
    } 
    if (c > a){
        if (c > b){
            return c;
        }
    }
}

let maxValue = max( 4, 22, 27 );
console.log (maxValue);

