
	<?php do_action('smartline_before_footer'); ?>

	<footer id="footer" class="clearfix" role="contentinfo">

		<?php // Display Footer Navigation
		if ( has_nav_menu( 'footer' ) ) : ?>

		<nav id="footernav" class="clearfix" role="navigation">
			<?php wp_nav_menu(	array(
				'theme_location' => 'footer',
				'container' => false,
				'menu_id' => 'footernav-menu',
				'fallback_cb' => '',
				'depth' => 1)
			);
			?>
		</nav>

		<?php endif; ?>

		<div id="footer-text">
			<?php //do_action('smartline_footer_text'); ?>
			<span class="copy"> Copyright © 2024 Health and Wealth Organic. All Rights Reserved.</span> 
			<span class="dev"> <a href="https://wa.me/2348064329640?text=Hello,%20Code%20Developer?">Designed by CodeDevelopers inc</a> <a href="https://wa.me/2348064329640?text=Hello,%20Code%20Developer?">+234 806 4329 640</a> <a href="mailto:akaydavid@yahoo.com">akaydavid@yahoo.com</a></span>
		</div>

	</footer>

</div><!-- end #wrapper -->

<?php wp_footer(); ?>
</body>
</html>
