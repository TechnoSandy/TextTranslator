<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>

    <body>
        <?php
require_once('translate.class.php');

//$BingTranslator = new BingTranslator('<Application ID>', '<Application Secret>');

$q = $_REQUEST["q"];
        $q = $_REQUEST["q"];
    $lang = $_REQUEST["langCode"];
        
    if ($q !== "") {
   $translation = $BingTranslator->getTranslation('en',$lang, $q);
}
  echo $translation;
      
        

?>
    </body>

    </html>