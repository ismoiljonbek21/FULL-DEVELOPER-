// $(function () {
//     baguetteBox.run(selector, '.gallery');

// });

// function YouTubeiframeReady() {

//     var istatus;

//     OPlayer - new YT.Player('videoPlayer', {

//         events: {
//             "onstatechange": onPlayerStatechange
//         }
//     });


//     var $playButton = ('#videoPlayBtn');

//     $playbutton.on("click", function () {
//         if (istatus == YI.PlayerState.PLAYING) {
//             SplayButton.show();
//             OPlayer pausevideo();
//             istatus - YT.PlayerState.PAUSED;
//         } else {
//             Player.playVideo();
//             istatus = YI.PlayerState.PLAYING;
//             SplayButton.hide();
//         }
//     });

//     function onPlayerStateChange(event) {

//         if (event.data == YI.PlayerState.PAUSED) {

//             $playButton.show();
//             istatus - YT.PlayerState.PAUSED;
//         } else if (event.data == YI.PlayerState.PLAYING) {

//             $playButton.hide();
//             istatus - YT.PlayerState.PLAYING;
//         };
//     }
// }

// var tag = document.createElement(tagName: 'script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName(qualifiedName: 'script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);