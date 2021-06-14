/*

    Lo hace en una promesa

    El return => equivale al resolve ()
*/

const getUsers = async () => {
  return ["Jorge", "Manuel"];
};



const getNumbers = async () => {
    return [5,3,3,4,23];
  };




getUsers().then((data) => {
  console.log(data);
   getNumbers().then
});


