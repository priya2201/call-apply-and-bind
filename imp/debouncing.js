let counter = 0;

const getData = () => {
  //calls an api and gets data 
  console.log("Fetching Data..", counter++);
}
const doSomeMagic = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer)
    timer = setTimeout(() => {
      getData.apply(context, arguments)

    }, d);
  }
}
const betterFunction = doSomeMagic(getData, 300);


tables

tab
tables