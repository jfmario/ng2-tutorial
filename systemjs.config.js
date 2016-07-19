/**
 * System config for Angular 2 examples.
 */

( function ( global )
{
    var map = {
        '@angular': 'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'app': 'app',
        'rxjs': 'node_modules/rxjs'
    };
    var packages = {
        'angular2-in-memory-web-api': { main: 'index.js', default: 'js' },
        'app': { main: 'js/main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' }
    };
    var ngPackageNames = [
        'common', 'compiler', 'core', 'forms', 'http', 'platform-browser',
        'platform-browser-dynamic', 'router', 'router-deprecated', 'upgrade'
    ];

    function packIndex ( pkgName )
    {
        packages [ '@angular/' + pkgName ] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    }
    function packUmd ( pkgName )
    {
        packages [ '@angular/' + pkgName ] = {
            main: '/bundles/' + pkgName + '.umd.js',
            defaultExtension: 'js'
        };
    }

    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    ngPackageNames.forEach ( setPackageConfig );

    var config = { map: map, packages: packages };
    System.config ( config );
}) ( this );
