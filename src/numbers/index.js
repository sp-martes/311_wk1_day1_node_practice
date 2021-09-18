const isEven = (num) => {
  return num%2==0
}

const sum = (arr) => {
  return arr.reduce((a,c) => a+c)
}

const comboSum = (arr, sum) => {
  let hash = {};
  for (let i = 0; i < arr.length; i ++) {
    let diff = sum - arr[i];
    if(hash[diff] !== undefined && hash[diff] !== i){
      return true 
    }
    else{
      hash[arr[i]] = i;
    }
  }
  return false
}

module.exports = {
  isEven,
  sum,
  comboSum
}

