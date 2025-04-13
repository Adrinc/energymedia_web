window.openSpeedTestServerList = [
    {"ServerName":"Home", "Download":"downloading", "Upload":"upload", "ServerIcon":"DefaultIcon"}
];

window.pingSamples = 10;
window.jitterFinalSample = 0.5;
window.setPingSamples = true;
window.pingTimeOut = 5000;
window.setPingTimeout = true;
window.pingMethod = "GET";
window.pingFile = "Upload";
window.ulDataSize = 30;
window.ulDelay = 300;
window.dlDelay = 300;
window.upAdjust = 1.04;
window.dlAdjust = 1.04;
window.enableClean = true;
window.dlDuration = 12;
window.ulDuration = 12;
window.dlThreads = 6;
window.ulThreads = 6;
window.setHTTPReq = true;
window.saveData = false;
window.saveDataURL = "//yourDatabase.Server.com:4500/save?data=";
window.stressTest = true;
window.selectTest = true;
window.selectServer = true;
window.enableRun = true;
window.openChannel = "dev";

window.ostOnload = function() {
    console.log("OpenSpeedTest.com V2.5.4 Loaded!");
    console.log("Now Press the Start Button or HIT Enter.");
    console.log("The secret to living happy is giving happiness. Have a wonderful day.");
};

window.abrirWeb = function(link) {
    window.location.href = link;
};
