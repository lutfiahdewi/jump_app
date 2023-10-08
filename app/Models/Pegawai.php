<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pegawai extends Model
{
    use HasFactory;
    protected $primaryKey = 'NIP';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nama',
		'NIP',
        'email',
        'tanggal_lahir',
        'jenis_kelamin',
        'no_hp',
    ];

    

     /**
     * Get the user that owns the profile(pegawai).
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'NIP', 'NIP');
    }

    //protected $table = 'pegawai';
}
