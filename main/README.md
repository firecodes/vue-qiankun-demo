# main

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


var a = "http://localhost:8080/resource/js/webConfig.js"
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = a;
document.getElementsByTagName('head')[0].appendChild(script);

https://media-cache.huaweicloud.com/video/hwplayer/1.5.0/dist/hwplayer.js?flvjs=true&dashjs=true


var a = "https://media-cache.huaweicloud.com/video/hwplayer/1.5.0/dist/hwplayer.js?flvjs=true&dashjs=true"
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = a;
document.getElementsByTagName('head')[0].appendChild(script);


function appendJQCDN(src) {
    var head = document.head || document.getElementsByTagName('head')[0];
    if(src.indexOf("js")== -1){ 
        var style = document.createElement('style');
        style.setAttribute("rel", "stylesheet"); 
        style.setAttribute("href",src);
        head.appendChild(style);
    }else{
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.setAttribute("src",src);
        script.setAttribute("async",true);
        head.appendChild(script);
    }
}

undefined
appendJQCDN("https://media-cache.huaweicloud.com/video/hwplayer/1.5.0/dist/hwplayer.js")


appendJQCDN("/resource/hwplayer/1.5.0/dist/hwplayer.js")


fetch("https://media-cache.huaweicloud.com/video/hwplayer/1.5.0/dist/hwplayer.js")

fetch("https://media-cache.huaweicloud.com/video/hwplayer/1.3.0/lib/video-js-7.5.4/video.js")

fetch("/resource/hwplayer/1.3.0/lib/video-js-7.5.4/video.js")


fetch("/resource/hwplayer/1.3.0/lib/video-js-7.5.4/video.js")

appendJQCDN("/resource/hwplayer/1.3.0/lib/video-js-7.5.4/video.js")

appendJQCDN("/resource/hwplayer/1.5.0/dist/hwplayer.js?hwplayerLibPath=/resource/hwplayer/1.3.0/lib/")

























