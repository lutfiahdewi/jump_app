<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PegawaiController extends Controller
{
    /**
     * Show a list of all of the Pegawais.
     */
    public function getAllPegawai()
    {
        $pegawais = DB::table('pegawais')->get();
        return (object) $pegawais;

        /**return Inertia::render('App', [
            'pegawai' => DB::table('pegawais')->get()
          ]);**/
    }

    

    //Edit profile user

}
