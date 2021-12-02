
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// // a) змінює class тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let change=document.getElementById('main_header').classList.add('september-2021')
// // b) робить шириниу елементу ul 400px
// let change2=document.getElementsByTagNameNS('ul')
// change2.style.width='400px'
// // c) робить шириниу всіх елементів з класом linkList шириною 50%
// let change3=document.getElementsByClassName('linkList')
// for (const change3Element of change3) {
//     change3Element.style='50%'
// }
// // d) отримує текст який зберігається в елементі з класом listElement2
// function addtext(text) {
//
//     let change4 = document.getElementsByClassName('listElement2')
//     change4.innertext=text
// }
// // e) отримує всі елементи li та змінює ім колір фону на сірий
// function addli(lielement){
//     document.getElementsByTagNameNS('li')
//     for (const lielementElement of lielement) {
//         lielementElement.style.background='gray'
//     }
// }
// // f) отримує всі елементи 'a' та додає їм клас anchor
// let alist= document.getElementsByTagNameNS('a')
// for (const a of alist) {
//     a.classList.add('anchor')
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let alist=document.getElementsByTagNameNS('a')
// for (const alistElement of alist) {
//     if (alistElement.innerText==='link3'){
//         alistElement.style.fontsize='40px'
//     }
// }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let alist=document.getElementsByTagNameNS('a')
// for (const alistElement of alist) {
//     a.classlist.add(a.innerText)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sublist=document.getElementsByClassName('sub-header')
// for (const sublistElement of sublist) {
//     sublistElement.style.background=prompt('chose color')
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let sublist=document.getElementsByClassName('sub-header')
// for (const sublistElement of sublist) {
//     if (sublistElement.innerText==='content 2 segment'){
//         sublistElement.style.color=prompt('chose color')
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let cont=document.getElementsByClassName('content_1')
// for (const contElement of cont) {
//     contElement.innerText=prompt('write the text')
// }
// l) отримати елементи p та змінити їм padding на 20px
// let padlist=document.getElementsByTagNameNS('p')
// padlist.style.padding='20px'

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let textlist=document.getElementsByClassName('text2')
// textlist.innerText='september-2021'
// //
