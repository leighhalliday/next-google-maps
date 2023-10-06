const fs = require("fs");
const { parse } = require("csv-parse");

const trees = [];
const re = /\(([-0-9.]+), ([-0-9.]+)\)/;

fs.createReadStream("./trees.csv")
  .pipe(parse({ delimiter: "," }))
  .on("data", (row) => {
    if (row[0] === "_id") return;
    if (trees.length >= 10000) return;

    const tree = row[12];
    const result = re.exec(row[14]);
    const lng = parseFloat(result[1]);
    const lat = parseFloat(result[2]);

    trees.push([tree, lat, lng]);
  })
  .on("end", () => {
    fs.writeFileSync("./trees.json", JSON.stringify(trees));
  });
