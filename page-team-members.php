<?php

$args = array(
    'post_type' => 'team_members',
    'post_status' => 'publish',
    'perm' => 'readable',
    'nopaging' => true,
);

$context = Timber::context();
$context['team_members'] = new Timber\PostQuery( $args );

Timber::render( 'page-team-members.twig', $context );

?>