angularjs-boilerplate
=====================

The starting point to start any new AngularJS applications.


This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.


Build & Develop
---------------
- Setup:

  + Get `teracy-dev` running by following: http://dev.teracy.org/docs/getting_started.html
  + Clone this repo to `~/workspace/personal/angularjs-boilerplate`
  + Then:

  ```
  $ vagrant ssh
  $ ws
  $ cd personal/angularjs-boilerplate
  ```

  + Permissions workaround (will be fixed soon) and additional packages required:

  ```
  $ sudo chown `whoami` /home/vagrant/tmp -R
  $ sudo chown `whoami` /home/vagrant/.npm/ -R
  $ sudo npm install -g npm --upgrade
  $ sudo apt-get install libfontconfig -y
  ```

  + Finally:

  ```
   $ npm install
   $ bower install
  ```

- Run `grunt` for building and `grunt serve` for preview.


- Use `$ yo angular:*` to generate routers, controllers, directives, services, etc.

Test
----

Executing `grunt test` will run the unit tests with karma.
