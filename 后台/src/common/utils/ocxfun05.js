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


var ISOSwitchover = 1;
function Run(url) {
  ISOSwitchover = 2; 
  testLogin();
};



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

    timp[0] = "172.16.44.70"; //D5
    timp[1] = '172.16.44.75'; //D4
    timp[2] = '172.16.44.79'; //D6
    timp[3] = '172.16.44.77'; //D1
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
        let ret
        if(index==4){
           ret = obj.LoginDeviceEx(timp[index], '37777', 'admin', 'admin', 0);
        }else{
           ret = obj.LoginDeviceEx(timp[index], '37777', 'admin', 'admin13579', 0);
        }
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
  timp[0] = '172.16.44.70'; //D5 4*30 +6
  timp[1] = '172.16.44.75'; //D4 3*30  +6
  timp[2] = '172.16.44.79'; //D6 1*30   +6
  timp[3] = '172.16.44.77'; //D1 12*30     +6
  try {
    obj.LogoutDevice() 
  } catch (error) {

  }
  let ret
  try{
    ret = obj.LoginDeviceEx(timp[0], '37777', 'admin', 'admin13579', 0);//d5
  }catch(err){

  }
  if (ret === 0) {
    obj.ConnectRealVideo('0', '1');
  } else {
  }

  let timer = null;
  timer = setTimeout(() => {
    try {
      obj.LogoutDevice() 
    } catch (error) {

    }
    let ret = obj.LoginDeviceEx(timp[1], '37777', 'admin', 'admin13579', 0); //d4
    if (ret === 0) {
      obj.ConnectRealVideo('0', '1');
    } else {
    }
    timer = setTimeout(() => {
      try {
        obj.LogoutDevice() 

      } catch (error) {

      }
      let ret = obj.LoginDeviceEx(timp[2], '37777', 'admin', 'admin13579', 0);//d6
      if (ret === 0) {
        obj.ConnectRealVideo('0', '1');
      } else {
      }
      timer = setTimeout(() => {
        try {
          obj.LogoutDevice()
        } catch (error) {
        }
        let ret = obj.LoginDeviceEx(timp[3], '37777', 'admin', 'admin', 0) //d1
        if(ret == 0){
          obj.ConnectRealVideo('0','1');
        }else{
        }
        timer = setTimeout(() => {
          try{
            obj.LogoutDevice()
          }catch(err){
          }
          ISOSwitchover = 1; 
        },366000)
      }, 36000);
    }, 96000);
  }, 126000);
}



export default {
  testLogin,
  pollingVideo,
  Run,
  checkPluginInstall
}
