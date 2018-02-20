<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLifterrorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lifterrors', function (Blueprint $table) {
            $table->increments('id');            
            $table->date('date');
            $table->string('address');
            $table->string('front');
            $table->string('typeOfLift');
            $table->string('typeOfError');
            $table->text('work');
            $table->string('notice');
            $table->timestamps();
        });
           
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::dropIfExists('lifterrors');
    }
}
