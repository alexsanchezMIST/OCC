<?php

$args = array(
    'post-type' => 'team_members',
    'post_status' => 'publish',
    'perm' => 'readable',
    'nopaging' => true
);

$context          = Timber::context();
$context['posts'] = new Timber\PostQuery($args);
$templates        = array( 'page-team-members.twig' );

Timber::render( $templates, $context );