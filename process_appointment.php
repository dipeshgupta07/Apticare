<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $date = htmlspecialchars($_POST['date']);
    $time = htmlspecialchars($_POST['time']);
    $doctor = htmlspecialchars($_POST['doctor']);
    $message = htmlspecialchars($_POST['message']);

    // Hospital name
    $hospitalName = "Aastha Lok Hospital";

    // Combine data into a single string
    $data = "Hospital Name: $hospitalName\n" .
            "Full Name: $name\n" .
            "Email: $email\n" .
            "Phone Number: $phone\n" .
            "Appointment Date: $date\n" .
            "Appointment Time: $time\n" .
            "Preferred Doctor: $doctor\n" .
            "Additional Information: $message\n\n";

    // File to store the data
    $file = 'appointments.txt';

    // Append the data to the file
    file_put_contents($file, $data, FILE_APPEND);

    // Redirect to a thank-you page
    header('Location: thankyou.html');
    exit();
} else {
    // Redirect to the form if accessed directly
    header('Location: index.html');
    exit();
}
?>
