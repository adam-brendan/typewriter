const sentence = "hello there from lighthouse labs";
let counter = 500;
for (const char of sentence) {
    setTimeout(() => {
        process.stdout.write(char);
    }, counter);
    counter += 100;
  }

  setTimeout(() => {
    process.stdout.write("\n");
  }, counter);