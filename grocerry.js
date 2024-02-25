let groceryItems=[{Product: "milk",Quantity:1,price:1.5},{Product: "Tomato",Quantity:2,price:2.5},{Product: "Mango",Quantity:5,price:1.5},{Product: "Apple",Quantity:2,price:2}];



//Creating the UI
const CreateUI=()=>{
ULelement=document.getElementById("grocries");
//Displaying titles in the list
const getTitles=(titles)=>{
    let titless=Object.keys(titles[0])
    titless.map((title)=>{
        LIelement=document.createElement("li");
        LIelement.style.backgroundColor = 'yellow';
        LIelement.innerText=title ;
        ULelement.appendChild(LIelement)
        return titles;
    })  
}

//Displaying values in the list
const getValues=(groceryItems)=>{
    let vals=groceryItems.forEach((items)=> {
            let itm=Object.values(items).map((item)=>{
                LIelement=document.createElement("li");
                LIelement.innerText=item ;
                ULelement.appendChild(LIelement);
            })
            return itm;  
        });
        return vals;
}

//Calculate the total amount of items
const groceries=(grocery)=>{
    let totalPrice=document.getElementById("totalprice");
    let parentEl=document.querySelector(".secssion_titles");
    let valueOfGroceries=grocery.map((items)=>{
        let val=Object.values(items).slice(-2).reduce((num,acc)=>num*acc)
        return val; 
    }).reduce((num,acc)=>num+acc);
    totalPrice.innerHTML=valueOfGroceries;
    parentEl.appendChild(totalPrice);
return valueOfGroceries;
}


//Get Titles
let tit=getTitles(groceryItems);

//Get values
let valuess=getValues(groceryItems);

//Total Price
let TotalValue=groceries(groceryItems);
}


//DOM Operations

CreateUI();




