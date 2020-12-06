<template>
  <div class="about">
    about
    <video id="test" class="video-js vjs-default-skin vjs-big-play-centered"></video>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "about",
  components: {},
  created() {
    window.invokedByMicroApp = true;
    this.$nextTick(() => {
      this.appendJQCDN("/resource/hwplayer/1.3.0/lib/dash-2.9.2.all.min.js");
      this.appendJQCDN("/resource/hwplayer/1.3.0/lib/flv-1.4.2.min.js");
      this.appendJQCDN(
        "/resource/hwplayer/1.5.0/dist/hwplayer.js?flvjs=true&dashjs=true"
      );
      setTimeout(() => {
        this.playerVideo();
      }, 2000);
    });
  },
  methods: {
    gotoSubReact() {},
    appendJQCDN(src) {
      var head = document.head || document.getElementsByTagName("head")[0];
      if (src.indexOf("js") === -1) {
        var style = document.createElement("style");
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("href", src);
        head.appendChild(style);
      } else {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.setAttribute("src", src);
        script.setAttribute("async", true);
        head.appendChild(script);
      }
    },
    playerVideo() {
      window.hwplayerloaded(function() {
        window.invokedByMicroApp = false;
        var options = {
          //是否显示控制栏，包括进度条，播放暂停按钮，音量调节等组件
          controls: true,
          width: 640,
          height: 360
        };
        var player = new HWPlayer("test", options, function() {
          //播放器已经准备好了
          player.src(
            "https://35.cdn-vod.huaweicloud.com/asset/ba4f5df688f4ed6f569470d688ec4a22/c5d8003cb1d108035d3a902adb2bc5cc.mp4"
          );
          // "this"指向的是HWPlayer的实例对象player
          player.play();
          // 使用事件监听
          player.on("ended", function() {
            //播放结束了
          });
        });
      });
    }
  }
};
</script>
