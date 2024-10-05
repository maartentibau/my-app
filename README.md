# Procedure

- run `npm install`

clone `directive-lib` from: https://github.com/maartentibau/directive-lib

- `cd directive-lib`
- run `npm install`
- run `npm run build`
- run `npm pack` from the `dist/ng-directives` folder

navigate to the `my-app`

run `npm install `../directive-lib/dist/ng-directive/ng-directives-0.0.1.tgz`

goto `app.component.ts` and create this variable

```ts
value = {
  a: 'foobar',
  b: {
    c: 10
  }
}
```

add the import

```ts
import { TypedDirective } from 'ng-directives';`
```

goto `app.component.html` use this content

```html
<main class="main">
  <ng-template let-value let-foo="foo" let-bar="bar" [typedTemplate]="value">
    {{ value }}
    {{ foo }}
    {{ bar }}
  </ng-template>
</main>

<router-outlet />
```

If you know hover over the `{{ value }}` to get its type with intelli-sense, it says unknown.
If you hover over `foo` or `bar` it adds the type but the generic is still `unknown`.





