# 넷플릭스 클론에서 시작해서 나만의 HunFlix 제작



## 배포 링크
https://hunflix.vercel.app/
## QR코드 :<br />

<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/ab7f59aa-f313-4272-bbb5-55327079df9c.png" alt="훈플릭스" width="250" height="250">




# app 메인화면 (/Home)

  메인화면에 배너에는 상영중 영화가 등수로 1~5등까지가 3초시간에 맞춰 슬라이드기능으로 5개영화가 돌아가면서 보여주게 했습니다.
    <br />
    
  ![image](https://github.com/KKKHun2/Hunflix/assets/105702862/2aa10d0e-2704-4d59-8ddd-da3eb4162465)
  <br />
   <br />
  배너 우측 하단에 호버기능을 가진 원을 넣어서 해당 원에 마우스가 가게되면 해당 영화가 배너에 보이게 했습니다.
    <br /> 
<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/94ccd7e6-1169-4d5a-8d29-1a6bfab06b8b.png" width="600" height="400">
    <br />

    
  <br />
 Home 화면에는 상영중,출시예정,인기 영화들로 3개의 슬라이드를 구성했습니다.
 
![image](https://github.com/KKKHun2/Hunflix/assets/105702862/b2d3cb28-68fe-45fa-89c9-e0a5e0697be1)
 
  해당 api 코드
  <br />
<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/dcd2d25e-e21c-4b18-8d9b-4106d6ae165c.png" width="600" height="400">



# Tv Show page(/Tv show)

tv쇼에서도 Home화면과 동일하게 3개의 슬라이드 한국 인기드라마, 전세계 인기 드라마,평점 높은 드라마 이렇게 3개로 구성했습니다. 
<br />
다만 홈화면과 다르게 인기컨텐츠 순위 박스를 만들어서 화면전환이 가능하게 했습니다.
<br />

<img width="1420" alt="image" src="https://github.com/KKKHun2/Hunflix/assets/105702862/cdeacaf3-2f4d-4b37-8e4e-b13d05fd58a9">

  <br />
api코드로 데이터를 가져오는 코드
  <br />
<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/95789d1d-3603-4f07-88e1-dffc20e3d13c.png" width="600" height="400">




# app 검색화면(/Search)


<div style="display: flex; align-items: center;">
  <div style="position: relative;">
    <img src="https://github.com/KKKHun2/Hunflix/assets/105702862/3c61e10a-6889-47ef-aa70-06c0a6b888fa.png" width="800" height="400">
    <p style="position: absolute; top: 0; left: 0; width: 100%; text-align: center;">키워드 검색시</p>
  </div>
  <div style="position: relative;">
    <img src="https://github.com/KKKHun2/Hunflix/assets/105702862/4e0e3f69-853b-4215-86f8-3651f34eb1e3.png" width="800" height="400">
    <p style="position: absolute; top: 0; left: 0; width: 100%; text-align: center;">키워드 검색이 없을때</p>
  </div>
</div>

# 모달기능
각각 페이지마다 있는 슬라이드에 마우스를 가져다 대면 해당 슬라이드 컷이 위로이동하면서 제목이 나오고 클릭을 하면 새로운 모달창이 열리게 됩니다.
<br />
해당 모달에는 api로 받아온 정보인 영화 또는 Tv에 관한 설명이 되어있습니다.(년도,상영시간,종류,평점등)
 <br />
  <br />
<img width="1418" alt="image" src="https://github.com/KKKHun2/Hunflix/assets/105702862/2cdbf3bd-4c92-4a5a-a3c2-73ef8c587f9a">

 <br />

## Header

헤더부분에도 에니메이션 효과를 넣어서 Home화면과 TvShow 페이지 둘 중 현재 어떤 페이지에 있는지 확인 가능하도록 하였습니다.

그리고 검색부분은 누르면 검색 아이콘을 누르면 애니메이션 효과와 함께 인풋창이 나오고 검색이 가능합니다.

 <br />
 <br />

## 색상테마(다크모드,라이트모드)
색상테마 기능을 넣어서 다크모드, 라이트모드로 사용자가 화면을 더 편안하게 사용하고 시야 피로를 줄이는 데 도움이 되며, 사용자에게 선택권을 제공하여
<br /> 개인적인 환경에 맞게 설정할 수 있도록 하였습니다.
 <br />
 
<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/5bda65f9-bfab-4af5-9f34-6a3f05309c91.png" width="600" height="500">

<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/74bf1dc5-4c56-461c-ac59-c9c379a8d89b.png" width="600" height="500">


<br />
<br />

# MainLogo,Favicon,예외처리

로고와 파비콘도 직접 만들어서 적용했습니다.
<br />
로고
<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/915a3c5a-cc95-4e90-87a8-e90399e6c5d3.png" width="300" height="200">
<br />
파비콘
<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/ef76d229-dcc5-4ea7-8039-0b769e0b491b.png" width="100" height="100">
<br />
가끔 배경이미지가 존재하지 않는 영화,tv쇼가 있어서 해당 이미지로 예외처리 상황에 대체하였습니다.
<br />
 <img width="253" alt="image" src="https://github.com/KKKHun2/Hunflix/assets/105702862/3bb81856-973e-4940-ad07-5470bc516319">
<br /> 
배경이미지 코드
<br />
 <img width="603" height="400"  alt="image" src="https://github.com/KKKHun2/Hunflix/assets/105702862/7e31c24d-5169-46e4-a62c-105f3bf3e125">




#
<div align=center><h1>📚 FE STACKS</h1></div>

<div align=left>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

<img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white">

<img src="https://img.shields.io/badge/TypeScript-273c75?style=for-the-badge&logo=TypeScript&logoColor=white">


<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

<img src="https://img.shields.io/badge/Recoil-61DAFB?style=for-the-badge&logo=Recoil&logoColor=white">


</div>



## 커밋 규칙
|아이콘| 설명 | 아이콘 | 설명 |
|----|---|---|---|
|🎨|코드의 구조/형태 개선|👷|CI 빌드 시스템 추가/수정|
|⚡️|성능 개선| 📈|분석, 추적 코드 추가/수정|
|🔥|코드/파일 삭제| ♻️|코드 리팩토링|
|🐛|버그 수정|➕|의존성 추가|
|🚑|긴급 수정|➖|의존성 제거|
|✨|새 기능|🔧|구성 파일 추가/삭제|
|📝|문서 추가/수정|🔨|개발 스크립트 추가/수정|
|💄|UI/스타일 파일 추가/수정|🌐|국제화/현지화|
|🎉|프로젝트 시작|💩|똥싼 코드|
|✅|테스트 추가/수정|⏪|변경 내용 되돌리기|
|🔒|보안 이슈 수정|🔀|브랜치 합병|
|🔖|릴리즈/버전 태그|📦|컴파일된 파일 추가/수정|
|💚|CI 빌드 수정|👽|외부 API 변화로 인한 수정|
|📌|특정 버전 의존성 고정|🚚|리소스 이동, 이름 변경|
|📄|라이센스 추가/수정|💡|주석 추가/수정|
|🍻|술 취해서 쓴 코드|🗃|데이버베이스 관련 수정|
|🔊|로그 추가/수정|🙈|.gitignore 추가/수정|

