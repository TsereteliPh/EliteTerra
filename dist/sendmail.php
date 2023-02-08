<?php
    $to = "eliteterra@yandex.ru";
    $from = trim($_POST['modal-mail']);
    $senderName = trim($_POST['modal-name']);
    $senderPhone = trim($_POST['modal-phone']);

    $subject = "Новая заявка с сайта EliteTerra";

    $message = "<p>Заявка от пользователя: <b>$senderName</b></p></br><p>Телефон для связи: <b>$senderPhone</b></p>";

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    mail($to, $subject, $message, $headers);
?>