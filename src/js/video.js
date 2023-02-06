const videos = document.querySelectorAll('.video__holder');

videos.forEach(video => {
    let videoFrame = video.querySelector('.video__frame');
    let playBtn = video.querySelector('.video__button');

    playBtn.addEventListener('click', () => {
        if (!video.classList.contains('video__frame--active')) {
            playBtn.style.zIndex = 0;
            videoUrl = videoFrame.dataset.videoId;
            videoFrame.innerHTML = '<iframe width="100%" height="100%" src="' + videoUrl + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
            videoFrame.classList.add('video__frame--active');
        } else {
            return
        }
    })
});

