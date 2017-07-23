import { useAnimation, trigger, transition, style, animate } from "@angular/animations";
import { Component } from "@angular/core";

import { fadeAnimation } from "./animations";

@Component({
    template: `
        <StackLayout>
           <Button
                [@coolAnimation]="isVisible"
                text="Nice button."
            ></Button>

            <Button
                (tap)="toggle()"
                text="Toggle"
                backgroundColor="green"
                color="white"
            ></Button>
        </StackLayout>
    `,
    animations: [
        trigger("coolAnimation", [

            transition("invisible => visible", [
                useAnimation(fadeAnimation, {
                    params: {
                        from: 0,
                        to: 1,
                        time: "1s",
                    },
                })
            ]),

            transition("visible => invisible", [
                useAnimation(fadeAnimation, {
                    params: {
                        from: 1,
                        to: 0,
                        time: "0.4s",
                    },
                })
            ]),

        ])
    ],
})
export class ExternalAnimationComponent {
    public isVisible = "visible";

    toggle() {
        this.isVisible = this.isVisible === "visible" ?
            "invisible" :
            "visible";
    }
}

