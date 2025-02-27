import { ITextSuggestions } from "./textSuggestions.interface";

export interface ICanvasProps {
  textSuggestions?: ITextSuggestions;
  width?: number;
  height?: number;
  onSave?: (canvas: any) => void;
  initialValue?: any;
}

export interface ITemplateCanvasProps extends ICanvasProps {}
