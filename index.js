
fetch("/data.json")
  .then(some => {
    return some.json();
  })
  .then(data => {
    // init
    helper("#btn-1", "weekly", "Last Week");

    // buttons
    document.querySelector("#btn-0").addEventListener("click", () => { helper("#btn-0", "daily", "Yesterday"); });
    document.querySelector("#btn-1").addEventListener("click", () => { helper("#btn-1", "weekly", "Last Week"); });
    document.querySelector("#btn-2").addEventListener("click", () => { helper("#btn-2", "monthly", "Last Month"); });

    function helper(btn, span, phrase) {
      for (let i = 0; i < data.length; i++) {
        const curr = document.querySelector(`.isa-main-grid > .isa-cell-${i + 1} > .isa-card > .isa-card-grid > .isa-cell-2`);
        const prev = document.querySelector(`.isa-main-grid > .isa-cell-${i + 1} > .isa-card > .isa-card-grid > .isa-cell-3`);
        curr.innerHTML = `${data[i]["timeframes"][span]["current"]}hrs`;
        prev.innerHTML = `${phrase} - ${data[i]["timeframes"][span]["previous"]}hrs`;
      }
      document.querySelector("#btn-0").style.color = "";
      document.querySelector("#btn-1").style.color = "";
      document.querySelector("#btn-2").style.color = "";
      document.querySelector(btn).style.color = "white";
    }

    return;
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });
