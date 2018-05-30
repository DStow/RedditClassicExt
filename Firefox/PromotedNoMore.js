
var classicViewBtn = document.getElementById("layoutSwitch--classic");
classicViewBtn.addEventListener("click",PromotedNoMore_ClassicClick);

function PromotedNoMore_RefreshLayout(){
    // Find all of the promoted cards and give them a red border
    var promotedCards = document.getElementsByClassName("promotedlink");
    for(var i = 0; i < promotedCards.length;i++){
        promotedCards[i].style.display="none";
    }

    // Space out all of the other posts by a few pixels
    var posts = document.getElementsByClassName("Post");
    console.log(posts.length);
    for(var i = 0; i < posts.length;i++){
        posts[i].style.marginBottom = "10px";
    }
}

function PromotedNoMore_ClassicClick(){
    setTimeout(function() {
        PromotedNoMore_RefreshLayout();
        console.log("Ran the refresh");
      }, 0);
}

// Run this when the page loads
PromotedNoMore_RefreshLayout();