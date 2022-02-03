function calculateLoan(){
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest').value;
    const months = document.querySelector('#months').value;
    const interest = (amount * (interest_rate * 0.01)) / months;
    const payment = ((amount / months) + interest).toFixed(2);


    document.querySelector('#payment').innerHTML =  'Payment / Month: ' + payment + '$';
}

function removeVideo(id) {
    const myDiv = document.getElementById(id);
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);
}

function makeRequest() {
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet',
        maxResults: 10
    });
    request.execute(function (response) {
        $('#results').empty()
        var srchItems = response.result.items;
        $.each(srchItems, function (index, item) {
            console.log(item.id.videoId)
            vidTitle = item.snippet.title;
            vidThumburl = item.snippet.thumbnails.default.url;
            vidThumbimg = '<iframe src="https://www.youtube.com/embed/' + item.id.videoId + '" width="300" height="280" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0" seamless></iframe> ';
           
            $('#results').append(vidThumbimg );
        })
    })
}
function keyWordsearch(){
    gapi.client.setApiKey('AIzaSyDE5naLHvKrVtHT6eH8bwcwf4oiP9LcrTg');
    gapi.client.load('youtube', 'v3', function(){
            makeRequest();
    });
}

function myFunction() {
     $('#user-video').append(document.getElementById("url").value)
    // var url_string = document.getElementById("url").value
    // let myIframe = document.getElementById("myIframe");
    // myIframe.src = url_string;
    // alert(document.getElementById("url").value)
}
