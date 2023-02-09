new fullpage('#fullpage', {
    //options here
    anchors:['banner1','banner2','banner3','banner4','banner5','banner6','footer'],
    scrollingSpeed:1000,
    autoScrolling:true,
    scrollHorizontally: true,
    onLeave: function(origin, destination, direction, trigger){
        for(let i =0;i<sideTagArea.children.length;i++){
            sideTagAreaChild(i).classList.remove('selected');
            if(i===destination.index){
                sideTagAreaChild(i).classList.add('selected');
                console.log('a')
            }
        }
    }
});