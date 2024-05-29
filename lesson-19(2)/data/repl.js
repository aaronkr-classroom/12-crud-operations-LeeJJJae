// models/REPL.js
"use strict";

/**
 * Listing 18.3 (p. 261)
 * REPL 터미널에서 새로운 사용자 생성
 */
var testUser;
User.create({
  name: {
    first: "Jon",
    last: "Wexler",
  },
  email: "jon@wexler.com",
  password: "pass1234",
})
  .then((user) => {
    testUser = user;
  })
  .catch((error) => {
    console.log(error.message); // 새로운 사용자 생성
  });

/**
 * 노트: 메일 어드레스의 충돌 관련 에러 메시지가 출력된다면 데이터베이스에 동일한
 * 이메일을 갖고 있는 사용자가 있다는 의미다(이는 우리가 세운 스키마에 의하면 있어서는
 * 안 될 일이다). 이런 상황을 우회하기 위해 다른 이메일을 사용하든지 아니면 find()
 * 메서드를 생성 대신에 사용한다. 이는 User.findOne({email: "jon@jonwexler.com"})
 * .then(u => testUser = u).catch(e => console.log(e.message));처럼 사용하면 된다.
 */

/**
 * Listing 18.5 (p. 262)
 * REPL 터미널에서 구독자와 사용자의 연결
 */
var targetSubscriber;
Subscriber.findOne({
  email: testUser.email,
})
  .then((subscriber) => {
    targetSubscriber = subscriber; // targetSubscriber 변수를 사용자의 이메일로 찾은 구독자(subscriber)로 설정
    console.log(`Found subscriber: ${targetSubscriber.getInfo()}`);
  })
  .catch((error) => {
    console.log(error.message);
  });

/**
 * Listing 18.6 (p. 263)
 * REPL 터미널에서 사용자와 구독자의 연결
 */
var testUser;
User.create({
  name: {
    first: "Jon",
    last: "Wexler",
  },
  email: "jon@wexler.com",
  password: "pass1234",
})
  .then((user) => {
    testUser = user;
    return Subscriber.findOne({
      email: user.email,
    }); // 사용자 이메일로 구독자 찾기
  })
  .then((subscriber) => {
    // 구독자와 사용자의 연결
    testUser.subscribedAccount = subscriber;
    testUser
      .save()
      .then((user) => {
        console.log("user updated");
      })
      .catch((error) => {
        console.log(error.message);
      });
  })
  .catch((error) => {
    console.log(error.message);
  });

/**
 * 노트: 데이터베이스 퀴리의 테스트를 위해 REPL 환경으로 옮겼다. 따라서 더 이상
 * 필요치 않은 subscriber의 요청 부분은 삭제 가능하다.
 */
