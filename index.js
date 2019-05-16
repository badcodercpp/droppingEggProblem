// dropping egg from a building having 100 floor we will give you a utility function to validate wheather egg
// breaks or not
// now there is a floor which is the maximum no of floor labeled from where if we dropp the egg egg will not break
// please find me the number


// dropping egg function
function dropEgg(floorNo, noOfEgg){
  let totalEggLeft = noOfEgg ,
      probableStartCounter = 0, 
      probableLastCounter = 0, 
      targetRoom = 0;
  const initialCheck = 0,
    firstCheck = Math.floor(Math.sqrt(floorNo)),
    midFloorCheck = Math.floor(floorNo/2),
    secondCheck = Math.floor((firstCheck+midFloorCheck)/2),
    lastCheck = floorNo;
    if(isEggBreaks(firstCheck)){
      probableStartCounter = initialCheck;
      probableLastCounter = firstCheck;
      totalEggLeft = totalEggLeft-1;
    }else if(isEggBreaks(midFloorCheck)){
      probableStartCounter = firstCheck;
      probableLastCounter = midFloorCheck;
      totalEggLeft = totalEggLeft-1;
    }else if(isEggBreaks(secondCheck)){
      probableStartCounter = midFloorCheck;
      probableLastCounter = secondCheck;
      totalEggLeft = totalEggLeft-1;
    }else {
      probableStartCounter = secondCheck;
      probableLastCounter = lastCheck;
      totalEggLeft = totalEggLeft-1;
    }
  for(let i=probableStartCounter;i<probableLastCounter;i++){
    if(isEggBreaks(i)){
      	targetRoom = i-1;
      	totalEggLeft = totalEggLeft - 1
      	break;
       }
  }
  return targetRoom
}

function isEggBreaks(floorNo){
  if(floorNo>=63){
    	return true;
     }
  return false;
}



// call the fn 
// 
// 


const targetFloor = dropEgg(100,2)
console.log(targetFloor)


// dropping egg problems with recursion and binary search algorithm
// 

/*function searchBinaryToSeeIsEggBreaks(low, high, totalNoOfEggs){
  if (high>=low) 
    { 
        let mid = Math.floor(low + (high - low)/2); 
        if (isEggBreaks(mid)){
            totalNoOfEggs = totalNoOfEggs -1;
            return mid; 
        }
        if (isEggBreaks(mid-1)) {
          	totalNoOfEggs = totalNoOfEggs -1;
            return binarySearch(low, mid-1, key); 
        }
        return binarySearch(arr, mid+1, high, key); 
    } 
    return -1; 
}*/

/*function letMeDropMyEggs(floorNo, totalNoOfEggs){
  let l = 0, h = 1; 
    while (!isEggBreaks(h)) 
    { 
        l = h;
        h = 2*h;
    } 
  for(){
  }
  return searchBinaryToSeeIsEggBreaks(l, h, totalNoOfEggs)
}*/






// to calculate first occurance of any key in an infinite size array

// actual binary search occurs here
function binarySearch(arr, low, high, key){
  if (high>=low) 
    { 
        let mid = low + (high - low)/2; 
        if (arr[mid] == key) 
            return mid; 
        if (arr[mid] > key) 
            return binarySearch(arr, low, mid-1, key); 
        return binarySearch(arr, mid+1, high, key); 
    } 
    return -1; 
}

function findUnknownPosition(arr, key){
  let l = 0, h = 1; 
    let val = arr[0]; 
    while (val < key) 
    { 
        l = h;
        h = 2*h;
        val = arr[h];
    } 
  return binarySearch(arr, l, h, key)
}


let a= [0,1,0,1,1,1,1,0,0,0,0];
a=a.sort((a,b) => a-b)
//console.log(a)

const position = findUnknownPosition(a, 1);
console.log(position)


