let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")

btn1.addEventListener("click", function(){
    alert("HTML ga xush kelibsiz!")
    console.log(prompt("HTML toliq nomi?"));
    console.log(prompt("HTML darsturlash tilimi?"));
    console.log(prompt("HTML nimalar uchun ishlatilinadi?"));
    console.log(prompt("Siz HTML ni bilasizmi?"));
    console.log(prompt("HTML nimalar ostida yoziladi?"));
})
btn2.addEventListener("click", function(){
    alert("CSS ga xush kelibsiz!")
    console.log(prompt("CSS toliq nomi?"));
    console.log(prompt("CSS yozishni bilasizmi?"));
    console.log(prompt("CSS ozi nima?"));
    console.log(prompt("CSS ni kim kashf qilgan?"));
    console.log(prompt("CSS ni HTML ga ulab ishlatadimi?"));
})
btn3.addEventListener("click", function(){
    alert("JavaScript ga xush kelibsiz!")
    console.log(prompt("JS nima?"));
    console.log(prompt("JS ni organish osonmi?"));
    console.log(prompt("JS nima uchun ishlatilinadi?"));
    console.log(prompt("JS da har qanday dastur tuzsa boladimi?"));
    console.log(prompt("JS ni kim kashf qilgan?"));
})