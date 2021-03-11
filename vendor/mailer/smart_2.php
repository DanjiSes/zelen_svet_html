<?php 

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$url = $_POST['user_url'];
$review = $_POST['user_review'];


require_once('phpmailer/PHPMailerAutoload.php');
$mail2 = new PHPMailer;
$mail2->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail2->isSMTP();                                      // Set mailer to use SMTP
$mail2->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail2->SMTPAuth = true;                               // Enable SMTP authentication
$mail2->Username = 'z3lensvet@yandex.ru';                 // Наш логин
$mail2->Password = '6vrwk4x2';                           // Наш пароль от ящика
$mail2->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail2->Port = 465;                                    // TCP port to connect to
 
$mail2->setFrom('z3lensvet@yandex.ru', 'Автошкола');   // От кого письмо 
$mail2->addAddress('azc6666@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail2->isHTML(true);                                  // Set email format to HTML

$mail2->Subject = 'Отзыв';
$mail2->Body    = '
	Пользователь оставил отзыв <br> 
	Имя: ' . $name . ' <br>
    Ссылка на соц сеть: ' . $url . ' <br>
	Отзыв: ' . $review . ' <br>
	Телефон: ' . $phone . '';
// $mail->AltBody = 'Это альтернативный текст';

if(!$mail2->send()) {
    return false;
} else {
    return true;
}

?>