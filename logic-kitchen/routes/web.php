<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/contacts', function () {
    $data = [
        'name' => 'Контакты студии Logic Kitchen',
        'city' => 'Екатеринбург',
        'email' => 'logic-kitchen@yandex.ru',
        'phone' => '+7-932-604-35-56',
        'vk' => 'https://vk.com/logickitchen',
        'telegram' => 'https://t.me/logic_kitchen',
        'whatsapp' => '+7-912-607-16-19'
    ];
    return view('contacts', $data);
});
