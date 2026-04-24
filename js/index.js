// 일부러 버그가 발생할 만한 코드를 작성합니다.
var name = 'Seok-yun'; // 1. var 사용 (현대 JS에선 금지급)
let age = 25; // 2. 재할당 안 하는데 let 사용 (Linter가 const로 바꾸라고 화낼 것임)

if (age == '25') {
  // 3. 느슨한 비교 == 사용 (시스템 불안정의 원인!)
  console.log(name);
}

function test() {
  const unused = 'I am not used'; // 4. 선언만 하고 안 쓰는 변수
}
