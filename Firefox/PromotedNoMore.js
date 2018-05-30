
var classicViewBtn = document.getElementById("layoutSwitch--classic");
classicViewBtn.addEventListener("click",PromotedNoMore_ClassicClick);

function PromotedNoMore_RefreshLayout(){
    // Find all of the promoted cards and give them a red border
    var promotedCards = document.getElementsByClassName("promotedlink");
    if(promotedCards.length > promotedNomore_LastPromotedCount){
        console.log("Refreshing promoted")
        promotedNomore_LastPromotedCount = promotedCards.length;
        for(var i = 0; i < promotedCards.length;i++){
            promotedCards[i].style.display="none";
        }
    }

    // Space out all of the other posts by a few pixels
    var posts = document.getElementsByClassName("Post");
    if(posts.length > promotedNoMore_LastPostCount) {
        console.log("Refreshing posts")
        promotedNoMore_LastPostCount = posts.length;
        for(var i = 0; i < posts.length;i++){
            posts[i].style.marginBottom = "10px";
        }
    }
}

function PromotedNoMore_ClassicClick(){
    setTimeout(function() {
        PromotedNoMore_RefreshLayout();
      }, 0);
}

// Run this when the page loads
PromotedNoMore_RefreshLayout();

var promotedNoMore_LastPostCount = 0;
var promotedNomore_LastPromotedCount = 0;

window.setInterval(function(){
    PromotedNoMore_RefreshLayout();
}, 5000);

