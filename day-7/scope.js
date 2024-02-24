let name = "tini";

function panggilName(condition) {
  name = "joni";
  console.log("1", name); // joni

  if (condition) {
    name = "alex";
    console.log("hallo " + name);
  } else {
    name = "alfa";
    console.log("hallo " + name); // alfa
  }

  name = "john";
  console.log("2", name); // john
}

console.log(name); // tini

panggilName(false);

console.log("3", name); // john
