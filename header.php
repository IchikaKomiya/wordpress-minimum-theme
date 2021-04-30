<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 ">
    <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">

    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="header">
    <section class="header-container">
        <a href="<?php bloginfo('url'); ?>" title="<?php bloginfo('name'); ?>"><h1><?php bloginfo('name'); ?></h1></a>
    </section>
</header>
