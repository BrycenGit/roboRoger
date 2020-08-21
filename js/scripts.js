let number = 4 ;
let array = [];
for (i=0; i<=number; i++) {
  array.push('' + i);
  console.log(array[i]);

}
for(i = 0; i < array.length; i++)
{
    array[i] = array[i].replace('3', "Won't you be my neighbor?");
}

console.log(array);