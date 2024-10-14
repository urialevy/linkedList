import { LinkedList, Node } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
list.reverse();
console.log(list.toString());
console.log(list.nodeFromEnd(0));

list.insertAt("dog", 3);
list.insertAt("dog", 1);
console.log(list.toString());
console.log(list.removeLastOccurence("dog"));
console.log(list.removeLastOccurence("amazing thing"));
