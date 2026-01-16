// 1부터 n까지의 합을 구하는 함수
function add_n(number) {
  let result = 0;
  for (let i = 0; i < number; i++) {
    result = result + i;
  }
  console.log(result);
}

add_n(20);
