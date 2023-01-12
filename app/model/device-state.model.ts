export interface DeviceState { 
  serialNo: string;
  attachedRotary: RotaryTypeEnum;
  axisPosition: DeviceStateAxisPosition;
  isConnected: boolean;
  issueTimestamp: Date;
  issues: Array<DeviceIssueInfo>;
  resumeRequired: boolean;
}

export interface DeviceIssueInfo { 
  id: string;
  code: string;
  extraInfo?: string;
  severity: DeviceIssueSeverityEnum;
  lastOccurence: Date;
  active: boolean;
}

export enum DeviceIssueSeverityEnum {
  Informational = 'Informational',
  Pause = 'Pause',
  Stop = 'Stop',
  Abort = 'Abort'
};

export enum RotaryTypeEnum {
  None = 'None',
  Cone = 'Cone',
  Cylinders = 'Cylinders'
};

export interface DeviceStateAxisPosition { 
  X?: number;
  Y?: number;
  Z?: number;
  R?: number;
}