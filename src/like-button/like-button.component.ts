import {
    booleanAttribute,
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-like-button',
    standalone: true,
    template: `
        <button class="like-button" (click)="toggleLiked()">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <path
                    d="M24,44.9l-17.7-17.7c-4.3-4.3-4.3-11.3,0-15.6c2.1-2.1,4.9-3.3,7.9-3.3c3,0,5.8,1.2,7.9,3.3L24,13.5l1.9-1.9 c2.1-2.1,4.9-3.3,7.9-3.3c3,0,5.8,1.2,7.9,3.3c4.3,4.3,4.3,11.3,0,15.6L24,44.9z"
                    fill="none"
                    stroke="#E57373"
                    stroke-width="5"/>
                <path
                    d="M24,44.9l-17.7-17.7c-4.3-4.3-4.3-11.3,0-15.6c2.1-2.1,4.9-3.3,7.9-3.3c3,0,5.8,1.2,7.9,3.3L24,13.5l1.9-1.9 c2.1-2.1,4.9-3.3,7.9-3.3c3,0,5.8,1.2,7.9,3.3c4.3,4.3,4.3,11.3,0,15.6L24,44.9z"
                    [attr.fill]="isLiked ? '#E57373' : 'transparent'"/>
            </svg>
        </button>
    `,
    styles: `
        .like-button {
            border: none;
            background-color: transparent;
            cursor: pointer;
            border-radius: 50%;
            display: flex;
            padding: 15%;

            svg {
                width: 100%;
                height: 100%;
            }

            &:hover {
                background-color: #e573732e;
            }
        }

        .icon {
            color: #E57373;
            width: 100%;
            height: 100%;
        }

    `,
    imports: [
        NgIf
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LikeButtonComponent {
    @Input({ transform: booleanAttribute, alias: 'isliked' }) isLiked = false;
    @Output('liketoggle') likeToggle = new EventEmitter<boolean>();

    toggleLiked() {
        this.likeToggle.emit();
    }
}
