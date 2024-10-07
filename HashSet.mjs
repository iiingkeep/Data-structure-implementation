import { HashTable } from "./HashTable.mjs";

class HashSet{
  constructor(){
    this.hashTable = new HashTable();
  }

  // Value는 쓰이지 않기 때문에 고정적으로 -1 삽입
  add(data){
    if(this.hashTable.get(data) == null){
      this.hashTable.set(data, -1);
    }
  }

  isContain(data){
    return this.hashTable.get(data) != null;
  }

  remove(data){
    this.hashTable.remove(data);
  }

  clear(){
    for(let i = 0; i <this.hashTable.arr.length; i++){
      this.hashTable.arr[i].clear();
    }
  }

  isEmpty(){
    let empty = true;
    for(let i = 0; i < this.hashTable.arr.length; i++){
      if(this.hashTable.arr[i].count > 0){
        empty = false;
        break;
      }
    }
    return empty;
  }
  
  printAll(){
    for(let i = 0; i < this.hashTable.arr.length; i++){
      let currentNode = this.hashTable.arr[i].head;
      while(currentNode != null){
        console.log(currentNode.data.key);
        currentNode = currentNode.next;
      }
    }
  }
}

export { HashSet };