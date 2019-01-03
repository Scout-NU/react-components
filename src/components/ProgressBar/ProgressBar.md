Simple static example:

```js
<ProgressBar totalSteps={4} currentStep={2} />
```

Example with state change (press buttons to increment/decrement steps):

```js
initialState = { current: 4 };
<div>
  <ProgressBar totalSteps={10} currentStep={state.current} />

  <Margin all="4px">
    <button onClick={() => setState({ current: state.current - 1 })}>-</button>
    <button onClick={() => setState({ current: state.current + 1 })}>+</button>
  </Margin>
</div>;
```
