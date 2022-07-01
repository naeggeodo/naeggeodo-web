# 내꺼도 V1 
내꺼도 V1은 MVP 버전이며 V2에서는 ios, android 앱과 함께 업그레이드된 기능을 제공할 예정입니다.<br/>
[내꺼도 Ver1 바로가기](https://naeggeodo.com/chat-rooms?buildingCode=1168011800104670029027315)


### 📱 팀원
|                | Jayden  | Minhyeok  | Dahye | Seoyun | Sanghoon |
|----------------|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|
| **Github**     | [<img src="https://github.com/cjy0019.png?size=150" width="150px;" alt="cjy0019"/>](https://github.com/cjy0019) | [<img src="https://github.com/kmh916.png?size=150" width="150px;" alt=""/>](https://github.com/kmh916) | [<img src="https://github.com/jodahye.png?size=150" width="150px;" alt="jodahye"/>](https://github.com/JODAHYE) | [<img src="https://github.com/seoyun75.png?size=150" width="150px;" alt="seoyoon"/>](https://github.com/seoyun75) | [<img src="https://github.com/uasang01.png?size=150" width="150px;" alt=""/>](https://uasang01.tistory.com/) |
| **E-mail**     | cjy0029@naver.com | kmh102808@gmail.com | dahye8043@gmail.com | goeun944@gmail.com  | ddhtyuu@gmail.com  |
| **Github**     | https://github.com/cjy0019  | https://github.com/kmh916 | https://github.com/JODAHYE  |  https://github.com/seoyun75  | https://github.com/uasang01 | 
| **Blog**       | https://velog.io/@cjy0029 | https://velog.io/@kmh916 | https://dal-dagury.tistory.com/  | 🛵 | https://uasang01.tistory.com/ | 
| **Position**   | FrontEnd / IOS | BackEnd | FrontEnd | BackEnd | Android |

## 서비스 설명

우리 서비스는 배달비를 더치페이하는 서비스 입니다.

### 🛵 계속해서 오르는 배달비

- 비싼 배달비에 주문이 망설여지시나요?

### 🧑‍🤝‍🧑 옆집, 윗집 내 이웃들과

- 같은 건물의 사람들끼리 먹고 싶은 음식을 함께 시켜 배달비를 절약할 수 있습니다.

### 🍽️ 집 앞에서 원하는 음식을!

- 채팅을 통해 원하는 음식을 결정하고 아파트 로비, 로비 1층 등 원하는 곳에서 음식을 받아 가세요.

## 🔨 기능 소개

#### 인덱스 렌딩 페이지
1. https://naeggeodo.com 에 접속했을 때 가장 먼저 보여지는 화면입니다.
2. 하트 버튼을 눌러 내꺼도 앱에 대한 응원을 할 수 있습니다.

#### 로그인 / 홈 탭 기능
1. 사용자는 카카오, 네이버 로그인을 통해 회원가입 / 로그인할 수 있습니다.
2. 로그인은 accessToken과 refreshToken로 관리되며 약 일주일간 별도의 로그인 없이 유지됩니다.
3. 로그인하지 않고 채팅방 생성하기를 누르면 로그인을 먼저 하라는 모달 알림이 뜹니다.
4. 같은 방식으로 로그인 없이 내꺼톡, 내꺼톡 생성, 마이페이지에 접근하면 로그인페이지로 리다이렉트 처리됩니다.
5. 로그인은 하였지만 위치 설정을 하지 않고 음식 카테고리를 클릭하거나 내꺼톡 생성하기 버튼을 눌렀을 때 위치설정을 먼저 하라는 모달 알림이 뜹니다.
6. 로그인을 후 서비스에 접속하면 daum-post-code 서비스를 통해 원하는 아파트를 설정할 수 있다.
7. 아파트나 공동주택이 아니면 선택이 불가합니다.
8. 같은 아파트나 빌라일 경우, 음식 카테고리에 따라 채팅방을 확인할 수 있습니다.
9. 채팅방 리스트에서 '함께 주문하기' 버튼을 클릭하면 해당 채팅방으로 이동합니다.

#### 내꺼톡 탭 기능
1. 현재 참여 중인 내꺼톡 리스트가 렌더링됩니다.
2. 리스트에서 채팅방 제목과 위치정보 해당 채팅방에서 마지막으로 주고받은 메시지 내용이 렌더링 됩니다.
3. 리스트에서 각 채팅방을 클릭하면 원래 참여 중이던 채팅방에 빠르게 입장이 가능합니다.
4. 해당 채팅방의 방장(방을 만든 사람)일 경우 수정 아이콘이 표시되며 클릭 시 제목 수정이 가능하도록 input 창이 만들어집니다.
5. input에 변경할 이름을 입력하고 엔터를 치거나 완료(체크)버튼을 클릭하면 채팅방 제목이 수정됩니다.
6. 단, 빈문자열을 입력했을 때는 원래의 제목으로 돌아갑니다.

#### 내꺼톡 생성 탭 기능
1. 내꺼톡 생성 탭을 클릭하면 언제 주문할지를 설정하는 화면이 렌더링 됩니다.
2. 컴포넌트로 분기 처리하여 언제 주문할지 선택하지 않았다면 다음 단계로 넘어갈 수 없습니다.
3. 언제 주문할지 선택했다면 상세 정보를 입력하는 페이지가 렌더링 됩니다.
4. 제목, 카테고리, 입장인원은 필수 입력 요소로 꼭 입력해야 생성하기 버튼이 활성화됩니다.
5. 링크 입력 파트는 정규표현식으로 필터링이 됩니다.
6. 태그를 입력한 후 엔터를 입력하면 태그가 생성되고 다시 태그를 클릭할 시에는 태그가 삭제됩니다.
7. 채팅방이미지를 커스텀하여 생성할 수 있습니다.
8. 만약 이미지를 넣지 않는다면 해당 음식 카테고리에 따라 적절한 채팅방이미지가 자동으로 삽입됩니다.
9. 모든 정보를 입력하면 약 1.5초간의 delay이후 생성한 채팅방으로 바로 이동됩니다.

#### 채팅 기능
1. 채팅방 해더에는 채팅방 제목, 입장 가능 인원, 현재 참여 중인 인원, 생성할 때 입력한 배달 정보 링크가 표시됩니다.
2. 현재 인원은 웹 소켓 통신으로 실시간으로 업데이트됩니다.
3. 현재 인원과 최대인원이 같아질 경우 빨간색으로 표시되며 새로운 유저는 채팅방에 접근이 불가능해집니다.
4. 헤더에 햄버거 바(메뉴 바)를 클릭하면 내꺼톡 서랍이 열리고 주고 받은 사진과 참여하고 있는 유저들을 확인할 수 있습니다.
5. 참여 중인 유저도 웹 소켓 통신으로 실시간으로 업데이트되며 방장에게는 왕관아이콘이 표시됩니다.
6. 또한 방장에게는 강퇴 권한도 주어지며 다른 유저에 부여된 강퇴 버튼을 클릭 시 해당 유저는 방에서 강제 퇴장 조치 됩니다.
7. 이미지는 서버 용량 문제로 서버에는 저장하지 않고 리덕스에만 일시적으로 저장되어집니다. 따라서 새로고침시 서랍에 있는 이미지 데이터는 사라집니다.
8. 채팅방 나가기 버튼을 클릭하면 해당 유저는 채팅방에서 나가집니다. 방장이 나가면 다음 사람에게 방장 권한이 넘어갑니다.
9. 방장에게는 '돈을 받으셨나요?' 버튼이 활성화됩니다. 일반 유저에게는 보이지 않습니다.
10. '돈을 받으셨나요?' 버튼을 클릭하면 해당 페이지로 이동하고 방장을 제외한 유저와 수령 완료 버튼이 표시됩니다.
11. 수령 완료 버튼을 클릭하면 해당 유저는 수령 완료 처리되며 돈을 받은 유저 탭으로 자동 이동됩니다.
12. 모두에게 돈을 받거나 채팅방 인원이 한 명일 경우에는 채팅방 종료하기 버튼이 활성화되고 이 버튼을 클릭했을 시 채팅이 종료되며 더 이상 검색이나 리스트에서 보이지 않습니다.
13. 채팅방에서는 일반적인 텍스트 채팅을 할 수 있습니다.
14. 새로운 유저가 들어왔을 때는 웰컴메시지가 보여집니다.
15. 퀵채팅 기능이 있어 채팅 input 옆 화살표를 클릭하면 빠르게 메시지를 전송할 수 있는 부분이 슬라이드되어 보여집니다.
16. 퀵채팅 기능에는 편집하기 기능이 있어 자주쓰는 문구를 추가/수정/삭제가 가능합니다.
17. '+'버튼을 누르면 이미지를 전송할 수 있습니다. 현재는 2MB이상의 이미지는 지원하지 않습니다.

#### 이전 생성내역 불러오기 탭 기능
1. 언제 음식을 주문할지를 선택한 후 다음 단계에서 새로입력과 이전 생성내역 불러오기를 선택할 수 있습니다.
2. 이전 생성내역 불러오기를 선택했을 때, 과거에 내가 생성한 채팅방 정보가 그대로 담겨있는 리스트가 렌더링 됩니다.
3. 채팅방 제목, 생성한 날짜/시간, 카테고리 이미지가 표시됩니다.
4. 하나의 채팅방을 선택하면 내꺼톡 생성하기 버튼이 활성화되고 클릭 시 이전과 똑같은 정보로 새로운 채팅방이 생성되고 해당 채팅방으로 이동합니다.
5. 이전 생성내역 불러오기에서 별 모양 아이콘은 즐겨찾기 기능을 뜻하고 클릭하면 리스트에서 가장 상위에 위치하게 됩니다.
6. 'x' 모양 아이콘은 삭제를 의미하며 클릭 시 이전 생성내역 불러오기에서 삭제됩니다.

#### 검색 탭 기능
1. 채팅방 제목으로 검색을 할 수 있습니다. 
2. 많이 사용된 태그가 노출이 됩니다.
3. 각각의 태그를 클릭했을 때 해당 태그를 사용한 전국의 채팅방이 모두 보여집니다.
4. 검색 탭에서는 선택한 채팅방으로 이동하는 기능이 없습니다.

#### 더보기 탭 기능
1. 더보기 탭에서는 랜덤으로 지정된 자신의 닉네임이 노출됩니다.
2. 닉네임 옆 수정하기 아이콘을 클릭했을 때 input창이 나타나며 원하는 닉네임을 입력한 후 변경이 가능합니다.
3. 단, 빈문자열을 입력하면 원래의 닉네임으로 되돌아가며 요청이 보내지지 않습니다.
4. 전체 주문 건수는 정상적으로 종료된 채팅방의 개수를 나타냅니다.
5. 참여 중인 내꺼톡을 누르면 내꺼톡 탭으로 이동합니다.
6. 건의하기, 신고하기 탭을 누르면 내용을 입력할 수 있는 모달창이 등장하고 모달창에 건의, 신고내용을 입력할 수 있습니다.
7. 공지사항, 이용약관, 개인정보 처리방침 등을 클릭하면 노션 페이지로 이동합니다.
8. 로그아웃 버튼을 누르면 로그아웃 처리되고 인덱스 페이지로 리다이렉트 됩니다.

![KakaoTalk_Photo_2022-07-02-00-32-53](https://user-images.githubusercontent.com/33951916/176928378-78a65fe7-f4e9-4feb-bc3d-216450e3e5d2.gif)

### 설계
- UI 설계 : [피그마](https://www.figma.com/file/flk99RkWlj4rw1djcltdhl/%EB%82%B4%EA%BA%BC%EB%8F%84-(1)?node-id=0%3A1)
- 디자인 시스템 : [스토리북](https://62386cabc6001b003a44886f-sxupzucvew.chromatic.com/?path=/story/chatting-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8--chat-drawer-comp)
- DB ERD : [ERD](https://www.erdcloud.com/d/Wbg7xBJihLSrvxBbG)
