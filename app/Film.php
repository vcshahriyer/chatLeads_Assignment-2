<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    public function comments()
    {
        return $this->hasMany('App\Comment');
    }
}
