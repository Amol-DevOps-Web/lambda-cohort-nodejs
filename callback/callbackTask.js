function download(url, cb) {
    console.log("Start the download file")
    setTimeout( function downloadFile(){
        console.log("Download completed");
        const content = "Dhoni is playing in 2025 IPL";
        cb(content)
    },5000);
}

function saveFile(data,cb) {
    console.log("Writing data into file is started")
    setTimeout(function save(){
        console.log('Writing file is completed');
         console.log('below is the data..')
         console.log(data);
        const fileName = 'Test.txt'
        cb(fileName);
    },1000);
}

function uploadFile(url, data ,cb) {
    console.log("file updaload is start for "+ url)
    setTimeout(function upload(){
        console.log("Upload is completed for file name"+ data);
        const status = "Success"
        cb(status);
    },2000)
}
download('www.pws.com', function processDownload(value){
    console.log("Download data is " + value);
    const readFromDownloadFile = value;
    saveFile(readFromDownloadFile, function processSave(data) {
        console.log("file name is..." + data);
        uploadFile('www.pws.com', data, function processUpload(dataUpload){
            console.log("Upload status is " + dataUpload)
        });
    });
})


