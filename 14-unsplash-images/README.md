# Unsplash Images

## Points

- Global context
- Dark theme initial setup (class, CSS)
- Check whether user prefers dark mode with JavaScript
- Unsplash API
- Setup env variables in VITE

<br />

## 사용한 기술

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/react_query-FF4154?style=for-the-badge"> <img src="https://img.shields.io/badge/axios-5a29e4?style=for-the-badge"> <img src="https://img.shields.io/badge/styled_components-db7893?style=for-the-badge"> <img src="https://img.shields.io/badge/styled_reset-db7893?style=for-the-badge"> <img src="https://img.shields.io/badge/react_icons-555555?style=for-the-badge">

<br />

## 결과물

<img src="https://github.com/pyozz/react-projects-course/assets/92071025/c1a4a0d9-736d-4392-ad3f-a621a4fe607d" />

<br />

## 회고

다크모드와 검색어 관련된 것들을 전역으로 관리하고 react-query를 이용해 응답 사진을 보여주면 되는 프로젝트였다.

다크 모드를 처음 구현해봤는데 간단해서 놀랐고, 사용자의 모드 선호도에 맞게 자동으로 감지해서 다크 모드를 적용시킬 수 있는 것도 신기했다.

```css
@media ('(prefers-color-scheme: dark)') {
  color: #fff;
  background-color: #000;
}
```

```js
const getInitialMode = () => {
  return window.matchMedia("(prefers-color-scheme:dark)").matches;
};
```
