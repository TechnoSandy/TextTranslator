<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title></title>
</head>

<body>
    <?php
require_once('translate.class.php');

$BingTranslator = new BingTranslator('<Application ID>', '<Application Secret>');

$q = $_REQUEST["q"];
    if ($q !== "") {
    $translation = $BingTranslator->getTranslation('en', 'hi', $q);
}
    echo $translation;

?>
</body>

</html>