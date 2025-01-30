/*
this file will include our data types that are used across
multible files

we  can also declare arrays or other variables
*/

type dataType = {
  id: string;   // inique identifier for each element in the list (student id)
  title: string;    // who i display (ex: Isha)
}
const DATA: dataType[] = [
  {id: '1', title: 'Chris'},
  {id: '2', title: 'Sohan'},
  {id: '3', title: 'Isa'},
  {id: '4', title: 'sid'},
]

// Because there are multible items from the same file 
// being exported, you dont use the word defualt
export {dataType, DATA}