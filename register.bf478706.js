!function(){function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=a.parcelRequirea4da;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,a.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,a){n[e]=a},a.parcelRequirea4da=l);var r=l("6Urw1"),o=l("bK1n4"),u=l("6Nu6u"),s=l("l0SaF"),c=(0,r.initializeApp)({apiKey:"AIzaSyC_AoWR6sIw9yYqEcm5_Le0FK59RgGenNY",authDomain:"filmoteka-js-c90cd.firebaseapp.com",databaseURL:"https://filmoteka-js-c90cd-default-rtdb.firebaseio.com",projectId:"filmoteka-js-c90cd",storageBucket:"filmoteka-js-c90cd.appspot.com",messagingSenderId:"542180533478",appId:"1:542180533478:web:cc24636cc3211b9b060727",measurementId:"G-04MJBK1QWZ"}),i=((0,o.getAnalytics)(c),(0,u.getDatabase)()),d=document.querySelector("#nameInp"),f=document.querySelector("#emailInp"),m=document.querySelector("#userInp"),p=document.querySelector("#passInp");function v(e){return null===e||null!==e.match(/^ *$/)}document.querySelector("#sub_signup_btn").addEventListener("click",(function(){if(v(d.value)||v(f.value)||v(m.value)||v(p.value)?(alert("You can't left any field empty"),0):/^[a-zA-Z\s]+$/.test(d.value)?/^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/.test(f.value)?/^[a-zA-Z0-9]{5,}$/.test(m.value)||(alert("-username can only be alphanumeric\n-username must be aleast 5 characters\n-username cannot contain spaces"),0):(alert("Enter a valid email!"),0):(alert("The name should only contain alphabets!"),0)){var a=(0,u.ref)(i);(0,u.get)((0,u.child)(a,"UsersLists/".concat(m.value))).then((function(a){var t;a.exists()?alert("Account already exists!"):(0,u.set)((0,u.ref)(i,"UsersLists/"+m.value),{fullname:d.value,email:f.value,username:m.value,password:(t=e(s).AES.encrypt(p.value,p.value),t.toString())}).then((function(){alert("User added successfully"),window.location="login.html"})).catch((function(){alert("error"+error)}))}))}}))}();
//# sourceMappingURL=register.bf478706.js.map
