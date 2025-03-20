<?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Get the form data
            $name = htmlspecialchars($_POST['name']);
            $email = htmlspecialchars($_POST['email']);
            $message = htmlspecialchars($_POST['message']);
            
            // Define the file path
            $file = "contact_form_submissions.txt";
            
            // Create the content to write to the file
            $entry = "Name: $name\nEmail: $email\nMessage: $message\n------------------------\n";
            
            // Append the form data to the file
            file_put_contents($file, $entry, FILE_APPEND | LOCK_EX);
            
            echo "<p style='color:green;'>Your message has been sent successfully!</p>";
        }
        ?>