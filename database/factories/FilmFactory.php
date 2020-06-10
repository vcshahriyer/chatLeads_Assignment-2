<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;
use App\Film;

$factory->define(App\Film::class, function (Faker $faker) {
    return [
        "name" => $faker->name,
        "description" => $faker->text($maxNbChars = 200),
        "release" => $faker->date($format = 'Y-m-d', $max = 'now'),
        "date" => $faker->date($format = 'Y-m-d', $max = 'now'),
        "rating" => $faker->numberBetween($min = 1, $max = 5),
        "ticket" => $faker->numerify('Ticket ###'),
        "price" => $faker->randomDigitNotNull,
        "country" => $faker->country,
        "genre" => join(",",$faker->randomElements(["Action","Adventure",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Historical",
        "Horror",
        "Mystery",
        "Philosophical",
        "Political",
        "Romance",
        "Saga",
        "Satire"],2)),
        "photo" => $faker->imageUrl($width = 640, $height = 480),
    ];
});
