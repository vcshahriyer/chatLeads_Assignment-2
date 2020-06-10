<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    protected $fillable = [
        "name",
        "description",
        "release",
        "date",
        "rating",
        "ticket",
        "price",
        "country",
        "genre",
        "photo",
    ];
    public function comments()
    {
        return $this->hasMany('App\Comment');
    }
}
