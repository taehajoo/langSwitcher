import { Component, ViewEncapsulation, NgModule } from '@angular/core';

import { faPencilAlt, faUser,  faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'langSwitcher';

    //load icons
    faPencilAlt = faPencilAlt;
    faUser = faUser;
    faLock = faLock;
    faEnvelope = faEnvelope;

    //selected language string
    currentLang: any;

    //object containing all the labels for selected language
    selectedLabels: any


    //options with all the possible languages and corresponding text.
    //to add new languages, add here
    options: any = [
        {
            lang: 'English',
            select : 'Select your language',
            header: 'Please fill out the following information',
            name: 'Name',
            email: 'Email',
            password: 'Password',
            submit: 'Submit'
        },
        {
            lang: '한국어',
            select : '언어를 선택하여 주십시오',
            header: '정보를 작성해 주십시오',
            name: '이름',
            email: '이메일',
            password: '비밀번호',
            submit: '확인'
        },
        {
            lang: 'Español',
            select : 'Elige tu idioma',
            header: 'Por favor rellena el formulario',
            name: 'Nombre',
            email: 'Correo electrónico',
            password: 'Contraseña',
            submit: 'Enviar'
        }
    ]



    ngOnInit() {
        //set English as default dropdown
        this.currentLang = this.options[0].lang;
        this.setLabels(this.currentLang);
    }

    //set new language when select has changed
    setLabels(language) {
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].lang === language) {
                this.selectedLabels = this.options[i];
                console.log(this.selectedLabels);
            }
        }
    }


}


