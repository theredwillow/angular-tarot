# Tarot in Angular

This project will allow me to practice Angular by reaching out to an open API for tarot.

Despite tarot's strong fanbase of mysticism, at the root of it, the cards are only meanings that relate to any human's experiences in life. This data set makes a great meditation tool through loose allusions that the "querent" (or person asking for a reading) can interpret however they choose.

Swagger: [Tarot Card Meanings REST API](https://app.swaggerhub.com/apis/ekswagger/rws-tarot_card_api/1.0.0)

## TO DO LIST

App
  if !spread.title
    input for title
  else if !positions.length
    inputs for positions
  else
    check that cards have data
    display cards

## QUESTIONS TO ANSWER

1. Study [ngModel](https://angular.io/api/forms/NgModel) and [Form Control](https://angular.io/api/forms/FormControl).
1. Learn more about [banana-in-a-box syntax and two-way binding](https://ofirrifo.medium.com/custom-angular-component-using-two-way-data-binding-aka-banana-in-a-box-syntax-9eb06b8cfb09). Is that prefered to [unidirectional downwards only](https://www.educative.io/answers/what-is-unidirectional-data-flow-in-react)?
1. [Is Redux a bad choice for Angular?](https://www.stackchief.com/blog/Why%20you%20should%20NEVER%20use%20Redux%20with%20Angular)
1. Is [smart/dumb component architecture](https://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/) necessary in Angular?

## HUGE FIXME
1. This error appears on ts strict mode in `src\app\app.module.ts` in the `StoreModule.forRoot` call. I can't figure out why it wants to break up Spread or how to stop it from doing that.
```
Type '(state: Spread | undefined, action: SetTitleAction) => Spread | { title: Spread; }' is not assignable to type 'ActionReducer<Spread | { title: Spread; }, Action>'.
  Types of parameters 'state' and 'state' are incompatible.
    Type 'Spread | { title: Spread; } | undefined' is not assignable to type 'Spread | undefined'.
      Type '{ title: Spread; }' is not assignable to type 'Spread'.
        Types of property 'title' are incompatible.
          Type 'Spread' is not assignable to type 'string'.ts(2322)
```