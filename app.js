const axios     = require("axios");
const http      = require("http");
const videoshow = require("videoshow");
const file      = require("file-api");

const data = async () => {
  try {
    var data = await axios.get(
      "https://jsonblob.com/api/jsonBlob/92283f4e-a23c-11ea-baec-594c4be2893f"
    );

    var aux = [
      {"path": data.data.employees[1].background,"caption": data.data.employees[0].name +": "+ data.data.employees[0].description},
      {"path": data.data.employees[1].background,"caption": data.data.employees[1].name +": "+ data.data.employees[1].description},
      {"path": data.data.employees[1].background,"caption": data.data.employees[2].name +": "+ data.data.employees[2].description}
    ];

    var videoOptions = {
      fps: 25,
      loop: 5,
      transition: true,
      transitionDuration: 1,
      videoBitrate: 1024,
      videoCodec: "libx264",
      size: "720x?",
      format: "mp4",
      subtitleStyles: {
        Fontname: "Verdana",
        Fontsize: "26",
        PrimaryColour: "11861244",
        SecondaryColour: "11861244",
        TertiaryColour: "11861244",
        BackColour: "-2147483640",
        Bold: "2",
        Italic: "0",
        BorderStyle: "2",
        Outline: "2",
        Shadow: "3",
        Alignment: "1",
        MarginL: "40",
        MarginR: "60",
        MarginV: "40",
      },
    };

    await videoshow(aux, videoOptions)
      .save("myslideshow.mp4")
      .on("start", function (command) {
        console.log("Conversion Started" + command);
      })
      .on("error", function (err, stdout, stderr) {
        console.log(err);
      })
      .on("end", function (output) {
        console.log("Conversion completed:" + output);
      });
    } catch (error) {
      console.error(error);
  }
};
data();
