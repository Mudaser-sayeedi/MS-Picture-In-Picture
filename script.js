// dom elements selections
const video = document.querySelector('#video');
const button = document.querySelector('#button');

// create media stream connection
const selectMediaDevices = async () => {
    try {
        const res = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = res;
        video.onloadedmetadata = () => {
            video.play();
        }
    } catch (error) {
        console.log('some problem is happend!' , error);
    }
}

//on butto click to make picture in picture
button.addEventListener('click', async () => {
    button.disabled = true;
    await video.requestPictureInPicture();
    button.disabled = false;
})

// on load
selectMediaDevices();