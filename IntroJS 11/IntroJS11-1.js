/* Obtenir la data actual i mostrar.
    1) Avui es dd del mm del aaaa
    2) Han pasat n setmanes de l'any
    3) El % de dies transcorreguts és nn,nn%
    4) Queden un nn,nn% de dies a l'any
--------------------------------------------------
    5) Ara són les hh:mm:ss
    6) El % del dia que ha passat es nn,nn%
    7) Queda un % de nn,nn% del dia
*/


// Obtenir la data i hora actual
const ara = new Date();

// Obté el dia, mes i any
const dia = ara.getDate();
const mes = ara.getMonth() + 1;
const any = ara.getFullYear();

// Han passat n setmanes de l'any
const setmanes = Math.ceil(dia / 7);

// El % de dies transcorreguts és nn,nn%
const primerDiaAny = new Date(any, 0, 1);
const diesTranscorreguts = (ara - primerDiaAny) / (24 * 60 * 60 * 1000);
const diesEnAny = (new Date(any + 1, 0, 1) - primerDiaAny) / (24 * 60 * 60 * 1000);
const percentatgeDiesTranscorreguts = (diesTranscorreguts / diesEnAny * 100).toFixed(2);

// Queden un nn,nn% de dies a l'any
const diesRestants = diesEnAny - diesTranscorreguts;
const percentatgeDiesRestants = (100 - percentatgeDiesTranscorreguts).toFixed(2);

// Ara són les hh:mm:ss
const hores = ara.getHours().toString().padStart(2, '0');
const minuts = ara.getMinutes().toString().padStart(2, '0');
const segons = ara.getSeconds().toString().padStart(2, '0');

// El % del dia que ha passat es nn,nn%
const milisegonsDelDia = ara - new Date(ara.getFullYear(), ara.getMonth(), ara.getDate());
const percentatgeDelDiaTranscorregut = (milisegonsDelDia / 86400000 * 100).toFixed(2);

// Queda un % de nn,nn% del dia
const percentatgeDelDiaRestant = (100 - percentatgeDelDiaTranscorregut).toFixed(2);

// Mostra la informació
console.log(`1) Avui és ${dia} del ${mes} del ${any}`);
console.log(`2) Han passat ${setmanes} setmanes de l'any`);
console.log(`3) El % de dies transcorreguts és ${percentatgeDiesTranscorreguts}%`);
console.log(`4) Queden un ${percentatgeDiesRestants}% de dies a l'any`);
console.log(`5) Ara són les ${hores}:${minuts}:${segons}`);
console.log(`6) El % del dia que ha passat és ${percentatgeDelDiaTranscorregut}%`);
console.log(`7) Queda un ${percentatgeDelDiaRestant}% del dia`);
