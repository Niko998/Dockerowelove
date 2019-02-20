<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/','PagesController@home');
Route::get('/whatisit','PagesController@whatisit');
Route::get('/addtask','TodosController@addtask');
Route::post('/yourtasks','TodosController@added');
Route::get('/yourtasks','TodosController@yourtasks');
Route::get('/yoursubtasks/{id}','TodosController@yoursubtasks');
Route::delete('/yourtasks','TodosController@deleted');
Route::get('/api/yourtasks','TodosController@apiget');
Route::get('/api/yourtasksresp','TodosController@apiresponseget');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
