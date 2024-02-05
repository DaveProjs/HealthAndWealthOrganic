<?php
/**
 * Recommended way to include parent theme styles.
 * (Please see http://codex.wordpress.org/Child_Themes#How_to_Create_a_Child_Theme)
 *
 */  

add_action( 'wp_enqueue_scripts', 'smartline_lite_child_style' );
function smartline_lite_child_style() 
{	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style') );
}

//custom codes

/*if( is_page('home') ) add_action('wp_enqueue_scripts', 'home_style',99999);
function home_style()
{	wp_enqueue_style( 'home-style', get_stylesheet_directory_uri() . '/home.css');
}*/

/**
 * Your code goes below.
 */


