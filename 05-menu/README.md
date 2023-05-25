# Menu

## Points

- Import data
- State value
- Render items
- Unique categories
- State value and Render categories
- Filter functionality

<br />

## 사용한 기술

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

<br />

## 결과물

<img src="https://github.com/pyozz/react-projects-course/assets/92071025/192f418b-0cba-4c2b-bf85-7ebfd704c4df" />

<br />

## 회고

Set을 이용해 중복제거하여 요소를 쉽게 렌더링하는 것을 알 수 있었다.

```js
const allCategories = ['all', ...new Set(data.map((item) => item.category))]
```
