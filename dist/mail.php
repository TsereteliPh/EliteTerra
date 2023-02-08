<?php

    use PHPmailer\PHPmailer\PHPmailer;
    use PHPmailer\PHPmailer\Exeption;

    require "PHPmailer/src/PHPmailer.php";
    require "PHPmailer/src/Exeption.php";

    $mail = new PHPmailer(true);
    $mail->CharSet = "UTF-8";

    $senderEmail = $_POST['modal-mail'];
    $senderName = $_POST['modal-name'];
    $senderPhone = $_POST['modal-phone'];

    $body = 'Пользователь ' . $senderName . 'оставил заявку на сайте EliteTerra. Почта пользователя: ' . $senderEmail . 'Телефон: ' . $senderPhone;

    $theme = "Новая заявка с сайта EliteTerra";

    $mail->addAdress("eliteterra@yandex.ru");

    $mail->Subject = $theme;
    $mail->Body = $body;

    $mail->send()





    $_POST = json_decode(file_get_contents('php://input'), true);

    $to = "eliteterra@yandex.ru";
    $from = trim($_POST['modal-mail']);
    $senderName = trim($_POST['modal-name']);
    $senderPhone = trim($_POST['modal-phone']);

    $subject = "Новая заявка с сайта EliteTerra";

    $message = "<p>Заявка от пользователя: <b>$senderName</b></p></br><p>Телефон для связи: <b>$senderPhone</b></p>";

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    mail($to, $subject, $message, $headers);
?>