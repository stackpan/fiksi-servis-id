let fc, db;

fc = {
    apiKey: "AIzaSyCYzZoMtSvibqJUwG6N7Yx-OKWOHDuytd8",
    authDomain: "jasa-service-26c3d.firebaseapp.com",
    databaseURL: "https://jasa-service-26c3d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jasa-service-26c3d",
    storageBucket: "jasa-service-26c3d.appspot.com",
    messagingSenderId: "267993345861",
    appId: "1:267993345861:web:b567f60a5e41ec5085982c",
    measurementId: "G-EKQ4P16KYN"};

firebase.initializeApp(fc);
firebase.analytics();
db = firebase.firestore();