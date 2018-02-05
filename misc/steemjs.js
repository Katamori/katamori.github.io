query = {
    tag: "gridcoin",
    limit: 2, 
    //start_author: last.author,
    //start_permlink: last.permlink
}

steem.api.getDiscussionsByCreated(query, function(err, result) {
    console.log(err, result[0]);

    for(i=0;i<result.length;i++){
        var txt = document.createElement("P");
        txt.innerHTML = result[i].title+" by "+result[i].author;
        document.getElementById('field').appendChild(txt);
    }
});

