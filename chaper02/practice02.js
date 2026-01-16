import { mise_list } from "./practice02_data.js";

// function print_name(input_data) {
//   for (let i = 0; i < input_data.length; i++) {
//     console.log(input_data[i].MSRSTE_NM);
//   }
// }

// print_name(mise_list);

// 모든 구의 이름만 출력해보기
mise_list.forEach((item) => {
  console.log(item.MSRSTE_NM);
});
