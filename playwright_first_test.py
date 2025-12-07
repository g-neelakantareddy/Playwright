from playwright.sync_api import sync_playwright, expect
import logging
import time

logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(message)s')
with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    logging.info("Navigating to example.com")
    page.goto("https://the-internet.herokuapp.com/")

    page.on("dialog", lambda dialog: dialog.dismiss())
    page.route("**/favicon.ico", lambda route: route.abort())
    page.route("**/*", lambda route: logging.debug(f"Requesting: {route.request.url}") or route.continue_())

    logging.info(f"Page title {page.title()}")

    page.get_by_role("link", name="A/B Testing").click()

    text = "Also known as split testing."

    if page.get_by_text("Also known as split testing.").is_visible():
        logging.info("Yes its visible")
    else:
        logging.error("It didn't visible")
    logging.debug("Waiting for user input to close the browser...")

    time.sleep(2)

    input("Wait....")
    page.close()