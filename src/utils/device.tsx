import DeviceInfo from 'react-native-device-info';

const Device = {
  getVersion: () => DeviceInfo.getVersion(),
  getUniqueId: () => DeviceInfo.getUniqueId(),
  getBuildNumber: () => DeviceInfo.getBuildNumber(),
};

export default Device;
