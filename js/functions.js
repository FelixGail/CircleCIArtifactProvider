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

function printError(error) {
    var toAdd = "<p>See the documentation on <a href='http://github.com/FelixGail/CircleCIArtifactProvider'>github.com/FelixGail/CricleCIArtifactProvider</a> for more Information.</p>";
    var element = $("#Error");
    if(element) {
        $("body").html("<p class='Error'>{0}{1}</p>".f(error, toAdd));
    }else{
        element.html("{0}{1}".f(error, toAdd));
    }
}

function openUrl(path, token) {
    window.location.replace("{0}?circle-token={1}".f(path, token));
}
