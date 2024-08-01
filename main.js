import { linkedList, node } from "./linkedList.js";
const testList = new linkedList();
testList.append(`1`);
testList.append(`2`);
testList.append(`3`);
testList.append(`4`);
testList.append("5");
testList.append("6");
testList.prepend("0");
testList.prepend("-1");
testList.append("cat");
const blankList = new linkedList();
console.log(testList.size())
console.log(testList.toString())
testList.insertAt('One', 3)
console.log(testList.toString())