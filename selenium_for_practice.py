from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common import by


driver = webdriver.Chrome()

driver.maximize_window()

driver.get("https://www.google.com/")


input("wait....")