<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
 
  
  <!-- favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo e(asset('img/favicon/apple-touch-icon.png')); ?>">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo e(asset('img/favicon/favicon-32x32.png')); ?>">
    <link rel="manifest" href="<?php echo e(asset('img/favicon/site.webmanifest')); ?>">
    <link rel="mask-icon" href="<?php echo e(asset('img/favicon/safari-pinned-tab.svg')); ?>" color="#5bbad5">
    <link rel="shortcut icon" href="<?php echo e(asset('img/favicon/favicon.ico')); ?>">
    
    <meta name="msapplication-config" content="<?php echo e(asset('img/favicon/browserconfig.xml')); ?>">
    <meta name="theme-color" content="#e31e25">
  
  
  
  <!-- CSRF Token -->
  
  <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

  <title><?php echo e(setting('site.title')); ?></title>

  
  <link rel="stylesheet" href="<?php echo e(asset('css/app.css')); ?>" >
  <link rel="stylesheet" href="<?php echo e(asset('css/main.css')); ?>">
  <link rel="stylesheet" href="<?php echo e(asset('css/fonts.css')); ?>"> 
  
  <link rel="stylesheet" href="<?php echo e(asset('css/media.css')); ?>">
<!-- календарь--> 
  <link rel="stylesheet" href="<?php echo e(asset('css/tcal.css')); ?>">
<!-- переключатель меню--> 
  <link rel="stylesheet" href="<?php echo e(asset('css/toggleMenu.css')); ?>">
  <link rel="stylesheet" href="<?php echo e(asset('lib/font-awesome/css/font-awesome.min.css')); ?>">
  <!-- плагин Responsive Tables--> 
  <link rel="stylesheet" href="<?php echo e(asset('css/rwd-table.min.css')); ?>">

</head>
<body>
    
<header>
  <div class="container">
  <div class="row">
	<div class="col-md-2 col-sm-2">
    <img src="img/elevator.png" alt="Elevator" class="logo">    
	</div>
  

	<div class="col-md-7 col-sm-6 menu">
      <nav >
        <ul class="row">
          <li class="col-md-2 col-sm-1">
            <a class="active" href="/">
            <i class="fa fa-bell fa-lg" aria-hidden="true"></i>
          Текущее
        </a>
      </li>
          <li class="col-md-2 col-sm-1">
          <a href="/requestBook">
            <i class="fa fa-book fa-lg" aria-hidden="true"></i>
           журнал 
          </a>
        </li>
          <li class="col-md-2 col-sm-2">
            <a href="/detail">
              <i class="fa fa-microchip fa-lg" aria-hidden="true"></i>
            запчасти
          </a>
        </li>
          <li class="col-md-2 col-sm-2">
            <a href="/changeDetail">              
              <i class="fa fa-refresh fa-lg" aria-hidden="true"></i>
            то
          </a>              
              </li>                                   
        </ul>
      </nav>
      
  </div>

  <div class="col-md-3  col-sm-1 dropdown">
<img src="storage/<?php echo e(Auth::user()->avatar); ?>"   alt="avatar">
     <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
       <?php echo e(Auth::user()->name); ?> 
       <span class="caret"></span>                                 
     </a>

        <ul class="dropdown-menu" role="menu">

          <?php if(  Auth::user()->role_id == '1'): ?>
           <li>
                  <a href="/admin">
                    Панель администратора
                  </a>
            </li>
            <?php endif; ?>

          <li>
            <a href="<?php echo e(route('logout')); ?>"
             onclick="event.preventDefault();
               document.getElementById('logout-form').submit();">
                Выйти
                </a>

                 <form id="logout-form" action="<?php echo e(route('logout')); ?>" method="POST" style="display: none;">
                  <?php echo e(csrf_field()); ?>

                  </form>
                </li>

                </ul>
                </div>  
</div>
</div> 
	<button class="toggle-menu">
      <span class="sandwich">
      <span class="sw-topper"></span>
      <span class="sw-bottom"></span>
      <span class="sw-footer"></span>
      </span>
	</button>

<div class="top-menu">
<ul>
  <li><a href="/">
    <i class="fa fa-book fa-lg" aria-hidden="true"></i>
  текущие заявки 
</a>
</li>
  <li><a href="/requestBook">
    <i class="fa fa-book fa-lg" aria-hidden="true"></i>
  журнал заявок
    </a>
    </li>
  <li>
    <a href="/detail">
     <i class="fa fa-microchip fa-lg" aria-hidden="true"></i>
    заказ запчастей
    </a>
  </li>
  <li>
    <a href="/changeDetail">
     <i class="fa fa-refresh fa-lg" aria-hidden="true"></i>
     тех. обслуживание
  </a>
</li>
</ul>      
</div>


</div>

</header>


<main> 
 
    <?php echo $__env->yieldContent('content'); ?>
    
</main>

<footer>
    <div class="container">  
  <div class="row">
    <div class="col-sm-12">
    <div class="footer_text">   
  		<p>Сайт работает в режиме тестирования.</p>
  		
  		
	  </div>
  </div>	
  </div>
  </div> 
</footer>
 
<script src="<?php echo e(asset('js/app.js')); ?>"></script>
<script src="<?php echo e(asset('js/common.js')); ?>"></script>
 <!-- плагин календарь-->
<script src="<?php echo e(asset('js/tcal.js')); ?>"></script>
 <!-- плагин Responsive Tables-->
<script type="text/javascript" src="<?php echo e(asset('js/rwd-table.min.js')); ?>"></script>

</body>
</html>