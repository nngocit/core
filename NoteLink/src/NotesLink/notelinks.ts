import { inject } from "aurelia-dependency-injection";
import { notelinksService } from './services/notelinksService'

@inject(notelinksService)
export class notelinks {
    constructor(private noteservice: notelinksService) {

    }
    activate() {
        this.Check();
    }
    Check() {
        return this.noteservice.Gets().then((res) => {

            console.log('aa', res);
        })
    }
}
