<!DOCTYPE html>
<html lang="en">

<head>
    @include('includes.head')
</head>

<body>
    <div class="wrapper">
        <div class="content light-background">
            <header class="main-header">

                @include('includes.header')



                <nav class="navbar dark-background">

                    @include('includes.nav')


                </nav>

            </header>
            <div class="page-content">
                @if (!request()->is('/'))
                <h1 class="container">{{ $name ?? 'Logic Kitchen' }}</h1>
                @endif
                @yield('page-content')
            </div>

        </div>
        <footer class="footer">
            @include('includes.footer')

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

</html>