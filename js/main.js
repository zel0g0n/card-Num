
  let secretNum;
  let  num;
  for(let i=0; i<10; i--) {
    num = prompt('Karta raqamingizni kiriting');
    if( num == null  || num.substring(0,4)!=8600 || num.length!=16 || isNaN(num)) {
      continue
    }else {
      break
    }
  }
  secretNum = num.substring(0,4) + ` **** **** ` + num.substr(12)
  console.log(secretNum)