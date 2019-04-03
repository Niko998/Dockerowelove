<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/





Route::group(['middleware' => ['auth']], function () {
    Route::post('/yourtasks','APIController@addedJson');
    Route::get('/tasks','APIController@apiget');
    Route::delete('/yourtasks','APIController@deletedJson');
    Route::post('/yoursubtasks','APIController@addedJson');
});
