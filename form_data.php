<?php

    $success = -1;

    if(isset($_POST['email'])) {
         
        // EDIT THE 2 LINES BELOW AS REQUIRED
        $email_to = "support@themestreet.net";
        $email_subject = "Mail details from Preview of Dating Theme";
         
        
        $ime = $_POST['name']; // required
        $email_from = $_POST['email']; // required
        $subject = $_POST['subject']; // not required
        $text = $_POST['message']; // required
         
        $email_message = "Mail details from themestreet.com \n\n";
         
        function clean_string($string) {
          $bad = array("content-type","bcc:","to:","cc:","href");
          return str_replace($bad,"",$string);
        }
         
        $email_message .= "Name: ".clean_string($ime)."\n";
        $email_message .= "Email: ".clean_string($email_from)."\n";
        $email_message .= "Subject: ".clean_string($subject)."\n";
        $email_message .= "Message: ".clean_string($text)."\n";
         
         
    // create email headers
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);

    $success = true; 

}

?>
 

  <?php
    include 'index.html';
  ?>


    <script>
    $(document).ready(function(){
        <?php if($success === TRUE){ ?>
            $('html, body').animate({
              scrollTop: $("#contact").offset().top
            });
            // alert("Your message is sent successful!");
        <?php }  ?>
                
    });
  </script>