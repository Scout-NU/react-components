## Logo

[CMYK jpeg logos (.zip)](/logo/CMYK_Jpeg_Scout_Logos.zip)

[CMYK png logos (.zip)](/logo/CMYK_png_Scout_Logos.zip)

[RGB jpeg logos (.zip)](/logo/RGB_Jpeg_Scout_Logos.zip)

[RGB png logos (.zip)](/logo/RGB_png_Scout_Logos.zip)

## Colors

```js
const white = '#ffffff';
const wilson = '#f4f4f4';
const lightGray = '#F0F0F0';
const backGray = '#ededed';
// NOTE: gray shouldn't be used for anything besides headers
const gray = '#8c969b';
const graphite = '#6f7780';
const textGray = '#393939';
const darkGray = '#333333';
const black = '#000104';
const orange = '#f8971d';
const red = '#cf2326';
const teal = '#00a1b6';
const purple = '#cb9ac6';
const blue = '#0c4ba0';
const borderColor = '#dbdbdb';

const brixSansFont = "'Brix Sans', 'Helvetica', sans-serif";

const colors = {
  white,
  wilson,
  lightGray,
  backGray,
  gray,
  graphite,
  textGray,
  darkGray,
  black,
  orange,
  red,
  teal,
  purple,
  blue,
  borderColor,
};

<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
  {Object.keys(colors).map(col => (
    <div
      style={{
        backgroundColor: colors[col],
        height: '100px',
        width: '100px',
        fontFamily: brixSansFont,
        textAlign: 'center',
      }}
    >
      {col}
    </div>
  ))}
</div>;
```

## Fonts

- Brix Sans
- Sentinel

## Colors + fonts usage

```javascript static
// COLORS
export const white = '#ffffff';
export const wilson = '#f4f4f4';
export const lightGray = '#F0F0F0';
export const backGray = '#ededed';
// NOTE: gray shouldn't be used for anything besides headers
export const gray = '#8c969b';
export const graphite = '#6f7780';
export const textGray = '#393939';
export const darkGray = '#333333';
export const black = '#000104';
export const orange = '#f8971d';
export const red = '#cf2326';
export const teal = '#00a1b6';
export const purple = '#cb9ac6';
export const blue = '#0c4ba0';
export const borderColor = '#dbdbdb';

// FONTS
export const brixSansFont = "'Brix Sans', 'Helvetica', sans-serif";
export const sentinelFont = "'Sentinel', serif";
```
