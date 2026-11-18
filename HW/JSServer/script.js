let button = document.getElementById("btnInputForm");
let input = document.getElementById("inputForAdvice");
// let urlAdviceSite = "https://api.adviceslip.com/";
let urlDogCeo = "https://dog.ceo/api/breeds/list/all";

/*
async function fetchAdviceByKeyword() {
    //event.preventDefault();
    console.log("Function started work");
    // let pelement = document.createElement("");
    //document.body.appendChild(pelement);
    let urlSearchByWordInAdviceSite = `https://api.adviceslip.com/advice/search/${input.value}`; 
    let result = await fetch(urlSearchByWordInAdviceSite);
    let stringResult = await result.json();
    console.log("All logical comands function did");

    try{
        if(stringResult) {
            let jsonstring = JSON.stringify(stringResult, null, 4);
            console.log(jsonstring);
            document.body.textContent = jsonstring;
        }
        else {
            //pelement.innerHTML = "Nothing found";
        }
        }
        catch(e) {
            //pelement.innerHTML = `Exception catched: ${e}`;
    }
    console.log("Work done");
        
}

button.addEventListener("click", (event) => 
    {
        event.preventDefault();
        fetchAdviceByKeyword();
    }
);*/

let xmlRecieve = new XMLHttpRequest();
let ul = document.createElement("ul");
document.body.appendChild(ul);
ul.id="breedList";

let response = "none";
function fetchDogBreeds() {
    console.log("First step of function.")
    xmlRecieve.open("GET", urlDogCeo);
    xmlRecieve.send();
    xmlRecieve.onload = () => {
        console.log("Second step of function.")
        if(xmlRecieve.status === 200 || xmlRecieve.status === 201)
        {
            response =  xmlRecieve.responseText;
            console.log("Result\n" + xmlRecieve.responseText);
            let stringXmlRecieve = JSON.parse(response);
            Object.keys(stringXmlRecieve.message).forEach(element => {
            let li = document.createElement("li");
            li.innerHTML = element;
            ul.appendChild(li);
            });
        }
        else {
            console.log("Error: " + xmlRecieve.status);
        }
        
    
    };
    //let listElement = JSON.stringify(jsonText);
    // console.log(listElement);
    
    

}

fetchDogBreeds();