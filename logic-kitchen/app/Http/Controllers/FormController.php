<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class FormController extends Controller
{
    public function postForm(Request $request)
    {
        try {
            if ($request->has('form_type')) {
                switch ($request->input('form_type')) {
                    case 'mainform':
                        echo $request->input('name');
                        echo $request->input('phone');
                        break;
                    case 'giftform':
                        echo $request->input('gift');
                        echo $request->input('name');
                        echo $request->input('phone');
                        break;
                    default:
                        echo 'Unknown form type';
                        break;
                }
            }
            $request->validate([
                'name' => 'required',
                'phone' => 'required|regex:/\+7-\d{3}-\d{3}-\d{2}-\d{2}/'
            ]);
        } catch (ValidationException $e) {
            echo $e->getMessage();
        }
    }
}
