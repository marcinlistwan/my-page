//const blogPost = document.querySelector('.post-content--js');
//console.log(blogPost);

//blogPost.innerHTML = 'Dzisaj uczę się zmiany DOM-u za pomocą skryptu JS';


/*function greetings(name, age){
     console.log(`Witaj ${name}, wiem ze masz ${age} lat`);
    return greetings;
}
*/

/*function calculate(myNumber){
    console.log(`dostalem numer ${myNumber}`);
    return myNumber*3;

}
*/

//main-section--js

/*function changeP(querySelectorContent, newContent){
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = newContent;

}

changeP('.main-section--js', "Paragraf zostal zmieniony pomyslnie");

*/

const burger = document.querySelector('.hamburger-menu--js');
console.log(burger);

burger.addEventListener('click', () =>{
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
    //nav.classList.remove('navigation');
    //nav.classList.add('navigation--open');
})

