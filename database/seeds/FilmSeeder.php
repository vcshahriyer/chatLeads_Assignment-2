<?php

use Illuminate\Database\Seeder;
class FilmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Film::class, 6)->create()->each(function ($film) {
            $film->comments()->save(factory(App\Comment::class)->make());
        });
    }
}
