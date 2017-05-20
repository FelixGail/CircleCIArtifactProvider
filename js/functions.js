// RegEx: http://stackoverflow.com/a/1404100/451634
function getURLParameter(name) {
    var value = decodeURIComponent((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, ""])[1]);
    return (value !== 'null') ? value : false;
}

String.prototype.format = String.prototype.f = function() {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};

function printCustom(error) {
    var element = $("#Message");
    if(!element) {
        $("body").html("<p class='Message'>{0}</p><div id='footer'>See the documentation on <a href='http://github.com/FelixGail/CircleCIArtifactProvider'>github.com/FelixGail/CricleCIArtifactProvider</a> for more Information.</div>".f(error));
    }else{
        element.html(error);
    }
}

function openUrl(path, token) {
    var url = "{0}?circle-token={1}".f(path, token)
    window.location.replace(url);
    printCustom("<span style='color:white;'>Your download should start shortly. If not download it <a href='{0}'>here</a> manually.</span>"
        .f(url));
}
