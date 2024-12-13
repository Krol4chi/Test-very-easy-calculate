
let op;
let result;
function func () {

  let nums1 = Number(document.getElementById(`num1`).value)
  let nums2 = Number(document.getElementById(`num2`).value)
  switch (op) {
    case '+':
      result = nums1 + nums2;
      break;
    case '-':
      result = nums1 - nums2;
      break;
    case '*':
      result = nums1 * nums2;
      break;
    case '/':
      if (nums1, nums2) {
        result = nums1 / nums2
      } else {
        result = `Бесконечность`
      }
    
      break;
    default:
      result = 'выберите операцию';
  }
  document.getElementById(`result`).innerHTML = `Ответ: ${result}`;

}




