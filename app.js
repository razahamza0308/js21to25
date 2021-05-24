
//*************Question 1 ************/


// var firstName=prompt("Enter your first name");
// var lastName=prompt("Enter your last name");
// var fullName=firstName+lastName;
// document.write("Hello "+fullName);


//*************Question 2 ************/


// var userInput=prompt("Enter your favorite mobile phone model")
// var inputLength=userInput.length;
// document.write("My favourite Phone is: "+userInput+"<br>")
// document.write("Length Of String: "+ inputLength);



//*************Question 3 ************/


// var word="Pakistani";
// var res=word.indexOf("n");
// document.write("String"+ word+"<br>")
// document.write("index of n is: "+res);



//*************Question 4 ************/


// var word="Pakistani";
// var res=word.lastIndexOf("i");
// document.write(res);




//*************Question 5 ************/


// var word="Pakistani";
// var res=word.charAt(3);
// document.write("word: "+word+"<br>")
// document.write("at index 3: "+ res);





//*************Question 7 ************/


// var city="Hyderabad";
// var toRep="Islam"
// var index=city.indexOf("Hyder")
// if(city!==-1){
//     word=city.slice(0,index)+toRep+city.slice(index+toRep.length)
// }
// document.write("City: "+ city+"<br>")
// document.write("After Repalcement: "+ word)





//*************Question 8 ************/


// var msg="Ali and Sami are best friends They play cricket and football together";
// var rep=msg.replace(/and/g,"&");
// document.write(msg+"</br>");
// document.write(rep);





//*************Question 10 ************/


// var userInput=prompt("Enter any word");
// var capi=userInput.toUpperCase();
// document.write(capi);








//*************Question 12 ************/


// var num=35.36;
// var strng=num.toString();
// var float=parseFloat(strng);
// document.write("Number" +strng+"</br>");
// document.write("Result:"+strng);







//*************Question 13 ************/



// var userwrd=prompt("Enter valid user name");
// var mywrd=false;
// for(var i=0; i<=userwrd.length; i++){
//     if("@"==userwrd[i]||"#"==userwrd[i]||"$"==userwrd[i]||"%"==userwrd[i]||"^"==userwrd[i]||"&"==userwrd[i]){
//         mywrd=true;
//         document.write("Please enter a valid user name");
//        break; 
//     }
// }
// if(mywrd===false){
//     document.write(userwrd);
// }







//*************Question 14   ************/


// var arr=["cake", "apple pie", "cookie", "chips", "patties"];
// var usersrch=prompt("Enter your item");
// usersrch=usersrch.toLowerCase();
// var mywrd=false;
// for(var i=0;i<=arr.length;i++){
//     if(usersrch===arr[i]){
//         mywrd=true;
//         var index=arr.indexOf(usersrch);
//         document.write(usersrch+" is available at index "+index+" in our bakery");
//     }
//     break;
// }
// if(mywrd===false){
//     document.write("We are sorry "+usersrch+" is not present in our bakery")
// }









//*************Question 16 ************/


// var arr="University of Karachi";
// for(var i=0;i<arr.length;i++){
//     document.write(arr[i]+"</br>")
// }




//*************Question 17 ************/

// var userInput=prompt("Enter you text");
// var ind=userInput.charAt(userInput.length-1);
// document.write(ind);







//*************Question 18 ************/


// var txt="The quick brown fox jumps over the lazy dog";
// var mywrd=false;
// for(var i=0;i<txt.length;i++){
//     if(txt.slice(i,i+3)==="the"){
//         mywrd=true;
//         document.write(txt+"</br>");
//         document.write("There are 2 occurences of word 'the'.");
//     }
// }
// if(mywrd===false){
//       document.write("There is not the")
// }