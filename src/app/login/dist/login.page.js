"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.LoginPage = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var shared_1 = require("../../../../environments/shared");
var language_modal_page_1 = require("../../language-modal/language-modal.page");
var rxjs_1 = require("rxjs");
var LoginPage = /** @class */ (function () {
    function LoginPage(fb, apiService, util, router, modalCtrl, authService, loginGQL, route, alertService, cd) {
        this.fb = fb;
        this.apiService = apiService;
        this.util = util;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loginGQL = loginGQL;
        this.route = route;
        this.alertService = alertService;
        this.cd = cd;
        this.alertButtons = ['OK'];
        this.submitted = false;
        this.showPassword = false;
        this.isLoggingIn = false;
        this.loginForm = this.fb.group({
            email: ['', [forms_1.Validators.required]],
            password: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    //modal//////////
    LoginPage.prototype.openModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: language_modal_page_1.LanguageModalPage,
                            cssClass: 'language-modal',
                            backdropDismiss: true
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ///////////
    LoginPage.prototype.ngOnInit = function () { };
    // onSubmit() {
    //   this.submitted = true;
    //   let url = '';
    //   const { email, password } = this.loginForm.value;
    //   console.log(this.loginForm.value);
    //   if (this.loginForm.valid) {
    //     this.loginGQL
    //       .mutate(
    //         {
    //           input: {
    //             email,
    //             password,
    //           },
    //         },
    //         {
    //           fetchPolicy: 'no-cache',
    //           errorPolicy: 'all',
    //         }
    //       )
    //       .subscribe({
    //         next: (res) => {
    //           console.log(res);
    //           if(res.errors){              
    //             this.util.showToast(res.errors[0].message, 'danger', 'top');
    //             return
    //           }
    //           localStorage.setItem('token', res.data.login.session.token)
    //           localStorage.setItem('userData', JSON.stringify(res.data.login.user))
    //           this.authService.handleLoginResult(res.data.login.user)
    //         },
    //         error: (e) => {
    //                   console.log(e);
    //                   this.util.showToast(e, 'danger', 'top');
    //         }
    //       });
    //   }
    // }
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.isLoggingIn) {
            return;
        }
        this.isLoggingIn = true;
        var _a = this.loginForm.value, email = _a.email, password = _a.password;
        this.route
            .queryParamMap
            .pipe(rxjs_1.map(function (params) { return params.get('redirect'); }), rxjs_1.first(), rxjs_1.switchMap(function (redirect) {
            return _this
                .authService
                .login(email, password, redirect);
        }), rxjs_1.catchError(function (err) { return _this.handleLoginError(err); }))
            .subscribe();
    };
    LoginPage.prototype.handleLoginError = function (err) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, extensions;
            return __generator(this, function (_b) {
                console.error(err);
                this.isLoggingIn = false;
                this.cd.detectChanges();
                if (err && err.errors) {
                    for (_i = 0, _a = err.errors; _i < _a.length; _i++) {
                        extensions = _a[_i].extensions;
                        if (extensions && extensions.type === 'Validation') {
                            return [2 /*return*/, this.alertService.showWrongCredentialsErrorAlert()];
                        }
                    }
                }
                return [2 /*return*/, this.alertService.showUnexpectedErrorAlert()];
            });
        });
    };
    LoginPage.prototype.toggleShow = function () {
        this.showPassword = !this.showPassword;
        //this.input.type = this.showPassword ? 'text' : 'password';
    };
    LoginPage.prototype.onMarkClick = function () {
        window.open(shared_1.URL, '_blank');
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss']
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
