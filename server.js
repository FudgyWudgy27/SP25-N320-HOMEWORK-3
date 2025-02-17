const http = require("http");
const fs = require("fs");
const path = require("path");

const WebFile = require("./functions/webfile")

/**
 * 
 * @param {http.ClientRequest} req 
 * @param {http.ServerResponse} res 
 */
function app(req, res){
    const fileReq = new WebFile(req.url);
    const filePath = path.join(__dirname, "views", fileReq.filename);

    const contentType = fs.existsSync(filePath) && fileReq.getExtension() ? fileReq.getMimeType() : "text/html";
    res.writeHead(200, {"Content-Type": contentType});

    let filePathToUse = path.join(__dirname, "views/404.html");

    if(fs.existsSync(filePath) && fileReq.getExtension()){
        filePathToUse = filePath;
        console.log(filePathToUse);
    } else if(!fileReq.getExtension()){
        const checkIndex = path.join(filePath,"index.html");
        const checkHtml = filePath + ".html";
        if(fs.existsSync(checkIndex)) {
            filePathToUse = checkIndex;
        } else if(fs.existsSync(checkHtml)){
            filePathToUse = checkHtml;
        }
        console.log(filePathToUse);
    }

    res.write(fs.readFileSync(filePathToUse));

    res.end();
}

const server = http.createServer(app);

const port = process.env.PORT || 5445; // 3000, 3001

server.listen(port);