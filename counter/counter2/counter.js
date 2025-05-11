(() =>{
    const $counter = document.getElementById('js-counter');
    let totalClicks = 0;

    const clickHandler = (e)=> {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);

        totalClicks++;
        document.getElementById('js-click-count').textContent = `クリック回数： ${totalClicks}`;

        if($targetButton.textContent === "+"){
            $counter.textContent = currentCount + 1;
        }else{
            if(currentCount > 0){
            $counter.textContent = currentCount - 1;
            }else{
                return;
            }
        }

        document.body.style.backgroundColor = `rgba(255, 255, 0, ${Math.min(currentCount / 100, 1)})`;
};

    for ( let index = 0; index < document.getElementsByClassName('js-button').length; index++){
        document.getElementsByClassName('js-button')[index].
        addEventListener('click', (e) => clickHandler(e))
        }
})();