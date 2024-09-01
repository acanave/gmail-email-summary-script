# Gmail Email Summary Script

## Description
This Google Apps Script collects unread emails from multiple Gmail accounts and sends a bi-daily summary email. The summary includes the sender, subject line, and timestamp of each unread email.

Google Apps Script is a cloud-based scripting language for light-weight application development in the G Suite platform. This script automates the process of collecting unread emails and sending a summary to your inbox, helping you stay on top of important communications.

## Setup Instructions

1. **Create a Google Apps Script Project:**
   - Go to [Google Apps Script](https://script.google.com/).
   - Create a new project and paste the contents of `checkEmails.gs`.

2. **Configure Gmail Accounts:**
   - Update the `emailAccounts` array in the script with your Gmail address.

3. **Set Up Triggers:**
   - Set time-based triggers to run the script at 12 PM and 5 PM daily.

4. **Deploy and Test:**
   - Run the script manually to ensure it works correctly.
   - Review the logs for any issues.
   - Check your spam or promotions folder if you don't see the summary email.

## Usage
- The script will send an email summary to the specified recipient address with the following format:

   ```plaintext
   Sender: example@example.com
   Subject: Important Update
   Timestamp: Mon Sep 01 2024 10:12:00 GMT-0500 (Central Daylight Time)
