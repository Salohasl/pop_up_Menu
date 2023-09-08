<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>Всплывающее меню
  </title>
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
</head>

<body>
    <div class="menu_Btn">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <img src="back.png" width="25px" height="25px">
    <div class="border"></div>
    <nav>
      <ul>
        <li>Обо мне</li>
        <li>Новости</li>
        <li>Заказы</li>
      </ul>
    </nav>
<style>
 body{
    background-color: rgb(71, 41, 41);
 }
  .border{
    border: 1px solid rgb(75, 48, 48);
    background-color: rgb(75, 48, 48);
    width: 300px;
    height: 300px;
    border-radius: 150px;
    margin-left: -70px;
    margin-top: -70px;
    display: none;
    animation: slide 0.7s;
  }
  @keyframes slide {
    from{
      margin-right: 80px;
      margin-bottom: 80px;
      width: 5%;
    }
    to{ 
      width: 300px;
    }
  }
  .border.active{
    display: block;
  }
  img{
    display: none;
    cursor: pointer;
    transition: 0.5s;
    animation: ico 1s;
  }
  @keyframes ico {
    from{
        margin-right: 80px;
        margin-bottom: 80px;
        width: 5%;
    }
    to{
        width: 25px; /*Недоделал*/
    }
  }
  img:hover{
    transform: scale(1.3);
  }
  img.up{
    display: block;
  }
  .menu_Btn{
    width: 25px;
    height: 25px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  .menu_Btn.none{
    display: none;
  }
    .menu_Btn span{
      border: 1px solid black;
      margin: 2px;
      width: 25px;
    }
    nav{
      margin-top: -200px;
      width: 10%;
    }
    ul{
      list-style-type: none;
    }
    
    
    li{
      color: black;
      text-align: start;
      margin-bottom: 20px;
      cursor: pointer;
      font-size: 20px;
      transform: scale(1);
      font-family: 'Courier New', Courier, monospace;
    }
    li:hover{
        color: white;
        transition: 0.3s;
    }
    
   
</style>
  <script>
    let menuBtn = document.querySelector('.menu_Btn');
    let border = document.querySelector('.border');
    let button = document.querySelector('img');

    menuBtn.addEventListener('click', function(){
      button.classList.toggle('up');
      border.classList.toggle('active');
      menuBtn.classList.toggle('none');
      
    })
    
