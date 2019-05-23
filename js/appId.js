function AppId() {
    var id = document.getElementById("app-id").value;
    id = id.replace(/\s/g, "");
    var code = document.getElementsByTagName("code")[0];
    try{
        document.getElementsByClassName("determinate")[0].className = "indeterminate";
    } catch(e) {}
    code.innerHTML = "Waiting for API response...";
    $.getJSON("https://itunes.apple.com/lookup?id=" + id + "&callback=?", function(resp) {
        console.log(resp.results);
        code.innerHTML = "";
        if(resp.results.length === 0) {
            code.innerHTML = "No valid ID was entered...";
        }
        resp.results.forEach(function(r) {
            var publisherName = r.artistName
             , appName = r.trackName
             , appId = r.trackId
             , bundleId = r.bundleId
             , genre = r.primaryGenreName;
            var output = `Publisher Name: \"${publisherName}\"
            App Name: \"${appName}\"
            App ID: \"${appId}\"
            Bundle ID: \"${bundleId}\"
            Genre: \"${genre}\"

            `;
            code.innerHTML += output;
        });
        document.getElementsByClassName("indeterminate")[0].className = "determinate";
        document.getElementsByClassName("determinate")[0].style.width = "100%";
    });
}