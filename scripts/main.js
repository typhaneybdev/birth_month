//getting form input value
function monthInput() {
  let month = document.getElementById("month").value;

  switch (month) {
    case "January":
      text = "garnet is your birthstone";
      break;
    case "February":
      text = "Amethyst is your birthstone";
      break;
    case "March":
      text = "Aquamarine is your birthstone";
      break;
    case "April":
      text = "Diamond is your birthstone";
      break;
    case "May":
      text = "Emerald is your birthstone";
      break;
    case "June":
      text = "Alexandrite & Pearl are your birthstones";
      break;
    case "July":
      text = "Ruby is your birthstone";
      break;
    case "August":
      text = "Peridot is your birthstone";
      break;
    case "September":
      text = "Sapphire is your birthstone";
      break;
    case "October":
      text = "Opal & Tourmaline are your birthstones";
      break;
    case "November":
      text = "Citrine & Topaz are your birthstones";
      break;
    case "December":
      text = "Tanzanite, Turquoise and Blue Zircon are your birthstones";
      break;

    default:
      "this is a test";
      break;
  }

  document.getElementById("test").innerHTML = text;
  console.log(month);
}

//TODO
