import { linkedList, node } from "./linkedList.js";
const testList = new linkedList();
testList.append(`1`);
let newNode = new node(`2`, null);
testList.head.nextNode = newNode;
let thirdNode = new node(`3`, null);
newNode.nextNode = thirdNode;
let nodeFour = new node("4", null);
thirdNode.nextNode = nodeFour;
testList.append("5");
testList.append("6");
console.log(testList.toString());
