
export function printMultiplicationTable ( base: number, limit: number = 10 ) {
    if ( limit <= 0 ) {
        throw new Error('El límite debe de ser mayor a 0');
    }
for (let i = 1; i <= limit; i++) {
    console.log (base, ' x ', i, '=', base * i)
    }
}
