(this["webpackJsonpproject-flags"]=this["webpackJsonpproject-flags"]||[]).push([[0],{535:function(e,t,n){},536:function(e,t,n){},537:function(e,t,n){},538:function(e,t,n){},540:function(e,t,n){},541:function(e,t,n){},542:function(e,t,n){},543:function(e,t,n){},544:function(e,t,n){},547:function(e,t,n){},565:function(e,t,n){},566:function(e,t,n){},567:function(e,t,n){},568:function(e,t,n){"use strict";n.r(t);n(295),n(204),n(344);var a,o=n(32),c=n(150),r=n(10),s=function(e){switch(e.slice(0,2)){case"en":return{appName:"Komax machine status check",backendLocation:window.location.protocol+"//"+window.location.hostname+window.location.pathname+"backend/index.php",connectioErrorTxt:{msgTitle:"Something was wrong",errorTxt:"Please contact your system administrator to fix error: ",configTxt:"There is configuration issue on: "},noDataWarningResp:{errorTxt:"The database is empty",configTxt:"Please make some data scanning and try again"},connectionCheckRespond:{errorMsg:"",configAddress:""},initialRequest:{isResponseEmpty:!0,response:[]},tableHeaderLanguages:{machineName:"Machine name",machineStatus:"Machine status overall",detailsHistory:"History",statusDate:"Date",machineStatusDetails:"Status",affectedComponents:"Affected Components",startDate:"Start date",endDate:"End date",requestBtn:"Request"},successResponFromServer:"Success",appWindowBtn:{nameIE:"Close window",name:"To fullscreen",color:"#757575",classes:"btn btn--color btn--moveRight",btnType:"windowCtrButton",oppositBtnName:"To small screen",oppositBtnNameIE:"Close window"},appResetBtn:{name:"Reset results",color:"#26a69a",classes:"btn btn--color btn--moveLeft",btnType:"appStateCtr"},appContentCard:[{id:0,header:"Wire cutting",action:"Check",image:"img/img--1.png",textContent:["1. Ceramic the plug for presence and damage","2. Check wire supply sleeve for damage","3. Check the plug for presence and damage"],textBlockStyles:{backgroundColor:"#ff3d00",color:"#fff"},barcodeMsg:"Scan the barcode to continue",barcodeColors:{ok:"#66bb6a",nok:"#ff3d00"}},{id:1,header:"Alignment of wire",action:"Check",image:"img/img--2.png",textContent:["4. Wear belts of the drawing mechanism and rolles","5. Edged blades for presence and damage"],textBlockStyles:{backgroundColor:"#ff3d00",color:"#fff"},barcodeMsg:"Scan the barcode to continue",barcodeColors:{ok:"#66bb6a",nok:"#ff3d00"}},{id:2,header:"Wire cutting area",action:"Check",image:"img/img--3.png",textContent:["6. Ceramic plugs along the wire for presence and damage","7. Ceramic ring for cutting wire near the machine. Presence and damage"],textBlockStyles:{backgroundColor:"#f4ff81",color:"#000"},barcodeMsg:"Scan the barcode to continue",barcodeColors:{ok:"#66bb6a",nok:"#f4ff81"}},{id:3,header:"Crimping area",action:"Check",image:"img/img--4.png",textContent:["8. Availability and serviceability of wire clamps","9. Cleanliness of crimping stations","10. Cleanliness of seal stations"],textBlockStyles:{backgroundColor:"#f4ff81",color:"#000"},barcodeMsg:"Scan the barcode to continue",barcodeColors:{ok:"#66bb6a",nok:"#f4ff81"}},{id:4,header:"Work area",action:"Check",image:"img/img--5.png",textContent:['11. Readiness of the "Dino" microscope',"12. Readiness of lighting"],textBlockStyles:{backgroundColor:"#f4ff81",color:"#000"},barcodeMsg:"Scan the barcode to continue",barcodeColors:{ok:"#66bb6a",nok:"#f4ff81"}},{id:5,header:"Desktop",action:"Check",image:"img/img--6.png",textContent:["13. Availability of the tool according to the list","14. Holograms on micrometers and ruler"],textBlockStyles:{backgroundColor:"#f4ff81",color:"#000"},barcodeMsg:"Scan the barcode to continue",barcodeColors:{ok:"#66bb6a",nok:"#f4ff81"}}],machineStatusArray:[],appAuthor:{contactLink:"https://www.facebook.com/oddisey000",authorName:"Vitalii Pertsovych"}};case"uk":return{appName:"\u041f\u0443\u043d\u043a\u0442\u0438 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0438 \u0440\u043e\u0431\u043e\u0447\u043e\u0433\u043e \u043c\u0456\u0441\u0446\u044f",backendLocation:window.location.protocol+"//"+window.location.hostname+window.location.pathname+"backend/index.php",connectioErrorTxt:{msgTitle:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",errorTxt:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0437\u0432\u0435\u0440\u043d\u0456\u0442\u044c\u0441\u044f \u0434\u043e \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0433\u043e \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430, \u043f\u043e\u043c\u0438\u043b\u043a\u0430: ",configTxt:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0443 \u0444\u0430\u0439\u043b\u0456 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457: "},noDataWarningResp:{errorTxt:"\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u0438\u0445 \u043f\u043e\u0440\u043e\u0436\u043d\u044f",configTxt:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0437\u0456\u0441\u043a\u0430\u043d\u0443\u0439\u0442\u0435 \u0434\u0430\u043d\u0456 \u0431\u043e\u0434\u0430\u0439 \u043e\u0434\u043d\u0456\u0454\u0457 \u043c\u0430\u0448\u0438\u043d\u0438"},connectionCheckRespond:{errorMsg:"",configAddress:""},initialRequest:{isResponseEmpty:!0,response:[]},tableHeaderLanguages:{machineName:"\u041d\u0430\u0437\u0432\u0430 \u043c\u0430\u0448\u0438\u043d\u0438",machineStatus:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",detailsHistory:"\u0406\u0441\u0442\u043e\u0440\u0456\u044f",statusDate:"\u0414\u0430\u0442\u0430",machineStatusDetails:"\u0421\u0442\u0430\u043d",affectedComponents:"\u0423\u0440\u0430\u0436\u0435\u043d\u0456 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438",startDate:"\u041f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0430 \u0434\u0430\u0442\u0430",endDate:"\u041a\u0456\u043d\u0446\u0435\u0432\u0430 \u0434\u0430\u0442\u0430",requestBtn:"\u041e\u0442\u0440\u0438\u043c\u0430\u0442\u0438"},successResponFromServer:"\u0423\u0441\u043f\u0456\u0448\u043d\u043e",appWindowBtn:{nameIE:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438 \u0432\u0456\u043a\u043d\u043e",name:"\u041d\u0430 \u0432\u0435\u0441\u044c \u0435\u043a\u0440\u0430\u043d",color:"#757575",classes:"btn btn--color btn--moveRight",btnType:"windowCtrButton",oppositBtnName:"\u0412\u0456\u043a\u043e\u043d\u043d\u0438\u0439 \u0440\u0435\u0436\u0438\u043c",oppositBtnNameIE:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438 \u0432\u0456\u043a\u043d\u043e"},appResetBtn:{name:"\u041d\u043e\u0432\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0430",color:"#26a69a",classes:"btn btn--color btn--moveLeft",btnType:"appStateCtr"},appContentCard:[{id:0,header:"\u041d\u0430\u0440\u0456\u0437\u0430\u043d\u043d\u044f \u043f\u0440\u043e\u0432\u043e\u0434\u0443",action:"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438",image:"img/img--1.png",textContent:["1. \u041a\u0435\u0440\u0430\u043c\u0456\u0447\u043d\u0443 \u0432\u0442\u0443\u043b\u043a\u0443 \u043d\u0430 \u043d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0456 \u043f\u043e\u0448\u043a\u043e\u0434\u0436\u0435\u043d\u043d\u044f","2. \u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0447\u0438\u0439 \u0448\u043b\u0430\u043d\u0433 \u043f\u043e\u0434\u0430\u0447\u0456 \u043f\u0440\u043e\u0432\u043e\u0434\u0443 \u043d\u0430 \u043f\u043e\u0448\u043a\u043e\u0434\u0436\u0435\u043d\u043d\u044f","3. \u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0447\u0456 \u0432\u0442\u0443\u043b\u043a\u0438 \u043d\u0430 \u043d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0456 \u043f\u043e\u0448\u043a\u043e\u0434\u0436\u0435\u043d\u043d\u044f"],textBlockStyles:{backgroundColor:"#ff3d00",color:"#fff"},barcodeMsg:"\u0412\u0456\u0434\u0441\u043a\u0430\u043d\u0443\u0439\u0442\u0435 barcode \u0449\u043e\u0431 \u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438",barcodeColors:{ok:"#66bb6a",nok:"#ff3d00"}},{id:1,header:"\u0412\u0438\u0440\u0456\u0432\u043d\u044e\u0432\u0430\u043d\u043d\u044f \u043f\u0440\u043e\u0432\u043e\u0434\u0443",action:"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438",image:"img/img--2.png",textContent:["4. \u0417\u043d\u043e\u0448\u0435\u043d\u043d\u044f \u043f\u0430\u0441\u0456\u0432 \u043c\u0435\u0445\u0430\u043d\u0456\u0437\u043c\u0443 \u043f\u0440\u043e\u0442\u044f\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u0456 \u0440\u043e\u043b\u0438\u043a\u0456\u0432","5. \u041e\u0431\u0440\u0456\u0437\u043d\u0456 \u043d\u043e\u0436\u0456 \u043d\u0430 \u043d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0456 \u043f\u043e\u0448\u043a\u043e\u0434\u0436\u0435\u043d\u043d\u044f"],textBlockStyles:{backgroundColor:"#ff3d00",color:"#fff"},barcodeMsg:"\u0412\u0456\u0434\u0441\u043a\u0430\u043d\u0443\u0439\u0442\u0435 barcode \u0449\u043e\u0431 \u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438",barcodeColors:{ok:"#66bb6a",nok:"#ff3d00"}},{id:2,header:"\u041d\u0430\u0440\u0456\u0437\u0430\u043d\u043d\u044f \u043f\u0440\u043e\u0432\u043e\u0434\u0443",action:"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438",image:"img/img--3.png",textContent:["6. \u041a\u0435\u0440\u0430\u043c\u0456\u0447\u043d\u0456 \u0432\u0442\u0443\u043b\u043a\u0438 \u043d\u0430 \u043f\u0440\u043e\u0442\u044f\u0436\u0446\u0456 \u043f\u0440\u043e\u0432\u043e\u0434\u0443 \u043d\u0430 \u043d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0442\u0430 \u043f\u043e\u0448\u043a\u043e\u0434\u0436\u0435\u043d\u043d\u044f","7. \u041a\u0435\u0440\u0430\u043c\u0456\u0447\u043d\u0435 \u043a\u0456\u043b\u044c\u0446\u0435 \u0434\u043b\u044f \u043d\u0430\u0440\u0456\u0437\u0430\u043d\u043d\u044f \u043f\u0440\u043e\u0432\u043e\u0434\u0443 \u0431\u0456\u043b\u044f \u043c\u0430\u0448\u0438\u043d\u0438 \u043d\u0430 \u043d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0442\u0430 \u043f\u043e\u0448\u043a\u043e\u0434\u0436\u0435\u043d\u043d\u044f"],textBlockStyles:{backgroundColor:"#f4ff81",color:"#000"},barcodeMsg:"\u0412\u0456\u0434\u0441\u043a\u0430\u043d\u0443\u0439\u0442\u0435 barcode \u0449\u043e\u0431 \u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438",barcodeColors:{ok:"#66bb6a",nok:"#f4ff81"}},{id:3,header:"\u041a\u0440\u0438\u043c\u043f\u0443\u0432\u0430\u043d\u043d\u044f",action:"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438",image:"img/img--4.png",textContent:["8. \u041d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0442\u0430 \u0441\u043f\u0440\u0430\u0432\u043d\u0456\u0441\u0442\u044c \u0437\u0430\u0442\u0438\u0441\u043a\u0430\u0447\u0456\u0432 \u0448\u043f\u0443\u043b\u044c","9. \u0427\u0438\u0441\u0442\u043e\u0442\u0443 \u0441\u0442\u0430\u043d\u0446\u0456\u0439 \u043a\u0440\u0438\u043c\u043f\u0443\u0432\u0430\u043d\u043d\u044f","10. \u0427\u0438\u0441\u0442\u043e\u0442\u0443 \u0441\u0442\u0430\u043d\u0446\u0456\u0439 \u0442\u0443\u043b\u0435\u0439\u043e\u043a"],textBlockStyles:{backgroundColor:"#f4ff81",color:"#000"},barcodeMsg:"\u0412\u0456\u0434\u0441\u043a\u0430\u043d\u0443\u0439\u0442\u0435 barcode \u0449\u043e\u0431 \u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438",barcodeColors:{ok:"#66bb6a",nok:"#f4ff81"}},{id:4,header:"\u0420\u043e\u0431\u043e\u0447\u0430 \u0434\u0456\u043b\u044f\u043d\u043a\u0430",action:"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438",image:"img/img--5.png",textContent:['11. \u0421\u043f\u0440\u0430\u0432\u043d\u0456\u0441\u0442\u044c \u043c\u0456\u043a\u0440\u043e\u0441\u043a\u043e\u043f\u0430 "\u0414\u0456\u043d\u043e"',"12. \u0421\u043f\u0440\u0430\u0432\u043d\u0456\u0441\u0442\u044c \u043e\u0441\u0432\u0456\u0442\u043b\u0435\u043d\u043d\u044f"],textBlockStyles:{backgroundColor:"#f4ff81",color:"#000"},barcodeMsg:"\u0412\u0456\u0434\u0441\u043a\u0430\u043d\u0443\u0439\u0442\u0435 barcode \u0449\u043e\u0431 \u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438",barcodeColors:{ok:"#66bb6a",nok:"#f4ff81"}},{id:5,header:"\u0420\u043e\u0431\u043e\u0447\u0438\u0439 \u0441\u0442\u0456\u043b",action:"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438",image:"img/img--6.png",textContent:["13. \u041d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0443 \u0437\u0433\u0456\u0434\u043d\u043e \u043f\u0435\u0440\u0435\u043b\u0456\u043a\u0443","14. \u0413\u043e\u043b\u043e\u0433\u0440\u0430\u043c\u0438 \u043d\u0430 \u043c\u0456\u043a\u0440\u043e\u043c\u0435\u0442\u0440\u0430\u0445 \u0456 \u043b\u0456\u043d\u0456\u0439\u0446\u0456"],textBlockStyles:{backgroundColor:"#f4ff81",color:"#000"},barcodeMsg:"\u0412\u0456\u0434\u0441\u043a\u0430\u043d\u0443\u0439\u0442\u0435 barcode \u0449\u043e\u0431 \u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438",barcodeColors:{ok:"#66bb6a",nok:"#f4ff81"}}],machineStatusArray:[],appAuthor:{contactLink:"https://www.facebook.com/oddisey000",authorName:"Vitalii Pertsovych"}};default:return{appName:"Komax machine status check",backendLocation:window.location.protocol+"//"+window.location.hostname+window.location.pathname+"backend/index.php",connectioErrorTxt:{msgTitle:"Something was wrong",errorTxt:"Please contact your system administrator to fix error: ",configTxt:"There is configuration issue on: "},noDataWarningResp:{errorTxt:"The database is empty",configTxt:"Please make some data scanning and try again"},connectionCheckRespond:{errorMsg:"",configAddress:""},initialRequest:{isResponseEmpty:!0,response:[]},tableHeaderLanguages:{machineName:"Machine name",machineStatus:"Machine status overall",detailsHistory:"History",statusDate:"Date",machineStatusDetails:"Status",affectedComponents:"Affected Components",startDate:"Start date",endDate:"End date",requestBtn:"Request"},successResponFromServer:"Success",appWindowBtn:{nameIE:"Close window",name:"To fullscreen",color:"#757575",classes:"btn btn--color btn--moveRight",btnType:"windowCtrButton",oppositBtnName:"To small screen",oppositBtnNameIE:"Close window"},appResetBtn:{name:"Reset results",color:"#26a69a",classes:"btn btn--color btn--moveLeft",btnType:"appStateCtr"},appContentCard:[{id:0,header:"Wire cutting",action:"Check",image:"img/img--1.png",textContent:["1. Ceramic the plug for presence and damage","2. Check wire supply sleeve for damage","3. Check the plug for presence and damage"],textBlockStyles:{backgroundColor:"#ff3d00",color:"#fff"},barcodeMsg:"Scan the barcode to continue",barcodeColors:{ok:"#66bb6a",nok:"#ff3d00"}},{id:1,header:"Alignment of wire",action:"Check",image:"img/img--2.png",textContent:["4. Wear belts of the drawing mechanism and rolles","5. Edged blades for presence and damage"],textBlockStyles:{backgroundColor:"#ff3d00",color:"#fff"},barcodeMsg:"Scan the barcode to continue",barcodeColors:{ok:"#66bb6a",nok:"#ff3d00"}},{id:2,header:"Wire cutting area",action:"Check",image:"img/img--3.png",textContent:["6. Ceramic plugs along the wire for presence and damage","7. Ceramic ring for cutting wire near the machine. Presence and damage"],textBlockStyles:{backgroundColor:"#f4ff81",color:"#000"},barcodeMsg:"Scan the barcode to continue",barcodeColors:{ok:"#66bb6a",nok:"#f4ff81"}},{id:3,header:"Crimping area",action:"Check",image:"img/img--4.png",textContent:["8. Availability and serviceability of wire clamps","9. Cleanliness of crimping stations","10. Cleanliness of seal stations"],textBlockStyles:{backgroundColor:"#f4ff81",color:"#000"},barcodeMsg:"Scan the barcode to continue",barcodeColors:{ok:"#66bb6a",nok:"#f4ff81"}},{id:4,header:"Work area",action:"Check",image:"img/img--5.png",textContent:['11. Readiness of the "Dino" microscope',"12. Readiness of lighting"],textBlockStyles:{backgroundColor:"#f4ff81",color:"#000"},barcodeMsg:"Scan the barcode to continue",barcodeColors:{ok:"#66bb6a",nok:"#f4ff81"}},{id:5,header:"Desktop",action:"Check",image:"img/img--6.png",textContent:["13. Availability of the tool according to the list","14. Holograms on micrometers and ruler"],textBlockStyles:{backgroundColor:"#f4ff81",color:"#000"},barcodeMsg:"Scan the barcode to continue",barcodeColors:{ok:"#66bb6a",nok:"#f4ff81"}}],machineStatusArray:[],appAuthor:{contactLink:"https://www.facebook.com/oddisey000",authorName:"Vitalii Pertsovych"}}}}(navigator.language||navigator.userLanguage),i=Object(r.a)({},s),l="CHANGE_APP_WINDOW_MODE",d="CREATE_MACHINE_STATUS_ARRAY",u="RESET_MACHINE_STATUS_ARRAY",m="DB_CONNECTION_TEST",b="GET_DATA_FROM_API",p="GET_STATISTIC_FROM_API",g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(r.a)(Object(r.a)({},e),{},{appWindowBtn:Object(r.a)(Object(r.a)({},e.appWindowBtn),{},{name:t.payload.name,oppositBtnName:t.payload.oppositBtnName})});case d:case u:return Object(r.a)(Object(r.a)({},e),{},{machineStatusArray:t.payload});case m:return Object(r.a)(Object(r.a)({},e),{},{connectionCheckRespond:t.payload});case b:return Object(r.a)(Object(r.a)({},e),{},{initialRequest:t.payload});case p:return Object(r.a)(Object(r.a)({},e),{},{detailedStatisticFromAPI:t.payload});default:return e}},f=Object(c.a)({appReducer:g}),j=Object(c.b)(f),h=n(0),x=n.n(h),O=n(23),y=n.n(O),k=(n(535),n(99)),C=n(31),v=(n(536),n(615)),S=n(616),w=n(630),B=n(151),E=n(617),T=n(618),R=n(272),N=n.n(R),A=(n(258),n(537),n(609)),_=n(611),I=n(281),M=(n(538),function(e){var t;return!!document.documentMode?(window.opener=null,window.open("","_self"),window.close(),t={name:e.oppositBtnNameIE,oppositBtnName:e.nameIE}):(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&window.top.document.msExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):document.documentElement.webkitRequestFullscreen?document.documentElement.msRequestFullscreen():document.documentElement.msRequestFullscreen&&window.top.document.body.msRequestFullscreen(),t={name:e.oppositBtnName,oppositBtnName:e.name}),t}),D=function(e,t,n){var a=function(){for(var e=document.getElementsByClassName("barcode-block"),t=0;t<e.length;t++)e[t].style.backgroundColor="#fff",e[t].style.color="#000",e[t].style.transition="all, 1s ease",e[t].style.transform="rotateY(0deg)"},o=function(e,t){fetch(e+"?senddata="+JSON.stringify(t)).then((function(e){return e.json()})).then((function(e){c()})).catch((function(e){}))},c=function(){var e=document.getElementById("appElements"),t=document.getElementById("success_respond");e.style.display="none",t.style.display="block",setTimeout((function(){t.style.display="none",e.style.display="block"}),1e3)},r=function(e){var t=e.split("-");if(t[0]&&t[1]&&t[1]<=6&&t[2]){var n="OK"===t[2].toUpperCase()?document.getElementById(t[1]-1).getAttribute("color--ok"):document.getElementById(t[1]-1).getAttribute("color--nok");return{blockId:t[1]-1,machineName:t[0].replace(/\s/g,"")[0].toUpperCase()+t[0].replace(/\s/g,"").slice(1).toLowerCase(),machineStatus:t[2].toUpperCase(),barcodeBlockColor:n.substring(1),blockImage:"img/img--"+t[1]+".png"}}return null}(t);if(r){e.length<1&&a(),function(e,t,n){var a=document.getElementById(e),o="OK"===n?"rotateY(180deg)":"rotateY(360deg)";a.style.backgroundColor="#"+t,a.style.color="#"+t,a.style.transition="all, 1s ease",a.style.transform=o}(r.blockId,r.barcodeBlockColor,r.machineStatus);var s=function(e,t){var n=!0;if(e.length>0){for(var a=0;a<e.length;a++)if(e[a].blockId===t.blockId){e[a]=t,n=!1;break}n&&e.push(t)}else e.push(t);return e}(e||[],r);return s.sort((function(e,t){return e.blockId>t.blockId?1:t.blockId>e.blockId?-1:0})),6===s.length&&(!function(e,t){var n,a=[];if(e.map((function(e){return e.machineStatus})).toString().includes("NOK"))if("NOK"===e[0].machineStatus)n=e[0].barcodeBlockColor;else if("NOK"===e[1].machineStatus)n=e[1].barcodeBlockColor;else for(var c=0;c<e.length;c++)"NOK"===e[c].machineStatus&&(n=e[c].barcodeBlockColor);else n=e[0].barcodeBlockColor;a[0]=e[0].machineName,a[1]=n,a[2]=e.map((function(e){return e.machineStatus})).toString(),a[3]=e.map((function(e){return e.blockImage})).toString(),a[4]=e.map((function(e){return e.barcodeBlockColor})).toString(),o(t,a)}(s,n),s=[]),s}a()},F=function(e){var t={errorMsg:"",configAddress:""};return function(e){fetch(e).then((function(e){return e.json()})).then((function(e){t.configAddress=e[0],t.errorMsg=e[1]})).catch((function(e){}))}(e.appReducer.backendLocation),t},L=function(e){var t={isResponseEmpty:!1,response:[]};return function(e){fetch(e).then((function(e){return e.json()})).then((function(e){t.response=e})).catch((function(e){}))}(e.appReducer.backendLocation+"?getlateststatusdata"),t},W=function(){return{type:m,payload:F(j.getState())}},H=n(2),q=["changeAppWindow","ResetBarcodeStatusArray"],P=Object(o.b)(null,(function(e){return{changeAppWindow:function(t){return e({type:l,payload:M(t)})},ResetBarcodeStatusArray:function(t){return e({type:u,payload:(function(){for(var e=document.getElementsByClassName("barcode-block"),t=0;t<e.length;t++)e[t].style.backgroundColor="#fff",e[t].style.color="#000",e[t].style.transition="all, 1s ease",e[t].style.transform="rotateY(0deg)"}(),[])})}}}))((function(e){var t=e.changeAppWindow,n=e.ResetBarcodeStatusArray,a=Object(I.a)(e,q),o=!!document.documentMode;return Object(H.jsx)("button",{className:a.classes,style:{backgroundColor:a.color},onClick:function(){"windowCtrButton"===a.btnType?t(a):n()},children:o?a.nameIE:a.name})})),K=(n(540),function(e){var t=Object.assign({},e);return Object(H.jsx)("span",{className:"title-text uprise",children:t.appName})}),z=Object(A.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,marginTop:e.spacing(2.5),margin:e.spacing(.5)},headerElements:{marginTop:e.spacing(1),marginBottom:e.spacing(.5)}}})),Y=Object(o.b)((function(e){return{appData:Object(r.a)({},e.appReducer)}}))((function(e){var t=e.appData,n=z();return Object(H.jsx)("div",{className:n.root,children:Object(H.jsxs)(_.a,{container:!0,children:[Object(H.jsx)(_.a,{item:!0,xs:!0,className:n.headerElements,children:Object(H.jsx)(P,Object(r.a)({},t.appResetBtn))}),Object(H.jsx)(_.a,{item:!0,xs:!0,className:n.headerElements,children:Object(H.jsx)(B.a,{children:Object(H.jsx)(K,Object(r.a)({},t))})}),Object(H.jsx)(_.a,{item:!0,xs:!0,className:n.headerElements,children:Object(H.jsx)(P,Object(r.a)({},t.appWindowBtn))})]})})})),G=(n(541),n(613)),U=n(614),$=n(570),V=(n(542),function(e){var t=Object.assign({},e),n=Object(A.a)({textBlock:{backgroundColor:t.textBlockStyles.backgroundColor,color:t.textBlockStyles.color,height:"23vh",padding:".5rem",marginTop:"-0.3rem",margin:"0.1rem",overflow:"auto"}})();return Object(H.jsxs)(G.a,{className:n.root,children:[Object(H.jsx)($.a,{elevation:1,children:Object(H.jsx)("p",{className:"block-header",children:t.header})}),Object(H.jsx)($.a,{elevation:3,children:Object(H.jsx)("p",{className:"action-call",children:t.action})}),Object(H.jsx)($.a,{elevation:3,className:n.textBlock,children:t.textContent.map((function(e){return Object(H.jsx)("p",{className:"text-block",children:e},e)}))}),Object(H.jsx)(U.a,{children:Object(H.jsx)("img",{component:"img",className:"img-property",alt:"Komax machine",src:t.image})}),Object(H.jsx)($.a,{id:t.id,className:"barcode-block","color--ok":t.barcodeColors.ok,"color--nok":t.barcodeColors.nok,elevation:3,children:Object(H.jsx)("p",{className:"barcode-p",children:t.barcodeMsg})})]})}),J=Object(A.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,margin:e.spacing(.2)}}})),Q=Object(o.b)((function(e){return{appData:Object(r.a)({},e.appReducer)}}))((function(e){var t=e.appData,n=J();return Object(H.jsx)("div",{className:n.root,children:Object(H.jsx)(_.a,{container:!0,children:t.appContentCard.map((function(e){return Object(H.jsx)(_.a,{zeroMinWidth:!0,item:!0,xs:!0,children:Object(H.jsx)(V,Object(r.a)({},e))},e.id)}))})})})),X=(n(543),Object(o.b)((function(e){return{appData:Object(r.a)({},e.appReducer)}}))((function(e){var t=e.appData;return Object(H.jsxs)("span",{className:"footer-text splashInBottom",children:["This application is made by"," ",Object(H.jsx)("a",{className:"link",href:t.appAuthor.contactLink,children:t.appAuthor.authorName})," ","in Kolomyia."]})}))),Z=(n(544),Object(o.b)((function(e){return{appReducer:Object(r.a)({},e.appReducer)}}),(function(e){return{updateMachineStatusArray:function(t,n,a){return e({type:d,payload:D(t,n,a)})}}}))((function(e){var t=e.appReducer,n=e.updateMachineStatusArray;return Object(H.jsx)("div",{children:Object(H.jsx)("input",{id:"barcode",autoFocus:!0,onKeyUp:function(e){if(13===e.keyCode){var a=document.getElementById("barcode").value;n(t.machineStatusArray,a,t.backendLocation),document.getElementById("barcode").value=""}}})})}))),ee=Object(o.b)((function(e){return{appReducer:Object(r.a)({},e.appReducer)}}),(function(e){return{CheckDBConnectionAction:e(W())}}))((function(e){var t=e.appReducer;setTimeout((function(){t.connectionCheckRespond.errorMsg&&n(t.connectionCheckRespond)}),3e3);var n=function(e){var n=document.getElementById("appElements"),a=document.getElementById("warning_block");n.style.display="none",a.style.display="block",document.getElementById("errorMsg").textContent||(document.getElementById("configAddress").innerHTML=t.connectioErrorTxt.configTxt+e.configAddress,document.getElementById("errorMsg").innerHTML=t.connectioErrorTxt.errorTxt+e.errorMsg)};return Object(H.jsxs)(x.a.Fragment,{children:[Object(H.jsx)(v.a,{}),Object(H.jsxs)(S.a,{children:[Object(H.jsxs)(w.a,{p:2,bgcolor:"secondary.main",color:"primary.contrastText",id:"warning_block",children:[Object(H.jsx)(B.a,{variant:"h5",component:"h5",children:t.connectioErrorTxt.msgTitle}),Object(H.jsxs)("ul",{children:[Object(H.jsx)("li",{className:"error_list_items",id:"errorMsg"}),Object(H.jsx)("li",{className:"error_list_items",id:"configAddress"})]})]}),Object(H.jsx)(w.a,{p:2,color:"primary.contrastText",id:"success_respond",children:t.successResponFromServer})]}),Object(H.jsx)(E.a,{maxWidth:"xl",onClick:function(){document.getElementById("barcode").focus()},id:"appContainer",children:Object(H.jsxs)(B.a,{component:"div",style:{height:"100vh"},id:"appElements",children:[Object(H.jsx)(Z,{}),Object(H.jsx)(Y,{}),Object(H.jsx)(Q,{}),Object(H.jsx)(T.a,{id:"rigth_link_icon",component:k.b,to:"/status",children:Object(H.jsx)(N.a,{})}),Object(H.jsx)(X,{})]})})]})})),te=n(280),ne=n.n(te),ae=(n(547),n(116)),oe=n(81),ce=n(273),re=n.n(ce),se=n(5),ie=n(626),le=n(632),de=n(276),ue=n.n(de),me=n(278),be=n.n(me),pe=n(277),ge=n.n(pe),fe=(n(565),n(621)),je=n(622),he=n(624),xe=n(620),Oe=n(625),ye=n(623),ke=n(619),Ce=n(275),ve=n.n(Ce),Se=n(274),we=n.n(Se),Be=(n(566),Object(A.a)({root:{"& > *":{borderBottom:"unset"}}}));function Ee(e){var t=e.row,n=x.a.useState(!1),o=Object(oe.a)(n,2),c=o[0],r=o[1],s=Be();return Object(H.jsxs)(x.a.Fragment,{children:[Object(H.jsxs)(ke.a,{className:s.root,children:[Object(H.jsx)(xe.a,{children:Object(H.jsx)(T.a,{"aria-label":"expand row",size:"small",onClick:function(){return r(!c)},children:c?Object(H.jsx)(we.a,{}):Object(H.jsx)(ve.a,{})})}),Object(H.jsx)(xe.a,{component:"th",scope:"row",children:t.name}),Object(H.jsx)(xe.a,{align:"center",children:t.status})]}),Object(H.jsx)(ke.a,{children:Object(H.jsx)(xe.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(H.jsx)(fe.a,{in:c,timeout:"auto",unmountOnExit:!0,children:Object(H.jsxs)(w.a,{margin:1,children:[Object(H.jsx)(B.a,{variant:"h6",gutterBottom:!0,component:"div",children:a.tableHeaderLanguages.detailsHistory}),Object(H.jsxs)(je.a,{size:"small","aria-label":"purchases",children:[Object(H.jsx)(ye.a,{children:Object(H.jsxs)(ke.a,{children:[Object(H.jsx)(xe.a,{children:a.tableHeaderLanguages.statusDate}),Object(H.jsx)(xe.a,{align:"left",children:a.tableHeaderLanguages.machineStatusDetails}),Object(H.jsx)(xe.a,{align:"center",children:a.tableHeaderLanguages.affectedComponents})]})}),Object(H.jsx)(he.a,{children:t.history.map((function(e){return Object(H.jsxs)(ke.a,{children:[Object(H.jsx)(xe.a,{component:"th",scope:"row",children:e.date}),Object(H.jsx)(xe.a,{align:"left",children:e.status}),Object(H.jsx)(xe.a,{style:{justifyContent:"center"},align:"center",children:e.img.map((function(e,t){return Object(H.jsx)("img",{className:"affected_block--img",src:e,alt:"affected_component"},t)}))})]},e.date)}))})]})]})})})})]})}var Te=function(e){var t=Object.assign({},e);a=t;var n=[];return t.detailedStatisticFromAPI.map((function(e){var t=[];e[1].insert_date.map((function(n,a){return t.push({date:n,status:e[1].machine_status[a],img:e[1].imgs_src[a]})}));var a,o={name:e[0],status:e[1].machine_status_overall[0],history:t};return n.push({name:(a=o).name,status:a.status,history:a.history})})),Object(H.jsx)(Oe.a,{component:$.a,children:Object(H.jsxs)(je.a,{style:{borderCollapse:"unset"},children:[Object(H.jsx)(ye.a,{children:Object(H.jsxs)(ke.a,{children:[Object(H.jsx)(xe.a,{}),Object(H.jsx)(xe.a,{align:"left",children:t.tableHeaderLanguages.machineName}),Object(H.jsx)(xe.a,{align:"center",children:t.tableHeaderLanguages.machineStatus}),Object(H.jsx)(xe.a,{})]})}),Object(H.jsx)(he.a,{children:n.map((function(e){return Object(H.jsx)(Ee,{row:e},e.name)}))})]})})},Re=n(629),Ne=Object(A.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:150}}})),Ae=function(e){var t=Object.assign({},e),n=Ne();return Object(H.jsx)("form",{className:n.container,noValidate:!0,children:Object(H.jsx)(Re.a,{id:t.idLable.toLowerCase().replace(/\s/g,"_"),label:t.data,type:"date",defaultValue:function(e){var t=e.getFullYear().toString(),n=(e.getMonth()+1).toString(),a=e.getDate().toString(),o=n.split(""),c=a.split("");return t+"-"+(o[1]?n:"0"+o[0])+"-"+(c[1]?a:"0"+c[0])}(t.date),className:n.textField,InputLabelProps:{shrink:!0}})})},_e=Object(A.a)((function(e){return{list:{width:250},fullList:{width:"auto"},paper:{padding:"1rem",backgroundColor:"#fafafa",opacity:.98},button:{margin:e.spacing(1)}}})),Ie=Object(o.b)((function(e){return{appReducer:Object(r.a)({},e.appReducer)}}),(function(e){return{GetStatisticFromAPI:function(t){return e({type:p,payload:t})}}}))((function(e){var t=e.appReducer,n=e.GetStatisticFromAPI;Object(h.useEffect)((function(){t.detailedStatisticFromAPI||(a[0]=s(c),a[1]=s(o),i(a))}));var a=[],o=new Date,c=new Date;c.setDate(1),c.setMonth(c.getMonth()-1);var s=function(e){var t=e.getFullYear().toString(),n=(e.getMonth()+1).toString(),a=e.getDate().toString(),o=n.split(""),c=a.split("");return t+"-"+(o[1]?n:"0"+o[0])+"-"+(c[1]?a:"0"+c[0])},i=function(e){re.a.post(t.backendLocation+"?getstatusreport="+JSON.stringify(e)).then((function(e){var t=Object.entries(e.data);n(t)}))},l={data:{startDate:{data:t.tableHeaderLanguages.startDate,date:c,idLable:"Start date"},endDate:{data:t.tableHeaderLanguages.endDate,date:o,idLable:"End date"}}},d=_e(),u=x.a.useState({top:!1,left:!1,bottom:!1,right:!1}),m=Object(oe.a)(u,2),b=m[0],p=m[1],g=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&p(Object(r.a)(Object(r.a)({},b),{},Object(ae.a)({},e,t)))}},f=function(e){return Object(H.jsx)("div",{className:Object(se.a)(d.list,Object(ae.a)({},d.fullList,"top"===e||"bottom"===e)),role:"presentation"})},j=function(e){i(e)};return Object(H.jsx)("div",{children:["top"].map((function(e){return Object(H.jsxs)(x.a.Fragment,{children:[Object(H.jsx)(ie.a,{onClick:g(e,!0),children:Object(H.jsx)(ue.a,{})}),Object(H.jsxs)(le.a,{classes:{paper:d.paper},anchor:e,open:b[e],onClose:g(e,!1),children:[f(e),Object(H.jsxs)("div",{id:"date-request-container",children:[Object(H.jsxs)("div",{id:"date-request-form",children:[Object(H.jsx)(Ae,Object(r.a)({},l.data.startDate)),Object(H.jsx)(Ae,Object(r.a)({},l.data.endDate)),Object(H.jsx)(ie.a,{variant:"outlined",color:"primary",className:d.button,endIcon:Object(H.jsx)(ge.a,{}),onClick:function(){return e=document.getElementById("start_date").value,t=document.getElementById("end_date").value,a[0]=e.replace(/(\d\d)\/(\d\d)\/(\d{4})/,"$3-$1-$2"),a[1]=t.replace(/(\d\d)\/(\d\d)\/(\d{4})/,"$3-$1-$2"),void j(a);var e,t},children:t.tableHeaderLanguages.requestBtn})]}),Object(H.jsx)("div",{children:Object(H.jsx)(T.a,{onClick:g(e,!1),children:Object(H.jsx)(be.a,{})})})]}),Object(H.jsx)(Te,Object(r.a)({},t))]})]},e)}))})})),Me=n(628),De=n(633),Fe=n(631),Le=n(627),We=n(571),He=n(279),qe=n.n(He),Pe=(n(567),Object(A.a)((function(e){return{root:{maxWidth:200,minHeight:100,marginBottom:"15px"},avatar:{fontSize:".8rem",backgroundColor:"",width:e.spacing(5),height:e.spacing(5)},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}))),Ke=Object(o.b)((function(e){return{appReducer:Object(r.a)({},e.appReducer)}}),(function(e){return{}}))((function(e){var t=e.appReducer,n=t.initialRequest.response,a=Pe(),o=x.a.useState(!1),c=Object(oe.a)(o,2),r=c[0],s=c[1],i=Object(h.useState)(0),l=Object(oe.a)(i,2),d=l[0],u=l[1],m=Object(h.useState)(0),b=Object(oe.a)(m,2),p=b[0],g=b[1];0===n.length&&setTimeout((function(){n=t.initialRequest.response,u(d+1)}),500),setTimeout((function(){y()}),1500),setTimeout((function(){0===n.length&&k()}),2e3);var f=function(e){var t=e.split(/[- :]/);return t=t[2]+"-"+t[1]+"-"+t[0]},j=function(e){var t=e.split(/[- :]/);return t=t[3]+":"+t[4]},O=function(e){for(var t="OK",n=0;n<e.length;n++)if("NOK"===e[n]){t=e[n];break}return t},y=function(){for(var e=document.getElementsByClassName("card_body"),t=0;t<e.length;t++)e[t].style.transition="all, 1s ease",e[t].style.transform="rotateY(360deg)"},k=function(){var e=document.getElementById("appElements"),n=document.getElementById("warning_block");e.style.display="none",n.style.display="block",document.getElementById("configAddress").innerHTML=t.noDataWarningResp.configTxt,document.getElementById("errorMsg").innerHTML=t.noDataWarningResp.errorTxt},C=function(){s(!0)};return Object(H.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",padding:"1rem"},children:[t.initialRequest.response?t.initialRequest.response.map((function(e){return Object(H.jsx)("div",{children:Object(H.jsxs)(G.a,{className:a.root,children:[Object(H.jsx)(Me.a,{avatar:Object(H.jsx)(De.a,{className:a.avatar,style:{backgroundColor:"#"+e.machine_status_overall,textShadow:"0.5px 0.5px 2px #000"},children:O(e.machine_status.split(","))}),action:Object(H.jsx)(T.a,{title:j(e.insert_date),onClick:function(){return function(e){g(e),C()}(e)},children:Object(H.jsx)(qe.a,{})}),titleTypographyProps:{variant:"caption"},subheaderTypographyProps:{variant:"caption"},title:e.machine_name,subheader:f(e.insert_date)}),Object(H.jsx)(U.a,{className:"card_body",style:{backgroundColor:"#"+e.machine_status_overall}})]})},e.id)})):"",Object(H.jsx)(Fe.a,{className:a.modal,open:r,onClose:function(){s(!1)},closeAfterTransition:!0,BackdropComponent:Le.a,BackdropProps:{timeout:500},children:Object(H.jsx)(We.a,{in:r,children:Object(H.jsxs)("div",{className:a.paper,style:{opacity:"0.9",borderRadius:".5rem"},children:[Object(H.jsx)("div",{style:{paddingBottom:"1rem"},children:Object(H.jsxs)(_.a,{container:!0,style:{justifyContent:"space-between"},children:[Object(H.jsxs)("div",{style:{display:"flex",flexDirection:"column-reverse"},children:[Object(H.jsx)(B.a,{children:p?f(p.insert_date):""}),Object(H.jsx)(B.a,{children:p?j(p.insert_date):""})]}),Object(H.jsx)(B.a,{className:"title-text-modal",style:{fontSize:"1.5rem"},children:p?p.machine_name:""})]})}),Object(H.jsx)(_.a,{container:!0,children:p?p.imgs_src.split(",").map((function(e,t){return Object(H.jsxs)("div",{className:"report_container",children:[Object(H.jsx)("img",{className:"report_img",src:e,alt:"check--"+e}),Object(H.jsx)(_.a,{container:!0,className:"text-content",children:Object(H.jsx)(B.a,{className:"result_text",style:{color:"#"+p.color_codes.split(",")[t]},children:p.machine_status.split(",")[t]})})]},e)})):""})]})})})]})})),ze=Object(o.b)((function(e){return{appReducer:Object(r.a)({},e.appReducer)}}),(function(e){return{CheckDBConnectionAction:e(W()),GetDataFromAPI:e({type:b,payload:L(j.getState())})}}))((function(e){var t=e.appReducer;setTimeout((function(){t.connectionCheckRespond.errorMsg&&n(t.connectionCheckRespond)}),3e3);var n=function(e){var n=document.getElementById("appElements"),a=document.getElementById("warning_block");n.style.display="none",a.style.display="block",document.getElementById("errorMsg").textContent||(document.getElementById("configAddress").innerHTML=t.connectioErrorTxt.configTxt+e.configAddress,document.getElementById("errorMsg").innerHTML=t.connectioErrorTxt.errorTxt+e.errorMsg)};return Object(H.jsxs)(x.a.Fragment,{children:[Object(H.jsx)(v.a,{}),Object(H.jsxs)(S.a,{children:[Object(H.jsxs)(w.a,{p:2,bgcolor:"secondary.main",color:"primary.contrastText",id:"warning_block",children:[Object(H.jsx)(B.a,{variant:"h5",component:"h5",children:t.connectioErrorTxt.msgTitle}),Object(H.jsxs)("ul",{children:[Object(H.jsx)("li",{className:"error_list_items",id:"errorMsg"}),Object(H.jsx)("li",{className:"error_list_items",id:"configAddress"})]})]}),Object(H.jsx)(w.a,{p:2,color:"primary.contrastText",id:"success_respond",children:t.successResponFromServer})]}),Object(H.jsx)(E.a,{maxWidth:"xl",id:"appContainer",children:Object(H.jsxs)(B.a,{component:"div",style:{height:"100vh"},id:"appElements",children:[Object(H.jsxs)("div",{className:"content",children:[Object(H.jsxs)(_.a,{style:{padding:"1rem"},container:!0,children:[Object(H.jsx)(_.a,{item:!0,xs:!0,container:!0,style:{justifyContent:"flex-start"},children:Object(H.jsx)(Ie,{})}),Object(H.jsx)(_.a,{item:!0,xs:!0,children:Object(H.jsx)(K,Object(r.a)({},t))}),Object(H.jsx)(_.a,{item:!0,xs:!0})]}),Object(H.jsx)(Ke,{})]}),Object(H.jsx)(T.a,{id:"left_link_icon",component:k.b,to:"/",children:Object(H.jsx)(ne.a,{})}),Object(H.jsx)(X,{className:"footer"})]})})]})}));var Ye=function(){return Object(H.jsx)("div",{className:"App",children:Object(H.jsx)(k.a,{basename:"/",children:Object(H.jsxs)(C.c,{children:[Object(H.jsx)(C.a,{component:ze,exact:!0,path:"/status"}),Object(H.jsx)(C.a,{component:ee,exact:!0,path:"/"})]})})})},Ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,635)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))};y.a.render(Object(H.jsx)(o.a,{store:j,children:Object(H.jsx)(Ye,{})}),document.getElementById("root")),Ge()}},[[568,1,2]]]);
//# sourceMappingURL=main.770d0359.chunk.js.map