// const mongoose = require("mongoose");
// const Grid = require("gridfs-stream");
// const { GridFsStorage } = require("multer-gridfs-storage");
// const multer = require("multer");

// const conn = mongoose.connection;
// let gfs;
// conn.once("open", () => {
//   // إنشاء stream لـ GridFS
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection("uploads"); // تحديد المجموعة التي ستخزن الملفات فيها
// });
// const storage = new GridFsStorage({
//   url: `${process.env.MONGODB}`,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       const filename = file.originalname;
//       const fileInfo = {
//         filename: filename,
//         bucketName: "uploads",
//       };
//       resolve(fileInfo);
//     });
//   },
// });

// const multers = multer({ storage });
// module.exports = { conected, multers };

// // Create a route to upload images
// app.post("/upload", upload.single("file"), (req, res) => {
//   res.status(200).json({ file: req.file });
// });

// // Create a route to serve uploaded images
// app.get("/image/:filename", (req, res) => {
//   const gfs = Grid(mongoose.connection.db, mongoose.mongo);
//   gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//     if (!file || file.length === 0) {
//       return res.status(404).send("No file exists");
//     }
//     const readStream = gfs.createReadStream(file.filename);
//     readStream.pipe(res);
//   });
// });
