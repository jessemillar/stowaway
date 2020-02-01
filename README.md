[![Preview](dev/concept.png)](https://gallery.fitbit.com/details/5912615e-6cc3-4a04-969d-ce690f323e0f)

## CLI Usage
```
npm install
npx fitbit
fitbit$ bi
```

## Color Replacement
> Desired color on left, color to replace on right
```
mogrify -format png -fill "#ccaccb" -opaque "#f2f2f0" large-*.png
mogrify -format png -fill "#ccaccb" -opaque "#f2f2f0" small-*.png
mogrify -format png -fill "#8e478c" -opaque "#bd515a" small-*.png
mogrify -format png -fill "#8e478c" -opaque "#bd515a" large-*.png
```

## Quick Image Resize
> Images stolen from my other watch face were double-sized to make pixels more visible
```
mogrify -format png -filter point -resize 50% large-*.png
mogrify -format png -filter point -resize 50% small-*.png
```
