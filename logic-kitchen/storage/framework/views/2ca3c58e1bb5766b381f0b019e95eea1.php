<div class="popup-overlay">
    <div class="inner-form popup form-wrapper">
        <div class="form-header">
            <button class="btn-close"></button>
            <p>Закажите расчет стоимости вашей новой кухни - это бесплатно и ни к чему вас не&nbsp;обязывает</p>
        </div>

        <form class="main-form " action="<?php echo e(route('post_form')); ?>" method="POST" enctype="multipart/form-data">
            <?php echo csrf_field(); ?>
            <input type="hidden" name="form_type" value="mainform">
            <input type="text" name="name" class="name" placeholder="Как к вам обращаться?*" required>
            <input type="tel" name="phone" class="phone-mask" placeholder="Ваш телефон*" required>
            <small>Нажимая кнопку «Отправить», я даю свое согласие на <a href="/soglasie">обработку персональных данных</a></small>
            <input class="btn" type="submit" value="Отправить">
        </form>
    </div>
</div><?php /**PATH D:\Виктория\Курсы\Laravel\logic-kitchen\resources\views/forms/mainform.blade.php ENDPATH**/ ?>