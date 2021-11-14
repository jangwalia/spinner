process.stdout.write('hello from spinner1.js... \rheyyy\n');
const movements = ['|','/','-','\\','|','/','-','|'];
let timer = 100;
for(const move of movements){
  setTimeout(()=>{
    process.stdout.write(`\r${move}     `);
  },timer);
  timer += 200;
}
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);
// setTimeout(() => {
  
//   process.stdout.write('\r|    '); 
// }, 900);
// setTimeout(() => {
  
//   process.stdout.write('\r/    '); 
// }, 1100);
// setTimeout(() => {
  
//   process.stdout.write('\r-    '); 
// }, 1300);
// setTimeout(() => {
  
//   process.stdout.write('\r|    '); 
// }, 1500);

