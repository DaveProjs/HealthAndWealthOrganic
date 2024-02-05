<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'hwOrganicDb' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'pass' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'r$MK= 2rLx~o[|*=S#bkf_-h}$v7(PTttQQqZqNn(~*v>cL}S/:+@`P0<EUGU59?' );
define( 'SECURE_AUTH_KEY',  '6TSrF4QNOzl=`V)P}K?:<>-5{_:(-`<U@i6`e`c^[al0!MG;N~f,bY[R8vE?/fuF' );
define( 'LOGGED_IN_KEY',    'kRj0[|WAaq7nB5ihh%gRdz?mC&u+0tQs1qSATtP|>N%j?OGORu^))L51)vL>1Vw&' );
define( 'NONCE_KEY',        'm#*ejp`Rr0xs[AyUR@Bdi=n-N20VirQF/q)i| @|c0t+ota`<N.t:fpoeR<%wE0Q' );
define( 'AUTH_SALT',        '`=v?:Bro^46f(ARt[+#(4lPW)z)SdZ,9.AkH`Bg9ubp,p&C<S:7uRSK`y)vcT81<' );
define( 'SECURE_AUTH_SALT', ' .r/J 4Fhv]&9H3tS)C:4odH&YiOreI:1C~UVl7H{PmJ2AjFZ/ >(qM4P.e>ZjW>' );
define( 'LOGGED_IN_SALT',   ';W`^gjG5)c}2o{{!.Wj x<i*YS0QS$@[1oO!KDK>RdT^w.aI*2m%(K{z8P}!Gb)X' );
define( 'NONCE_SALT',       ';YrECr3AQ}`i&*K`(Os=aVYq.Jc%eRN3y-}c{]rG9E[B 4por>M9O`&3=m7?mcjw' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
