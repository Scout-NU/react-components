const RadioGroup = ({
  label = '',
  options,
  required = false,
  name,
  ...props
}) => (
  <div>
    {options.map((o, i) => (
      <Field
        key={o.value}
        component={RadioInput}
        name="status"
        id={o.value}
        label={o.label}
      />
    ))}
  </div>
);
