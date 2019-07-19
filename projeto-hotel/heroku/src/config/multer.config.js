const multer = require("multer");
const ImgurStorage = require("@trevorblades/multer-storage-imgur");

const upload = multer({
    storage: ImgurStorage({
        clientId: "e4904693274f651"
    })
});
module.exports = upload;
