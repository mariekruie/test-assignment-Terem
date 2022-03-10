<?php
header('Content-Type: application/json');
 
$result = array(
	'succes'  => 'Данные получены',
	'error' => 'Произошла ошибка...'
);
 
echo json_encode($result);