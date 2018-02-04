class List{
    constructor(){
      this._head = null;
      this._tail = null;
      this.size = 0;
     }  
     
     add(value){
       let node = new Node(value);
       if( !this._head && !this._tail){
         this._head = node;
         this._tail = node;
         this.size++;
       }
       else{
         this._tail.next = node;
         this._tail = this._tail.next;
         
       }
       return this._head;
     }
     
     size(){
      return this.size
     }

     head(){
         return this._head;
     }
     
   }
   
   class Node{
    constructor(value){
       this.value = value;
       this.next = null;
      }  
   }   

   let createList = new List();

   function arrayToList(array){
    for(let i = 0 ; i < array.length; i++){
     createList.add(array[i]);
    }
    return createList.head();
   }

  function listToArray(listToConvert){
    let node = listToConvert
    let arr = []
    while(node){
        arr.push(node.value);
        node = node.next
    }
    return arr;
  }
  listToArray(arrayToList([10,20]));
   
   