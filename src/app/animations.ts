import { animate, style, transition, trigger, stagger, group, query, animation, useAnimation, animateChild, keyframes } from '@angular/animations';


export let fadeInAnimation = animation([
  style({ opacity: 0 }),
  animate('{{duration}} {{easing}}')
], {
  params: {
    duration: '1s',
    easing: 'ease-out'
  }
});

export let bounceOutLeftAnimation = animation(
  animate('500ms 0s ease-in', keyframes([
    style({
      offset: .2,
      opacity: 1,
      transform: 'translateX(20px)'
    }),
    style({
      offset: 1,
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
  ]))
);

export let fade = trigger('fade', [
  transition(':enter', [
    group([
      query('@fadeStagger', stagger(300, animateChild()))
    ])
  ])
]);

export let fadeStagger = trigger('fadeStagger', [
  transition(':enter', [
    useAnimation(fadeInAnimation, {
      params: {
        duration: '500ms'
      }
    })
  ])
]);

export let slideUpAnimation = trigger('slideUpAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    animate('2s 2s ease-out')
  ])
]);

export let slideRightAnimation = trigger('slideRightAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('2s 2s ease-out')
  ])
]);

export let slideDown_HomeTitle_Animation = trigger('slideDown_HomeTitle_Animation', [
  transition(':enter', [
    style({ transform: 'translateY(-150px)' }),
    animate('2s 2s ease-out')
  ])
]);


export let slideInAnimation = animation(
  animate('1000ms 0s ease-out', keyframes([
    style({
      offset: 0,
      transform: 'translateX(-100%)'
    }),
    style({
      offset: .6,
      transform: 'translateX(25px)'
    }),
    style({
      offset: .75,
      transform: 'translateX(-10px)'
    }),
    style({
      offset: .9,
      transform: 'translateX(5px)'
    }),
  ]))
);

export let slideCartItems = trigger('slideCartItems', [
  transition(':enter', [
    useAnimation(slideInAnimation, {
      params: {
        duration: '300ms'
      }
    })
  ])
]);

export let slideCart = trigger('slideCart', [
  transition(':enter', [
    group([
      query(':enter', stagger(200, useAnimation(slideInAnimation)))
    ])
  ]),
  transition(':leave', useAnimation(bounceOutLeftAnimation)
  )
]);



export let heartBeatAnimation = animation(
  animate('1.3s 4s ease-in-out', keyframes([
    style({
      offset: 0,
      opacity: .5,
      transform: 'scale(1)'
    }),
    style({
      offset: .14,
      opacity: .75,
      transform: 'scale(1.3)'
    }),
    style({
      offset: .28,
      opacity: 1,
      transform: 'scale(1)'
    }),
    style({
      offset: .42,
      transform: 'scale(1.3)'
    }),
    style({
      offset: .7,
      transform: 'scale(1)'
    }),
  ]))
);

export let heartBeat = trigger('heartBeat', [
  transition(':enter', [
    style({ opacity: 0 }),
    useAnimation(heartBeatAnimation, {
      params: {
        duration: '1.3s'
      }
    })
  ])
]);