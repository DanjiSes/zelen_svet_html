<?php 

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$question = $_POST['user_question'];



require_once('phpmailer/PHPMailerAutoload.php');
$mail5 = new PHPMailer;
$mail5->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail5->isSMTP();                                      // Set mailer to use SMTP
$mail5->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail5->SMTPAuth = true;                               // Enable SMTP authentication
$mail5->Username = 'z3lensvet@yandex.ru';                 // Наш логин
$mail5->Password = '6vrwk4x2';                           // Наш пароль от ящика
$mail5->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail5->Port = 465;                                    // TCP port to connect to
 
$mail5->setFrom('z3lensvet@yandex.ru', 'Автошкола');   // От кого письмо 
$mail5->addAddress('azc6666@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail5->isHTML(true);                                  // Set email format to HTML

$mail5->Subject = 'Вопрос';
$mail5->Body    = '
	Пользователь оставил Вопрос <br> 
    Имя: ' . $name . ' <br>
	Вопрос: ' . $question . ' <br>
	Телефон: ' . $phone . '';
// $mail->AltBody = 'Это альтернативный текст';

if(!$mail5->send()) {
    return false;
} else {
    return true;
}

?>