import fonts from "google-fonts-complete";
import { sample, map, compact, uniqueId } from "lodash";
export default {
  list: fonts,
  random: () => {
    let font = sample(
      map(fonts, (val, key) => {
        return val;
      })
    );

    const variants = compact([
      font.variants.normal && "normal",
      font.variants.italic && "italic"
    ]);

    const variant = font.variants[sample(variants)];

    const weights = map(variant, (val, key) => {
      return key;
    });

    const pick = variant[sample(weights)];
    const id = uniqueId();

    return {
      id,
      key: id,
      cssName: pick.local[0],
      name: pick.local.join(", "),
      urls: pick.url,
      textTransform: sample(["none", "uppercase", "lowercase", "capitalize"]),
      //letterSpacing: (-0.5 + Math.floor(Math.random() * 8) / 8) * 0.25,
      letterSpacing: sample([
        -2 / 16,
        -1 / 16,
        0,
        1 / 16,
        2 / 16,
        3 / 16,
        4 / 16
      ]),
      textDecoration: sample([
        "overline",
        "line-through",
        "underline",
        "initial",
        "initial",
        "initial",
        "initial",
        "initial"
      ]),
      textDecorationStyle: sample([
        "solid",
        "wavy",
        "dotted",
        "dashed",
        "double",
        "groove",
        "ridge",
        "inset",
        "outset"
      ]),
      invert: Math.random() >= 0.5
    };
  }
};
