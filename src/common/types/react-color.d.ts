declare module "react-color" {
  import * as React from "react";

  export interface Color {
    hex: string;
    rgb: { r: number; g: number; b: number; a: number };
    rgba: string;
    hsl: { h: number; s: number; l: number; a: number };
    hsla: string;
  }

  export interface SketchPickerProps {
    color: string;
    onChangeComplete: (color: Color) => void;
  }

  export class SketchPicker extends React.Component<SketchPickerProps> {}
}
