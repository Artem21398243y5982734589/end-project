document.addEventListener('DOMContentLoaded', () => {
    let checkTracks = {
        LoversRockA: false,
        NotAllowedA: false,
        AlmostWorkedA: false
    };
    let openOrCloseTxtCheck = false
    let txtCardForLV = document.getElementById('txtCardForLV')
    let txtCardForNA = document.getElementById('txtCardForNA')
    const IconPlay = `<svg xmlns="http://www.w3.org/2000/svg" class='icon' height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;
    const IconStop = `<svg xmlns="http://www.w3.org/2000/svg" class='icon' height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;
    
    function playTrack(trackId) {
        const audio = document.getElementById(trackId);
        

        
        
        if (!checkTracks[trackId]) {
            audio.play();
            checkTracks[trackId] = true;
            this.innerHTML = IconStop;
        } else {
            audio.pause();
            checkTracks[trackId] = false;
            this.innerHTML = IconPlay;
        }
    }
    
    document.querySelectorAll('.play').forEach(button => {
        button.addEventListener('click', function() {
            const trackId = this.getAttribute('data-track');
            playTrack.call(this, trackId);
        });
    });

    document.getElementById('searchBtn').addEventListener('click', searchM);

    function searchM() {
        let searchIn = document.getElementById('searchIn').value.toLowerCase();
        if (searchIn.includes('lovers')) {
            LoversRockC.style.display = 'block';
            NotAllowedC.style.display = 'none';
            AlmostWorkedC.style.display = 'none'
            txtCardForNA.style.display = 'none';
            txtCardForAW.style.display = 'none';
        } else if (searchIn.includes('not')) {
            NotAllowedC.style.display = 'block';
            LoversRockC.style.display = 'none';
            AlmostWorkedC.style.display = 'none';
            txtCardForAW.style.display = 'none';
            txtCardForLV.style.display = 'none';
        } else if (searchIn.includes('it')) {
            AlmostWorkedC.style.display = 'block';
            LoversRockC.style.display = 'none';
            NotAllowedC.style.display = 'none';
            txtCardForNA.style.display = 'none';
            txtCardForLV.style.display = 'none';
        } else if (searchIn === ''){
            alert('введите чтото!')     
            AlmostWorkedC.style.display = 'none';
            LoversRockC.style.display = 'none';
            NotAllowedC.style.display = 'none';
            txtCardForNA.style.display = 'none';
            txtCardForAW.style.display = 'none';
            txtCardForLV.style.display = 'none';
        }
    }
    function openOrCloseTextLV (){
        if (openOrCloseTxtCheck === false){
        txtCardForLV.style.display = 'block';
        openOrCloseTxtCheck = true
    } else if(openOrCloseTxtCheck === true){
        txtCardForLV.style.display = 'none';
        openOrCloseTxtCheck = false
    }

    }
    function openOrCloseTextNA (){
        if (openOrCloseTxtCheck === false){
            txtCardForNA.style.display = 'block';
            openOrCloseTxtCheck = true
        } else if(openOrCloseTxtCheck === true){
            txtCardForNA.style.display = 'none';
            openOrCloseTxtCheck = false
        }
    }
    function openOrCloseTextAW () {
        if (openOrCloseTxtCheck === false){
            txtCardForAW.style.display = 'block';
            openOrCloseTxtCheck = true
        } else if(openOrCloseTxtCheck === true){
            txtCardForAW.style.display = 'none';
            openOrCloseTxtCheck = false
        }
    }
   
    document.getElementById('showTxtLV').addEventListener('click', openOrCloseTextLV)
    document.getElementById('showTxtNA').addEventListener('click', openOrCloseTextNA)
    document.getElementById('showTxtAW').addEventListener('click', openOrCloseTextAW)

});

