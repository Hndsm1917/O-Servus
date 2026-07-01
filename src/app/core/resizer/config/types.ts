export interface DeviceParams {
  name: string;
  width: number;
  height: number;
  minWidth: number;
  minHeight: number;
  maxWidth: number;
  fontSize: number;
}

export type ResizerParams = Record<string, DeviceParams>;
