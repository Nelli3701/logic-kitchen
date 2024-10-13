@extends('layouts.default')

@section('title', 'Заказать кухонный гарнитур по своим размерам недорого в Екатеринбурге - Logic Kitchen')

@section('description', 'Изготовим кухонный гарнитур по вашему проекту или же разработаем проект для вас с учётом ваших пожеланий')

@section('page-content')
<div class="main-banner">


    <div class="banner-text ">
        <h1 class="main-banner-text text-shadow container">Кухонные гарнитуры на&nbsp;заказ в&nbsp;Екатеринбурге</h1>
        <div class="banner-desc text-shadow container">Ваша идея - наша реализация</div>
        <div class="banner-desc text-shadow container">Современные технологии и элегантный дизайн</div>
    </div>
</div>
<section class="light-background">

    <h2>Виды гарнитуров</h2>
    <div class="cat-list container"></div>
</section>
<section class="dark-background">
    <h2>Преимущества</h2>
    <div class="advantages container">
        <div class="advantages-part">
            <div class="advantage"><img src="img/quality.svg" alt="качество">
                <div class="advantage-text">Качественные материалы</div>
            </div>
            <div class="advantage"><img src="img/mediators.svg" alt="без посредников">
                <div class="advantage-text">Отсутствие посредников</div>
            </div>
            <div class="advantage"><img src="img/price.svg" alt="выгодные цены">
                <div class="advantage-text">Цена на 20% ниже, чем у конкурентов</div>
            </div>
        </div>
        <div class="advantages-part">
            <div class="advantage"><img src="img/design.svg" alt="дизайн">
                <div class="advantage-text">Разработка дизайна гарнитура</div>
            </div>
            <div class="advantage"><img src="img/guarantee.svg" alt="гарантия">
                <div class="advantage-text">Гарантия</div>
            </div>
            <div class="advantage"><img src="img/cleaning.svg" alt="уборка">
                <div class="advantage-text">Уборка после установки</div>
            </div>
        </div>

    </div>
</section>
<section class="indent light-background">
    <h3>Выберите подарок <br>при заказе кухни</h3>
    <form class="present-form" action="#" method="post">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, nesciunt!</p>
        <select>
            <option selected disabled>Ваш подарок</option>
            <option value="Мойка">Мойка</option>
            <option value="Смеситель">Смеситель</option>
            <option value="Фильтр для воды">Фильтр для воды</option>
        </select>
        <input type="text" placeholder="Введите телефон*" />
        <input class="btn" type="submit" value="Отправить">
    </form>
</section>
<section class="indent dark-background">
    <h2 id="projects">Реализованные проекты кухонь</h2>
    <div class="projects">
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">

            </div>
            <div class="carousel-inner">

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    </div>
</section>
<section class="indent light-background">
    <h2 id="materials">Материалы</h2>
    <div class="materials">

        <div class="material-content">

        </div>

    </div>

</section>
<section class="indent dark-background">
    <div class="container">
        <h2 id="calc">Калькулятор</h2>
        <p>Здесь вы можете самостоятельно сделать предварительный расчёт стоимости кухонного гарнитура</p>
    </div>
</section>
<section class="reviews light-background">
    <h2 id="reviews">Отзывы</h2>
    <div class="ya-widget container">
        <div style="width:560px;height:800px;overflow:hidden;position:relative;"><iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/126260982281?comments"></iframe><a href="https://yandex.ru/maps/org/logika_kukhni/126260982281/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">Логика
                кухни на карте Екатеринбурга — Яндекс Карты</a></div>
    </div>

</section>
<section class="faq-block text-shadow">
    <div class="container color-white">
        <h3 id="faq">Часто задаваемые вопросы</h3>
        <details class="faq-elements">
            <summary>Сколько стоит замер и дизайн проект?</summary>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, et inventore odio laborum
                suscipit quas, ullam officiis, id consequuntur eos dignissimos. Dicta fugiat quam quisquam,
                architecto id laboriosam officiis hic necessitatibus exercitationem voluptates repellendus!
                Deleniti nemo expedita id corrupti nihil cupiditate tempora laborum placeat quisquam
                similique nisi labore esse eum numquam vitae iusto at distinctio quam odit, officiis facere
                vel totam ratione! Pariatur quia, quis, tempora inventore saepe expedita id earum adipisci
                voluptatum et ad aut, impedit minus sunt in? Odit ut eaque error quam necessitatibus autem
            </p>
        </details>
        <details class="faq-elements">
            <summary>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laudantium!</summary>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, et inventore odio laborum
                suscipit quas, ullam officiis, id consequuntur eos dignissimos. Dicta fugiat quam quisquam,
                architecto id laboriosam officiis hic necessitatibus exercitationem voluptates repellendus!
                Deleniti nemo expedita id corrupti nihil cupiditate tempora laborum placeat quisquam</p>
        </details>
        <details class="faq-elements">
            <summary>Lorem ipsum dolor sit amet</summary>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, et inventore odio laborum
                architecto id laboriosam officiis hic necessitatibus exercitationem voluptates repellendus!
                Deleniti nemo expedita id corrupti nihil cupiditate tempora laborum placeat quisquam</p>
        </details>
    </div>
</section>
@stop