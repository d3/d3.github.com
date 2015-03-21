> [Wiki](Home) ▸ [[API Reference]] ▸ [[Core]] ▸ **Colors**

Constructing visualizations often involves working with colors. Even though your browser understands a lot about colors, it doesn't offer much help in manipulating colors through JavaScript. So D3 provides representations for various color spaces, including [RGB](http://en.wikipedia.org/wiki/RGB_color_model), [HSL](http://en.wikipedia.org/wiki/HSL_and_HSV), [LAB](http://en.wikipedia.org/wiki/Lab_color_space) and [HCL](https://en.wikipedia.org/wiki/CIELUV_color_space#Cylindrical_representation), allowing specification, interpolation, conversion and manipulation (such as making colors brighter or darker).

Note: while you can work with colors directly, you might also want to take a look at D3's built-in color interpolation, such as [interpolateRgb](Transitions#d3_interpolateRgb), [interpolateHsl](Transitions#d3_interpolateHsl) and [scales](Scales). If you are looking for **color palettes**, see the [ordinal scales](Ordinal-Scales) reference.

## RGB

<a name="d3_rgb" href="#d3_rgb">#</a> d3.<b>rgb</b>(<i>r</i>, <i>g</i>, <i>b</i>)

Constructs a new RGB color with the specified *r*, *g* and *b* channel values. Each channel must be specified as an integer in the range [0,255]. The channels are available as the `r`, `g` and `b` attributes of the returned object.

<a href="#d3_rgb">#</a> d3.<b>rgb</b>(<i>color</i>)

Constructs a new RGB color by parsing the specified *color* string. If *color* is not a string, it is coerced to a string; thus, this constructor can also be used to create a copy of an existing color, or force the conversion of a [d3.hsl](#d3_hsl) color to RGB. The color string may be in a variety of formats:

* rgb decimal - "rgb(255,255,255)"
* hsl decimal - "hsl(120,50%,20%)"
* rgb hexadecimal - "#ffeeaa"
* rgb shorthand hexadecimal - "#fea"
* named - "red", "white", "blue"

The resulting color is stored as red, green and blue integer channel values in the range [0,255]. The channels are available as the `r`, `g` and `b` attributes of the returned object. The list of supported [named colors](http://www.w3.org/TR/SVG/types.html#ColorKeywords) is specified by CSS. If the color is specified in HSL space, it is converted to RGB in a manner equivalent to [hsl.rgb](#hsl_rgb).

<a name="rgb_brighter" href="#rgb_brighter">#</a> rgb.<b>brighter</b>([<i>k</i>])

Returns a brighter copy of this color. Each channel is multiplied by 0.7 ^ *-k*. If the gamma value *k* is omitted, it defaults to 1. Channel values are capped at the maximum value of 255, and the minimum value of 30.

<a name="rgb_darker" href="#rgb_darker">#</a> rgb.<b>darker</b>([<i>k</i>])

Returns a darker copy of this color. Each channel is multiplied by 0.7 ^ *k*. If the gamma value *k* is omitted, it defaults to 1.

<a name="rgb_hsl" href="#rgb_hsl">#</a> rgb.<b>hsl</b>()

Returns the equivalent color in HSL space; see [d3.hsl](#d3_hsl) for details on the returned object. The conversion from HSL to RGB is described in [CSS3 Color Module Level 3](http://www.w3.org/TR/css3-color/#hsl-color); this is the equivalent reverse operation.

<a name="rgb_toString" href="#rgb_toString">#</a> rgb.<b>toString</b>()

Converts this RGB color to a hexadecimal string, such as "#f7eaba".

## HSL

<a name="d3_hsl" href="#d3_hsl">#</a> d3.<b>hsl</b>(<i>h</i>, <i>s</i>, <i>l</i>)

Constructs a new HSL color with the specified hue *h*, saturation *s* and lightness *l*. The hue must be a number in the range [0,360]. The saturation and lightness must be in the range [0,1] <span>(not percentages)</span>. These values are available as the `h`, `s` and `l` attributes of the returned object.

<a href="#d3_hsl">#</a> d3.<b>hsl</b>(<i>color</i>)

Constructs a new HSL color by parsing the specified *color* string. If *color* is not a string, it is coerced to a string; thus, this constructor can also be used to create a copy of an existing color, or force the conversion of a [d3.rgb](#d3_rgb) color to HSL. The color string may be in a variety of formats:

* rgb decimal - "rgb(255,255,255)"
* hsl decimal - "hsl(120,50%,20%)"
* rgb hexadecimal - "#ffeeaa"
* rgb shorthand hexadecimal - "#fea"
* named - "red", "white", "blue"

The resulting color is stored as hue in the range [0,360], and saturation and lightness values in the range [0,1]. These values are available as the `h`, `s` and `l` attributes of the returned object. The list of supported [named colors](http://www.w3.org/TR/SVG/types.html#ColorKeywords) is specified by CSS. If the color is specified in RGB space, it is converted to HSL in a manner equivalent to [rgb.hsl](#rgb_hsl).

<a name="hsl_brighter" href="#hsl_brighter">#</a> hsl.<b>brighter</b>([<i>k</i>])

Returns a brighter copy of this color. The lightness channel is multiplied by 0.7 ^ *-k*. If the gamma value *k* is omitted, it defaults to 1.

<a name="hsl_darker" href="#hsl_darker">#</a> hsl.<b>darker</b>([<i>k</i>])

Returns a darker copy of this color. The lightness channel is multiplied by 0.7 ^ *k*. If the gamma value *k* is omitted, it defaults to 1.

<a name="hsl_rgb" href="#hsl_rgb">#</a> hsl.<b>rgb</b>()

Returns the equivalent color in RGB space; see [d3.rgb](#d3_rgb) for details on the returned object. The conversion from HSL to RGB is described in [CSS3 Color Module Level 3](http://www.w3.org/TR/css3-color/#hsl-color).

<a name="hsl_toString" href="#hsl_toString">#</a> hsl.<b>toString</b>()

Converts this HSL color to an RGB hexadecimal string, such as "#f7eaba".

## HCL

<a name="d3_hcl" href="#d3_hcl">#</a> d3.<b>hcl</b>(<i>h</i>, <i>c</i>, <i>l</i>)

…

<a href="#d3_hcl">#</a> d3.<b>hcl</b>(<i>color</i>)

…

<a name="hcl_brighter" href="#hcl_brighter">#</a> hcl.<b>brighter</b>([<i>k</i>])

…

<a name="hcl_darker" href="#hcl_darker">#</a> hcl.<b>darker</b>([<i>k</i>])

…

<a name="hcl_rgb" href="#hcl_rgb">#</a> hcl.<b>rgb</b>()

…

<a name="hcl_toString" href="#hcl_toString">#</a> hcl.<b>toString</b>()

Converts this HCL color to an RGB hexadecimal string, such as "#f7eaba".

## L\*a\*b\*

<a name="d3_lab" href="#d3_lab">#</a> d3.<b>lab</b>(<i>l</i>, <i>a</i>, <i>b</i>)

…

<a href="#d3_lab">#</a> d3.<b>lab</b>(<i>color</i>)

…

<a name="lab_brighter" href="#lab_brighter">#</a> lab.<b>brighter</b>([<i>k</i>])

…

<a name="lab_darker" href="#lab_darker">#</a> lab.<b>darker</b>([<i>k</i>])

…

<a name="lab_rgb" href="#lab_rgb">#</a> lab.<b>rgb</b>()

…

<a name="lab_toString" href="#lab_toString">#</a> lab.<b>toString</b>()

Converts this L\*a\*b\* color to an RGB hexadecimal string, such as "#f7eaba".

## Color

A d3.color base type is provided if you want to extend D3 with additional color spaces. This type enables automatic RGB interpolation by [d3.interpolate](Transitions#d3_interpolate) (detected via `instanceof d3.color`).

<a name="d3_color" href="#d3_color">#</a> d3.<b>color</b>()

The base constructor for color types.

<a name="rgb" href="#rgb">#</a> color.<b>rgb</b>()

Returns the [RGB equivalent](#d3_rgb) of this color. Must be implemented by all color spaces.

<a name="toString" href="#toString">#</a> color.<b>toString</b>()

Converts an RGB hexadecimal string representing this color, such as "#f7eaba".
