var arr = [
  "Ahmad ALnsour",
  "Raghad Aledwan ",
  "Mua'th Baino ",
  "Haya jaradat ",
  "Baraa ",
  "Rahma ",
  "Noor Alfaqeeh  ",
  "Nada eadah  ",
  "Hani Abo Alinain  ",
  "Abeer ",
  "Mohammad Alaa Aldein ",
  "Ahlam al-hmeadat ",
  "Ayham Zaid ",
  "Ammar Alzyoud ",
  "Yasmin ",
  "Hadeel fleifel  ",
  "Elias Nada  ",
  "Ahmad Taha ",
   "Amal Aldajah ",


];

//  "Ahmad ghzawi "
//  "Asem Qaffaf ",
//   "Mohammad.y.albittar ",
//    "Mohammad Talib ",
//   "Ahmad Azzam",
//  "Yaser ",

var arrayOfSixElements = [
  "Yaser ",
  "Ahmad Azzam",
  "Mohammad Talib ",
  "Mohammad.y.albittar ",
  "Asem Qaffaf ",
  "Ahmad ghzawi ",

];
var randomArr = [];
var randomArr2 = [];
var arrayOfRandom = [""];
function shuffle() {
  for (
 var j, x, i = arr.length;
    i;
    j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x
  );
  randomArr = arr;
}
function shuffle2() {
  for (
    var j, x, i = arrayOfSixElements.length;
    i;
    j = parseInt(Math.random() * i),
      x = arrayOfSixElements[--i],
      arrayOfSixElements[i] = arrayOfSixElements[j],
      arrayOfSixElements[j] = x
  );
  randomArr2 = arrayOfSixElements;
}
shuffle();
shuffle2();
var counter = 0;
for (let i = 0; i < randomArr.length -3; i++) {
  // if (counter == 0) {
  //   document.write(
  //     "<pre >" +
  //       "Group  (" +
  //       (counter + 1) +
  //       ")  " +
  //       arrayOfSixElements[0] +
  //       "</pre>"
  //   );
  // }
  if(i == 0 ){
    document.write(
      "<pre >" + "Group  (" + (counter) + ")  " + randomArr[i] + "</pre>"
    );
    document.write(
      "<pre>" + "Group  (" + (counter) + ")  " + randomArr[i + 1] + "</pre>"
    );
    document.write(
      "<pre>" + "Group  (" + (counter) + ")  " + randomArr[i + 2] + "</pre>"
    );
    document.write(
      "<pre>" + "Group  (" + (counter) + ")  " + randomArr[randomArr.length-1] + "</pre>"
    );
  
    document.write(
      "<pre>" +
        "Group  (" +
        counter +
        ")  " +
        arrayOfSixElements[0] +
        "<br><br>" +
        "</pre>"
    );
    
  }
  
  if(i >= 3){ 
    if (i % 3 == 0) {
      
    document.write(
      "<pre >" + "Group  (" + (counter + 1) + ")  " + randomArr[i] + "</pre>"
    );
    document.write(
      "<pre>" + "Group  (" + (counter + 1) + ")  " + randomArr[i + 1] + "</pre>"
    );
    document.write(
      "<pre>" + "Group  (" + (counter + 1) + ")  " + randomArr[i + 2] + "</pre>"
    );
    counter++;
    document.write(
      "<pre>" +
        "Group  (" +
        counter +
        ")  " +
        arrayOfSixElements[counter] +
        "<br><br>" +
        "</pre>"
    );
  }
}
}
