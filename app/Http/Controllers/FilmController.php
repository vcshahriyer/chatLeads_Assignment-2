<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Film;

class FilmController extends Controller
{
    function apiGetFilms(){
        $films = Film::paginate(3);
        return response()->json(["films"=>$films]);
    }
}
