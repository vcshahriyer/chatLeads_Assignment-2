<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use Faker\Generator as Faker;
use App\Comment;

$factory->define(App\Comment::class, function (Faker $faker) {
    return [
        "user_id" => factory('App\User')->create()->id,
        "name" => $faker->name,
        "comment" => $faker->text($maxNbChars = 200),
    ];
});
