<!DOCTYPE html>
<html lang="en">

<head>
    <?php echo $__env->make('includes.head', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</head>

<body>
    <div class="wrapper">
        <div class="content light-background">
            <header class="main-header">

                <?php echo $__env->make('includes.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>



                <nav class="navbar dark-background">

                    <?php echo $__env->make('includes.nav', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>


                </nav>

            </header>
            <div class="page-content">
                <?php if(!request()->is('/')): ?>
                <h1 class="container"><?php echo e($name ?? 'Logic Kitchen'); ?></h1>
                <?php endif; ?>
                <?php echo $__env->yieldContent('page-content'); ?>
            </div>

        </div>
        <footer class="footer">
            <?php echo $__env->make('includes.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        </footer>
    </div>
    <script src="scripts/index.js"></script>
    <script src="scripts/menu.js"></script>
    <script src="data/projects.js"></script>
    <script src="data/categories.js"></script>
    <script src="scripts/carousel.js"></script>
    <script src="scripts/types.js"></script>
    <script src="scripts/materials.js"></script>
</body>

</html><?php /**PATH D:\Виктория\Курсы\Laravel\logic-kitchen\resources\views/layouts/default.blade.php ENDPATH**/ ?>