# Robinhood Ticker Extractor

This JavaScript snippet is designed to scrape and download a list of stock tickers from a Robinhood watchlist directly from your browser's console.

## How to Use

1.  **Open Robinhood in your browser:** Navigate to your Robinhood watchlist or the page containing the stock tickers you want to extract.
2.  **Open the Browser Console:** Press F12 (or Cmd+Opt+J on Mac) to open the browser's developer tools and select the "Console" tab.
3.  **Paste the Code:** Copy the entire JavaScript provided in 'download.js' and paste it into the console. Press Enter to execute the code.
4.  **Scroll to Load More Tickers:** The script starts tracking tickers as soon as it's executed. Scroll down the page to load more tickers into the DOM. The script uses a `MutationObserver` to automatically detect and add new tickers as they appear.
5.  **Download the CSV:** Once you've scrolled through all the tickers you want to extract, type `downloadTickersCSV()` into the console and press Enter. This will trigger the download of a CSV file named `tickers.csv` containing the list of tickers.
6.  **Locate the downloaded file:** The `tickers.csv` file will be saved to your computer's default downloads folder.

## Explanation

*   The script uses `querySelectorAll` to find all elements containing ticker symbols.  It looks for `div` elements with class `css-1qk0i4e` that contain `span` elements with class `css-1ezzyzy`.
*   A `Set` is used to store the tickers, ensuring that each ticker is only added once.
*   A `MutationObserver` is used to watch for changes to the DOM, so that new tickers are automatically added as you scroll down the page.
*   The `downloadTickersCSV` function stops the observer, converts the set of tickers to a comma-separated string, creates a Blob object, and triggers a download by creating a temporary `<a>` element.

## Important Notes

*   This script is designed to work with the current HTML structure of Robinhood's watchlist page. If Robinhood changes their website's HTML, this script may stop working.
*   The script extracts data directly from the DOM, so it may be affected by any other scripts or browser extensions that modify the DOM.
*   Be respectful of Robinhood's terms of service and avoid scraping their website excessively.
