const axios = require('axios')
const http = require('http')
const videoshow = require('videoshow')
const file = require('file-api')
const sharp = require('sharp')
const data = async () => {
    try {
      var data = await axios.get(
        "https://jsonblob.com/api/jsonBlob/92283f4e-a23c-11ea-baec-594c4be2893f"
      );
      console.log(data.data.employees[0].background);
      
    await sharp(data.data.employees[2].background).resize({ height: 100, width: 100 }).toFile("Downloads/output_")
    .then(function(newFileInfo) {
        console.log("Success");
    })
    .catch(function(err) {
        console.log("Error occured");
    });
      var aux = [
        "1.jpg",
        "2.jpg", 
        "3.jpg"
      ]
     console.log(aux)
     var videoOptions = {
        loop: 9,
        fps: 25,
        transition: true,
        transitionDuration: 1, // seconds
        videoBitrate: 1024,
        videoCodec: "libx264",
        size: "64x?",
        // audioBitrate: "128k",
        // audioChannels: 2,
        format: "mp4",
        pixelFormat: "yuv420p",
      };
      var saveto = 'myslideshow.mp4'
      await videoshow(aux, videoOptions)
        .save(saveto)
        .on("start", function (command) {
          console.log("Conversion Started" + command);
        })
        .on("error", function (err, stdout, stderr) {
          console.log(err);
        })
        .on("end", function (output) {
          console.log("Conversion completed" + output);
        });
    } catch (error) {
      console.error(error);
    }
  };
  data();
  console.log("done");