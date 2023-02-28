import React, {useEffect, useState} from 'react';
import {useObserver} from 'mobx-react';
import {initializeApp} from "firebase/app";
import {getMessaging, getToken, onMessage} from "firebase/messaging";

const Main = () => {

  const firebaseApp = initializeApp({
    apiKey: "AIzaSyA42IH6AbE1V85UHI8ByAfnajb5Yq_jFB8",
    authDomain: "skka-ae70d.firebaseapp.com",
    projectId: "skka-ae70d",
    storageBucket: "skka-ae70d.appspot.com",
    messagingSenderId: "720770582513",
    appId: "1:720770582513:web:893c0b8ec0740d72972650",
    measurementId: "G-D1KH8CE9XS",
  });
  const messaging = getMessaging(firebaseApp);

  function getNotificationPermission() {
    // 브라우저 지원 여부 체크
    if (!("Notification" in window)) {
      alert("데스크톱 알림을 지원하지 않는 브라우저입니다.");
    }
    // 데스크탑 알림 권한 요청
    Notification.requestPermission(function (result) {
      // 권한 거절
      if(result == 'denied') {
        Notification.requestPermission();
        alert('알림을 차단하셨습니다.\n브라우저의 사이트 설정에서 변경하실 수 있습니다.');
        return false;
      }
      else if (result == 'granted'){
        alert('알림을 허용하셨습니다.');
        const token = getToken;
        console.log("token ", token);
        return token;
      }
    });

    onMessage(messaging,function(payload){
      console.log(payload.notification?.title);
      console.log(payload.notification?.body);
    })

useEffect(() => {
  getNotificationPermission()
}, [])

  return useObserver(() => (
      <div className="App">

      </div>
  ));
}}

export default Main;