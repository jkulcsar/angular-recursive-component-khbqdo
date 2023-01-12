import {
  DeviceState,
  RotaryTypeEnum,
  DeviceStateAxisPosition,
  DeviceIssueInfo,
  DeviceIssueSeverityEnum,
} from './device-state.model';

export const CurrentDeviceState: DeviceState = {
  serialNo: 'SN123456',
  attachedRotary: RotaryTypeEnum.Cylinders,
  axisPosition: {
    X: 1.1,
    Y: 2.2,
    Z: 3.3,
    R: 7.7,
  },
  isConnected: false,
  issueTimestamp: new Date(),
  issues: [
    {
      id: 'ISSUE-001',
      code: 'CODE_FOR-ISSUE-001',
      extraInfo: 'EXTRA-INFO',
      severity: DeviceIssueSeverityEnum.Informational,
      lastOccurence: new Date(2022,12,31),
      active: false,
    },
    {
      id: 'ISSUE-007',
      code: 'CODE_FOR-ISSUE-007',
      extraInfo: 'EXTRA-INFO-007',
      severity: DeviceIssueSeverityEnum.Pause,
      lastOccurence: new Date(2023,1,1),
      active: true,
    },
    {
      id: 'ISSUE-10007',
      code: 'CODE_FOR-ISSUE-100007',
      extraInfo: 'EXTRA-INFO-100007',
      severity: DeviceIssueSeverityEnum.Abort,
      lastOccurence: new Date(2023,1,17),
      active: true,
    },
  ],
  resumeRequired: false,
};
