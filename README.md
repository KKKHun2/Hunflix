# themovieDB에서 받아온 정보들로 HunFlix 제작



# 배포 링크
https://hunflix.vercel.app/
## QR코드 :<br />

<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/ab7f59aa-f313-4272-bbb5-55327079df9c.png" alt="훈플릭스" width="200" height="200">




# app 메인화면 (/Home)

  메인화면에 배너에는 상영중 영화가 등수로 1~5등까지가 3초시간에 맞춰 슬라이드기능으로 5개영화가 돌아가면서 보여주게 했습니다.
    <br />
    
  ![image](https://github.com/KKKHun2/Hunflix/assets/105702862/2aa10d0e-2704-4d59-8ddd-da3eb4162465)
  <br />
  배너 우측 하단에 호버기능을 가진 원을 넣어서 해당 원에 마우스가 가게되면 해당 영화가 배너에 보이게 했습니다.
    <br /> 
<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/94ccd7e6-1169-4d5a-8d29-1a6bfab06b8b.png" width="600" height="400">
    <br />

## Header

헤더부분에도 에니메이션 효과를 넣어서 Home화면과 TvShow 페이지 둘 중 현재 어떤 페이지에 있는지 확인 가능하도록 하였습니다.

그리고 검색부분은 누르면 인풋창 애니메이션 효과와 함께 열려서 검색이 가능합니다.
## DarkMode
다크모드 기능을 넣어서 사용자가 화면을 더 편안하게 사용하고 시야 피로를 줄이는 데 도움이 되며, 사용자에게 선택권을 제공하여 개인적인 환경에 맞게 설정할 수 있도록 하였습니다.

<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/5bda65f9-bfab-4af5-9f34-6a3f05309c91.png" width="600" height="400">

<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/74bf1dc5-4c56-461c-ac59-c9c379a8d89b.png" width="600" height="400">


<br />
<br />
<br />

# Home page

  <br />
 Home 화면에는 상영중,출시예정,인기 영화들로 3개의 슬라이드를 구성했습니다.
 
![image](https://github.com/KKKHun2/Hunflix/assets/105702862/b2d3cb28-68fe-45fa-89c9-e0a5e0697be1)
 
  해당 api 코드
  <br />
<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/dcd2d25e-e21c-4b18-8d9b-4106d6ae165c.png" width="600" height="400">


# Tv Show page(/Tv show)

tv쇼에서도 Home화면과 동일하게 3개의 슬라이드 한국 인기드라마, 전세계 인기 드라마,평점 높은 드라마 이렇게 3개로 구성했습니다. 

  <br />
api코드로 데이터를 가져오는 코드
  <br />
<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/95789d1d-3603-4f07-88e1-dffc20e3d13c.png" width="600" height="400">



# app 검색화면(/Search)


<div align=center>
  
키워드 검색시
<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/3c61e10a-6889-47ef-aa70-06c0a6b888fa.png" width="400" height="400">
</a>
키워드 없을시 
 <img src="https://github.com/KKKHun2/Hunflix/assets/105702862/4e0e3f69-853b-4215-86f8-3651f34eb1e3.png" width="400" height="400">
</a>

</div>


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

