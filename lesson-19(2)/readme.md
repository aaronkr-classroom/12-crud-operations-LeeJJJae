# 사용자 모델 제작

## 모델의 생성과 읽기 (19과)

1. Create functions for `new` and `create` in `controllers/userController.js`.<br>
   `controllers/userController.js`에 `new`와 `create` 함수를 생성합니다.
2. Add `new` and `create` routes for users in `main.js`.<br>
   `main.js`에 사용자의 `new`와 `create` 라우트를 추가합니다.
3. Add a pre('save') hook to the `User` model in `models/User.js`.<br>
   `models/User.js`의 `User` 모델에 `pre('save')` 훅을 추가합니다.
4. Add a `show` route for users in `main.js` using the `:id` parameter.<br>
   `main.js`에 `:id` 매개변수를 사용하여 사용자의 `show` 라우트를 추가하다.
5. Add a `show` route for users in `main.js` using the `:id` parameter. <br>
   `controllers/userController.js`에 함수를 생성합니다.

---

## 과제 파일

These files will need to be updated to complete the assignment. / 이 파일들을 업데이트하여 과제를 완료해야 합니다.

- [lesson-19](./lesson-19) (CREATE + READ)
  - /models/User.js `(2/2)`
  - /controllers/userController.js `(2/2)`

---

## 전체 파일

```
├── main.js (18과: usersController.indexView 추가, 19과: `new, create, show` 라우트 추가)
├── package-lock.json
├── package.json
│
├── /controllers
│   ├── errorController.js
│   ├── homeController.js (17과: `courses` 배열 삭제해도 됨)
│   ├── subscribersController.js
│   └── usersController.js (18과: 새로 생성, 19과: `new, create, show` 함수 추가)
│
├── /data
│   ├── repl.js (REPL 명령어 - 보기만 해도 됨)
│   ├── seedCourses.js (17과: `node seedCourses.js`로 실행)
│   ├── seedSubscribers.js (17과: `node seedSubscribers.js`로 실행)
│   └── seedUsers.js (18과: `node seedUsers.js`로 실행)
│
├── /models
│   ├── `Course.js` (17과)
│   ├── `Subscriber.js` (17과)
│   └── `User.js` (18과: 새로 생성, 19과: `pre('save')` 훅)
│
├── /public
│   ├── /css
│   ├── /img
│   └── /js
│
├── /views
│   ├── /partials
|   |   ├── _confetti.ejs
|   |   ├── _navigation.ejs (17과: 구독자, 코스, 사용자 목록 링크 추가)
│   │   ├── _footer.ejs
│   │   └── _header.ejs
│   │
│   ├── /users (18과: 새로 생성)
│   │   ├── index.ejs (18과: 새로 생성)
│   │   ├── new.ejs (19과: 새로 생성)
│   │   └── show.ejs (19과: 새로 생성)
│   │
│   ├── contact.ejs
│   ├── error.ejs
│   ├── index.ejs
│   ├── layout.ejs
│   ├── subscribers.ejs (17과: 구독자 정보 데이터 추가)
│   ├── thanks.ejs
│   └── transportation.ejs
```
