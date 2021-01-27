var checkPluginInstall = function () {
  var e = false;
  if (browser().msie) {
    try {
      let a = new ActiveXObject("WebActiveEXE.Plugin.1");
      e = true;
    } catch (n) {
      e = false;
    }
  } else {
    for (var r = 0, s = navigator.mimeTypes.length; s > r; r++) {
      if ("application/media-plugin-version-3.1.0.2" == navigator.mimeTypes[r].type.toLowerCase()) {
        e = true;
        break;
      }
    }
  }
  return e;
};

var browser = function () {
  var e = /(chrome)[ \/]([\w.]+)/,
    t = /(safari)[ \/]([\w.]+)/,
    n = /(opera)(?:.*version)?[ \/]([\w.]+)/,
    r = /(msie) ([\w.]+)/,
    s = /(trident.*rv:)([\w.]+)/,
    o = /(mozilla)(?:.*? rv:([\w.]+))?/,
    i = navigator.userAgent.toLowerCase(),
    a = e.exec(i) || t.exec(i) || n.exec(i) || r.exec(i) || s.exec(i) || i.indexOf("compatible") < 0 && o.exec(i) || ["unknow", "0"];
  a.length > 0 && a[1].indexOf("trident") > -1 && (a[1] = "msie");
  var c = {};
  return c[a[1]] = !0, c.version = a[2], c
}
function insertPluginObject(dom, iWidth, iHeight) {
  if (browser().msie) {
    var sSize = " width=" + "\"" + iWidth.toString() + "\"" + " height=" + "\"" + iHeight.toString() + "\"";
    var sHtmlValue = "<object classid=\"CLSID:7F9063B6-E081-49DB-9FEC-D72422F2727F\" codebase=\"webrec.cab\"" + sSize + "id=\"DPSDK_OCX\">" + "</object>"
    dom.innerHTML = sHtmlValue;
  } else {
    var sSize = " width=" + "\"" + iWidth.toString() + "\"" + " height=" + "\"" + iHeight.toString() + "\"";
    var sHtmlValue = "<object type=\"application/media-plugin-version-3.1.0.2\"" + sSize + "id=\"DPSDK_OCX\">" + "</object>";
    dom.innerHTML = sHtmlValue;
  }
  return true;
}
var ISOSwitchover = 1;
function Run(url) {
  ISOSwitchover = 2; 
  testLogin();
};


function autoLogin() {
  var obj = document.getElementById('DPSDK_OCX')
  try {
    obj.LogoutDevice() 
  } catch (error) {

  }

  let ret = obj.LoginDeviceEx('172.16.44.47', '37777', 'admin', 'admin13579', 0);
  setTimeout(() => {
    try {
      obj.LogoutDevice() 
    } catch (error) {

    }
    let ret = obj.LoginDeviceEx('172.16.44.43', '37777', 'admin', 'admin13579', 0);
    setTimeout(() => {
      try {
        obj.LogoutDevice()  
      } catch (error) {

      }
      let ret = obj.LoginDeviceEx('172.16.44.49', '37777', 'admin', 'admin13579', 0);
      setTimeout(() => {
        try {
          obj.LogoutDevice()  
        } catch (error) {

        }
        pollingVideo('', false, null)
      }, 130000)
      if (ret === 0) {
        start(128000)
      }
    }, 120000)
    if (ret === 0) {
      start(118000)
    }
  }, 70000)
  if (ret === 0) {
    start(68000)
  }
}

/**
 * @param flag 联动状态
 * @param xunjian 巡检状态
 */
let timer = null;
function pollingVideo(flag, xunjian, MainTimeType) {
  if (timer != null) return;
  if (ISOSwitchover === 1) {
    var obj = document.getElementById('DPSDK_OCX');
    var timp = new Array();

    timp[0] = "172.16.44.44"; //D5
    timp[1] = '172.16.44.47'; //D6
    timp[2] = '172.16.44.43'; //D4
    timp[3] = '172.16.44.35'; //D2
    timp[4] = '172.16.44.49'; //D7
    timp[5] = '172.16.44.50'; //D9
    timp[6] = '172.16.44.38'; //D1
    try {
      obj.LogoutDevice();
    } catch (error) {

    }
    let ret = obj.LoginDeviceEx(timp[0], '37777', 'admin', 'admin13579', 0);
    if (ret === 0) {
      obj.ConnectRealVideo('0', '1');
    } else {
    }
    clearInterval(timer);
    var index = 1;
    timer = setInterval(() => {
      if (ISOSwitchover === 1) {
        try {
          obj.LogoutDevice();
        } catch (error) {

        }
        let ret = obj.LoginDeviceEx(timp[index], '37777', 'admin', 'admin13579', 0);
        if (ret === 0) {
          obj.ConnectRealVideo('0', '1');
        } else {

        }
      }
      index++;
      if (index === timp.length - 1) {
        clearInterval(timer);
        timer = null;
        return;
      }
    }, 10000);
  }
}

function testLogin() {

  try{
    var obj = document.getElementById('DPSDK_OCX');
  }catch(err){

  }
  var timp = new Array();
  timp[0] = '172.16.44.47'; //D6    70
  timp[1] = '172.16.44.43'; //D4    120
  timp[2] = '172.16.44.49'; //D7    125
  try {
    obj.LogoutDevice() 
  } catch (error) {

  }
  let ret
  try{
    ret = obj.LoginDeviceEx(timp[0], '37777', 'admin', 'admin13579', 0);
  }catch(err){

  }
  if (ret === 0) {
    obj.ConnectRealVideo('0', '1');
  } else {
  }

  let timer = null;
  clearInterval(timer);
  timer = setInterval(() => {
    clearInterval(timer);
    try {
      obj.LogoutDevice() 
    } catch (error) {

    }
    let ret = obj.LoginDeviceEx(timp[1], '37777', 'admin', 'admin13579', 0);
    if (ret === 0) {
      obj.ConnectRealVideo('0', '1');
    } else {
    }
    timer = setInterval(() => {
      clearInterval(timer);
      try {
        obj.LogoutDevice() 
      } catch (error) {

      }
      let ret = obj.LoginDeviceEx(timp[2], '37777', 'admin', 'admin13579', 0);
      if (ret === 0) {
        obj.ConnectRealVideo('0', '1');
      } else {
      }
      timer = setInterval(() => {
        try {
          obj.LogoutDevice() 
        } catch (error) {

        }
        clearInterval(timer);
        ISOSwitchover = 1;    
      }, 186000);
    }, 180000);
  }, 100000);
}

function start(time) {
  var obj = document.getElementById('DPSDK_OCX')
  obj.ControlPtzEx(0, 13, 0, 0, 76, 0);
  obj.ConnectRealVideo('0', '1')
  setTimeout(() => {
    obj.ControlPtzEx(0, 13, 0, 0, 96, 0);
  }, time)
}

/**
 * @param flag
 */
function pollingMonitoring(flag) {
  var obj = document.getElementById('DPSDK_OCX')
  switch (flag) {
    case 'D5':
      try {
        obj.LogoutDevice()
      } catch (error) {

      }
      var ret = obj.LoginDeviceEx('172.16.44.44', '37777', 'admin', 'admin13579', 0);
      if (ret === 0) {
        obj.ConnectRealVideo('0', '1');
      } else {
      }

      setTimeout(() => {
        if(ISOSwitchover!=2){
          ISOSwitchover = 1;
        }
      }, 20000)
      break;
    case 'D6':
      try {
        obj.LogoutDevice()
      } catch (error) {

      }
      var ret = obj.LoginDeviceEx('172.16.44.47', '37777', 'admin', 'admin13579', 0);
      if (ret === 0) {
        obj.ConnectRealVideo('0', '1')
      } else {
      }
      setTimeout(() => {
        if(ISOSwitchover!=2){
          ISOSwitchover = 1;
        }
      }, 20000)

      break;
    case 'D4':
      try {
        obj.LogoutDevice()
      } catch (error) {

      }
      var ret = obj.LoginDeviceEx('172.16.44.43', '37777', 'admin', 'admin13579', 0);
      if (ret === 0) {
        obj.ConnectRealVideo('0', '1')
      } else {
      }
      setTimeout(() => {
        if(ISOSwitchover!=2){
          ISOSwitchover = 1;
        }
      }, 20000)
      break;
    case 'D9':
      try {
        obj.LogoutDevice()
      } catch (error) {

      }
      var ret = obj.LoginDeviceEx('172.16.44.50', '37777', 'admin', 'admin13579', 0);
      if (ret === 0) {
        obj.ConnectRealVideo('0', '1')
      } else {
      }
      setTimeout(() => {
        if(ISOSwitchover!=2){
          ISOSwitchover = 1;
        }
      }, 20000)
      break;
    case 'D7':
      try {
        obj.LogoutDevice()
      } catch (error) {

      }
      var ret = obj.LoginDeviceEx('172.16.44.49', '37777', 'admin', 'admin13579', 0);
      if (ret === 0) {
        obj.ConnectRealVideo('0', '1')
      } else {
      }
      setTimeout(() => {
        if(ISOSwitchover!=2){
          ISOSwitchover = 1;
        }
      }, 20000)
      break;
    case 'D10':
      try {
        obj.LogoutDevice()
      } catch (error) {

      }
      var ret = obj.LoginDeviceEx('172.16.44.51', '37777', 'admin', 'admin13579', 0);
      if (ret === 0) {
        obj.ConnectRealVideo('0', '1')
      } else {
      }
      setTimeout(() => {
        if(ISOSwitchover!=2){
          ISOSwitchover = 1;
        }
      }, 20000)
      break;
  }
}

/**
 * @param flag
 */

// function ganged(flag) {
//   var obj = document.getElementById('DPSDK_OCX')
//   switch (flag) {
//     case 'D5':
//       let ret2 = obj.LoginDeviceEx('172.16.44.43', '37777', 'admin', 'admin13579', 0);
//       obj.ControlPtzEx(ret, 10, 0, '13', 0, 0);
//       setTimeout(() => {
//         obj.LogoutDevice()
//         // 4号登陆  D6
//         let ret1 = obj.LoginDeviceEx('172.16.44.47', '37777', 'admin', 'admin13579', 0);
//         obj.ControlPtzEx(0, 10, 0, '4', 0, 0);
//         setTimeout(() => {
//           obj.ControlPtzEx(ret1, 10, 0, '1', 0, 0);
//           setTimeout(() => {
//             obj.LogoutDevice()
//             let ret2 = obj.LoginDeviceEx('172.16.44.43', '37777', 'admin', 'admin13579', 0);
//             obj.ControlPtzEx(ret2, 10, 0, '1', 0, 0);
//             obj.LogoutDevice()
//           }, 60000)
//         }, 60000)
//       }, 3000)
//       break;
//     case 'D6':
//       let ret3 = obj.LoginDeviceEx('172.16.44.44', '37777', 'admin', 'admin13579', 0);
//       obj.ControlPtzEx(ret, 10, 0, '3', 0, 0);
//       setTimeout(() => {
//         obj.LogoutDevice()
//         let ret1 = obj.LoginDeviceEx('172.16.44.43', '37777', 'admin', 'admin13579', 0);
//         obj.ControlPtzEx(0, 10, 0, '12', 0, 0);
//         setTimeout(() => {
//           obj.ControlPtzEx(ret1, 10, 0, '1', 0, 0);
//           setTimeout(() => {
//             obj.LogoutDevice()
//             let ret2 = obj.LoginDeviceEx('172.16.44.44', '37777', 'admin', 'admin13579', 0);
//             obj.ControlPtzEx(ret2, 10, 0, '1', 0, 0);
//             obj.LogoutDevice()
//           }, 2000)
//         }, 10000)
//       }, 3000)
//       break;
//     case 'D4':
//       let ret = obj.LoginDeviceEx('172.16.44.44', '37777', 'admin', 'admin13579', 0);
//       obj.ControlPtzEx(ret, 10, 0, '3', 0, 0);
//       setTimeout(() => {
//         obj.LogoutDevice()
//         // 1号登陆  D6
//         let ret1 = obj.LoginDeviceEx('172.16.44.47', '37777', 'admin', 'admin13579', 0);
//         obj.ControlPtzEx(0, 10, 0, '4', 0, 0);
//         setTimeout(() => {
//           obj.ControlPtzEx(ret1, 10, 0, '1', 0, 0);
//           setTimeout(() => {
//             obj.LogoutDevice()
//             let ret2 = obj.LoginDeviceEx('172.16.44.44', '37777', 'admin', 'admin13579', 0);
//             obj.ControlPtzEx(ret2, 10, 0, '1', 0, 0);
//             obj.LogoutDevice()
//           }, 5000)
//         }, 10000)
//       }, 3000)
//       break;
//     case 'D2':
//       let ret4 = obj.LoginDeviceEx('172.16.44.43', '37777', 'admin', 'admin13579', 0);
//       obj.ControlPtzEx(ret4, 10, 0, '11', 0, 0);
//       setTimeout(() => {
//         obj.ControlPtzEx(ret4, 10, 0, '1', 0, 0);
//         obj.LogoutDevice()
//       }, 3000)
//       break;
//     case ('D10' || 'D11'):
//       let ret5 = obj.LoginDeviceEx('172.16.44.50', '37777', 'admin', 'admin13579', 0);
//       obj.ControlPtzEx(ret5, 10, 0, '2', 0, 0);
//       setTimeout(() => {
//         obj.ControlPtzEx(ret5, 10, 0, '1', 0, 0);
//         obj.LogoutDevice()
//       }, 3000)
//   }
// }

// 向上
function moveUp(flag) {
  var obj = document.getElementById('DPSDK_OCX')
  let speed = parseInt(4, 10)
  obj.ControlPtzEx(0, 0, 0, speed, 0, flag);
}

// 向右
function moveRight(flag) {
  var obj = document.getElementById('DPSDK_OCX')
  let speed = parseInt(4, 10)
  obj.ControlPtzEx(0, 33, 0, speed, 0, flag);
}

// 向左
function moveLeft(flag) {
  var obj = document.getElementById('DPSDK_OCX')
  let speed = parseInt(4, 10)
  obj.ControlPtzEx(0, 34, 0, speed, 0, flag);
}

// 向下
function moveDown(flag) {
  var obj = document.getElementById('DPSDK_OCX')
  let speed = parseInt(4, 10)
  obj.ControlPtzEx(0, 1, 0, speed, 0, flag);
}

//变倍 zoom

// +
function zoomIn(flag) {
  var obj = document.getElementById('DPSDK_OCX')
  let speed = parseInt(4, 10)
  obj.ControlPtzEx(0, 4, 0, speed, 0, flag);
}

// -
function zoomOut(flag) {
  var obj = document.getElementById('DPSDK_OCX')
  let speed = parseInt(4, 10)
  obj.ControlPtzEx(0, 5, 0, speed, 0, flag);
}

// 聚焦

// +
function focusIn(flag) {
  var obj = document.getElementById('DPSDK_OCX')
  let speed = parseInt(4, 10)
  obj.ControlPtzEx(0, 6, 0, speed, 0, flag);
}

// -
function focusOut(flag) {
  var obj = document.getElementById('DPSDK_OCX')
  let speed = parseInt(4, 10)
  obj.ControlPtzEx(0, 6, 0, speed, 0, flag);
}

// 增加预置点位

function addPreset(flag) {
  var obj = document.getElementById('DPSDK_OCX')
  let speed = parseInt(4, 10)
  obj.ControlPtzEx(0, 11, 0, '2', 0, flag);
}

// 转至预置点

var num1;

function a(num) {
  var obj = document.getElementById('DPSDK_OCX')
  let speed = parseInt(4, 10)
  obj.ControlPtzEx(0, 10, 0, num, 0, 0);
  num1 = num
}

// 预置点加入巡航组

function add(flag) {
  var obj = document.getElementById('DPSDK_OCX')
  let speed1 = parseInt(4, 10)
  let speed = parseInt(4, 10)
  obj.ControlPtzEx(0, 36, '0', num1, 0, flag);
}

// 随机生成16位16进制的图片名字

function getRamNumber() {
  var result = ''
  for (let i = 0; i < 16; i++) {
    result += Math.floor(Math.random() * 16).toString(16)
  }
  return result.toUpperCase() // 转为大写
}


export default {
  checkPluginInstall,
  insertPluginObject,
  autoLogin,
  moveUp,
  moveRight,
  moveLeft,
  moveDown,
  zoomIn,
  zoomOut,
  focusIn,
  focusOut,
  addPreset,
  a,
  add,
  start,
  testLogin,
  pollingVideo,
  pollingMonitoring,
  Run
}
