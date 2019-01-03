Example radio inputs. Input is checked if the `value` prop === `id` prop

```js
<div>
  <RadioInput
    onChange={() => alert('click!')}
    label="Question 1"
    value="1"
    id="1"
  />
  <RadioInput
    onChange={() => alert('click!')}
    label="Question 2"
    value="1"
    id="2"
  />
</div>
```
