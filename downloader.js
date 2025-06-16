(function () {
  const tickers = new Set();

  function extractTickersFromDOM() {
    const tickerSpans = document.querySelectorAll("div.css-1qk0i4e span.css-1ezzyzy");
    tickerSpans.forEach(span => {
      const text = span.textContent.trim();
      if (text && !tickers.has(text)) {
        tickers.add(text);
      }
    });
  }

  // Initial scrape
  extractTickersFromDOM();

  // Set up MutationObserver to watch for new elements as you scroll
  const observer = new MutationObserver(() => {
    extractTickersFromDOM();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Expose export function
  window.downloadTickersCSV = function () {
    observer.disconnect(); // stop observing
    const csvContent = Array.from(tickers).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", "tickers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("CSV downloaded with", tickers.size, "tickers.");
  };

  console.log("✅ Ticker tracking started. Scroll the page to load more.");
  console.log("📥 When ready, run: `downloadTickersCSV()` in the console to export the CSV.");
})();
