let spins = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];

let delay = 100;

for (let spin of spins) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, delay);
  delay += 200;
}