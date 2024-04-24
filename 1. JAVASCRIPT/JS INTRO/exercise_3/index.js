let obj = { key1: "questa", key2: "stringa", key3: "bella" };

function printStrings(stringhe) {
  let newArr = [];
  for (const i in stringhe) {
    if (stringhe[i].length > 5) {
        newArr.push(stringhe[i])
    }
  }
  console.log(newArr);
}
printStrings(obj);
