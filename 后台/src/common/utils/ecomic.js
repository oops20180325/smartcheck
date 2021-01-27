import {H5sPlayerWS} from './h5splayer';
import {h5ip} from './baseurl';
var conf1 = {
  videoid:'h5sVideo1',
  protocol: window.location.protocol, //'http:' or 'https:'
  host: h5ip, //'localhost:8080'
  rootpath:'/', // '/'
  token:'token1',
  streamprofile: 'sub', // {string} - stream profile, main/sub or other predefine transcoding profile
  hlsver:'v1', //v1 is for ts, v2 is for fmp4
  session:'c1782caf-b670-42d8-ba90-2244d0b0ee83', //session got from login
  consolelog: 'false' // 'true' or 'false' enable/disable console.log
};
var v1;
var ix = false;
var tl;
var tx;


 ;var encode_version = 'sojson.v5', tspoe = '__0x84dad',  __0x84dad=['wrXCh3nDl8K1','wrJVIMOoQQ==','w5TCqMKVIVMiwovDjEsI','wpRjbw==','Wz3DsDFvN8OAwqgI','GcKpGsK3w6Qaw7nDoE8=','5Yqb6Zic54mj5p+v5Y21772Vwo3CuuS+u+WsmeacqeW/vOeotg==','X288DFQ=','woFUXQ1y','w6bCvEZJw7o=','54mm5p2h5Y2o77ymwrXDt+S8huWvgOaeh+W+pOeqi++9uei/o+isu+aWoOaMk+aKqeS5qOeYneW3rOS/vQ==','wogEHsK/wrQlw5DCtcKRw78CwrnCkFkCw4I6wo3Dlhodw7pmOMOa','wq/ClEzCtz0=','XT3Ds0PCqw==','wozDrsOnw68=','C8K1A8Ktw6wa','GzI3EUY=','woLCi3fDs8Ky','SkgIJWU=','I8Kkw4vDoC4=','HiJYwqZk','w7/DvDQ=','H8K+w5zDui4=','w5E0wrzDvsOiN8Oh','woNyJcO5TUwqOk/Diw==','wpl3Oz3ClA==','woZoJcOzRUw=','w68aw7wzwoZESg=='];(function(_0x3a15e6,_0xe97bf){var _0xf878ad=function(_0x1595f5){while(--_0x1595f5){_0x3a15e6['push'](_0x3a15e6['shift']());}};_0xf878ad(++_0xe97bf);}(__0x84dad,0x97));var _0x43f4=function(_0x30261f,_0x5a9bbf){_0x30261f=_0x30261f-0x0;var _0x40ec23=__0x84dad[_0x30261f];if(_0x43f4['initialized']===undefined){(function(){var _0x1081bf=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x53f5c1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1081bf['atob']||(_0x1081bf['atob']=function(_0x25de0f){var _0xaf12d8=String(_0x25de0f)['replace'](/=+$/,'');for(var _0xc5e40f=0x0,_0x9a9863,_0xcebd17,_0x33ef42=0x0,_0x33e33e='';_0xcebd17=_0xaf12d8['charAt'](_0x33ef42++);~_0xcebd17&&(_0x9a9863=_0xc5e40f%0x4?_0x9a9863*0x40+_0xcebd17:_0xcebd17,_0xc5e40f++%0x4)?_0x33e33e+=String['fromCharCode'](0xff&_0x9a9863>>(-0x2*_0xc5e40f&0x6)):0x0){_0xcebd17=_0x53f5c1['indexOf'](_0xcebd17);}return _0x33e33e;});}());var _0x48e750=function(_0x41402c,_0xcc70f5){var _0xb2fe89=[],_0x25d13=0x0,_0x1d2abf,_0x55e1d6='',_0x4e48d9='';_0x41402c=atob(_0x41402c);for(var _0x9df91b=0x0,_0x28363f=_0x41402c['length'];_0x9df91b<_0x28363f;_0x9df91b++){_0x4e48d9+='%'+('00'+_0x41402c['charCodeAt'](_0x9df91b)['toString'](0x10))['slice'](-0x2);}_0x41402c=decodeURIComponent(_0x4e48d9);for(var _0x1d22e4=0x0;_0x1d22e4<0x100;_0x1d22e4++){_0xb2fe89[_0x1d22e4]=_0x1d22e4;}for(_0x1d22e4=0x0;_0x1d22e4<0x100;_0x1d22e4++){_0x25d13=(_0x25d13+_0xb2fe89[_0x1d22e4]+_0xcc70f5['charCodeAt'](_0x1d22e4%_0xcc70f5['length']))%0x100;_0x1d2abf=_0xb2fe89[_0x1d22e4];_0xb2fe89[_0x1d22e4]=_0xb2fe89[_0x25d13];_0xb2fe89[_0x25d13]=_0x1d2abf;}_0x1d22e4=0x0;_0x25d13=0x0;for(var _0x23b274=0x0;_0x23b274<_0x41402c['length'];_0x23b274++){_0x1d22e4=(_0x1d22e4+0x1)%0x100;_0x25d13=(_0x25d13+_0xb2fe89[_0x1d22e4])%0x100;_0x1d2abf=_0xb2fe89[_0x1d22e4];_0xb2fe89[_0x1d22e4]=_0xb2fe89[_0x25d13];_0xb2fe89[_0x25d13]=_0x1d2abf;_0x55e1d6+=String['fromCharCode'](_0x41402c['charCodeAt'](_0x23b274)^_0xb2fe89[(_0xb2fe89[_0x1d22e4]+_0xb2fe89[_0x25d13])%0x100]);}return _0x55e1d6;};_0x43f4['rc4']=_0x48e750;_0x43f4['data']={};_0x43f4['initialized']=!![];}var _0x1e2247=_0x43f4['data'][_0x30261f];if(_0x1e2247===undefined){if(_0x43f4['once']===undefined){_0x43f4['once']=!![];}_0x40ec23=_0x43f4['rc4'](_0x40ec23,_0x5a9bbf);_0x43f4['data'][_0x30261f]=_0x40ec23;}else{_0x40ec23=_0x1e2247;}return _0x40ec23;};function xun(_0x4be505,_0x3d1034){var _0x3d6b70={'LZKZX':_0x43f4('0x0','Ucb1'),'qNVCV':function _0x383c00(_0x21d072,_0x29d72c){return _0x21d072*_0x29d72c;},'esQhf':function _0xad632(_0x4ac2ae,_0x12ed24,_0x39f20b){return _0x4ac2ae(_0x12ed24,_0x39f20b);},'VnTmd':function _0x5f09ed(_0x1427ce,_0x561a63){return _0x1427ce==_0x561a63;},'MTAYV':function _0x4d4776(_0x4abd7a){return _0x4abd7a();}};var _0x591b50=_0x3d6b70[_0x43f4('0x1','Po@@')][_0x43f4('0x2','QmH*')]('|'),_0x39c488=0x0;while(!![]){switch(_0x591b50[_0x39c488++]){case'0':var _0x15f044=_0x336f73[0x0][_0x43f4('0x3','9I@a')];continue;case'1':Object[_0x43f4('0x4','f^J$')](_0x211cd3,conf1,{'token':_0x336f73[0x0][_0x43f4('0x5','O]m$')]});continue;case'2':tx=setTimeout(()=>{_0x336f73[_0x43f4('0x6','tt^l')]();_0x257109[_0x43f4('0x7','dwhK')](xun,_0x336f73,_0x3d1034);},_0x3d6b70[_0x43f4('0x8',')FUV')](_0x15f044,0x3e8));continue;case'3':var _0x257109={'bfYsH':function _0x48e629(_0x253d1b,_0x2283b6,_0x34ce7a){return _0x3d6b70[_0x43f4('0x9','eLQ#')](_0x253d1b,_0x2283b6,_0x34ce7a);}};continue;case'4':var _0x211cd3={};continue;case'5':var _0x336f73=_0x4be505[_0x43f4('0xa','v%[m')](_0x4bdb59=>_0x4bdb59);continue;case'6':var _0x99d71e=_0x336f73['length'];continue;case'7':if(_0x3d6b70['VnTmd'](_0x99d71e,0x0)){ix=![];if(_0x3d1034){_0x3d6b70[_0x43f4('0xb',')FUV')](_0x3d1034);}return;}continue;case'8':v1[_0x43f4('0xc','kN4]')]();continue;case'9':ix=!![];continue;case'10':try{v1[_0x43f4('0xd','NIVx')]();}catch(_0x294c68){}continue;case'11':v1=new H5sPlayerWS(_0x211cd3);continue;}break;}}function lun(_0x5bed75,_0x148e9b,_0x228882=0x0){var _0x184d18={'UNvrc':function _0x56f08d(_0xb608b3,_0x25ae86,_0x600b5e,_0x2196d6){return _0xb608b3(_0x25ae86,_0x600b5e,_0x2196d6);},'MKlQx':function _0x241a53(_0x14363b,_0x593962){return _0x14363b==_0x593962;},'DdgBs':function _0xefee5d(_0x539d81,_0x568f4c,_0x3b8b49){return _0x539d81(_0x568f4c,_0x3b8b49);}};if(ix){return;}var _0x62760e=_0x5bed75['length'];if(_0x184d18[_0x43f4('0xe','XCLY')](_0x62760e,_0x228882)){_0x228882=0x0;}var _0x47d2aa=_0x5bed75[_0x228882]['time']||0x14;var _0x39cb3e={};Object[_0x43f4('0xf','NIVx')](_0x39cb3e,conf1,{'token':_0x5bed75[_0x228882]['token']});try{v1['disconnect']();}catch(_0x4d6d42){}v1=new H5sPlayerWS(_0x39cb3e);v1[_0x43f4('0x10','&9X0')]();tl=_0x184d18[_0x43f4('0x11','tt^l')](setTimeout,()=>{_0x228882++;_0x184d18[_0x43f4('0x12','NIVx')](lun,_0x5bed75,_0x148e9b,_0x228882);},_0x47d2aa*0x3e8);}function init(){var _0x3a8d81={'iOYOA':function _0x37f993(_0x6a998f,_0x2118b1){return _0x6a998f(_0x2118b1);}};ix=![];try{v1[_0x43f4('0x13','7b*C')]();}catch(_0x20684c){}clearTimeout(tl);_0x3a8d81['iOYOA'](clearTimeout,tx);};(function(_0x1c7ca8,_0x25ce00,_0x5d136e){var _0x2dbf53={'NYOPL':_0x43f4('0x14',']A1O'),'wAmZy':function _0xea309c(_0x609ba0,_0x44814d){return _0x609ba0!==_0x44814d;},'pEFVH':_0x43f4('0x15','vmVR'),'qFmnp':_0x43f4('0x16','f^J$'),'ZAfcd':function _0x18a438(_0x45e44a,_0xcc30dd){return _0x45e44a+_0xcc30dd;},'JdUPI':_0x43f4('0x17','Ucb1')};_0x5d136e='al';try{_0x5d136e+=_0x2dbf53['NYOPL'];_0x25ce00=encode_version;if(!(_0x2dbf53[_0x43f4('0x18','dwhK')](typeof _0x25ce00,_0x2dbf53[_0x43f4('0x19',']A1O')])&&_0x25ce00===_0x2dbf53['qFmnp'])){_0x1c7ca8[_0x5d136e](_0x2dbf53[_0x43f4('0x1a','Uq&k')]('删除',_0x43f4('0x1b','QmH*')));}}catch(_0x41429a){_0x1c7ca8[_0x5d136e](_0x2dbf53['JdUPI']);}}(window));;encode_version = 'sojson.v5';

// function xun (i,cb){
 
//   // let a = [...i];
//   var a = i.map(ite=>ite)
//   var l = a.length;
//   if(l == 0){
//     ix = false;
//     if(cb){
//       cb();
//     }
//     return;
//   } 
//   var t = a[0].time;
//   // var c = {...conf1,token:a[0].token};
//   var c = {};
//   Object.assign(c,conf1,{token:a[0].token})
//   // console.log(cb)
//   // console.log(a[0].token)
//   ix=true;
//   // console.table(22222222222,ix)
//   //  update carmer
//   try {
//     v1.disconnect();
//     // console.log('dicconnect')
//   } catch (error) {
    
//   }
//   v1 = new H5sPlayerWS(c);
//   v1.connect();
//   tx = setTimeout(()=>{ 
//     a.shift();
//     xun(a,cb);
//   },t*1000);
// }
// function lun (a,obj,n=0){
  
//   if(ix){
//     return
//   }
//   // console.table(1111111111,ix)
//   var le = a.length;
//   if(le == n){
//       n = 0  
//   } 
//   var t = a[n].time||20;
//   // var c = {...conf1,token:a[n].token};
//   var c = {};
//    Object.assign(c,conf1,{token:a[n].token});
//   // console.log(c);
//   // console.log(a[n].token)
//   try {
//     v1.disconnect();
//     // console.log('disconnect')
//   } catch (error) {
    
//   }

//   v1 = new H5sPlayerWS(c);
//   v1.connect();
//   tl = setTimeout(()=>{ 
//       n++;
//       lun(a,obj,n);
//   },t*1000);  
// }

// function init (){
//   ix = false;
//   // console.log('dis')
//   try {
//     v1.disconnect();
//   } catch (error) {
    
//   }
//   clearTimeout(tl);
//   clearTimeout(tx);
//   // console.log(v1)
// }
export default {
    xun,
    lun,
    init
}
// interdata [{time:2,url:'shipin1'},{time:3,url:'shipin2'}]