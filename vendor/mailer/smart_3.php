<?php 

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];


require_once('phpmailer/PHPMailerAutoload.php');
$mail3 = new PHPMailer;
$mail3->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail3->isSMTP();                                      // Set mailer to use SMTP
$mail3->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail3->SMTPAuth = true;                               // Enable SMTP authentication
$mail3->Username = 'z3lensvet@yandex.ru';                 // Наш логин
$mail3->Password = '6vrwk4x2';                           // Наш пароль от ящика
$mail3->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail3->Port = 465;                                    // TCP port to connect to
 
$mail3->setFrom('z3lensvet@yandex.ru', 'Автошкола');   // От кого письмо 
$mail3->addAddress('azc6666@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail3->isHTML(true);                                  // Set email format to HTML

$mail3->Subject = 'Звонок';
$mail3->Body    = '
	Пользователь оставил заявку на звонок <br> 
	Имя: ' . $name . ' <br>
	Телефон: ' . $phone . '';
// $mail->AltBody = 'Это альтернативный текст';

if(!$mail3->send()) {
    return false;
} else {
    return true;
}

?>