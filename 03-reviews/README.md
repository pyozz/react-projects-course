# Reviews

## Points

- Import reviews
- Setup state value(index)
- Render first person
- Prev and Next button
- Random button
- Modulus operator

<br />

## 사용한 기술

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/react_icons-555555?style=for-the-badge">

<br />

## 결과물

<img src="https://github.com/pyozz/javascript-projects-course/assets/92071025/9c52e41a-0ea2-4a5c-8838-1eded48a8501" />

<br />

## 리팩토링

원래 기존에는 이전, 다음 버튼을 아래와 같이 단순히 이전 값에 +-1을 하고 검증하는 방식이였는데

<br />

App.jsx

```js
const checkNumber = (number) => {
  if (number < 0) return people.length - 1
  if (number > people.length - 1) return 0

  return number
}

const prevPerson = () => {
  setIndex((state) => {
    return checkNumber(state - 1)
  })
}

const nextPerson = () => {
  setIndex((state) => {
    return checkNumber(state + 1)
  })
}
```

<br />

% 연산자를 활용해서 코드를 간결화 하였다.<br />
next 버튼은 배열 데이터의 길이를 초과해도 잘되지만, prev 버튼에서 0보다 작을 경우 때문에 단순히 -1이 아닌 배열 데이터 길이를 이용한 추가 작업을 해주어야한다.

```js
const prevPerson = () => {
  setIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length)
}

const nextPerson = () => {
  setIndex((prevIndex) => (prevIndex + 1) % people.length)
}
```
