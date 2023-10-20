const CameltoSanke = (Obj) => {
  //

  // const testObj = {
  //   FullName: "Ayan Sheikh",
  //   DateOfBirth: 33,
  //   Email: "sssss",
  // };

  let finalObj = {};

  for (const key in Obj) {
    if (Obj.hasOwnProperty(key)) {
      // console.log(`${key}:`);

      const temArry = [];
      const test = key;
      for (var i = 0; i < test.length; i++) {
        if (test[i] == " ") {
          return "Please String Without Space and only CamelCase";
        }
        // console.log(test[i])
        if (test[i] == test[i].toUpperCase()) {
          // console.log(test[i])
          // console.log(i)
          // const final = test[i]
          // return;
          temArry.push("_");
          temArry.push(test[i].toLocaleLowerCase());
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
      // console.log(array.join(""));

      const updatedKey = array.join("");

      finalObj[updatedKey] = Obj[key];
      // console.log(finalObj)
    }
  }
  // console.log(finalObj);
  return (finalObj)
};

// const testObj = {
//   FullName: "Ayan Sheikh",
//   DateOfBirth: 33,
//   Email: "sssss",
// };

// console.log(CameltoSanke(testObj))

  module.exports = CameltoSanke
