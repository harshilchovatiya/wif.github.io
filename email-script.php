<?php  
 
if(isset($_POST['submit'])) {
 $mailto = "harshilbmk@gmail.com";  //My email address
 //getting customer data
 $name = $_POST['username']; //getting customer name
 $fromEmail = $_POST['email']; //getting customer email
 $phone = $_POST['phone']; //getting customer Phome number
 $subject = $_POST['subject']; //getting subject line from client
 $subject2 = "Confirmation: Stratmatic Solution"; // For customer confirmation

 
 //Email body I will receive
 $message = "Name: " . $name . "\n"
 . "Phone: " . $phone . "\n"
 . "Message: " . $_POST['message'];



 
 //Message for client confirmation
 $message2 = "Dear " . $name . "," ."\n"
 . "Thank you for contacting us. We will get back to you shortly!" . "\n\n"
 . "Regards," . "\n" . "-Team From ";

 $message2 .= "<html><body>";
$message2 .= "<p>Hello,</p>";
$message2 .= "<p>Here is a link to my website: <a href='http://www.example.com'>http://www.example.com</a></p>";
$message2 .= "<p>And here is a photo:</p>";
$message2 .= "<img src='http://www.example.com/photo.jpg' alt='Photo' />";
$message2 .= "</body></html>";
 
 //Email headers
  $headers = "From: " . $fromEmail; // Client email, I will receive
  $headers2 = "From: " . $mailto; // This will receive client
 
 //PHP mailer function
 
  $result1 = mail($mailto, $subject, $message, $headers); // This email sent to My address
  $result2 = mail($fromEmail, $subject2, $message2, $headers2); //This confirmation email to client
 
  //Checking if Mails sent successfully
 
  if ($result1 && $result2) {
    $success = "Your Message was sent Successfully!";
  } else {
    $failed = "Sorry! Message was not sent, Try again Later.";
  }
 header("Location:contact.html");
}
 
?>