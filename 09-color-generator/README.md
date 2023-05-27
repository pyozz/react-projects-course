# Color Generator

## Points

- Form component
- Values.js
- Render colors
- React toastify
- Create color
- Clipboard

<br />

## 사용한 기술

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/nanoid-555555?style=for-the-badge"> <img src="https://img.shields.io/badge/values.js-555555?style=for-the-badge"> <img src="https://img.shields.io/badge/react toastify-555555?style=for-the-badge">

<br />

## 결과물

<img src="https://github.com/pyozz/react-projects-course/assets/92071025/c74d3aa2-f32f-4eb3-853b-b35d7b53a5e3" />

<br />

## 회고

values.js, react-toastify와 같은 라이브러리에 대해 새롭게 알게 되었고 사용법도 어렵지 않아서 쉽게 적용할 수 있을 것 같다. 그리고 복사하는 기능이 이렇게 간단해서 신기했는데 많은걸 배울 수 있는 프로젝트였다.

```js
const saveToClipboardHandler = () => {
  navigator.clipboard.writeText(`#${hex}`);
  toast.success(`copied #${hex} !`);
};
```
