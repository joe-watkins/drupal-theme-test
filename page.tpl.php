<?php
// Loads the front page template
if ($is_front) {
    include 'page--home.tpl.php';
    return; }
if (!$is_front) {
    include 'page--inner.tpl.php';
    return; }
?>
