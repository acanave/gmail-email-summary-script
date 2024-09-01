function checkEmails() {
  var emailAccounts = ['your-email@gmail.com'];
  var summary = '';
  var maxEmails = 100;  // Set the maximum number of emails to process
  var emailCount = 0;
  
  emailAccounts.forEach(function(email) {
    var threads = GmailApp.search('is:unread');
    
    for (var i = 0; i < threads.length && emailCount < maxEmails; i++) {
      var messages = threads[i].getMessages();
      
      for (var j = 0; j < messages.length && emailCount < maxEmails; j++) {
        if (messages[j].isUnread()) {
          summary += 'Sender: ' + messages[j].getFrom() + '\n';
          summary += 'Subject: ' + messages[j].getSubject() + '\n';
          summary += 'Timestamp: ' + messages[j].getDate() + '\n\n';
          emailCount++;
        }
      }
    }
  });
  
  // Send summary email
  MailApp.sendEmail({
    to: 'your-email@gmail.com',
    subject: 'Bi-Daily Email Summary',
    body: summary || 'No new unread emails.'
  });
}
