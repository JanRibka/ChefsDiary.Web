import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

import { blackA, mauve } from "@radix-ui/colors";
import * as radixTheme from "@radix-ui/themes";

export const accentColorNames: string[] = [];
export const grayColorNames: string[] = [];

const radixColorScales = 12;
type RadixColorScales = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

radixTheme.themeAccentColorsGrouped.map((group) => {
  accentColorNames.push(...group.values.filter((color) => color !== "gray"));
});
radixTheme.themeGrayColorsGrouped.map((group) => {
  grayColorNames.push(...group.values.filter((color) => color !== "auto"));
});

export function getColorTokenName(
  number: RadixColorScales,
  useTailwindColorNames?: boolean,
  alpha?: boolean
): number | string {
  const map: Record<number, number> = {
    1: 25,
    2: 50,
    3: 100,
    4: 200,
    5: 300,
    6: 400,
    7: 500,
    8: 600,
    9: 700,
    10: 800,
    11: 900,
    12: 950,
  } as const;

  if (!useTailwindColorNames) {
    return alpha ? number + "A" : number;
  }

  return alpha ? ((map[number] + "A") as string) : (map[number] as number);
}

export const getColorDefinitions = (
  color: string,
  alpha?: boolean,
  useTailwindColorNames?: boolean
) => {
  const colors = Array.from(Array(radixColorScales).keys()).reduce(
    (acc, _, i) => {
      acc[
        getColorTokenName(
          (i + 1) as RadixColorScales,
          useTailwindColorNames,
          alpha
        )
      ] = `var(--${color}-${alpha ? "a" : ""}${i + 1})`;
      return acc;
    },
    {} as Record<string, string>
  );

  if (!alpha) {
    colors[`${getColorTokenName(9, useTailwindColorNames, alpha)}-contrast`] =
      `var(--${color}-9-contrast)`;
    colors["surface"] = `var(--${color}-surface)`;
    colors["DEFAULT"] = `var(--${color}-9)`;
    if (color === "accent") {
      colors["surface"] = `var(--color-surface-accent)`;
    }
  }

  return colors;
};

type RadixColors = Exclude<
  | (typeof radixTheme.themeAccentColorsOrdered)[number]
  | (typeof radixTheme.themeGrayColorsGrouped)[0]["values"][number],
  "auto"
>;

export const tailwindColorsToRadixMap: Record<
  "zinc" | "neutral" | "stone" | "emerald" | "fuchsia" | "rose",
  RadixColors | Record<string, string>
> = {
  zinc: "sand",
  neutral: "sage",
  stone: "sand",
  emerald: "grass",
  fuchsia: "plum",
  rose: "crimson",
};

export type RadixThemePluginOptions = {
  useTailwindColorNames?: boolean;
  mapMissingTailwindColors?: boolean | Partial<typeof tailwindColorsToRadixMap>;
};

const colorPrimary = "rgb(44, 59, 75)";
const colorPrimaryDark = "rgb(17, 29, 40)";

const radixThemePlugin = plugin.withOptions(
  // eslint-disable-next-line no-empty-pattern
  ({}: RadixThemePluginOptions) => {
    return ({ addBase }) => {
      addBase({
        "*": {
          outlineColor: "currentColor",
        },
        "html, body": {
          height: "100%",
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
        },
        // em: {
        //   fontFamily: "var(--em-font-family)",
        //   fontWeight: "var(--em-font-weight)",
        //   fontSize: "calc(var(--em-font-size-adjust) * 1em)",
        //   fontStyle: "var(--em-font-style)",
        //   lineHeight: "1.25",
        //   letterSpacing:
        //     "calc(var(--em-letter-spacing) + var(--letter-spacing, var(--default-letter-spacing)))",
        // },
        // h6: {
        //   fontFamily: "var(--heading-font-family)",
        //   fontWeight: "var(--font-weight-bold)",
        //   fontSize:
        //     "calc(var(--font-size-4) * var(--heading-font-size-adjust))",
        //   letterSpacing:
        //     "calc(var(--letter-spacing-4) + var(--heading-letter-spacing))",
        //   lineHeight: "var(--heading-line-height-4)",
        // },
        // h5: {
        //   fontFamily: "var(--heading-font-family)",
        //   fontWeight: "var(--font-weight-bold)",
        //   fontSize:
        //     "calc(var(--font-size-5) * var(--heading-font-size-adjust))",
        //   letterSpacing:
        //     "calc(var(--letter-spacing-5) + var(--heading-letter-spacing))",
        //   lineHeight: "var(--heading-line-height-5)",
        // },
        // h4: {
        //   fontFamily: "var(--heading-font-family)",
        //   fontWeight: "var(--font-weight-bold)",
        //   fontSize:
        //     "calc(var(--font-size-6) * var(--heading-font-size-adjust))",
        //   letterSpacing:
        //     "calc(var(--letter-spacing-6) + var(--heading-letter-spacing))",
        //   lineHeight: "var(--heading-line-height-6)",
        // },
        // h3: {
        //   fontFamily: "var(--heading-font-family)",
        //   fontWeight: "var(--font-weight-bold)",
        //   fontSize:
        //     "calc(var(--font-size-7) * var(--heading-font-size-adjust))",
        //   letterSpacing:
        //     "calc(var(--letter-spacing-7) + var(--heading-letter-spacing))",
        //   lineHeight: "var(--heading-line-height-7)",
        // },
        // h2: {
        //   fontFamily: "var(--heading-font-family)",
        //   fontWeight: "var(--font-weight-bold)",
        //   fontSize:
        //     "calc(var(--font-size-8) * var(--heading-font-size-adjust))",
        //   letterSpacing:
        //     "calc(var(--letter-spacing-8) + var(--heading-letter-spacing))",
        //   lineHeight: "var(--heading-line-height-8)",
        // },
        // h1: {
        //   fontFamily: "var(--heading-font-family)",
        //   fontWeight: "var(--font-weight-bold)",
        //   fontSize:
        //     "calc(var(--font-size-9) * var(--heading-font-size-adjust))",
        //   letterSpacing:
        //     "calc(var(--letter-spacing-9) + var(--heading-letter-spacing))",
        //   lineHeight: "var(--heading-line-height-9)",
        // },
      });
    };
  },
  ({
    useTailwindColorNames = true,
    mapMissingTailwindColors = true,
  }: RadixThemePluginOptions) => {
    function generateTailwindColors(colorName: string) {
      const c = {
        ...getColorDefinitions(colorName, false, useTailwindColorNames),
        ...getColorDefinitions(colorName, true, useTailwindColorNames),
      };

      if (grayColorNames.includes(colorName)) {
        c[`${getColorTokenName(2, useTailwindColorNames, false)}-translucent`] =
          `var(--${colorName}-2-translucent)`;
      }

      return c;
    }

    const allRadixColors = [...accentColorNames, ...grayColorNames].reduce<
      Record<string, Record<string, string>>
    >((acc, colorName) => {
      acc[colorName] = { ...generateTailwindColors(colorName) };
      return acc;
    }, {});

    let mappingsOfMissingTailwindColors = {};

    if (typeof mapMissingTailwindColors === "boolean") {
      mappingsOfMissingTailwindColors = {
        zinc: generateTailwindColors("sand"),
        neutral: generateTailwindColors("sage"),
        stone: generateTailwindColors("mauve"),
        emerald: generateTailwindColors("grass"),
        fuchsia: generateTailwindColors("plum"),
        rose: generateTailwindColors("crimson"),
      };
    } else if (typeof mapMissingTailwindColors === "object") {
      mappingsOfMissingTailwindColors = {
        zinc:
          typeof mapMissingTailwindColors["zinc"] === "string"
            ? generateTailwindColors(mapMissingTailwindColors["zinc"])
            : mapMissingTailwindColors["zinc"],
        neutral:
          typeof mapMissingTailwindColors["neutral"] === "string"
            ? generateTailwindColors(mapMissingTailwindColors["neutral"])
            : mapMissingTailwindColors["neutral"],
        stone:
          typeof mapMissingTailwindColors["stone"] === "string"
            ? generateTailwindColors(mapMissingTailwindColors["stone"])
            : mapMissingTailwindColors["stone"],
        emerald:
          typeof mapMissingTailwindColors["emerald"] === "string"
            ? generateTailwindColors(mapMissingTailwindColors["emerald"])
            : mapMissingTailwindColors["emerald"],
        fuchsia:
          typeof mapMissingTailwindColors["fuchsia"] === "string"
            ? generateTailwindColors(mapMissingTailwindColors["fuchsia"])
            : mapMissingTailwindColors["fuchsia"],
        rose:
          typeof mapMissingTailwindColors["rose"] === "string"
            ? generateTailwindColors(mapMissingTailwindColors["rose"])
            : mapMissingTailwindColors["rose"],
      };
    }

    return {
      darkMode: "class",
      theme: {
        // fontFamily: {
        //   sans: "var(--default-font-family)",
        //   strong: "var(--strong-font-family)",
        //   heading: "var(--heading-font-family)",
        //   code: "var(--code-font-family)",
        //   em: "var(--em-font-family)",
        //   quote: "var(--quote-font-family)",
        // },
        maxWidth: {
          main: "1140px",
        },
        backgroundColor: {
          page: {
            primary: "rgb(238, 238, 238)",
          },
        },
        colors: {
          error: "rgb(204, 0, 0)",
          primary: {
            light: "rgb(81, 100, 120)",
            DEFAULT: colorPrimary,
            dark: colorPrimaryDark,
          },
          secondary: {
            light: "rgb(252, 252, 252)",
            DEFAULT: "rgb(238, 238, 238)",
            dark: "rgb(214, 214, 214)",
          },
          inherit: "inherit",
          transparent: "transparent",
          current: "currentColor",
          white: colors.white,
          black: colors.black,
          background: "var(--color-background)",
          surface: {
            DEFAULT: "var(--color-surface)",
            accent: "var(--color-surface-accent)",
          },
          overlay: "var(--color-overlay)",
          panel: {
            solid: "var(--color-panel-solid)",
            translucent: "var(--color-panel-translucent)",
          },
          selection: "var(--color-selection-root)",
          accent: generateTailwindColors("accent"),
          gray: generateTailwindColors("gray"),
          ...allRadixColors,
          ...mappingsOfMissingTailwindColors,
          ...blackA,
          ...mauve,
          dark: {},
        },
        extend: {
          keyframes: {
            slideUpAndFade: {
              "0%": { opacity: "0", transform: "translateY(2px)" },
              "100%": { opacity: "1", transform: "translateY(0)" },
            },
            slideDownFade: {
              "0%": { opacity: "0", transform: "translateY(-2px)" },
              "100%": { opacity: "1", transform: "translateY(0)" },
            },
            slideRightFade: {
              "0%": { opacity: "0", transform: "translateX(-2px)" },
              "100%": { opacity: "1", transform: "translateX(0)" },
            },
            slideLeftFade: {
              "0%": { opacity: "0", transform: "translateX(2px)" },
              "100%": { opacity: "1", transform: "translateX(0)" },
            },
          },
          animation: {
            slideUpFade: "slideUpAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
            slideDownFade: "slideDownFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
            slideRightFade:
              "slideRightFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
            slideLeftFade: "slideLeftFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
          },
        },
      },
    };
  }
);

export default radixThemePlugin;
