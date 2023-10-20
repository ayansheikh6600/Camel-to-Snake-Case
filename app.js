const CameltoSanke = (name) => {
    if(!name){
      return "Please CamelCase String"
    }
    const temArry = [];
    const test = name;
    for (var i = 0; i < test.length; i++) {
      if (test[i]==" "){
   return "Please String Without Space and only CamelCase"
      }
      // console.log(test[i])
      if (test[i] == test[i].toUpperCase()) {
        // console.log(test[i])
        // console.log(i)
        // const final = test[i]
        // return;
        temArry.push("_");
        temArry.push(test[i]);
      } else {
        temArry.push(test[i].toLocaleLowerCase());
      }
      // temArry.push(test[i].toLocaleLowerCase())
      // isupper(test[i])
    }
  
    // console.log(temArry.join(""))
    const done = temArry.join("");
    const array = [];
  
    for (var i = 1; i < done.length; i++) {
      // console.log(done[i])
      array.push(done[i]);
    }
    // console.log(array.join(""))
    return array.join("");
  };
  
  console.log(CameltoSanke("AyanSheikh"));
  
  module.exports = CameltoSanke