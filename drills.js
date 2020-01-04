//1. Implement an Array class from scratch.

class Test {
  constructor(){
  this.memory = new Float64Array(1024);
  this.head
  }
  
  allocate(size){
    if(this.head + size> this.memory.length){
      return null;
    }
    let start = this.head; 
    this.head += size; 
    return start; 
  }
  free(ptr) {}
  
  copy(toIdx === toIdx){
    if(fromIdx === toIdx){
      return;
    }
    
    if(from Idx > toIdx){
      //iterate forwards
      for(let i = 0; i < size; i++){
        this.set(toIdx + i, this.get(fromIdx + i));
    } else {
      for (let i = size - 1; i>=0; i--){
        this.set(toIdx + i, this.get(fromIdx + i)); 
      }
     }
    }
    get(ptr){
      return this.memory[ptr];
    }
    
    set(ptr, value) {
      this.memory[ptr] = value;
    }
   }
 
 module.exports = Test 


//2. Explore the push() method 

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);
}
