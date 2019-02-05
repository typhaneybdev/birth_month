//getting form input value
function monthInput() {
  let month = document.getElementById("month").value.toLowerCase();

  switch (month) {
    case "january":
      text = "garnet is your birthstone";
      break;
    case "february":
      text = "Amethyst is your birthstone";
      break;
    case "march":
      text = "Aquamarine is your birthstone";
      break;
    case "april":
      text = "Diamond is your birthstone";
      break;
    case "may":
      text = "Emerald is your birthstone";
      break;
    case "june":
      text = "Alexandrite & Pearl are your birthstones";
      break;
    case "july":
      text = "Ruby is your birthstone";
      break;
    case "august":
      text = "Peridot is your birthstone";
      break;
    case "september":
      text = "Sapphire is your birthstone";
      break;
    case "october":
      text = "Opal & Tourmaline are your birthstones";
      break;
    case "november":
      text = "Citrine & Topaz are your birthstones";
      break;
    case "december":
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
