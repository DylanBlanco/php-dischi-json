<?php
$dataString = file_get_contents('./db/discs.json');

// imposto header di risposta
header('Content-Type: application/json');

// stampo in pagina
echo $dataString;
?>