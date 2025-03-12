function download(url) {
    return new Promise((resolve, reject) =>{
        console.log("Start download files from "+ url);
        setTimeout(function processDownload() {
            console.log("File download completed");
            const content =  "Callbak have some problems so we used the promise";
            resolve(content)
        }, 5000)
    })
}

function write(data) {
    return new Promise((resolve, reject) =>{
        console.log("Start write file...");
        setTimeout(function processWrite() {
            console.log("write data in file is completed and data is " + data);
            const content =  "callAndPromise.txt";
            resolve(content)
        }, 6000)
    })
}

function updaload(url, data) {
    return new Promise((resolve, reject) =>{
        console.log("Start upload is "+url);
        setTimeout(function processWrite() {
            console.log("Upload is files completed and data "+ data );
            const content =  'Success';
            resolve(content)
        }, 9000)
    })
}

console.log("Promise execution is started");
download('www.pws.com')
.then((data)=>{
    console.log("Download file done")
    return write(data);
}).then((data) =>{
    console.log("Write data is done");
    return updaload('www.pws.com',data)
}).then((data)=>{
    console.log("Upload status: "+ data)
})