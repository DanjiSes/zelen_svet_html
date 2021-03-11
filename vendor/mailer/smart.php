<?php 

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$surname = $_POST['user_surname'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'z3lensvet@yandex.ru';                 // Наш логин
$mail->Password = '6vrwk4x2';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('z3lensvet@yandex.ru', 'Автошкола');   // От кого письмо 
$mail->addAddress('azc6666@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на обучение';
$mail->Body    = '
	Пользователь оставил заявку на обучение (получение скидки за онлайн запись) <br> 
	Имя: ' . $name . ' <br>
	Фамилия: ' . $surname . ' <br>
	Телефон: ' . $phone . '';
// $mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>