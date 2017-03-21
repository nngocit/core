import { AuthenService } from './authen/authenService';
import { inject } from 'aurelia-dependency-injection';
import { Aurelia } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import "./helpers/loggingSetting";
import "./helpers/axiosInterceptor";

@inject(AuthenService)
export class App {
  router: Router;
  userInfo: any;
  constructor(private authenSrv: AuthenService) {
    this.userInfo = this.authenSrv.userInfo;
  }
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      {
        route: ['', 'dashboard'], name: 'dashboard', moduleId: 'modules/dashboard/index', nav: true, title: 'Dashboard',
        settings: { icon: 'pg-home' }
      },
      {
        route: 'quan-ly-nhan-vien', name: 'quan-ly-nhan-vien', moduleId: 'modules/quan-ly-nhan-vien/index', nav: true, title: 'Quản lý nhân viên',
        settings: { icon: 'pg-tables' }
      },
      {
        route: 'quan-ly-phong-ban', name: 'quan-ly-phong-ban', moduleId: 'modules/quan-ly-phong-ban/index', nav: true, title: 'Quản lý phòng ban',
        settings: { icon: 'pg-tables' }
      },
      {
        route: 'logout', name: 'logout', moduleId: 'modules/logout/index', nav: false
      }
    ]);

    this.router = router;

  }
  attached() {
    var script = document.createElement("script");
    script.src = "pages/js/scripts.js";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}


