Simple button example, with `onClick` action

```js
<Button onClick={() => alert('Clicked!')}>Click me!</Button>
```

Disabled button:

```js
<Button disabled onClick={() => alert('Clicked!')}>
  Click me!
</Button>
```

Different themes:

```js
<FlexRow>
  <Margin all="4px">
    <Button theme="default" onClick={() => alert('Clicked!')}>
      Default
    </Button>
  </Margin>
  <Margin all="4px">
    <Button theme="primary" onClick={() => alert('Clicked!')}>
      Primary
    </Button>
  </Margin>
</FlexRow>
```
