//1. Check if all values in ages[] are over 18:

const ages = [32, 33, 20, 40];


function checkAge(age) {
    return age > 18;
}
// console.log(ages.every(checkAge))

//2. check if all the answer is same
const survey = [
    { name: "Steve", answer: "Yes"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter", answer: "Yes"},
    { name: "Elaine", answer: "Yes"}
  ];
  
  let result = survey.every(isSameAnswer);
  
  function isSameAnswer(el, index, arr) {
    if (index === 0) {
      return true;
    } else {
      return (el.answer === arr[index - 1].answer);
    }
  }

  console.log(result);

