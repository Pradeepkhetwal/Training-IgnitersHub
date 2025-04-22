// A function returning function.

function yep() {
  console.log("Inside yep");

  const msg = () => {
    console.log("Inside msg");
  }

  return msg;
}


const m = yep();
m();